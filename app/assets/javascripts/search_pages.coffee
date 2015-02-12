$ ->
	#________________found
	#it makes some of the dates preselected in a datepicker (for sessions eg, 
	#or for marking which dates are available)


	#found page datepicker
	$('#found input.date').pickmeup
		position: 'right'
		mode: 'range'
		position: 'bottom'
		format: 'm.d.Y'
		class_name: 'input_calendar'
		fill: ->
			$('.pmu-instance').prepend '<div class="triangle"></div>'
			$('.pmu-month').text $('.pmu-month').text().replace(',', '')
			$('.pmu-instance').append '<div id="choose_clear"><span class="choose">Choose all</span> / <span class="clear">Clear all</span></div>'
			return
		prev: '<img src="/assets/common/forms/prev_calendar_arrow.png">'
		next: '<img src="/assets/common/forms/next_calendar_arrow.png">'
		select_year: false
		select_month: false

	$('.pickmeup.input_calendar').on 'click', '#choose_clear .clear', ->
		$('#found input.date').pickmeup 'clear'
		$('#found input.date').val('Any date')
		return



	#for checkbox subcategories to slide down
	$(".checkbox_label.sub").on eventName, ->
		className = ".for_" + $(this).attr("for")
		if !$(className).is(":visible")
			$(className).slideDown()
			$(className).find("input[type=checkbox]").attr "checked", "checked"
		else
			$(className).slideUp 200
			$(className).find("input[type=checkbox]").removeAttr "checked"
		return
	#if checkbox subcategory is clicked, checkbox category gets unchecked
	$('.sub_cats .checkbox_label').on eventName, ->
		$(this).parents('.sub_cats').prev().find('input[type=checkbox]').removeAttr('checked');

	$("#slider-price").slider
		range: true
		min: 0
		max: 40000
		values: [
			900
			17000
		]
		slide: (event, ui) ->
			$("#ot").text ui.values[0]
			$("#do").text ui.values[1]
			return
	$("#ot").text $("#slider-price").slider("values", 0)
	$("#do").text $("#slider-price").slider("values", 1)

	$("#slider-distance").slider
		range: "min"
		value: 121
		min: 1
		max: 700
		slide: (event, ui) ->
			$("#distance span.data").text ui.value + " mi range"
			return
	$("#distance span.data").text $("#slider-distance").slider("value") + " mi range"

	$('select').selectmenu()


	#_________________index
	$('#index .slider').lightSlider
		item: 3
		loop: true
		pager: false
		onSliderLoad: -> $('.lSAction').insertAfter( ".lSSlideOuter " )
		prevHtml: '<svg viewBox="0 0 39 74" enable-background="new 0 0 39 74" xml:space="preserve"><path fill-rule="evenodd" clip-rule="evenodd" fill="#0C0E0F" d="M38.4,3.4L4.9,37l33.6,33.6c0.8,0.8,0.8,2,0,2.8 c-0.8,0.8-2,0.8-2.8,0L0.9,38.7c-0.1-0.1-0.2-0.1-0.3-0.2C0.2,38.1,0,37.5,0,37c0-0.5,0.2-1.1,0.6-1.5c0.1-0.1,0.2-0.1,0.3-0.2 L35.6,0.6c0.8-0.8,2-0.8,2.8,0C39.2,1.4,39.2,2.6,38.4,3.4z"/></svg>'
		nextHtml: '<svg viewBox="0 0 39.1 74.1" enable-background="new 0 0 39.1 74.1" xml:space="preserve"><path fill-rule="evenodd" clip-rule="evenodd" d="M38.5,38.5c-0.1,0.1-0.2,0.1-0.3,0.2L3.4,73.5 c-0.8,0.8-2,0.8-2.8,0c-0.8-0.8-0.8-2,0-2.8l33.6-33.6L0.6,3.4c-0.8-0.8-0.8-2,0-2.8c0.8-0.8,2-0.8,2.8,0l34.8,34.8 c0.1,0.1,0.2,0.1,0.3,0.2c0.4,0.4,0.6,0.9,0.6,1.5C39.1,37.6,38.9,38.1,38.5,38.5z"/></svg>'
		auto: true
		speed: 1000
		pause: 5000
		responsive : [
			{
				breakpoint: 1163,
				settings: {
					item: 2
				}
			},
			{
				breakpoint: 800,
				settings: {
					item: 1
				}
			}
		]



	#adaptive search filter toggle
	$('#found #show_filters').on 'click', ->
		$('aside').slideToggle()
		if $(this).text() == 'hide filters'
			$(this).find('span').text 'show filters'
		else
			$(this).find('span').text 'hide filters'
		return
