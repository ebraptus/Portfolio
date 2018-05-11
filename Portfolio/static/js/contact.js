$("#contactForm").submit(function(event){
	event.preventDefault();
	$.post("/api/site/contact/", $("#contactForm").serialize(), function(data){
		jsonData = JSON.parse(data);

		if (jsonData.Status == 0){
			$("#contactForm").trigger('reset');
		}
	})
})