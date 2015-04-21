(function(Hiof, undefined) {

	addTooltipToContentLinks = function(){
		var thisButton = $(this),
				thisButtonTitle;

		$("#content a:not(.btn)").each(function() {
			var thisButtonHostname = Hiof.getHostname($(this).attr('href'));

			if (typeof thisButtonHostname === 'undefined') {
				thisButtonHostname = '';
			}else{
				thisButtonHostname = ' (' + thisButtonHostname + ')';
			}

			if ($(this).attr('title')) {
				thisButtonTitle =  $(this).attr('title') + thisButtonHostname;
				//$(this).attr('title', thisLinkText);
				//console.log('This link did not have a title: ' + this);
			}else{
				thisButtonTitle =  $(this).text() + thisButtonHostname;
			}
			$(this).attr({
				'data-toggle': 'tooltip',
				'data-placement': 'top',
				title: thisButtonTitle
			});
		});

	};
	//addTooltipToContentLinks();

	$(function() {
		// Run the bootstrap tooltip function
		//$('[data-toggle="tooltip"]').tooltip();
	});

})(window.Hiof = window.Hiof || {});
