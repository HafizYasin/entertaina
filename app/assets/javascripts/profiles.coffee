
$ ->
	# profile show
	$(".tabs .nav").each ->
	
		# For each set of tabs, we want to keep track of
		# which tab is active and it's associated content
		$active = undefined
		$content = undefined
		$links = $(this).find("a")
		
		# Use the first link as the initial active tab.
		$active = $($links[0])
		$active.addClass "active"
		$content = $($active[0].hash)
		
		# Hide the remaining content
		$links.not($active).each ->
			$(@hash).hide()
			return

		
		# Bind the click event handler
		$(this).on "click", "a", (e) ->
			
			# Make the old tab inactive.
			$active.removeClass "active"
			$content.hide()
			
			# Update the variables with the new link and content
			$active = $(this)
			$content = $(@hash)
			
			# Make the tab active.
			$active.addClass "active"
			$content.show()
			
			# Prevent the anchor's default click action
			e.preventDefault()
			return

		return

	$('.review .stars').raty({
		readOnly: true,
		score: 6
	})

	$('a.gallery').fancybox afterShow: ->
  if $('.fancybox-inner').find('.lightSlider').length == 0
    $('#photo_modal .slider').lightSlider
      gallery: true
      item: 1
      loop: true
      slideMargin: 0
      thumbItem: 8
      adaptiveHeight: false
      galleryMargin: 40
      thumbMargin: 20
  return #photos in modal in profile

	$('body').on 'DOMNodeInserted', '.fancybox-skin', ->
		if $('.modal.gallery').parents('.fancybox-skin.transparent').length == 0
	  	$('.modal.gallery').parents('.fancybox-skin').addClass('transparent')
	  return

	$("a.video").fancybox
		width: 940
		type: 'iframe'
		fitToView : false
		beforeShow: ->
			$('.fancybox-iframe').parents('.fancybox-skin').addClass('transparent')
	false





	# settings
	$('#free_trial_warning .close').click =>
		$('#free_trial_warning').slideUp 200
		return

	input = $('#profile_tab #username')
	input.keyup =>
		$('#username_future').text input.val().replace(/\ /g, "_") #later see what addresses are okay
		return





