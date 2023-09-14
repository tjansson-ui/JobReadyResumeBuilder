const editResume = document.getElementById('edit-resume')
const deleteResume = document.getElementById('delete-resume')
const resumeId = document.getElementById('resume-id-edit').value
const fName = document.getElementById('fname')
const lName = document.getElementById('lname')
const email = document.getElementById('email')
const github = document.getElementById('github')
const company1 = document.getElementById('company1')
const role1 = document.getElementById('role1')
const roleStart1 = document.getElementById('rolestart1')
const roleEnd1 = document.getElementById('roleend1')
const description1 = document.getElementById('description1')
const company2 = document.getElementById('company2')
const role2 = document.getElementById('role2')
const roleStart2 = document.getElementById('rolestart2')
const roleEnd2 = document.getElementById('roleend2')
const description2 = document.getElementById('description2')
const company3 = document.getElementById('company3')
const role3 = document.getElementById('role3')
const roleStart3 = document.getElementById('rolestart3')
const roleEnd3 = document.getElementById('roleend3')
const description3 = document.getElementById('description3')
const institute1 = document.getElementById('institute1')
const degree1 = document.getElementById('degree1')
const edStart1 = document.getElementById('edstart1')
const edEnd1 = document.getElementById('edend1')
const institute2 = document.getElementById('institute2')
const degree2 = document.getElementById('degree2')
const edStart2 = document.getElementById('edstart2')
const edEnd2 = document.getElementById('edend2')
const institute3 = document.getElementById('institute3')
const degree3 = document.getElementById('degree3')
const edStart3 = document.getElementById('edstart3')
const edEnd3 = document.getElementById('edend3')
const skill1 = document.getElementById('skill1')
const skill2 = document.getElementById('skill2')
const skill3 = document.getElementById('skill3')
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

function handleUpdate(e) {
    e.preventDefault()
    const editResume = {
        resume_id: resumeId.value,
        fname: fName.value,
        lname: lName.value,
        email: email.value,
        github: github.value,
        company1: company1.value,
        role1: role1.value,
        description1: description1.value,
        rolestart1: roleStart1.value,
        roleend1: roleEnd1.value,
        company2: company2.value,
        role2: role2.value,
        description2: description2.value,
        rolestart2: roleStart2.value,
        roleend2: roleEnd2.value,
        company3: company3.value,
        role3: role3.value,
        description3: description3.value,
        rolestart3: roleStart3.value,
        roleend3: roleEnd3.value,
        institute1: institute1.value,
        degree1: degree1.value,
        edstart1: edStart1.value,
        edend1: edEnd1.value,
        institute2: institute2.value,
        degree2: degree2.value,
        edstart2: edStart2.value,
        edend2: edEnd2.value,
        institute3: institute3.value,
        degree3: degree3.value,
        edstart3: edStart3.value,
        edend3: edEnd3.value,
        skill1: skill1.value,
        skill2: skill2.value,
        skill3: skill3.value
    }

    fetch(`/api/create/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(editResume)
    })
    .then(response => {
        if (response.status === 200) {
            document.location.replace('/profile')
        }
    })
    .catch(err => console.log(err))
} 


deleteResume.addEventListener('click', handleDelete)
editResume.addEventListener('click', handleUpdate)