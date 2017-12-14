function initMap() {
  let uluru = {
    lat: 52.629780,
    lng: -1.139370
  };
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: uluru
  });
  let marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}


(function() {
	
	/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
	function myFunction() {
	    var x = document.getElementById("myTopnav");
	    if (x.className === "topnav") {
	        x.className += " responsive";
	    } else {
	        x.className = "topnav";
	    }
	}

	document.getElementById('icon').addEventListener('click', myFunction);

})





();