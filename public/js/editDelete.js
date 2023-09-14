const editResume = document.getElementById('edit-resume')
const deleteResume = document.getElementById('delete-resume')
const resumeId = document.getElementById('resume-id-edit').value
const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
]

function handleDelete(e) {
    e.preventDefault()

    fetch(`/api/create/${id}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (response.status === 200) {
            document.location.replace('/profile')
        }
    })
    .catch(err => console.log(err))
}


deleteResume.addEventListener('click', handleDelete)