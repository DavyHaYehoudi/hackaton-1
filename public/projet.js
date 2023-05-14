/* 
 * Ci-dessous vous trouverez une solution possible des exercices
 * précédents.
 * 
 * Complétez ce code pour ajouter les fonctionnalités suivantes :
 * 
 * 1. Gestion des limites : lors d'une modification de la valeur du 
 * compteur, si une limite est atteinte alors il faut :
 *    1.1 Affecter au compteur la valeur de la limite atteinte
 *    1.2 Modifier le texte de la notification pour :
 *      1.2.1 "Limite haute (X) atteinte" où X sera la valeur de la 
 * limite haute si c'est la limite haute qui a été atteinte
 *      1.2.2 "Limite basse (X) atteinte" où X sera la valeur de la 
 * limite basse si c'est la limite basse qui a été atteinte
 *    1.3 Afficher la notification pendant 3 secondes
 *    1.4 Appliquer la classe "limite-atteinte" au compteur pour le 
 * faire vibrer et qu'il devienne rouge
 *
 * 2. Lorsqu'on modifie la valeur du compteur et qu'aucune limite 
 * n'est atteinte il faut retirer la classe limite-atteinte du 
 * compteur pour lui redonner sa couleur blanche normale
 * 
 * 3. Une limite peut être atteinte lorsqu'on modifie la valeur du 
 * compteur via les boutons + et - mais également via la zone de 
 * clic et le bouton reset !
 * 
 * NOTE : Si vous souhaitez utiliser le code que vous avez produit 
 * pour répondre aux exercices précédents, vous pouvez bien sûr le 
 * faire !
 * Remplacez simplement le code ci-dessous par le vôtre puis 
 * complétez-le pour ajouter les fonctionnalités demandées.
 * 
 * Prenez votre temps et bon courage 😁
 */

const boutonPlus = document.querySelector('#bouton-plus');
const boutonMoins = document.querySelector('#bouton-moins');
const boutonReset = document.querySelector('#bouton-reset');
const compteur = document.querySelector('#compteur');
const zoneDeClic = document.querySelector('#zone-de-clic');
const inputValeurDec = document.querySelector('#valeur-dec');
const inputValeurInc = document.querySelector('#valeur-inc');
const limiteHaute = document.querySelector("#limite-haute");
const limiteBasse = document.querySelector("#limite-basse");
const notification = document.querySelector("#notification");
const notificationText = document.querySelector("#notification-texte");
const limiteAtteinte = document.querySelector("#compteur");

let compteurDeClics = 0;

function notif(){
  notification.classList.add("afficher");
    setTimeout (function(){
      notification.classList.remove("afficher");
    }, 3000);

    notification.classList.add("notification-texte");
    limiteAtteinte.classList.add("limite-atteinte");
}


// Fonction d'incrémentation
function incrementerCompteur() {
  compteurDeClics += Number(inputValeurInc.value);
  compteur.textContent = compteurDeClics;

  limiteAtteinte.classList.remove("limite-atteinte");
  
  
  if (compteurDeClics >= limiteHaute.value){
    
    compteur.textContent = limiteHaute.value;
    notif();
    notificationText.textContent = `Limite haute ${limiteHaute.value} atteinte.`
  };

  if(compteurDeClics < limiteBasse.value) {
    compteur.textContent = limiteBasse.value;
  };

}

// Fonction de décrémentation
function decrementerCompteur() {
  compteurDeClics -= inputValeurDec.value;
  compteur.textContent = compteurDeClics;

  limiteAtteinte.classList.remove("limite-atteinte");

  
  if (compteurDeClics <= limiteBasse.value){
    
    compteur.textContent = limiteBasse.value;
    notif();
    notificationText.textContent = `Limite basse ${limiteBasse.value} atteinte.`
  };
  
  if(compteurDeClics > limiteHaute.value) {
    compteur.textContent = limiteHaute.value;
  }; 
}

/* Fonctionnalité d'incrémentation */
boutonPlus.addEventListener('click', incrementerCompteur);

/* Fonctionnalité de décrémentation */
boutonMoins.addEventListener('click', decrementerCompteur);

/* Bouton reset (remise à zéro) */
boutonReset.addEventListener('click', function() {
  compteurDeClics = 0;
  compteur.textContent = compteurDeClics;
  limiteAtteinte.classList.remove("limite-atteinte");

  if (compteurDeClics >= limiteHaute.value){

    compteur.textContent = limiteHaute.value;
    notif();
    notificationText.textContent = `Limite haute ${limiteHaute.value} atteinte.`
  }
  if(compteurDeClics <=limiteBasse.value) {
    compteur.textContent = limiteBasse.value;
  }

  if (compteurDeClics <= limiteBasse.value){

    compteur.textContent = limiteBasse.value;
    notif();
    notificationText.textContent = `Limite basse ${limiteBasse.value} atteinte.`
  }
  if(compteurDeClics >=limiteHausse.value) {
    compteur.textContent = limiteHaute.value;
  }

});

/* Incrémentation depuis la zone de clic */
zoneDeClic.addEventListener('click', incrementerCompteur);

/* Décrémentation depuis la zone de clic */
zoneDeClic.addEventListener('contextmenu', function(evenement) {
  // Désactivation du menu contextuel
  evenement.preventDefault();
  
  decrementerCompteur();
});

