const downloadResume = document.querySelector('.download')

downloadResume.addEventListener('click', () => {
    generatePDF()
})

const singleResume = {
	{{fname}};
	{{lname}};
	{{email}};
	{{github}};
	{{institute1}};
	{{degree1}};
	{{edstart1}};
	{{edend1}};
	{{institute2}};
	{{degree2}};
	{{edstart2}};
	{{edend2}};
	{{institute3}};
	{{degree3}};
	{{edstart3}};
	{{edend3}};
	{{company1}};
	{{role1}};
	{{description1}};
	{{rolestart1}};
	{{roleend1}};
	{{company2}};
	{{role2}},
	{{description2}};
	{{rolestart2}};
	{{roleend2}};
	{{company3}};
	{{role3}};
	{{description3}};
	{{rolestart3}};
	{{roleend3}};
	{{skill1}};
	{{skill2}};
	{{skill3}};

  };

  const fname = singleResume.fname;
  const lname = singleResume.lname;
  const email = singleResume.email;
  const github = singleResume.github;
  const institute1 = singleResume.institute1;
  const degree1 = singleResume.degree1;
  const edstart1 = singleResume.edstart1;
  const edend1 = singleResume.edend1;
  const institute2 = singleResume.institute2;
  const degree2 = singleResume.degree2;
  const edstart2 = singleResume.edstart2;
  const edend2 = singleResume.edend2;
  const institute3 = singleResume.institute3;
  const degree3 = singleResume.degree3
  const edstart3 = singleResume.edstart3;
  const edend3 = singleResume.edend3;
  const company1 = singleResume.company1;
  const role1 =singleResume.role1;
  const description1 =singleResume.description1;
  const rolestart1 = singleResume.rolestart1;
  const roleend1 = singleResume.roleend1;
  const company2 =singleResume.company2
  const role2 = singleResume.role2;
  const description2 = singleResume.description2;
  const rolestart2 =singleResume.rolestart2;
  const roleend2 = singleResume.roleend2;
  const company3 = singleResume.company3;
  const role3 = singleResume.role3;
  const description3 = singleResume.description3;
  const rolestart3 = singleResume.rolestart3;
  const roleend3 = singleResume.roleend3;
  const skill1 = singleResume.skill1;
  const skill2 = singleResume.skill2;
  const skill3 = singleResume.skill3;



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

