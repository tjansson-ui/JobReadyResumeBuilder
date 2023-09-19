const downloadResume = document.querySelector('.download')

downloadResume.addEventListener('click', () => {
    generatePDF()
})

// header variables
const nameEl = document.getElementById('nameEl').innerHTML
const emailEl = document.getElementById('emailEl').innerHTML

// github 
const githubEl = document.getElementById('github').innerHTML
if(githubEl) {}

// institute1
const institute1El = document.getElementById('institute1')
let institute1Obj
let institute1Text

if(institute1El){
	let institute1 = document.getElementById('institute1').innerHTML
	institute1Obj = {
		text: `\n${institute1}`,
		style: 'subheader'
	};
	const degree1 = document.getElementById('degree1').innerHTML
	const edstart1 = document.getElementById('edstart1').innerHTML
	const edend1 = document.getElementById('edend1').innerHTML
	institute1Text = {
		text: [
			`${degree1}`,
			`${edstart1}`,
			`${edend1}`,
			],
	   margin: [0,0], 
	};
}

// institute2
const institute2El = document.getElementById('institute2')
let institute2Obj
let institute2Text

if(institute2El){
	let institute2 = document.getElementById('institute2').innerHTML
	institute2Obj = {
		text: `${institute2}\n`,
		style: 'subheader'
	};
	let degree2 = document.getElementById('degree2').innerHTML
	let edstart2 = document.getElementById('edstart2').innerHTML
	let edend2 = document.getElementById('edend2').innerHTML
	institute2Text = {
		text: [
			`${degree2}`,
			`${edstart2}`,
			`${edend2}`,
			],
	   margin: [0,0], 
	};
}

// institute3
const institute3El = document.getElementById('institute3')
let institute3Obj
let institute3Text

if(institute3El){
	let institute3 = document.getElementById('institute3').innerHTML
	institute3Obj = {
		text: `${institute3}\n`,
		style: 'subheader'
	};
	let degree3 = document.getElementById('degree3').innerHTML
	let edstart3 = document.getElementById('edstart3').innerHTML
	let edend3 = document.getElementById('edend3').innerHTML
	institute3Text = {
		text: [
			`${degree3}`,
			`${edstart3}`,
			`${edend3}`,
			],
	   margin: [0,0], 
	};
}

// company 1
const company1El = document.getElementById('company1').innerHTML
let company1Obj
let company1Text
let company1Text2

if(company1El){
	let company1 = document.getElementById('company1').innerHTML
	company1Obj = {
		text: `\n${company1}\n`,
		style: 'subheader'
	};
	const description1 = document.getElementById('description1').innerHTML
	const rolestart1 = document.getElementById('rolestart1').innerHTML
	const roleend1 = document.getElementById('roleend1').innerHTML
	company1Text =  {
		ul: [
			`${description1}`
			],
		italics: true,	
	
	};
	company1Text2 =  {
		text: [
			`${rolestart1}`,
			`${roleend1}`,
			],
	};
}


// company 2
const company2El = document.getElementById('company2').innerHTML
let company2Obj
let company2Text
let company2Text2

if(company2El){
	let company2 = document.getElementById('company2').innerHTML
	company2Obj = {
		text: `${company2}\n`,
		style: 'subheader'
	};
	const description2 = document.getElementById('description2').innerHTML
	const rolestart2 = document.getElementById('rolestart2').innerHTML
	const roleend2 = document.getElementById('roleend2').innerHTML
	company2Text =  {
		ul: [
			`${description2}`
			],
		italics: true,		
	};
	company2Text2 =  {
		text: [
			`${rolestart2}`,
			`${roleend2}`,
			],
	};
}

// company 3
const company3El = document.getElementById('company3').innerHTML
let company3Obj
let company3Text
let company3Text2

if(company3El){
	let company3 = document.getElementById('company3').innerHTML
	company3Obj = {
		text: `${company3}\n`,
		style: 'subheader'
	};
	const description3 = document.getElementById('description3').innerHTML
	const rolestart3 = document.getElementById('rolestart3').innerHTML
	const roleend3 = document.getElementById('roleend3').innerHTML
	company3Text =  {
		ul: [
			`${description3}`
			],
		italics: true,	
	};
	company3Text2 =  {
		text: [
			`${rolestart3}`,
			`${roleend3}`,
			],
	};
}

// skills
const skill1El = document.getElementById('skill1').innerHTML
if(skill1El) {}

const skill2El = document.getElementById('skill2').innerHTML
if(skill1El) {}

const skill3El = document.getElementById('skill3').innerHTML
if(skill3El) {}




function generatePDF() {
 
var dd = {
	content: [
	    {
	        text: `${nameEl}`,
	        style: 'header',
	        alignment: 'center'
	    },
	    {
	        alignment: 'center',
	        text: [
	            `Email: ${emailEl}\n`,
				githubEl,
	        ]
	    },
	    
	   // EDUCATION HISTORY
	    {
	        text: '\nEducation History\n',
	        style: 'educationHistory',
	    },
	  	 // INSTITIUTE1
	   	institute1Obj,
	   	institute1Text,

	    // INSTITIUTE2
		institute2Obj,
		institute2Text,

	    // INSTITIUTE3
        institute3Obj,
	    institute3Text,

	   	// EMPLOYMENT HISTORY
	    {
	        text: '\nEmployment History\n',
	        style: 'workHistory'
	    },
	   	// JOB 1
	   	company1Obj,
	   	company1Text,
	   	company1Text2,  
	
	    // JOB 2
		company2Obj,
		company2Text,
		company2Text2,  

	   // JOB 3
	   company3Obj,
	   company3Text,
	   company3Text2, 
	   // SKILLS
	   {
	        text: '\nSkills\n',
	        style: 'skillsTitle'
	    },
	   // JOB1
	    {
	        alignment: 'justify',
	        ul: [
	            skill1El,
				skill2El,
				skill3El,
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
	        fontSize: 14,
	        bold: true,
	    }
    }
};
console.log(dd);
pdfMake.createPdf(dd).download();
}

