$(document).ready(function(){
	function traerFrase(){
		$.ajax({
			url:'https://crossorig.in/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en',

			success: function(datos) {
		    	console.log(datos)
		    	$('h1').text(`"${datos.quoteText}"`)
		    	$('h2').text(datos.quoteAuthor)
	  		},
	  		error: function(error) {
	    		console.log(error)
	  		},
		})
	}

	$('.fa-refresh').click(traerFrase);
	traerFrase()


	$('.fa-twitter').click(function (){
		var quote = $('h1').text();
		var author = $('h2').text();
		var urlTwitter = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
		window.open(urlTwitter)
	})

	$('.fa-globe').click(function(){
        var quote = $('h1').text();
        var apiKey = 'trnsl.1.1.20171221T155924Z.1ff2e4e6ebb89511.e43c69b3a2a63247ef4a726f168d2daaf15d2db0';
        var urlTraductor = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${apiKey}&text=${quote}&lang=es`;

        $.ajax({
            url: urlTraductor,

            success: function(datosB) {
                console.log(datosB)
                $('h1').text(datosB.text)
            },
            error: function(error) {
                console.log(error)
            },
        })
    })
})
