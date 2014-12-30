
$ ->
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

	$('#free_trial_warning .close').click =>
		$('#free_trial_warning').slideUp 200
		return

	input = $('#profile_tab input[name=username]')
	input.keyup =>
		$('#username_future').text input.val().replace(/\ /g, "_")
		return


