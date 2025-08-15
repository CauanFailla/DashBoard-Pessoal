import bcrypt from 'bcrypt'
import {createUser, findUserByEmail} from '../models/user.js'

export function cadastro(req, res) {
    const {name, email, password} = req.body
    const hash = bcrypt.hash(password, 10)
    createUser(name, email, hash)
    res.redirect('/')
}