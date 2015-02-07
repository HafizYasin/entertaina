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
//= require jquery.lightSlider
//= require text_editor_parser
//= require text_editor
//= require shared
//= require_tree .
//= require turbolinks


var isIPad = function() { return (/ipad/i).test(navigator.userAgent); };
var isIPhone = function() { return (/iphone/i).test(navigator.userAgent); };
var isIPod = function() { return (/ipod/i).test(navigator.userAgent); };
var eventName = (isIPod() || isIPad() || isIPhone()) ? "touchstart" : "click";

window.onload=function(){
$(function(){




	//_________________________modals
	$('.fancy').fancybox();
	$('.fancy_img').fancybox({ fitToView: false, autoResize: false, autoSize: true, padding: 30 });
	


	$("#logo").hover(
		function () { $('.dropdown').slideDown(); },
		function () { $('.dropdown').slideUp(); }
	);




	img_to_svg();





	$(document).bind('mousemove', function(e){
		$('#hint').css({
			left:  e.pageX + 20,
			top:   e.pageY
		});
	});



});
}










