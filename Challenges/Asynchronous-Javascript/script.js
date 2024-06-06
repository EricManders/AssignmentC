function RNM() {
	var http = new XMLHttpRequest();

	http.onreadystatechange = function() {
		if (http.readyState == 4 && http.status == 200) {
			const obj = JSON.parse(http.response);
			document.getElementById("RickNMorty").innerHTML = obj.results[0].name;
			console.log(obj);
		}
	};


	http.open("GET", "https://rickandmortyapi.com/api/character", true);
	http.send();
}

function HP() {
	var http = new XMLHttpRequest();

	http.onreadystatechange = function() {
		if (http.readyState == 4 && http.status == 200) {
			const obj = JSON.parse(http.response);
			document.getElementById("HarryPotter").innerHTML = obj[0].name;
			console.log(obj);
		}
	};


	http.open("GET", "http://hp-api.herokuapp.com/api/characters", true);
	http.send();
}

function AOT() {
	var http = new XMLHttpRequest();

	http.onreadystatechange = function() {
		if (http.readyState == 4 && http.status == 200) {
			const obj = JSON.parse(http.response);
			document.getElementById("aot").innerHTML = obj[0].name;
			// document.getElementById("levi").src= obj[0].picture_url;
			console.log(obj);
		}
	};


	http.open("GET", "https://attackontitanapi.herokuapp.com/api/characters", true);
	http.send();
}

/*  Ready states

0 - request not initialised
1 - request has been set up
2 - request has been sent
3 - request is in process
4 - request is complete

*/

// A big thankyou to the tutorial that the challenges tab gave us.