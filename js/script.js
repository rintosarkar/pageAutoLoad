flag = true;
$(window).scroll(function() {
	if($(window).scrollTop() + $(window).height() == $(document).height()){
		first = $('#first').val();
		limit = $('#limit').val();
		no_data = true;
		if(flag && no_data){
			flag = false;
			$('#loader').show();
			$.ajax({
				url : 'ajax.php',
				dataType: "json",
				method: 'post',
				data: {
				   start : first,
				   limit : limit
				},
				success: function( data ) {
					flag = true;
					$('#loader').hide();
					if(data.count > 0 ){
						first = parseInt($('#first').val());
						limit = parseInt($('#limit').val());
						$('#first').val( first+limit );
						$('#timeline-conatiner').append( '<li class="year">'+year+'</li>');
						$.each(data.content, function(key, value ){
							html = '<li class="event">';
							html += '<h3 class="heading">'+value.name+'</h3>';
							html += '<span class="month"><i class="fa fa-calendar"></i>'+value.name+'</span><p>&nbsp;</p>';
							html += '<p><a href="'+value.demo+'" target="_blank">Demo </a></p>';
							html += '<p><a href="'+value.tutorial+'" target="_blank">Tutorial </a></p>';
							
							if(value.media_type == 'video' && value.media !=''){
								html += '<div class="embed-responsive embed-responsive-16by9">';
								html += '<iframe frameborder="0" allowfullscreen="allowfullscreen" src="'+value.media+'" class="embed-responsive-item"></iframe>';
								html += '</div>';
							}
							if(value.media_type == 'image' && value.media !='' ){
								html += '<div class="text-center">';
								html += '<img class="img-responsive img-thumbnail" src="'+value.media+'">';
								html += '</div>';
							}
							html += '<p>'+value.description+'</p>';
							html += '</li>';
							$('#timeline-conatiner').append( html );
						});
						year--;
					}else{
						alert('No more data to show');
						no_data = false;
					}
				},
				error: function( data ){
					flag = true;
					$('#loader').hide();
					no_data = false;
					alert('Something went wrong, Please contact admin');
				}
			});
		}
		
		
	}
});	