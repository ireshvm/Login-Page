$(document).ready(function(){
	// Initialising the side navbar (for mobile screens)
	$('.sidenav').sidenav();
	// Initialising the 'Add New Device' modal 
	$('.modal').modal();
	// Initialising tooltips (currently used in COPY Option)
	$('.tooltipped').tooltip();
	// Initialising select options 
	$('select').formSelect();
});

// Setting COPY functionality
$("div.card-action > a.tooltipped").on('hover', function() {
	// $('span.key')[0]
	console.log($(this));
	$(this).attr('data-tooltip', 'Click to Copy API Key to clipboard');
});
$("div.card-action > a.tooltipped").on('click', ()=>{
	// $('span.key')[0]
	$(this).attr('data-tooltip', 'Copied!');
	document.execCommand('copy');
});