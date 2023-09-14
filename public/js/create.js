const addJob = document.getElementById("add-job")
const addEd = document.getElementById("add-ed")
const deleteJob = document.getElementById("delete-job")
const deleteEd = document.getElementById("delete-ed")

const jobentry2 = document.getElementById("job-entry2")
const jobentry3 = document.getElementById("job-entry3")

const edentry2 = document.getElementById("ed-entry2")
const edentry3 = document.getElementById("ed-entry3")

const removeHiddenJob = () => {
    if (jobentry2.classList.contains('hidden')) {
        const children = jobentry2.children;
        // Loop through the children and remove the "hidden" class
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            child.classList.remove('hidden');
        }
        jobentry2.classList.remove('hidden')
        deleteJob.classList.remove('hidden')
    } else {
        const children = jobentry3.children;
        // Loop through the children and remove the "hidden" class
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            child.classList.remove('hidden');
        }
        jobentry3.classList.remove('hidden')
        addJob.classList.add('hidden')
    }
};

const removeHiddenEd = () => {
    if (edentry2.classList.contains('hidden')) {
        const children = edentry2.children;
        // Loop through the children and remove the "hidden" class
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            child.classList.remove('hidden');
        }
        edentry2.classList.remove('hidden')
        deleteEd.classList.remove('hidden')
    } else {
        const children = edentry3.children;
        // Loop through the children and remove the "hidden" class
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            child.classList.remove('hidden');
        }
        edentry3.classList.remove('hidden')
        addEd.classList.add('hidden')
    }
};


const clearJob = () => {
    if (jobentry3.classList.contains('hidden')) {
        
        const children = jobentry2.children;
        // Loop through the children and add the "hidden" class
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            child.classList.add('hidden');
            // Check if the child is an input element
            if (child.tagName.toLowerCase() === 'input') {
                // If it's an input element, set its value to an empty string
                child.value="";
            }
        }
        jobentry2.classList.add('hidden')
        deleteJob.classList.add('hidden')
    } else
    {
        const children = jobentry3.children;
        // Loop through the children and add the "hidden" class
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            child.classList.add('hidden');
            // Check if the child is an input element
            if (child.tagName.toLowerCase() === 'input') {
                // If it's an input element, set its value to an empty string
                child.value="";
            }
        }
        jobentry3.classList.add('hidden')
        console.log("foo")
        addJob.classList.remove('hidden')
    }
};

const clearEd = () => {
    if (edentry3.classList.contains('hidden')) {
        
        const children = edentry2.children;
        // Loop through the children and add the "hidden" class
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            child.classList.add('hidden');
            // Check if the child is an input element
            if (child.tagName.toLowerCase() === 'input') {
                // If it's an input element, set its value to an empty string
                child.value="";
            }
        }
        edentry2.classList.add('hidden')
        deleteEd.classList.add('hidden')
    } else
    {
        
        const children = edentry3.children;
        // Loop through the children and add the "hidden" class
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            child.classList.add('hidden');
            // Check if the child is an input element
            if (child.tagName.toLowerCase() === 'input') {
                // If it's an input element, set its value to an empty string
                child.value="";
            }
        }
        edentry3.classList.add('hidden')
        addEd.classList.remove('hidden')
    }
}

addJob.addEventListener("click", removeHiddenJob) 
//Adds job entry below last entry

addEd.addEventListener("click", removeHiddenEd) 
//Adds education entry below last entry

deleteJob.addEventListener("click", clearJob) 
//Adds job entry below last entry

deleteEd.addEventListener("click", clearEd) 
//Adds education entry below last entry