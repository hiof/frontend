(function(Hiof, undefined) {





		Hiof.pageFooterToolbar = function() {





				if ($("#index").length) {

				} else {


						let lang = Hiof.view.ln,
								shareText;
						//console.log(lang);
						if (lang === "nb") {
								shareText = "Del eller skriv ut denne siden";
						} else {
								shareText = "Share or print this page";
						}

						let footerElement = document.createElement('footer'),
								headerElement = document.createElement('header'),
								heading = document.createElement('h2'),
								menu = document.createElement('ul');


						$(footerElement).addClass('lo-full');
						$(headerElement).addClass('lo-full');
						$(heading).text(shareText);
						$(menu).addClass('btn-group').attr('id', 'toolbar');


						//$(headerElement).append();
						$(footerElement).append($(heading), $(menu));



						$("#main").append($(footerElement));
				}
		};



		Hiof.pageFooterToolbarPrint = function() {

				if ($("#toolbar").length) {

						let lang = Hiof.view.ln,
								printText,
								printThisPage;

						if (lang === "nb") {
								printText = "Print";
								printThisPage = "Print denne siden";
						} else {
								printText = "Print";
								printThisPage = "Print this page";
						}



						var button = '<button id="print-page" class="btn btn-default btn-line" onclick="javascript:window.print()" title="' + printThisPage + '">' + printThisPage + '</button>';
						$("#toolbar").append(button);
						let svgPrint = Hiof.view.getSvgIcon("print");
						//console.log(svgFacebook);
						if (!$("html").hasClass("lt-ie10")) {
								$("#print-page").html("").addClass("btn-icon").append(svgPrint).prepend('<span class="helper-text">' + printText + '</span>');
						}

				}
		};


		Hiof.pageFooterToolbarShare = function() {

				if ($("#toolbar").length) {

						let lang = Hiof.view.ln,
								facebook = "Facebook",
								twitter = "Twitter",
								LinkedIn = "LinkedIn",
								mail = "Mail",
								sharePage;

						if (lang === "nb") {
								sharePage = "Del side ";
						} else {
								sharePage = "Share page ";
						}





						let socialMenu = '<div class="btn-group"><button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">' + sharePage + ' <span class="caret"></span></button>';
								socialMenu += '<ul class="dropdown-menu" role="menu"><li><a href="#" id="social-facebook" class="">' + facebook + '</a></li>';
								socialMenu += '<li><a href="#" id="social-twitter">' + twitter + '</a></li>';
								socialMenu += '<li><a href="#" id="social-linkedin">' + LinkedIn + '</a></li>';
								//socialMenu += '<li><a href="#" id="social-mail">' + mail + '</a></li></ul>';
								socialMenu += '</div>';

						$("#toolbar").append(socialMenu);

						//console.log(svgFacebook);
						if (!$("html").hasClass("lt-ie10")) {
								let svgFacebook = Hiof.view.getSvgIcon("facebook"),
										svgTwitter = Hiof.view.getSvgIcon("twitter"),
										svgLinkedIn = Hiof.view.getSvgIcon("linkedin");
								//svgMail = Hiof.getSvgIcon("mail");
								$("#social-facebook").html("").append(svgFacebook).prepend('<span class="helper-text">' + facebook + '</span>');
								$("#social-twitter").html("").append(svgTwitter).prepend('<span class="helper-text">' + twitter + '</span>');
								$("#social-linkedin").html("").append(svgLinkedIn).prepend('<span class="helper-text">' + LinkedIn + '</span>');
								//$("#social-mail").html("").append(svgMail).prepend('<span class="helper-text">' + mail + '</span>');
						}

						//$("#social-twitter").append(svgTwitter);
				}
		};

		// Execute functions
		$(function() {
				// Append toolbar
				//console.log("Dette er en test");
				Hiof.pageFooterToolbar();
				Hiof.pageFooterToolbarShare();
				Hiof.pageFooterToolbarPrint();
		});
})(window.Hiof = window.Hiof || {});
