// Récupérer une référence sur le template
const elTemplateItem = document.querySelector('#template-item');
const elNouvelItem = document.querySelector('#nouvel-item');
const elListe = document.querySelector('#liste');
const elExporter = document.querySelector('#exporter');
const elForm = document.querySelector('form');

// Liste des items
let listeItems = [];

// Chargement des données depuis localStorage
const CLE_LOCAL_STORAGE = "liste";
const donnees = localStorage.getItem(CLE_LOCAL_STORAGE);

// S'il y a des données à charger
if (donnees !== null) {
  listeItems = JSON.parse(donnees);
  for (let i = 0; i < listeItems.length; i++) {
    const elLi = creerElementLi(listeItems[i]);
    elListe.append(elLi);
  }
}

function sauvegarder() {
  localStorage.setItem(CLE_LOCAL_STORAGE, JSON.stringify(listeItems));
}

function remplacerParagrapheParInput(e) {
  const elP = e.target;
  // Transformation de l'élément <p> en <input type="text">
  // Créer un <input>
  const elInput = document.createElement('input');
  
  // Si on a cliqué sur le nom... on fait un type="text"
  if (elP.classList.contains("nom")) {
    elInput.type = "text";
  } else {
    // Sinon on fait type="number" et ajouter les attributs min max
    elInput.type = "number";
    elInput.min = "1";
    elInput.max = "999";
  }
  
  elInput.className = elP.className;

  // Injecter le nom provenant de <p> dans <input>
  const nom = elP.textContent;
  elInput.value = nom;

  // Remplacer l'élément <p> par <input>
  elP.replaceWith(elInput);

  // UX
  elInput.focus();

  elInput.addEventListener('blur', gestionBlur);

  // Si on appuie sur ENTREE, il faut également remplacer par <p>
  elInput.addEventListener('keydown', function(e) {
    if (e.key === "Enter") {
      elInput.removeEventListener('blur', gestionBlur);
      gestionBlur(e);
    }
  });
}

elForm.addEventListener('submit', function(e) {
  
  e.preventDefault();
  
  let nomItem = elNouvelItem.value;
  const objetItem = extraireDonnees(nomItem);
  listeItems.push(objetItem);
  sauvegarder();
  const elLi = creerElementLi(objetItem);
  liste.append(elLi);
  elNouvelItem.value = "";
  elNouvelItem.focus();
  
});
