const downloadResume = document.querySelector('.download')

downloadResume.addEventListener('click', () => {
    generatePDF()
})

function generatePDF() {
 
var dd = {
	content: [
	    {
	        text: `{{fname}} {{lname}}`,
	        style: 'header',
	        alignment: 'center'
	    },
	    {
	        alignment: 'center',
	        text: [
	            `Email: {{email}} \n`,
	            `Github: {{github}}\n`,
	        ]
	    },
	    
	   // EDUCATION HISTORY
	    {
	        text: '\nEducation History\n',
	        style: 'educationHistory',
	    },
	   // INSTITIUTE1
        {
	        text: `{{institute1}}\n`,
	        style: 'subheader'
	    },
	    {
	        text: [
	            `{{degree1}}\n\n`,
	            `Start Date: {{edstart1}}\n`,
	            `End Date: {{edend1}}\n`,
	            ],
	       margin: [0,10], 
	    },
	     // INSTITIUTE2
        {
	        text: `{{institute2}}\n`,
	        style: 'subheader'
	    },
	    {
	        text: [
	            `{{degree2}}\n\n`,
	            `Start Date: {{edstart2}}\n`,
	            `End Date: {{edend2}}\n`,
	            ],
	       margin: [0,10], 
	    },
	     // INSTITIUTE3
        {
	        text: `{{institute3}}\n`,
	        style: 'subheader'
	    },
	    {
	        text: [
	            `{{degree3}}\n\n`,
	            `Start Date: {{edstart3}}\n`,
	            `End Date: {{edend3}}\n`,
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
	        text: `{{company1}} || {{role1}}\n`,
	        style: 'subheader'
	    },
	    {
	        ul: [
	            `{{description1}}`
	            ],
	       margin: [10,10],
	    },
	    {
	        text: [
	            `Start Date: {{rolestart1}}\n`,
	            `End Date: {{roleend1}}\n`,
	            ],
	    },
	    // JOB 2
	     {
	        text: `\n{{company2}} || {{role2}}\n`,
	        style: 'subheader'
	    },
	    {
	        ul: [
	            `{{description2}}`
	            ],
	       margin: [10,10],
	    },
	    {
	        text: [
	            `Start Date: {{rolestart2}}\n`,
	            `End Date: {{roleend2}}\n`,
	            ],
	    },
	   // JOB 3
	     {
	        text: `\n{{company3}} || {{role3}}\n`,
	        style: 'subheader'
	    },
	    {
	        ul: [
	            `{{description3}}`
	            ],
	       margin: [10,10],
	    },
	    {
	        text: [
	            `Start Date: {{rolestart3}}\n`,
	            `End Date: {{roleend3}}\n`,
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
	            `{{skill1}}`,
	            `{{skill2}}`,
	            `{{skill3}}`,
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


// example format:


// function generatePDF() {
 
// var dd = {
// 	content: [
// 	    {
// 	        text: 'Jordan Keegan',
// 	        style: 'header',
// 			link: 'http:/github/jordanlovescats',
// 	    },
// 	    {
// 	        alignment: 'right',
// 	        color: 'gray',
// 	        text: [
// 	            'Email: jordan99@msn.com \n',
// 	            'Github: jordanlovescats\n\n',
// 	        ]
// 	    },
// 	   // EMPLOYMENT HISTORY
// 	    {
// 	        text: 'Employment History',
// 	        style: 'workHistory'
// 	    },
// 	   // JOB1
// 	    {
// 	        alignment: 'justify',
// 	        columns: [
// 	            {
// 	                text: '\nGood Company X2',
// 	                style: 'subheader',
// 	            },
// 	            {
// 	                text: '\nApr 2018 - Aug 2023',
// 	                alignment: 'right',
// 	            }
// 	       ]
// 	    },
// 	    {
// 	        text: 'Cat Burglar\n',
// 	        italics: true,
// 	    },
// 	    {
// 	        text: 'DStole from people more fortunate than my family'
// 	    },
// 		// JOB 2
// 	    {
// 	        alignment: 'justify',
// 	        columns: [
// 	            {
// 	                text: '\n\nJurassic Park',
// 	                style: 'subheader',
// 	            },
// 	            {
// 	                text: '\n\nApr 2015 - Feb 2018',
// 	                alignment: 'right',
// 	            }
// 	       ]
// 	    },
// 	    {
// 	        text: 'Dino Wrangler\n',
// 	        italics: true,
// 	    },
// 	    {
// 	        text: 'Lost a toe but saved a baby bronchosaurus'
// 	    },
// 		// JOB 3
// 	    {
// 	        alignment: 'justify',
// 	        columns: [
// 	            {
// 	                text: '\n\nCulvers',
// 	                style: 'subheader',
// 	            },
// 	            {
// 	                text: '\n\nAug 2011 - May 2016',
// 	                alignment: 'right',
// 	            }
// 	       ]
// 	    },
// 	    {
// 	        text: 'Cashier\n',
// 	        italics: true,
// 	    },
// 	    {
// 	        text: 'Made cheese curds and concrete mixers with handling sales for medium cap company.'
// 	    },
// 	   // EDUCATION HISTORY
// 	    {
// 	        text: '\nEducation History',
// 	        style: 'educationHistory',
// 	    },
// 	   // INSTITIUTE1
// 	    {
// 	        alignment: 'justify',
// 	        columns: [
// 	            {
// 	                text: '\nImportant Place College',
// 	                style: 'subheader',
// 	            },
// 	            {
// 	                text: '\nAug 2015 - May 2018',
// 	                alignment: 'right',
// 	            }
// 	       ]
// 	    },
// 	    {
// 	        text: 'Masters of Fine Arts\n',
// 	        italics: true,
// 	    },
// 	    // INSTITUTE2
// 	      {
// 	        alignment: 'justify',
// 	        columns: [
// 	            {
// 	                text: '\n\nNeverending Campus High School',
// 	                style: 'subheader',
// 	            },
// 	            {
// 	                text: '\n\nAug 2010 - May 2015',
// 	                alignment: 'right',
// 	            }
// 	       ]
// 	    },
// 	    // INSTITUTE3
// 	    {
// 	        alignment: 'justify',
// 	        columns: [
// 	            {
// 	                text: '\n\nGotham City Elementary School',
// 	                style: 'subheader',
// 	            },
// 	            {
// 	                text: '\n\nAug 2007 - May 2010',
// 	                alignment: 'right',
// 	            }
// 	       ]
// 	    },
// 	    {
// 	        text: 'Elementry School Completion',
// 	        italics: true,
// 	    },
// 	   // SKILLS
// 	   {
// 	        text: '\n\nSkills\n',
// 	        style: 'skillsTitle'
// 	    },
// 	   // JOB1
// 	    {
// 	        alignment: 'justify',
// 	        ul: [
// 	            'Wrestling',
// 	            'Wrangling',
// 	            'Animal Lover'
// 	       ]
// 	    },
	   
// 	],
// 	styles: {
// 	    header: {
// 	        fontSize: 30,
// 	        bold: true,
// 	    },
// 	    workHistory: {
// 	        fontSize: 20,
// 	        bold: true,
// 	    },
// 	    educationHistory: {
// 	        fontSize: 20,
// 	        bold: true,
// 	    },
// 	    skillsTitle: {
// 	        fontSize: 20,
// 	        bold: true,
// 	    },
// 	    subheader: {
// 	        fontSize: 15,
// 	        bold: true,
// 	    }
//     }
// }
// console.log(dd)
// pdfMake.createPdf(dd).download()
// }

