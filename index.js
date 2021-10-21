// Récupérer une référence sur le template
const elTemplateItem = document.querySelector('#template-item');
const elNouvelItem = document.querySelector('#nouvel-item');
const elListe = document.querySelector('#liste');
const elForm = document.querySelector('form');

elForm.addEventListener('submit', function(e) {
 
    e.preventDefault();
    
    let nomItem = elNouvelItem.value;
  
    const objetItem = extraireDonnees(nomItem);
    const elLi = creerElementLi(objetItem);
    liste.append(elLi);
    elNouvelItem.value = "";
    elNouvelItem.focus();
    
  });