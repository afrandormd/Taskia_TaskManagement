// File ini untuk penghubung antara UI HTML dan model User
document.addEventListener('DOMContentLoaded', () => {
   const userForm = document.getElementById('userForm')
   const userManager = new User()

   userForm.addEventListener('submit', (e) => {

    e.preventDefault()
    const  userData = {
        username: document.getElementById('username').value
    }

    userManager.saveUser(userData)

   })
})