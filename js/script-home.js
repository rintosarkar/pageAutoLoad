year = 2014; 
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
				url : 'ajax_html.php',
				method: 'post',
				data: {
				   start : first,
				   limit : limit
				},
				success: function( data ) {
					flag = true;
					$('#loader').hide();
					if(data !=''){
						
						first = parseInt($('#first').val());
						limit = parseInt($('#limit').val());
						$('#first').val( first+limit );
						$('#timeline-conatiner').append( '<li class="year">'+year+'</li>');
						
						$('#timeline-conatiner').append( data );
						$('.event').waypoint({
							triggerOnce: true,
							offset: '80%',
							handler: function() {
								jQuery(this).addClass('animated fadeInUp');
							}
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


jQuery(document).ready(function($){
	$('.event').waypoint({
		triggerOnce: true,
		offset: '80%',
		handler: function() {
			jQuery(this).addClass('animated fadeInUp');
		}
	});
});
	