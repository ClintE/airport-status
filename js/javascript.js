$(function() {
	//event defined below
	$("button").click(function(event) {
		event.preventDefault();
		var entry = $("#airin").val();
		getStatus(entry);
	});
	

	function getStatus(airport){
		// alert("this is it");
		$.ajax({
			type: "get",
			url: "http://services.faa.gov/airport/status/"+airport+"?format=json",
			dataType: "json",

			success: function(data, textStatus, jqXHR) {
				var result = "<h3>" + data.name + "</h3>" + "<h4>" + data.status.reason + "</h4>" + "<h4>" + data.weather.weather + "</h4>" + "<h4>" + data.weather.temp + "</h4>";
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