// File ini untuk penghubung antara UI HTML dan model User (controller)
document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm')
    const taskManager = new Task()

   taskForm.addEventListener('submit', (e) => {

    e.preventDefault()

    const taskData = {
        taskName: document.getElementById('taskName').value,
        taskPriority: document.getElementById('taskPriority').value //(low, med, hi')
    }

    const result = taskManager.saveTasks(taskData)
    
    if(result.success) {
        // return window.location.href = '../signin.html'
        alert('Berhasil tersimpan')
    } else {
        console.log('proses simpan data gagal!')
    }

   })
})