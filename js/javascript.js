$(function() {
	//event defined below
	$("button").click(function(event) {
		event.preventDefault();
		getStatus();
	});
	// getStatus();
	//get

	function getStatus(){
		// alert("this is it");
		$.ajax({
			url: "http://services.faa.gov/airport/status/AUS?format=json",
			data: {
				name: "name",
				weather: "weather",
				status: "wind"
			},

			dataType: "json",
			success: function(data, textStatus, jqXHR) {
				var html = $("<h2>" + data.name + " - " + data.status.reason + "</h2>");
				$("#search-air").prepend(html);
				// alert(data.name);
			},
			error: function() {
				alert("Something fucked up!");
			}

		});
	}

});