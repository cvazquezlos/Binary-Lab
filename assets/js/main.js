/*
	Wide Angle by Pixelarity
	pixelarity.com @pixelarity
	License: pixelarity.com/license
*/

var settings = {

	// Images
		images: {

			/*
				Your slides, in this format:

				'path/to/image.jpg': 'position',

				where 'position' is the vertical/horizontal position (eg. 'center center', 'top left').
				Use wide/short images for best results.
			*/

			'images/slide01.png': 'center left',
			'images/slide02.png': 'center center',
			'images/slide03.png': 'center center',
			'images/slide04.png': 'center center',
			'images/slide05.png': 'center center'

		},

	// Transition speed (in ms)
		speed: 2000,

	// Transition delay (in ms)
		delay: 4000

};

(function($) {

	skel
		.breakpoints({
			desktop: '(min-width: 737px)',
			tablet: '(min-width: 737px) and (max-width: 1200px)',
			mobile: '(max-width: 736px)'
		})
		.viewport({
			breakpoints: {
				tablet: {
					width: 1080
				}
			}
		});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// Dropdowns.
			$('#nav > ul').dropotron({
				offsetY: -50,
				mode: 'fade',
				noOpenerFade: true,
				alignment: 'center'
			});

		// Slider.
			var $slider = $('#slider');
			if ($slider.length > 0) {

				var src = settings.images,
					speed = settings.speed,
					delay = settings.delay,
					zIndex = 2, a = [], i, n, x;

				// Configure target
					$slider.css('position', 'relative');

				// Build slides and add them to target
					for (i in src) {

						if (!src.hasOwnProperty(i))
							continue;

						x = $('<div></div>');

						x
							.css('position', 'absolute')
							.css('z-index', zIndex - 1)
							.css('left', 0)
							.css('top', 0)
							.css('width', '100%')
							.css('height', '100%')
							.css('background-position', src[i])
							.css('background-image', 'url("' + i + '")')
							.css('background-size', 'cover')
							.hide();

						x.appendTo($slider);

						a.push(x);

					}

				// Loop
					i = 0;

					a[i].fadeIn(speed, function() {
						window.setInterval(function() {

							n = i + 1;
							if (n >= a.length)
								n = 0;

							a[n]
								.css('z-index', zIndex)
								.fadeIn(speed, function() {
									a[i].hide();
									a[n].css('z-index', zIndex - 1);
									i = n;
								});

						}, delay);
					});
			}

		// Off-Canvas Navigation.

			// Title Bar.
				$(
					'<div id="titleBar">' +
						'<a href="#navPanel" class="toggle"></a>' +
					'</div>'
				)
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						'<nav>' +
							'<a href="index.html" class="link depth-0">Home</a>' +
							$('#nav').navList() +
						'</nav>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'navPanel-visible'
					});

			// Fix: Remove transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#titleBar, #navPanel, #page-wrapper')
						.css('transition', 'none');

	});

})(jQuery);
