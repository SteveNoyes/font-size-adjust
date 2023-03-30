$( document ).ready(function() {
    $('.info-tag').each(function() {
			var $numWords = $(this).text().split(" ").length;
			console.log($numWords);
			if (($numWords >= 1) && ($numWords < 10)) {
				$(this).css("font-size", "30px");
				console.log("font size 30px");
			}
			else if (($numWords >= 10) && ($numWords < 20)) {
				$(this).css("font-size", "25px");
				console.log("font size 25px");
			}
			else if (($numWords >= 20) && ($numWords < 30)) {
				$(this).css("font-size", "20px");
				console.log("font size 20px");
			}
			else if (($numWords >= 30) && ($numWords < 40)) {
				$(this).css("font-size", "16px");
				console.log("font size 16px");
			}
			else {
				$(this).css("font-size", "12px");
				console.log("default 12px");
			}    
    });
});