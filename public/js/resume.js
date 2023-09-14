const downloadResume = document.querySelector('.download')

downloadResume.addEventListener('click', () => {
    generatePDF()
})

function generatePDF() {
 
var dd = {
	content: [
	    {
	        text: `fname lname`,
	        style: 'header',
	        alignment: 'center'
	    },
	    {
	        alignment: 'center',
	        text: [
	            `Email: email\n`,
	            `Github: github\n`,
	        ]
	    },
	    
	   // EDUCATION HISTORY
	    {
	        text: '\nEducation History\n',
	        style: 'educationHistory',
	    },
	   // INSTITIUTE1
        {
	        text: `institute1\n`,
	        style: 'subheader'
	    },
	    {
	        text: [
	            `degree1\n\n`,
	            `Start Date: edstart1\n`,
	            `End Date: edend1\n`,
	            ],
	       margin: [0,10], 
	    },
	     // INSTITIUTE2
        {
	        text: `institute2\n`,
	        style: 'subheader'
	    },
	    {
	        text: [
	            `degree2\n\n`,
	            `Start Date: edstart2\n`,
	            `End Date: edend2\n`,
	            ],
	       margin: [0,10], 
	    },
	     // INSTITIUTE3
        {
	        text: `institute3\n`,
	        style: 'subheader'
	    },
	    {
	        text: [
	            `{{degree3}}\n\n`,
	            `Start Date: edstart3\n`,
	            `End Date: edend3\n`,
	            ],
	       margin: [0,10], 
	    },
	   // EMPLOYMENT HISTORY
	    {
	        text: '\nEmployment History\n',
	        style: 'workHistory'
	    },
	   // JOB 1
	     {
	        text: `company1 || role1\n`,
	        style: 'subheader'
	    },
	    {
	        ul: [
	            `description1`
	            ],
	       margin: [10,10],
	    },
	    {
	        text: [
	            `Start Date: rolestart1\n`,
	            `End Date: roleend1\n`,
	            ],
	    },
	    // JOB 2
	     {
	        text: `\ncompany2 || role2\n`,
	        style: 'subheader'
	    },
	    {
	        ul: [
	            `description2`
	            ],
	       margin: [10,10],
	    },
	    {
	        text: [
	            `Start Date: rolestart2\n`,
	            `End Date: roleend2\n`,
	            ],
	    },
	   // JOB 3
	     {
	        text: `\ncompany3 || role3\n`,
	        style: 'subheader'
	    },
	    {
	        ul: [
	            `description3`
	            ],
	       margin: [10,10],
	    },
	    {
	        text: [
	            `Start Date: rolestart3\n`,
	            `End Date: roleend3\n`,
	            ],
	    },
	  
	   // SKILLS
	   {
	        text: '\nSkills\n',
	        style: 'skillsTitle'
	    },
	   // JOB1
	    {
	        alignment: 'justify',
	        ul: [
	            `skill1`,
	            `skill2`,
	            `skills3`,
	       ]
	    },
	],
	styles: {
	    header: {
	        fontSize: 25,
	        bold: true,
	    },
	    workHistory: {
	        fontSize: 18,
	        bold: true,
	    },
	    educationHistory: {
	        fontSize: 18,
	        bold: true,
	    },
	    skillsTitle: {
	        fontSize: 18,
	        bold: true,
	    },
	    subheader: {
	        fontSize: 12.5,
	        bold: true,
	    }
    }
};
console.log(dd);
pdfMake.createPdf(dd).download();
}

