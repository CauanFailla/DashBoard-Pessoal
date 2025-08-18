function addElementsInHtml(paragraphUser, btnHeader, btnHero) {
    const containerNav = document.querySelector('.secondary-nav')
    const containerHero = document.querySelector('.btn__container__hero')
    containerNav.appendChild(paragraphUser)
    containerNav.appendChild(btnHeader)
    containerHero.appendChild(btnHero)
}

function createBtnDashboard() {
    const btnDashboard = document.createElement('a')
    btnDashboard.innerText = 'Dashboard'
    btnDashboard.href = '/dashboard'
    btnDashboard.classList.add('btn__contrast')
    return btnDashboard
}

function createElements(userName) {
    const paragraphUserName = document.createElement('p')
    paragraphUserName.innerText = userName
    const btnDashboardHeader = createBtnDashboard()
    const btnDashboardHero = createBtnDashboard()
    addElementsInHtml(paragraphUserName, btnDashboardHeader, btnDashboardHero)
}

function removeElements() {
    const btnLoginHeader = document.querySelector('.btn__login__header')
    const btnRegisterHeader = document.querySelectorAll('.btn__contrast')
    if(btnLoginHeader) {
        btnLoginHeader.remove()
    } 
    btnRegisterHeader.forEach((btn)=>{
        btn.remove()
    })
}

export async function changeForUser() {
    const response = await fetch('http://127.0.0.1:3000/user/getInfoUser')
    if(!response.ok) {
        throw new Error('Erro na requisição')
    }
    const user = await response.json()
    if(!user || !user.name) {
        return
    } else {
        removeElements()
        createElements(user.name)
    }
}