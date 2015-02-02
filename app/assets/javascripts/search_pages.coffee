$ ->
	#________________found
	#it makes some of the dates preselected in a datepicker (for sessions eg, 
	#or for marking which dates are available)
	$(".datepicker").datepicker
		beforeShowDay: (d) ->
			a = new Date(2015, 3 - 1, 20)
			b = new Date(2015, 2 - 1, 16)
			[
				true
				(if a.getTime() is d.getTime() or b.getTime() is d.getTime() then "selected" else "")
			]

		dayNamesMin: [
			"Sun"
			"Mon"
			"Tue"
			"Wed"
			"Thu"
			"Fri"
			"Sat"
		]
		firstDay: 1
		dateFormat: "dd/mm/yy"

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
	$(".jcarousel").jcarousel wrap: "both"
	$(".j-prev").jcarouselControl target: "-=1"
	$(".j-next").jcarouselControl target: "+=1"