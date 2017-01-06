$("input").keypress(function(press){
	var prenom = $("#first_name").val();
	var nom = $("#last_name").val();
	var ville = $("#city").val();

	if (press.which == 13) {
		console.log( " Je m'appelle " + prenom + " " + 	nom + " et j'habite à " + ville + " . ");
	}
});