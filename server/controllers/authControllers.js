import bcrypt from 'bcrypt'
import {createUser, findUserByEmail} from '../models/user.js'

export async function cadastro(req, res) {
    const {name, email, password} = req.body
    const hash = await bcrypt.hash(password, 10)
    createUser(name, email, hash)
    res.redirect('/')
}

export async function login(req, res) {
    const {email, password} = req.body
    const user = await findUserByEmail(email)
    const passwordMatch = await bcrypt.compare(password, user.password)
    if(!passwordMatch && email != user.email) {
        return res.status(400).send('Senha ou Email incorretos...')
    }
    req.session.userId = user.id
    req.session.userName = user.name
    req.session.userEmail = user.email
    res.redirect('/')
}