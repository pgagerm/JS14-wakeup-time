$(document).on('ready', function() {

	var clock = $("<div class='clock'></div>");
	var outerShell = $("<div class='outer-shell'>outer shell</div>");
	var innerShell = $("<div class='inner-shell'>inner shell</div>");
	var amPm = $("<div class='AM-PM'>AM PM</div>");
	var autoLabel = $("<div class='auto-label'>auto</div>");
	var clockScreen = $("<div class='clock-screen'>clock screen</div>");
	var pmIndicator = $("<div class='pm-indicator'>pm indicator</div>");
	var clockText = $("<div class='clock-text'>clock text</div>");
	var bottomAm = $("<div class='bottom-AM'>AM</div>");
	var bottomFm = $("<div class='bottom-FM'>FM/div>");


		clock.append(outerShell);

		outerShell.append(innerShell);

		innerShell
			.append(amPm)
			.append(autoLabel);

		autoLabel
			.append(clockScreen)
			.append(bottomAm)
			.append(bottomFm);

		clockScreen
			.append(pmIndicator)
			.append(clockText);

		$('.container').append(clock);
});