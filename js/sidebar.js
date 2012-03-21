var $j = jQuery.noConflict();

$j(document).ready(function(){
	/*var sidebarDistanceFromTop =  parseInt($j("#container").css("padding-top").replace("px", "")) + parseInt($j("#header").height());

	$j(window).scroll(function(e){
	  	if ($j(this).scrollTop() > sidebarDistanceFromTop && $j("#sidebar").css('position') != 'fixed') {
	  		$j("#sidebar").css({'position': 'fixed', 'top': '10px', 'right': '50%', 'margin-right': "-450px"});  		
	 	} else if ($j(this).scrollTop() < sidebarDistanceFromTop && $j("#sidebar").css('position') == 'fixed') {
	 		$j("#sidebar").css({'position': 'absolute', 'top': '0px', 'right': '0px', 'margin-right': "0"}); 
	 	}
	});*/
	var $expanded = 0, $clicked = 0;
	
	$j(".space-filler").click(function () {
		if ($j(this).parent().parent().hasClass("collapsed")) {
			$expanded = $j(".expanded");
			$expanded.removeClass("expanded").addClass("collapsed");
			
			$clicked = $j(this).closest(".collapsed");
			$clicked.removeClass("collapsed").addClass("expanded");
		}
	});
	
	var idnum = 0;
	
	/*$j("li.not-selected").click(function () {
		idnum = "art" + $j(this).attr("id");
		$j("#super-post-navigation li.selected").removeClass("selected").addClass("not-selected");
		$j(this).removeClass("not-selected").addClass("selected");
		$j(".post-head.selected").removeClass("selected").addClass("hidden");
		$j(idnum).removeClass("hidden").addClass("selected");
	});*/
		
	
	/* A BETTER VERSION, borroed from Doug Neiner (http://css-tricks.com/4855-scrollfollow-sidebar/) */

    /*var $sidebar   = $j("#sidebar"),
        $window    = $j(window),
        offset     = $sidebar.offset(),
        topPadding = 10;

    $window.scroll(function() {
        if ($window.scrollTop() > offset.top) {
            $sidebar.stop().animate({
                marginTop: $window.scrollTop() - offset.top + topPadding
            }, 300);
        } else {
            $sidebar.stop().animate({
                marginTop: 0
            }, 300);
        }
    });*/
    
    /* Optimized for Cardinal, somewhat borrowed from Doug Neiner */
    
    var $sidebar   = $j("#sidebar.autoscrollable"),
        $window    = $j(window),
        offset     = $sidebar.offset(),
        topPadding = 10;
        atTop	   = 1;

    $window.scroll(function() {
        if ($window.scrollTop() > offset.top) {
        	if (atTop==1) {
	            $sidebar.stop().animate({
	                marginTop: $window.scrollTop() - offset.top + topPadding
	            }, 500, function() {
	            	atTop = 0;
	            	$sidebar.css({'position': 'fixed', 'top': '10px', 'right': '50%', 'margin-right': "-449px", 'margin-top': '0px'});  
	            });
	        }
        } else {
        	atTop = 1;
        	$sidebar.stop().css({'position': 'absolute', 'top': '0px', 'right': '0px', 'margin-right': "0", 'margin-top': '0px'});
        }
    });

});