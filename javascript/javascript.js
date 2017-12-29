/* This function below called initmap() has a variable called uluru. The latitude and longitude 
are defined so that it pinpoints to the specific location, in this case Leicester. initmap() is in 
global scope so that the callback for the google map api works.    */

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


/* Below is the function for the responsive hamburger menu. I have used this example from W3 schools.
The link is: https://www.w3schools.com/howto/howto_js_topnav_responsive.asp. It has been modified so that there is
let instead of var */
(function() {
	
	/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
	function myFunction() {
	    let x = document.getElementById("myTopnav");
	    if (x.className === "topnav") {
	        x.className += " responsive";
	    } else {
	        x.className = "topnav";
	    }
	}

    // There is an event listener so when a user clicks on the responsive menu, it runs myFunction.
	document.getElementById('icon').addEventListener('click', myFunction);

})();