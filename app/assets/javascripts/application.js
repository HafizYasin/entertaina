// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require jquery.fancybox
//= require jquery-ui
//= require jquery.jcarousel 
//= require jquery.raty-fa
//= require_tree .
//= require turbolinks



var isIPad = function() { return (/ipad/i).test(navigator.userAgent); };
var isIPhone = function() { return (/iphone/i).test(navigator.userAgent); };
var isIPod = function() { return (/ipod/i).test(navigator.userAgent); };
var eventName = (isIPod() || isIPad() || isIPhone()) ? "touchstart" : "click";

window.onload=function(){
$(function(){


	$('.text_editor .toolbar a').click(function(e) {
		switch($(this).data('role')) {
			case 'h1':
			case 'h2':
				var isH = document.queryCommandValue("h2");
				if (isH){
					document.execCommand('formatBlock', false, 'div');
				} else{
					document.execCommand('formatBlock', false, $(this).data('role'));
				};

				break;
			default:
				document.execCommand($(this).data('role'), false, null);
				break;
		}
	});

	



	$('#currency .ui-selectmenu-button').append('<i class="fa fa-chevron-down"></i>');


















	//_________________________modals
	$('.fancy').fancybox({ fitToView: false, autoResize: false, autoSize: true, padding: 0 });
	$('.fancy_img').fancybox({ fitToView: false, autoResize: false, autoSize: true, padding: 30 });


	// $('.tooltip').tooltip({ position: { my: "right bottom", at: "right+20 top-10" } });
	
	// $('.reviews_slider').slides({
	// 	generatePagination: false,
	// 	generateNextPrev: true,
	// 	effect: 'slide',
	// 	crossfade: true,
	// 	preload: true
	// });
	
	
	// $('.hover-star').rating({
	// 	focus: function(value, link){
	// 		var tip = $('#hover-test');
	// 		tip[0].data = tip[0].data || tip.html();
	// 		tip.html(link.title || 'value: '+value);
	// 	},
	// 	blur: function(value, link){
	// 		var tip = $('#hover-test'); $('#hover-test').html(tip[0].data || '');
	// 	}
	// });


	
	// $('#reviews_block .slide').width($('#reviews_block .slides_container').width()-100);
	// $( window ).resize(function() {
	// 	$('#reviews_block .slide').width($('#reviews_block .slides_container').width()-100);
	// });

});
}










