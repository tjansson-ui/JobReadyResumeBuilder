const downloadResume = document.querySelector('.download')

downloadResume.addEventListener('click', () => {
    generatePDF()
})

function generatePDF() {
 
var dd = {
	content: [
	    {
	        text: 'Jordan Keegan',
	        style: 'header',
			link: 'http:/github/jordanlovescats',
	    },
	    {
	        alignment: 'right',
	        color: 'gray',
	        text: [
	            'Email: jordan99@msn.com \n',
	            'Github: jordanlovescats\n\n',
	        ]
	    },
	   // EMPLOYMENT HISTORY
	    {
	        text: 'Employment History',
	        style: 'workHistory'
	    },
	   // JOB1
	    {
	        alignment: 'justify',
	        columns: [
	            {
	                text: '\nGood Company X2',
	                style: 'subheader',
	            },
	            {
	                text: '\nApr 2018 - Aug 2023',
	                alignment: 'right',
	            }
	       ]
	    },
	   // JOB2
	    {
	        text: 'Cat Burglar\n',
	        italics: true,
	    },
	    {
	        text: 'DStole from people more fortunate than my family'
	    },
	    {
	        alignment: 'justify',
	        columns: [
	            {
	                text: '\n\nJurassic Park',
	                style: 'subheader',
	            },
	            {
	                text: '\n\nApr 2015 - Feb 2018',
	                alignment: 'right',
	            }
	       ]
	    },
	   // JOB3
	    {
	        text: 'Dino Wrangler\n',
	        italics: true,
	    },
	    {
	        text: 'Lost a toe but saved a baby bronchosaurus'
	    },
	    {
	        alignment: 'justify',
	        columns: [
	            {
	                text: '\n\nCulvers',
	                style: 'subheader',
	            },
	            {
	                text: '\n\nAug 2011 - May 2016',
	                alignment: 'right',
	            }
	       ]
	    },
	    {
	        text: 'Cashier\n',
	        italics: true,
	    },
	    {
	        text: 'Made cheese curds and concrete mixers with handling sales for medium cap company.'
	    },
	   // EDUCATION HISTORY
	    {
	        text: '\nEducation History',
	        style: 'educationHistory',
	    },
	   // INSTITIUTE1
	    {
	        alignment: 'justify',
	        columns: [
	            {
	                text: '\nImportant Place College',
	                style: 'subheader',
	            },
	            {
	                text: '\nAug 2015 - May 2018',
	                alignment: 'right',
	            }
	       ]
	    },
	    {
	        text: 'Masters of Fine Arts\n',
	        italics: true,
	    },
	    // INSTITUTE2
	      {
	        alignment: 'justify',
	        columns: [
	            {
	                text: '\n\nNeverending Campus High School',
	                style: 'subheader',
	            },
	            {
	                text: '\n\nAug 2010 - May 2015',
	                alignment: 'right',
	            }
	       ]
	    },
	    // INSTITUTE3
	    {
	        alignment: 'justify',
	        columns: [
	            {
	                text: '\n\nGotham City Elementary School',
	                style: 'subheader',
	            },
	            {
	                text: '\n\nAug 2007 - May 2010',
	                alignment: 'right',
	            }
	       ]
	    },
	    {
	        text: 'Elementry School Completion',
	        italics: true,
	    },
	   // SKILLS
	   {
	        text: '\n\nSkills\n',
	        style: 'skillsTitle'
	    },
	   // JOB1
	    {
	        alignment: 'justify',
	        ul: [
	            'Wrestling',
	            'Wrangling',
	            'Animal Lover'
	       ]
	    },
	   
	],
	styles: {
	    header: {
	        fontSize: 30,
	        bold: true,
	    },
	    workHistory: {
	        fontSize: 20,
	        bold: true,
	    },
	    educationHistory: {
	        fontSize: 20,
	        bold: true,
	    },
	    skillsTitle: {
	        fontSize: 20,
	        bold: true,
	    },
	    subheader: {
	        fontSize: 15,
	        bold: true,
	    }
    }
}
console.log(dd)
pdfMake.createPdf(dd).download()
}

