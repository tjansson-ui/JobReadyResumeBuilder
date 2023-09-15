const form = document.querySelector('form')
const resumeId = document.getElementById('post-id')
const commentBody = document.querySelector('.form-input')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const commentData = {
        resume_id: resumeId.value,
        content: commentBody.value
    }
    console.log(commentData)
    console.log(document.cookie)
 
        fetch('/api/comment', {
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(commentData),
            
        })
        
        .then(response => {
            if (response.status === 200) {
                console.log(response)
                window.location.reload()

            }
        })
        .catch(err => console.log(err))


})