var bidglass = bidglass || {};

if( !bidglass.included ) {
	
	bidglass.included = true;

	(function() {
		
		var script = document.createElement("script");
	    script.src = "https://bid.glass/lib/code/bidglass.min.js?ad_box_1&ad_channel=2&ad_slot=3&adsize=300x250";
	    script.async = true; //asynchronous
	    document.getElementsByTagName("head")[0].appendChild(script);
		
	})();
	
}