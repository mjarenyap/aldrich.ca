/*
 *	This part contains a "list" of companies
 *	Aldrich Tan has worked with.
 *
 *	Add as many as you'd like.
 *
 */

/* { Company Name : Image Name } */
const companies = {
	'Allovus': ['Allovus.png', 'industry'],
	'Artefact': ['Artefact.png', 'industry'],
	'BlackBerry': ['BlackBerry.png', 'industry'],
	'Bloom Brothers': ['BloomBrothers.png', 'industry'],
	'BMC Software': ['BMCSoftware.png', 'industry'],
	'Digiteer': ['Digiteer.png', 'industry'],
	'Enactus': ['Enactus.png', 'industry'],
	'First Circle': ['FirstCircle.png', 'industry'],
	'Founder Institute': ['FounderInstitute.png', 'industry'],
	'Gates Foundation': ['GatesFoundation.png', 'industry'],
	'Getty Images': ['GettyImages.png', 'industry'],
	'IMS Health': ['IMSHealth.png', 'industry'],
	'Insular Life': ['InsularLife.png', 'industry'],
	'Remitly': ['Remitly.png', 'industry'],
	'SFU': ['SFU.png', 'industry'],
	'TMO1': ['TMO1.png', 'industry'],
	'TMO2': ['TMO2.png', 'industry'],
	'UXPH': ['UXPH.png', 'industry'],
	'Weddingful': ['Weddingful.png', 'industry']
};

$(document).ready(function() {
	Object.entries(companies).forEach(x => {
		$('#company-wrapper').append(`
			<div class="company-card">
				<!-- 1:1 ratio company logo/photo -->
				<img src="assets/images/${x[1][0]}" class="featured-image" />
				<!-- Company name & industry -->
				<div class="details">
					<div align="center">
						<h4 class="company-name">${x[0]}</h4>
					</div>
					<p class="industry">${x[1][1]}</p>
				</div>
			</div>
			`);
	});
});
