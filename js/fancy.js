/*
 *		Fancy.js
 *		- Scroll events (i.e. fade-in, parallax, etc.)
 *		- "Back to top" button
 *		- Random fact generator
 *
 */

$(document).ready(function() {
	randomizer(); // preliminary random fact
	$('#h').removeClass('hide');

	$('#random-btn').click(randomizer);
	$('#back-to-top').click(function() {
		$("html, body").animate({scrollTop: 0}, 400);
	});
});

$(document).scroll(function() {
	var hidden_sections = $('.hidden');
	for(let x = 0; x < hidden_sections.length; x++)
		$(this).scrollTop() >= $(hidden_sections[x]).offset().top - 300 ? $(hidden_sections[x]).removeClass('hidden') : x;

	$(this).scrollTop() >= 655 ? $('#back-to-top').removeClass('hide') : $('#back-to-top').addClass('hide');
	$(this).scrollTop() >= 655 ? $('#nav').removeClass('hide') : $('#nav').addClass('hide');
});

/*
 *	This part contains a "list" of facts about Aldrich Tan.
 *	One fact is randomly shown on the page.
 *
 *	Add as many as you'd like.
 *
 */

const facts = [
	'fuBM1rT9qHKiIhW9CUil',
	'gxKpD5N20m5QoFBzsMwc',
	'bcslomFDBvVyN1hadiYT',
	'tGQK6dJANsM1NoLEZog3',
	'NLT5zQZooVe8ezDndivq',
	'v4yu1uVetY4zyPa4MCfg',
	'WVvPoQ1jW9m50y0VJ1nr',
	'UP3aeZ6tTIgHQtCuLN7e',
	'TqBNEwyWs1WXHcSWWa2O',
	'MJCpQEa5pDe6iLhWbpD9',
	'MG27JGuH29teJ0stkdOc',
	'pWEZvE1qWcU1sk7Vtu1G',
	'UAqH5qvmGRSJaq4w787T',
	'kkNqsttIyMF1Ars8SP1t',
	'iOKUBqBofV23nRwZoEkk',
	'1Z62mbAkQS4Ias06vmXB',
	'Cu6kfSALVsgK3AHCzi7e',
	'6ishVL4zNHxEtc91W0uS',
	'zu9PRYFNbE2snJxqjvOL',
	'ioKTPNl2WORDoH8nOh9k',
	'frw5lYHuDdnlJaGwDCSy',
	'qmmTg9nDgDOvG89QecBm',
	'rUAF7PdjMtqosfIce4G5',
	'3AHPwHKTuYPLbW0BuX58',
	'rnmk57yumfuZJcPKXPsu',
	'Hu7DoZZcADiMwjEGuXRH',
	'lZRxa8IQmIRXC9Q9Rbpl',
	'rYLe3olXcHCj2GlxKnO7',
	'xidiZ2jDY97ntdCx3Kw0',
	'pB6y3NFpDbf3Fx15LBJy'
];

function randomizer() {
	$('#random-fact').html(facts[parseInt(Math.random() * 100) % facts.length]);
}