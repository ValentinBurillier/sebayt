// const fr = {
//   'Accueil': 'Accueil',
//   'Vidéos': 'vidéos',
//   'Photos': 'Photos',
//   'Actualités': 'Actualités',
//   'Deconnexion': "Déconnexion"
// }
// function detectCookie() {
//   const cookies = document.cookie.split(';');
//   let langueSebayt = null;

//   for (const cookie of cookies) {
//     const [name, value] = cookie.split('=');
//     if (name === 'langueSebayt') {
//       langueSebayt = value;
//       break; // Arrêter la boucle si le cookie est trouvé
//     }
//   }

//   if (!langueSebayt) {
//     document.cookie = "langueSebayt=fr";
//     langueSebayt = "fr"; // Mettre à jour la variable
//   }

//   return langueSebayt; // Renvoyer la valeur du cookie
// }

// const langue = detectCookie();
// // console.log("Langue:", langue); // Utiliser la valeur du cookie

function displaylangue() {
  const cookies = document.cookie.split(';');
  cookies.forEach((e) => {
  const [name, value] = e.split('=');
    if(name == ' langueSebayt' && ' fr') {
      document.querySelector('#accueil').innerText = 'Home';
      document.querySelector('#videos').innerText = 'Vidéos';
      document.querySelector('#photos').innerText = 'Photos';
      document.querySelector('#actualites').innerText = 'News';
    }
})
}
displaylangue();