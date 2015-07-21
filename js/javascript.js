$(function() {
	//event defined below
	$("button").click(function(event) {
		event.preventDefault();
		var entry = $("#airin").val();
		getStatus(entry);
	});
	// getStatus();
	//get

	function getStatus(airport){
		// alert("this is it");
		$.ajax({
			type: "get",
			url: "http://services.faa.gov/airport/status/"+airport+"?format=json",
			data: {
				name: "name",
				weather: "weather",
				status: "wind"
			},

			dataType: "json",
			success: function(data, textStatus, jqXHR) {
				var result = "<h3>" + data.name + " - " + data.status.reason + " - " + data.weather.weather + "</h3>";
				$("#search-air").html(result);
				$("#search-air-previous").prepend(result);
			},
			error: function() {
				alert("Please try again!");
			},
			complete: function() {
        		// alert("Done Loading!")
        	}

		});

	}

});