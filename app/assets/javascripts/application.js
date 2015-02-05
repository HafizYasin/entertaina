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
//= require_tree .
//= require turbolinks


var isIPad = function() { return (/ipad/i).test(navigator.userAgent); };
var isIPhone = function() { return (/iphone/i).test(navigator.userAgent); };
var isIPod = function() { return (/ipod/i).test(navigator.userAgent); };
var eventName = (isIPod() || isIPad() || isIPhone()) ? "touchstart" : "click";

window.onload=function(){
$(function(){


	// $('.text_editor .toolbar a').click(function(e) {
	// 	switch($(this).data('role')) {
	// 		case 'h1':
	// 		case 'h2':
	// 			var isH = document.queryCommandValue("h2");
	// 			if (isH){
	// 				document.execCommand('formatBlock', false, 'div');
	// 			} else{
	// 				document.execCommand('formatBlock', false, $(this).data('role'));
	// 			};

	// 			break;
	// 		default:
	// 			document.execCommand($(this).data('role'), false, null);
	// 			break;
	// 	}
	// });

	



	$('#currency .ui-selectmenu-button').append('<i class="fa fa-chevron-down"></i>');

	//_________________________modals
	$('.fancy').fancybox();
	$('.fancy_img').fancybox({ fitToView: false, autoResize: false, autoSize: true, padding: 30 });


	// $('.tooltip').tooltip({ position: { my: "right bottom", at: "right+20 top-10" } });
	




	$("#tooltip").tooltip();
	$('#review_form .stars i').hover(function(){
		$( "#tooltip" ).tooltip( "option", "content", $('#hint').html() );
	});




var type1 = $('#type1').parent().parent();
var type2 = $('#type2').parent().parent();
var type3 = $('#type3').parent().parent();

//let's create arrays
var bands = [
		{display: "Choose type", value: "none" }, 
		{display: "Rock Bands", value: "rock" }, 
		{display: "Pop Bands", value: "pop" },
		{display: "Jazz Bands", value: "jazz" }];
		
var solo = [
		{display: "Choose type", value: "none" }, 
		{display: "solo1", value: "solo1" }, 
		{display: "solo2", value: "solo2" }];

//If parent option is changed
$("#category").on( "selectmenuchange", function() {
	var category_value = $(this).val(); //get option value from category selection
	if (category_value === 'none')
	{
		close(type1);
		close(type2);
		close(type3);
	} else
	{
		type1.slideDown();
		type2.hide();
		type3.hide();

		populate(type1, category_value);
		populate(type2, category_value);
		populate(type3, category_value);
	}
});

//function to populate child select box
function populate(type, category) //type = element, category = string (variable name)
{
	type.find('select').html(""); //reset child options
	
	category = eval(category);
	$(category).each(function (i) { //populate child options 
			type.find('select').append("<option value=\""+category[i].value+"\">"+category[i].display+"</option>");
	});

	type.find('select').selectmenu( "refresh" );
	make_potential(type);
}

function close(type)
{
	type.find('select').html('');
	type.hide();
	type.find('.close').remove();
	type.removeClass('closable');
	type.removeClass('potential');
}

function make_potential(type)
{
	type.addClass('potential');
	type.removeClass('closable');
	type.find('option:first-child').attr('selected', true);
	type.find('select').selectmenu( "refresh" );
}
function make_closable(type)
{
	type.addClass('closable');
	type.removeClass('potential');
	type.append('<div class="close"></div>');
}
function remove_option(type, option_value)
{
	type.find('select').find('option[value=' + option_value + ']').remove();
	type.find('select').selectmenu( "refresh" );
}

//on type1 change
type1.find('select').on( "selectmenuchange", function() {
	var type1_value = $(this).val(); //get option value from parent 
	var category_value = $('#category').val();
	if (type1_value === 'none'){
		close(type2);
	} else{
		type2.slideDown();
		populate(type2, category_value);
		remove_option(type2, type1_value);
		make_closable(type1);
	};

});

//on closing type1
type1.on('click', ('.close'), function(event){ //this == .close
	close(type2);
	close(type3);
	make_potential(type1);
});


type2.find('select').on( "selectmenuchange", function() {
	var type1_value = type1.find('select').val();
	var type2_value = $(this).val(); //get option value from parent 
	var category_value = $('#category').val();
	if (type2_value === 'none'){
		close(type3);
	} else{
		type3.slideDown();
		populate(type3, category_value);
		remove_option(type3, type1_value);
		remove_option(type3, type2_value);
		make_closable(type2);
	};

});

//on closing type2
type2.on('click', ('.close'), function(event){ //this == .close
	close(type3);
	make_potential(type2);
});


type3.find('select').on( "selectmenuchange", function() {
	make_closable(type3);
});

//on closing type3
type3.on('click', ('.close'), function(event){ //this == .close
	make_potential(type3);
});













});
}










