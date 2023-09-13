const downloadResume = document.querySelector('.download')

downloadResume.addEventListener('click', () => {
    generatePDF()
})

function generatePDF() {
 
var dd = {
	content: [
		'First paragraph',
		'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
	]
	
}
console.log(dd)
pdfMake.createPdf(dd).download()
}

