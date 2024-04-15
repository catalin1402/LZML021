window.onload = function() {
    let fileInput = document.getElementById('fileInput');
    let fileDisplayArea = document.getElementById('fileDisplayArea');

    // On "écoute" si le fichier donné a été modifié.
    // Si on a donné un nouveau fichier, on essaie de le lire.
    fileInput.addEventListener('change', function(e) {
        // Dans le HTML (ligne 22), fileInput est un élément de tag "input" avec un attribut type="file".
        // On peut récupérer les fichiers données avec le champs ".files" au niveau du javascript.
        // On peut potentiellement donner plusieurs fichiers,
        // mais ici on n'en lit qu'un seul, le premier, donc indice 0.
        let file = fileInput.files[0];
        // on utilise cette expression régulière pour vérifier qu'on a bien un fichier texte.
        let textType = new RegExp("text.*");

        if (file.type.match(textType)) { // on vérifie qu'on a bien un fichier texte
            // lecture du fichier. D'abord, on crée un objet qui sait lire un fichier.
            var reader = new FileReader();

            // on dit au lecteur de fichier de placer le résultat de la lecture
            // dans la zone d'affichage du texte.
            reader.onload = function(e) {
                fileDisplayArea.innerText = reader.result;
            }

            // on lit concrètement le fichier.
            // Cette lecture lancera automatiquement la fonction "onload" juste au-dessus.
            reader.readAsText(file);    

            document.getElementById("logger").innerHTML = '<span class="infolog">Fichier chargé avec succès</span>';
        } else { // pas un fichier texte : message d'erreur.
            fileDisplayArea.innerText = "";
            document.getElementById("logger").innerHTML = '<span class="errorlog">Type de fichier non supporté !</span>';
        }
    });
}

// tâche 1
function segmentation() {
    // Récupération du texte
    texte = reader.result;

    // Récupération de la zone de texte pour l'affichage des résultats
    let resultat = document.getElementById('page-analysis');

    // Récupération des délimiteurs
    let delimiteurs = document.getElementById('delimID');

    // Segmentation du texte selon les délimiteurs
    let del = RegExp(delimiteurs, 'g');
    textedel = texte.replace(del,'');
    textedel = textedel.replace(/'/g,"' ");
    let mots = textedel.split(' ');
    let nbMots = mots.length;

    // On associe chaque mot à son nombre de caractères
    let nbCaracteres = {};
    mots.forEach((mot) => {
        nbCaracteres[mot.length] = mot;
    })

    // On compte le nombre d'occurences pour chaque longueur de mot
    // On regroupe les mots selon leur longueur
    let groupesLongueur = {};

    mots.forEach(function(mot) {
        let longueur = mot.length;

        if (!groupesLongueur[longueur]) {
            groupesLongueur[longueur] = [];
        }

        groupesLongueur[longueur].push(mot);
    });

    return groupesLongueur;

    // On enlève les doublons
    // On affiche les résultats dans un tableau

    resultat.innerHTML=`<p style="text-align:left;"> Le texte contient ${nbMots} mots.</p><br/>`
}

// tâche 2
// Fonction tokénisation
function tokenisation() {
    let del = RegExp(delimiteurs, 'g');
    textedel = texte.replace(del,'');
    textedel = textedel.replace(/'/g,"' ");
    let mots = textedel.split(' ');
}   

// Cooccurrence
function cooccurrence() {

}
