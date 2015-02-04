# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/


$ ->
	$('.reviews .slider').lightSlider
		gallery: true
		item: 1
		loop: true
		slideMargin: 0
		thumbItem: 3
		adaptiveHeight: true

	