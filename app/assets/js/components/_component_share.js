(function(Hiof, undefined) {


		//Hiof.Share = {};


		shareFacebook = function() {
				var url = escape(document.URL),
						shareUrl = "https://www.facebook.com/sharer/sharer.php?u=" + url;
				//console.log(shareUrl);
				window.open(shareUrl, '_blank');
		};



		shareTwitter = function() {
				var url = escape(document.URL),
						shareUrl = "https://twitter.com/share?url=" + url;
				//console.log(shareUrl);
				window.open(shareUrl, '_blank');
		};
		shareLinkedIn = function() {
				var lang = Hiof.languageCheck(),
						source;

						if (lang === "nb") {
								source = "Høgskolen i Østfold";
						} else {
								source = "Østfold University College";
						}

				var url = escape(document.URL),
						title = escape($('#content header *').text()),
						description =  escape($("meta[name=Description]").attr('content')),
						shareUrl = "http://www.linkedin.com/shareArticle?mini=true&url=" + url + '&title=' + title + '&source=' + source + '&summary=' + description;
				window.open(shareUrl, '_blank');
		};

		shareMail = function() {

			var mailAddress = escape($('#share-email-addresses').val());

			if (Hiof.validateEmail(mailAddress)) {
				var url = escape(document.URL),
						title = escape($('#content header *').text()),
						mailAddressName = escape($('#share-email-name').val()),
						subject = 'Høgskolen i Østfold: ' + title,
						body = escape('Hei\n Din venn '+mailAddressName+' ønsker å dele følgende side med deg: '+ url);


						window.open('mailto:' + mailAddress + '?subject='+subject+'&body='+body);
						console.log('shareMail() kjørt');
			}else{
				return;
			}




				//window.open(shareUrl, '_blank');
		};
		//activateShareEmailDialog = function(){
		//  $('#shareEmailModal').modal();
		//};
		//shareMailValidateAddress = function(){
		//	var validateKenneth = Hiof.validateEmail('kenneth@keda.no');
		//	var validateFalse = Hiof.validateEmail('@keda.no');
		//	console.log("validateKenneth should be true: " + validateKenneth);
		//	console.log("validateKenneth should be false: " + validateFalse);
		//};
		addShareEmailDialog = function(){
			var data = {
				modalId: 'share-email',
				title: 'Den denne siden på epost',
				body: '<form class="form-inline"><div class="form-group"><div class="input-group"><input type="text" class="form-control" id="share-email-name" placeholder="Ditt navn"></div></div><div class="form-group"><div class="input-group"><input type="text" class="form-control" id="share-email-addresses" placeholder="Epost adresse"></div></div></form>',
				footer: '<button type="button" class="btn btn-default" data-dismiss="modal">Steng vindu</button><button type="submit" id="share-email-send" class="btn btn-primary" data-dismiss="modal">Del side</button>'
			};


			var templateSource = Hiof.Templates['modal/generic'],
					markup = templateSource(data);

			$('body').append(markup);
			$('#modal-share-email').modal('show');
		};

		executeShare = function(value){

					if (value === 'facebook') {
						Hiof.shareFacebook();
					}else if(value === 'twitter'){
						Hiof.shareTwitter();
					}else if (value === 'linkedin') {
						Hiof.shareLinkedIn();
					}else if(value === 'mail'){
						Hiof.addShareEmailDialog();
					}else{
						return;
					}
		};


		// Expose functions to the window
		window.Hiof.shareFacebook = shareFacebook;
		window.Hiof.shareTwitter = shareTwitter;
		window.Hiof.shareLinkedIn = shareLinkedIn;
		window.Hiof.shareMail = shareMail;
		//window.Hiof.activateShareEmailDialog = activateShareEmailDialog;
		window.Hiof.addShareEmailDialog = addShareEmailDialog;

		// Listen to activity
		$(function() {

				//$('body').on('click', '#share-email-send', function(e){
				//	e.preventDefault();
				//	shareMail();
				//});
				$('body').on('blur', '#share-email-addresses', function(e){
					e.preventDefault();
					//debug("Focus is happening...");
					var emailInput = $('#share-email-addresses'),
							emailInputParent = emailInput.parents('.form-group'),
							shareEmailSend = $('#share-email-send');

					emailInputParent.addClass('has-error');
					if (Hiof.validateEmail(emailInput.val())) {
						emailInputParent.removeClass('has-error');
						emailInputParent.addClass('has-success');
						shareEmailSend.prop("disabled", false);
					}else{
						emailInputParent.removeClass('has-success');
						emailInputParent.addClass('has-error');
						shareEmailSend.attr('disabled', 'disabled');
					}

				});


				$('body').on('click', '#social-facebook,#social-twitter,#social-linkedin,#social-mail', function(e){
					e.preventDefault();
					var thisButton = $(this).attr('id').split('-')[1];
					executeShare(thisButton);
				});
		});


})(window.Hiof = window.Hiof || {});
