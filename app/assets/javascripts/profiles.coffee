
$ ->
	# profile show

	$('.review .stars').raty
		number: 10
		readOnly: true
		score: 6
		path: '/assets/profile/design'
		starHalf: 'star-half.png'
		starOff: 'star-off.png'
		starOn: 'star-on.png'
		half: true
		halfShow: true
	
	$('.modal .stars').raty
		number: 10
		target: '#hi'
		targetText : 'none'
		targetKeep : true
		targetType: 'score'
		path: '/assets/profile/design'
		starHalf: 'star-half.png'
		starOff: 'star-off.png'
		starOn: 'star-on.png'
		half: true
		halfShow: true
		precision: false



		

	$('a.gallery').fancybox afterShow: ->
		if $('.fancybox-inner').find('.lightSlider').length == 0
			$('#photo_modal .slider').lightSlider
				gallery: true
				item: 1
				loop: true
				slideMargin: 0
				adaptiveHeight: false
				galleryMargin: 40
				thumbMargin: 20
				thumbItem: 12
				autowidth: true
				responsive : [
					{ breakpoint: 1290, settings: { thumbItem: 8, adaptiveHeight: true } },
					{ breakpoint: 1100, settings: { thumbItem: 5, adaptiveHeight: true } },
					{ breakpoint: 500, settings: { thumbItem: 3, adaptiveHeight: true } },
				]
		return #photos in modal in profile

	$('body').on 'DOMNodeInserted', '.fancybox-skin', ->
		if $('.modal.gallery').parents('.fancybox-skin.transparent').length == 0
			$('.modal.gallery').parents('.fancybox-skin').addClass('transparent')
		return

	$("a.video").fancybox
		width: 940
		type: 'iframe'
		fitToView : true
		beforeShow: ->
			$('.fancybox-iframe').parents('.fancybox-skin').addClass('transparent')
	false





	# _________________________________________________settings
	$('#free_trial_warning .close').click =>
		$('#free_trial_warning').slideUp 200
		return

	input = $('#profile_tab #username')
	input.keyup =>
		$('#username_future').text input.val().replace(/\ /g, "_") #later see what addresses are okay
		return


	#####dependable selects
	type1 = $('#type1').parent().parent()
	type2 = $('#type2').parent().parent()
	type3 = $('#type3').parent().parent()

	bands = [
		{display: "Choose type", value: "none" }, 
		{display: "Rock Bands", value: "rock" }, 
		{display: "Pop Bands", value: "pop" },
		{display: "Jazz Bands", value: "jazz" }];
		
	solo = [
		{display: "Choose type", value: "none" }, 
		{display: "solo1", value: "solo1" }, 
		{display: "solo2", value: "solo2" }];

	#function to populate child select box
	populate = (type, category) ->
		type.find('select').html ''
		#reset child options
		category = eval(category)
		$(category).each (i) ->
			#populate child options 
			type.find('select').append '<option value="' + category[i].value + '">' + category[i].display + '</option>'
			return
		type.find('select').selectmenu 'refresh'
		make_potential type
		return

	close = (type) ->
		type.find('select').html ''
		type.hide()
		type.find('.close').remove()
		type.removeClass 'closable'
		type.removeClass 'potential'
		return

	make_potential = (type) ->
		type.addClass 'potential'
		type.removeClass 'closable'
		type.find('.close').remove()
		type.find('option:first-child').attr 'selected', true
		type.find('select').selectmenu 'refresh'
		return

	make_closable = (type) ->
		type.addClass 'closable'
		type.removeClass 'potential'
		type.append '<div class="close"></div>'
		return

	remove_option = (type, option_value) ->
		type.find('select').find('option[value=' + option_value + ']').remove()
		type.find('select').selectmenu 'refresh'
		return

	$('#category').on 'selectmenuchange', ->
		category_value = $(this).val()
		#get option value from category selection
		if category_value == 'none'
			close type1
			close type2
			close type3
		else
			type1.slideDown()
			type2.hide()
			type3.hide()
			populate type1, category_value
			populate type2, category_value
			populate type3, category_value
		return
	#on type1 change
	type1.find('select').on 'selectmenuchange', ->
		type1_value = $(this).val()
		#get option value from parent 
		category_value = $('#category').val()
		if type1_value == 'none'
			close type2
		else
			type2.slideDown()
			populate type2, category_value
			remove_option type2, type1_value
			make_closable type1
		return
	#on closing type1
	type1.on 'click', '.close', (event) ->
		#this == .close
		close type2
		close type3
		make_potential type1
		return
	type2.find('select').on 'selectmenuchange', ->
		type1_value = type1.find('select').val()
		type2_value = $(this).val()
		#get option value from parent 
		category_value = $('#category').val()
		if type2_value == 'none'
			close type3
		else
			type3.slideDown()
			populate type3, category_value
			remove_option type3, type1_value
			remove_option type3, type2_value
			make_closable type2
		return
	#on closing type2
	type2.on 'click', '.close', (event) ->
		#this == .close
		close type3
		make_potential type2
		return
	type3.find('select').on 'selectmenuchange', ->
		make_closable type3
		return
	#on closing type3
	type3.on 'click', '.close', (event) ->
		#this == .close
		make_potential type3
		return



	#social inputs appear disappear
	create_media = (media) ->
		icon = '<img class="svg" src="/assets/common/social_icons/' + media + '.svg">'
		label = '<label>' + media + icon + '</label>'
		input = '<input class="input" name="' + media + '">'
		$('#network_names').append '<div class="line not_displayed">' + label + '<div class="right"><div class="close"></div> ' + input + ' </div> <div class="clear"></div></div>'
		img_to_svg()
		$('#network_names .not_displayed').slideDown().removeClass 'not_displayed'
		return

	$('#network span').click ->
		media = $(this).attr('id')
		create_media media
		$(this).hide()
		return
	$('#network_names').on 'click', '.close', ->
		$(this).parents('.line').hide()
		name = $(this).next().attr('name')
		$('#network span#' + name).show()
		return



	#currency select
	$('#currency select').on 'selectmenucreate', ->
		$('#currency .ui-selectmenu-button').append('<i class="fa fa-chevron-down"></i>')



	#availability datepicker
	$("#settings .datepicker").datepicker
		beforeShowDay: (d) ->
			a = new Date(2015, 2 - 1, 17)
			b = new Date(2015, 2 - 1, 16)
			[
				true
				(if a.getTime() is d.getTime() or b.getTime() is d.getTime() then "selected" else "")
			]
		showOtherMonths: true

	$("#profile .datepicker").datepicker
		beforeShowDay: (d) ->
			a = new Date(2015, 2 - 1, 17)
			b = new Date(2015, 2 - 1, 16)
			[
				true
				(if a.getTime() is d.getTime() or b.getTime() is d.getTime() then "selected" else "")
			]
		showOtherMonths: true
	