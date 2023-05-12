$( document ).ready(function() {
    $('.info-tag').each(function() {
			var $numWords = $(this).text().split(" ").length;
			console.log($numWords);
			if (($numWords >= 1) && ($numWords < 10)) {
				$(this).css("font-size", "10pt");
				console.log("font size 10pt");
			}
			else if (($numWords >= 10) && ($numWords < 20)) {
				$(this).css("font-size", "9pt");
				console.log("font size 9pt");
			}
			else if (($numWords >= 20) && ($numWords < 30)) {
				$(this).css("font-size", "8.5pt");
				console.log("font size 8.5pt");
			}
			else if (($numWords >= 30) && ($numWords < 40)) {
				$(this).css("font-size", "8pt");
				console.log("font size 8pt");
			}
			else {
				$(this).css("font-size", "8pt");
				console.log("default 8pt");
			}    
    });
});

$( document ).ready(function() {
	$('.info-row').each(function() {
		var $numWords = $(this).text().split(" ").length;
		console.log($numWords);
		if (($numWords >= 1) && ($numWords < 10)) {
			$(this).parent().css("font-size", "10pt");
			console.log("font size 10pt");
		}
		else if (($numWords >= 10) && ($numWords < 20)) {
			$(this).parent().css("font-size", "9pt");
			console.log("font size 9pt");
		}
		else if (($numWords >= 20) && ($numWords < 30)) {
			$(this).parent().css("font-size", "8.5pt");
			console.log("font size 8.5pt");
		}
		else if (($numWords >= 30) && ($numWords < 40)) {
			$(this).parent().css("font-size", "8pt");
			console.log("font size 8pt");
		}
		else {
			$(this).parent().css("font-size", "8pt");
			console.log("default 8pt");
		}    
	});
});