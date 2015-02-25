//= require jquery
//= require jquery.turbolinks
//= require jquery.fancybox
//= require jquery-ui
//= require jquery.pickmeup
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
	$('.fancy').fancybox({
		fitToView: false, autoResize: false, autoSize: true
	});


	
	$('.burger').fancybox({
		afterLoad: function(){ 
			// $('#menu_modal').parents('.fancybox-skin').addClass('a');  //doesn't work because of some 
			// afterLoad peculiar specifics
			$('.fancybox-skin').addClass('transparent_modal'); 
		},
		fitToView: false, autoResize: false, autoSize: true
	});





	$("#padding_for_logo").hover(
		function () { $('.dropdown').slideDown(); },
		function () { $('.dropdown').hide(); }
	);





	//for profiles/1 page, may translate to coffee 
	var mouseX = 0, mouseY = 0, limitX = 300-15, limitY = -100;
	$('#review_form').mousemove(function(e){
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


	$('#review_form').on('mousemove', '.stars' ,function(){
		var decimal_raw = $('#hi').text().split('.')[1];
		if (decimal_raw != undefined){ 
			var integer = parseInt($('#hi').text().split('.')[0]);
			var decimal = parseInt(decimal_raw[0]);
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
		};
	});








if ($('#settings').length!=0){
// сделать код нормальным и перевести в правильное место
var editor_biography = new wysihtml5.Editor("biography_editor", { // id of textarea element
	toolbar:      "biography_editor-toolbar", // id of toolbar element
	parserRules:  wysihtml5ParserRules // defined in parser rules set 
});
var editor_pricing_options = new wysihtml5.Editor("pricing_options_editor", { // id of textarea element
	toolbar:      "pricing_options_editor-toolbar", // id of toolbar element
	parserRules:  wysihtml5ParserRules // defined in parser rules set 
});
var editor_technical_specs = new wysihtml5.Editor("technical_specs_editor", { // id of textarea element
	toolbar:      "technical_specs_editor-toolbar", // id of toolbar element
	parserRules:  wysihtml5ParserRules // defined in parser rules set 
});


editor_biography.on('load', function()
{
	//эта штука расширяет dynamically text_editor если нужно будет
	var minheight = 150;
	var buffer = 50;

	var padding = parseFloat(editor_biography.composer.iframe.style.paddingTop) + parseFloat(editor_biography.composer.iframe.style.paddingBottom) + parseFloat(editor_biography.composer.iframe.style.borderTopWidth) + parseFloat(editor_biography.composer.iframe.style.borderBottomWidth);
	editor_biography.composer.iframe.style.height = (minheight + padding) + 'px';

	var resize = function() {
		var $div = $('<div>').append($(editor_biography.composer.element).clone().contents()).appendTo(editor_biography.composer.element);
		var scrollheight = $div.get(0).scrollHeight;
		$div.remove();
		if (scrollheight > (minheight - buffer)) editor_biography.composer.iframe.style.height = (scrollheight + buffer + padding) + 'px';
		else editor_biography.composer.iframe.style.height = (minheight + padding) + 'px';
	};

	editor_biography.composer.element.addEventListener('keyup', resize, false);
	editor_biography.composer.element.addEventListener('blur', resize, false);
	editor_biography.composer.element.addEventListener('focus', resize, false);

});



editor_pricing_options.on('load', function()
{
	var minheight = 150;
	var buffer = 50;

	var padding = parseFloat(editor_pricing_options.composer.iframe.style.paddingTop) + parseFloat(editor_pricing_options.composer.iframe.style.paddingBottom) + parseFloat(editor_pricing_options.composer.iframe.style.borderTopWidth) + parseFloat(editor_pricing_options.composer.iframe.style.borderBottomWidth);
	editor_pricing_options.composer.iframe.style.height = (minheight + padding) + 'px';

	var resize = function() {
		var $div = $('<div>').append($(editor_pricing_options.composer.element).clone().contents()).appendTo(editor_pricing_options.composer.element);
		var scrollheight = $div.get(0).scrollHeight;
		$div.remove();
		if (scrollheight > (minheight - buffer)) editor_pricing_options.composer.iframe.style.height = (scrollheight + buffer + padding) + 'px';
		else editor_pricing_options.composer.iframe.style.height = (minheight + padding) + 'px';
	};

	editor_pricing_options.composer.element.addEventListener('keyup', resize, false);
	editor_pricing_options.composer.element.addEventListener('blur', resize, false);
	editor_pricing_options.composer.element.addEventListener('focus', resize, false);

});








editor_technical_specs.on('load', function()
{
	var minheight = 150;
	var buffer = 50;

	var padding = parseFloat(editor_technical_specs.composer.iframe.style.paddingTop) + parseFloat(editor_technical_specs.composer.iframe.style.paddingBottom) + parseFloat(editor_technical_specs.composer.iframe.style.borderTopWidth) + parseFloat(editor_technical_specs.composer.iframe.style.borderBottomWidth);
	editor_technical_specs.composer.iframe.style.height = (minheight + padding) + 'px';

	var resize = function() {
		var $div = $('<div>').append($(editor_technical_specs.composer.element).clone().contents()).appendTo(editor_technical_specs.composer.element);
		var scrollheight = $div.get(0).scrollHeight;
		$div.remove();
		if (scrollheight > (minheight - buffer)) editor_technical_specs.composer.iframe.style.height = (scrollheight + buffer + padding) + 'px';
		else editor_technical_specs.composer.iframe.style.height = (minheight + padding) + 'px';
	};

	editor_technical_specs.composer.element.addEventListener('keyup', resize, false);
	editor_technical_specs.composer.element.addEventListener('blur', resize, false);
	editor_technical_specs.composer.element.addEventListener('focus', resize, false);




	var stylesheet = $('head').html();
	$('.wysihtml5-sandbox').contents().find('head').append(stylesheet);

});

}



//move to search coffee
$('input.date').bind("keypress", function(e){
  if(e.which === 13){
		e.preventDefault()
    $('.date').pickmeup('hide');
  }
})













});}






// Позвонили что посылка приехала в Питер. Можно забрать завтра с 14 до 19 часов. Адрес: Лиговский проспект , д.50, корпус 13, помещение 100А. Можно посмотреть на сайте СДЕКа как доехать
// 24.02.15