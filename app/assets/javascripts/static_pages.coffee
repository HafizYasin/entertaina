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
		# onSliderLoad: -> $('.lSAction').insertAfter( ".lSSlideOuter " )
		prevHtml: '<svg viewBox="0 0 39 74" enable-background="new 0 0 39 74" xml:space="preserve"><path fill-rule="evenodd" clip-rule="evenodd" fill="#0C0E0F" d="M38.4,3.4L4.9,37l33.6,33.6c0.8,0.8,0.8,2,0,2.8 c-0.8,0.8-2,0.8-2.8,0L0.9,38.7c-0.1-0.1-0.2-0.1-0.3-0.2C0.2,38.1,0,37.5,0,37c0-0.5,0.2-1.1,0.6-1.5c0.1-0.1,0.2-0.1,0.3-0.2 L35.6,0.6c0.8-0.8,2-0.8,2.8,0C39.2,1.4,39.2,2.6,38.4,3.4z"/></svg>'
		nextHtml: '<svg viewBox="0 0 39.1 74.1" enable-background="new 0 0 39.1 74.1" xml:space="preserve"><path fill-rule="evenodd" clip-rule="evenodd" d="M38.5,38.5c-0.1,0.1-0.2,0.1-0.3,0.2L3.4,73.5 c-0.8,0.8-2,0.8-2.8,0c-0.8-0.8-0.8-2,0-2.8l33.6-33.6L0.6,3.4c-0.8-0.8-0.8-2,0-2.8c0.8-0.8,2-0.8,2.8,0l34.8,34.8 c0.1,0.1,0.2,0.1,0.3,0.2c0.4,0.4,0.6,0.9,0.6,1.5C39.1,37.6,38.9,38.1,38.5,38.5z"/></svg>'
		auto: true
		speed: 1000
		pause: 10000

	