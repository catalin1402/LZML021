// 1. On déclare la variable poeme qui contient le poème et son titre

let poeme = `Soleils couchants

Le soleil s'est couché ce soir dans les nuées ;
Demain viendra l'orage, et le soir, et la nuit ;
Puis l'aube, et ses clartés de vapeurs obstruées ;
Puis les nuits, puis les jours, pas du temps qui s'enfuit !

Tous ces jours passeront ; ils passeront en foule
Sur la face des mers, sur la face des monts,
Sur les fleuves d'argent, sur les forêts où roule
Comme un hymne confus des morts que nous aimons.

Et la face des eaux, et le front des montagnes,
Ridés et non vieillis, et les bois toujours verts
S'iront rajeunissant ; le fleuve des campagnes
Prendra sans cesse aux monts le flot qu'il donne aux mers.

Mais moi, sous chaque jour courbant plus bas ma tête,
Je passe, et, refroidi sous ce soleil joyeux,
Je m'en irai bientôt, au milieu de la fête,
Sans que rien manque au monde immense et radieux !`;

// 2. On crée une fonction pour trouver les mots les plus fréquents

function motsFreq(poeme, n) {
	// On enlève les virgules, points virgules, points et points d'exclamation du poème

	poeme = poeme.replace(/[,;\.!]/g,'');

	// On met tout le poeme en minuscules

	poeme = poeme.toLowerCase();

	// On découpe le poeme en mots

	let mots = poeme.split(" ");

	// On stocke la fréquence de chaque mot dans un objet

	let freq = {};

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

	// On retourne les mots les plus fréquents entre 0 et le nombre choisi

	return ordre.slice(0, n);
};

// On applique la fonction au poème pour trouver les 5 mots les plus fréquents

let mots5 = motsFreq(poeme, 5);

// On affiche les 5 mots les plus fréquents du poème

console.log("Les 5 mots les plus fréquents :");
mots5.forEach((mot, index) => {
	console.log(`${index + 1}. ${mot[0]}`);
});

// On cherche le nombre de mots uniques dans le poème
poeme = poeme.replace(/[,;\.!]/g,'');
poeme = poeme.toLowerCase();
mots = poeme.split(" ");

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

console.log(`La richesse lexicale vaut ${richesseLex}`);

// 3. On découpe le poème en phrases

poeme = `Soleils couchants

Le soleil s'est couché ce soir dans les nuées ;
Demain viendra l'orage, et le soir, et la nuit ;
Puis l'aube, et ses clartés de vapeurs obstruées ;
Puis les nuits, puis les jours, pas du temps qui s'enfuit !

Tous ces jours passeront ; ils passeront en foule
Sur la face des mers, sur la face des monts,
Sur les fleuves d'argent, sur les forêts où roule
Comme un hymne confus des morts que nous aimons.

Et la face des eaux, et le front des montagnes,
Ridés et non vieillis, et les bois toujours verts
S'iront rajeunissant ; le fleuve des campagnes
Prendra sans cesse aux monts le flot qu'il donne aux mers.

Mais moi, sous chaque jour courbant plus bas ma tête,
Je passe, et, refroidi sous ce soleil joyeux,
Je m'en irai bientôt, au milieu de la fête,
Sans que rien manque au monde immense et radieux !`;

let phrases = poeme.match(/[.!?]/g);

console.log(`Nombre de phrases dans le poème : ${phrases.length}`);

// 4. On découpe le poème en strophes

let strophe = poeme.split("\n\n");
let nbStrophes = strophe.length - 1; // On enlève 1 car il y a une ligne vide entre le titre et la première strophe
console.log(`Nombre de strophes dans le poème : ${nbStrophes}`);