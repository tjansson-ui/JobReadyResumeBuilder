
const addJob = document.getElementById("add-job")
let jobEntryCount = 1; 

addJob.addEventListener("click", (event) => {
    if (jobEntryCount < 3) {
        event.preventDefault();
        const jobHistory = document.getElementById("job-history");
    
        const jobEntry = document.createElement("div");
        jobEntry.classList.add("job-entry");
    
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
        removeButton.classList.add("delJob");
        removeButton.onclick = function() {
            removeJobEntry(this);
        };
    
        jobEntry.appendChild(companyInput);
        jobEntry.appendChild(roleInput);
        jobEntry.appendChild(startDateInput);
        jobEntry.appendChild(endDateInput);
        jobEntry.appendChild(roleDescriptionTextarea);
        jobEntry.appendChild(removeButton);
    
        jobHistory.appendChild(jobEntry);  

        jobEntryCount++;

        // Disable the "Add Job" button when the limit is reached
        if (jobEntryCount >= 3) {
            addJob.disabled = true;
        } 
    }
}) //Adds job entry below last entry

function removeJobEntry(button) {
    const jobEntry = button.parentNode;
    const jobHistory = document.getElementById("job-history");
    jobHistory.removeChild(jobEntry);
    jobEntryCount--;

    // Enable the "Add Job" button when a job entry is removed
    if (jobEntryCount < 3) {
        addJob.disabled = false;
    }
} // Removes job entry