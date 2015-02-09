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
//= require jquery.raty
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










	//for profiles/1 page, may translate to coffee 
	var mouseX = 0, mouseY = 0, limitX = 300-15, limitY = -100;
	$(window).mousemove(function(e){
	  var offset = $('.container').offset();
	   mouseX = Math.min(e.pageX - offset.left, limitX);
	   mouseY = Math.min(e.pageY - offset.top, limitY);
	   if (mouseX < 0) mouseX = 0;
	   if (mouseY < 0) mouseY = 0;
	});

	var follower = $("#hint");
	var xp = 0, yp = 0;
	var loop = setInterval(function(){
	    xp += (mouseX - xp) - 20;
	    yp += (mouseY - yp) - 50;
	    follower.css({left:xp, top:yp});
	}, 30);


	$(document).on('mousemove', '.stars' ,function(){
		var integer = parseInt($('#hi').text().split('.')[0]);
		var decimal = parseInt($('#hi').text().split('.')[1][0]);
		var rounded_decimal; var add_to_integer;
		if (decimal > 5){
			rounded_decimal = 0;
			add_to_integer = 1;
		} else if (decimal < 0) {
			rounded_decimal = 0;
			add_to_integer = 0;
		} else {
			rounded_decimal = 5;
			add_to_integer = 0;
		} 
		$('#hint .integer').text(integer + add_to_integer);
		$('#hint .decimal').text( '.' + rounded_decimal );
	});










});
}










