// fonction pour analyser un poème
function analysePoeme() {
  	
  	// récupérer l'input
	let poeme = document.getElementById("poeme").value;

	// récupérer balises pour affichage
	let resultatFreq = document.getElementById("resultat1");
	let resultatRichesse = document.getElementById("resultat2");
	let resultatPhrases = document.getElementById("resultat3");

	// On enlève les virgules, points virgules, points et points d'exclamation du poème
	poeme = poeme.replace(/[,;\.!]/g,'');

	// On met tout le poeme en minuscules
	poeme = poeme.toLowerCase();

	// On découpe le poeme en mots
	let mots = poeme.split(" ");

	// fonction pour trouver les 10 mots les plus fréquents
	function = motsFrequents() {

	// On stocke la fréquence de chaque mot dans un objet

	let freq = {;

	mots.forEach((mot) => {
   		if (freq[mot]){
      		freq[mot]++;
   		}
   		else{
      		freq[mot] = 1;
   		}
	    
	});

	// On crée un tableau à partir de l'objet et on le trie dans l'ordre des croissant des valeurs

	let ordre = Object.entries(freq).sort((a, b) => b[1] - a[1]);

	// On retourne les mots les plus fréquents entre 0 et 10

	return ordre.slice(0, 10);
	}
	}

	// fonction pour la richesse lexicale
	function richesseLexicale() {
		// On cherche le nombre de mots uniques dans le poème

	let motsTotal = motsFreq(poeme, mots.length);

	let count = 0;

	freq = {};

	mots.forEach((mot) => {
   		if (freq[mot]){
      		freq[mot]++;
   		}
   		else{
      		freq[mot] = 1;
   		}

	motsTotal.forEach((mot) => {
		if (freq[mot] = 1) {
			count++;
		}
		else {
			count = count;
		}
	});

	// On calcule la richesse lexicale

	let richesseLex = count/mots;
	resultatRichesse.innerText = "La richesse lexicale vaut" ${richesseLex};
	}

	// fonction pour le nombre de phrases
	
	function phrases() {
		let phrases = poeme.match(/[.!?]/g);
		resultatPhrases.innerText = "Nombre de phrases dans le poème :" ${phrases.length};
	}
  	
}