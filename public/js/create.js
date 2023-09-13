
const addJob = document.getElementById("add-job")
const addEd = document.getElementById("add-ed")
let jobEntryCount = 1; 
let edEntryCount = 1; 



addJob.addEventListener("click", (e) => {
    if (jobEntryCount < 3) {
        e.preventDefault();

        // Creates job entry elements
        const jobHistory = document.getElementById("job-history");
    
        const jobEntry = document.createElement("div");
        jobEntry.classList.add("job-entry");

        const para = document.createElement("p");
    
        const companyInput = document.createElement("input");
        companyInput.type = "text";
        companyInput.placeholder = "Company";
    
        const roleInput = document.createElement("input");
        roleInput.type = "text";
        roleInput.placeholder = "Role";
    
        const startDateInput = document.createElement("input");
        startDateInput.type = "text";
        startDateInput.placeholder = "Start date: MMM YYYY";
    
        const endDateInput = document.createElement("input");
        endDateInput.type = "text";
        endDateInput.placeholder = "End date: MMM YYYY";
    
        const roleDescriptionTextarea = document.createElement("textarea");
        roleDescriptionTextarea.placeholder = "Role Description";
    
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("delete-job");
        removeButton.onclick = function() {
            removeJobEntry(this);
        };

        const hideRemoveButtons = () => {
            const removeButtons = document.querySelectorAll(".delete-job");
            removeButtons.forEach(button => {
            button.style.display = "none";
            }); 
        };
        
        hideRemoveButtons();

        // Appends job entry block
        jobEntry.appendChild(companyInput);
        jobEntry.appendChild(roleInput);
        jobEntry.appendChild(startDateInput);
        jobEntry.appendChild(endDateInput);
        jobEntry.appendChild(roleDescriptionTextarea);
        jobEntry.appendChild(removeButton);
        jobEntry.appendChild(para);
    
        jobHistory.appendChild(jobEntry);  


        // Update the visibility of "Remove" buttons when adding a new job entry
        if (jobHistory.childElementCount > 1) {
            const lastJobEntry = jobHistory.lastChild;
            lastJobEntry.querySelector(".delete-job").style.display = "block";
        }


        jobEntryCount++;

        // Disable the "Add Job" button when the limit is reached
        if (jobEntryCount >= 3) {
            addJob.disabled = true;
        } 
    }
}) //Adds job entry below last entry

addEd.addEventListener("click", (e) => {
    if (edEntryCount < 3) {
        e.preventDefault();

        // Creates job entry elements
        const edHistory = document.getElementById("ed-history");
    
        const edEntry = document.createElement("div");
        edEntry.classList.add("ed-entry");

        const para = document.createElement("p")
    
        const schoolInput = document.createElement("input");
        schoolInput.type = "text";
        schoolInput.placeholder = "Institute";
    
        const degreeInput = document.createElement("input");
        degreeInput.type = "text";
        degreeInput.placeholder = "Degree";
    
        const startDateInput = document.createElement("input");
        startDateInput.type = "text";
        startDateInput.placeholder = "Start date: MMM YYYY";
    
        const endDateInput = document.createElement("input");
        endDateInput.type = "text";
        endDateInput.placeholder = "End date: MMM YYYY";
    
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("delete-ed");
        removeButton.onclick = function() {
            removeEdEntry(this);
        };

        const hideRemoveButtons = () => {
            const removeButtons = document.querySelectorAll(".delete-ed");
            removeButtons.forEach(button => {
            button.style.display = "none";
            }); 
        };
        
        hideRemoveButtons();

        // Appends education entry block
        edEntry.appendChild(schoolInput);
        edEntry.appendChild(degreeInput);
        edEntry.appendChild(startDateInput);
        edEntry.appendChild(endDateInput);
        edEntry.appendChild(removeButton);
        edEntry.appendChild(para);

        edHistory.appendChild(edEntry);  
        edHistory.html("<br/>")


        // Update the visibility of "Remove" buttons when adding a new education entry
        if (edHistory.childElementCount > 1) {
            const lastEdEntry = edHistory.lastChild;
            lastEdEntry.querySelector(".delete-ed").style.display = "block";
        }


        edEntryCount++;

        // Disable the "Add Education" button when the limit is reached
        if (edEntryCount >= 3) {
            addEd.disabled = true;
        } 
    }
}) //Adds education entry below last entry

function removeJobEntry(button) {
    const jobEntry = button.parentNode;
    const jobHistory = document.getElementById("job-history");
    jobHistory.removeChild(jobEntry);
    jobEntryCount--;

    // Show the "Remove" button for the new last job entry
    const lastJobEntry = jobHistory.lastChild;
    if (lastJobEntry) {
        lastJobEntry.querySelector(".delete-job").style.display = "block";
    }

    // Enable the "Add Job" button when a job entry is removed
    if (jobEntryCount < 3) {
        addJob.disabled = false;
    }
} // Removes job entry

function removeEdEntry(button) {
    const edEntry = button.parentNode;
    const edHistory = document.getElementById("ed-history");
    edHistory.removeChild(edEntry);
    edEntryCount--;

    // Show the "Remove" button for the new last ed entry
    const lastEdEntry = edHistory.lastChild;
    if (lastEdEntry) {
        lastEdEntry.querySelector(".delete-ed").style.display = "block";
    }

    // Enable the "Add Education" button when a ed entry is removed
    if (edEntryCount < 3) {
        addEd.disabled = false;
    }
} // Removes ed entry


