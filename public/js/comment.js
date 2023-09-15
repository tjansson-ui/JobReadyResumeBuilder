const form = document.querySelector('form')
const resumeId = document.getElementById('post-id')
const userId = document.getElementById('user-id')
const commentBody = document.querySelector('.form-input')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const commentData = {
        resume_id: resumeId.value,
        content: commentBody.value
    }
    console.log(userId)
    console.log(commentData)
    console.log(document.cookie)

        fetch('/api/users/current', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        .then(response => {
            response.json().then(data => {
                console.log('DATA =', data)
                commentData.user_id = data.user_id
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
        })
        .catch(err => console.log(err))
 
       


})