$j(document).ready(function() {

	adjustProductImage();
	
	$j(".fancybox").fancybox();
});

function adjustProductImage() {

	adjustProductImage_UpdateMain();
	
}


function adjustProductImage_UpdateMain() {

	// replace and restart zoom when a thumbnail is clicked
	$j(".more-views li img").on("click",  function(e) {
		
		$j(".cloud-zoom").attr("href", $j(this).attr("data-zoom") );
		$j(".cloud-zoom img").hide().attr("src", $j(this).attr("data-main") ).fadeIn();
		$j(".mousetrap").remove();
		$j('.cloud-zoom').CloudZoom();
		$j(".view-large .fancybox").attr("href", $j(this).attr("data-zoom") );
	})
}