function initMap(r, z) {
	if (z == null) {
		z = 17
	}
	if (myCity) {
		myCity.setMap(null)
	}
	var mulcam = {
		lat : 37.5013068,
		lng : 127.037471
	};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom : z,
		center : mulcam
	});
	var marker = new google.maps.Marker({
		position : {
			lat : 37.5012743,
			lng : 127.039585
		},
		map : map
	});

	var myCity = new google.maps.Circle({

		center : mulcam,

		radius : Number(r),

		strokeColor : "#bee5eb",

		strokeOpacity : 0.8,

		strokeWeight : 2,

		fillColor : "#bee5eb",

		fillOpacity : 0.4

	});

	myCity.setMap(map);
}