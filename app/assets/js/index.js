document.addEventListener("DOMContentLoaded", function(){

	var adjust = function(){
		
		move("#introbox").duration(800).set("opacity",1).end();

		var sh = window.innerHeight < 640 ? 640 : window.innerHeight;
		var ch = 466 || document.querySelector("#clouda").offsetHeight;
		var mv = (sh - ch - 60) / 2;
		move("#clouda").duration(0).y(mv).end();

		var scs = document.querySelectorAll(".showcase");
		[].forEach.call(scs, function(sc){
			var sermon = sc.querySelector(".sermon");
			var offset = (sh - sermon.offsetHeight - 40) / 2;
			move(sermon).duration(0).y(offset).end();
		});
	}

	adjust();
	window.addEventListener("resize", adjust, false);
	

}, false);