/*
 *	This part contains a "list" of companies
 *	Aldrich Tan has worked with.
 *
 *	Add as many as you'd like.
 *
 */

/* { Company Name : Image Name } */
const companies = {
	'Allovus': 'Allovus.png',
	'Artefact': 'Artefact.png',
	'BlackBerry': 'BlackBerry.png',
	'Bloom Brothers': 'BloomBrothers.png',
	'BMC Software': 'BMCSoftware.png',
	'Digiteer': 'Digiteer.png',
	'Enactus': 'Enactus.png',
	'First Circle': 'FirstCircle.png',
	'Founder Institute': 'FounderInstitute.png',
	'Gates Foundation': 'GatesFoundation.png',
	'Getty Images': 'GettyImages.png',
	'IMS Health': 'IMSHealth.png',
	'Insular Life': 'InsularLife.png',
	'Remitly': 'Remitly.png',
	'SFU': 'SFU.png',
	'TMO1': 'TMO1.png',
	'TMO2': 'TMO2.png',
	'UXPH': 'UXPH.png',
	'Weddingful': 'Weddingful.png'
};

$(document).ready(function() {
	Object.entries(companies).forEach(x => {
		$('#company-wrapper').append(`
			<div class="company-card">
				<!-- 1:1 ratio company logo/photo -->
				<img src="assets/images/${x[1]}" class="featured-image" />
				<!-- Company name & industry -->
				<div class="details">
					<h4 class="company-name">${x[0]}</h3>
					<p class="industry">Industry</p>
				</div>
			</div>
			`);
	});
});
