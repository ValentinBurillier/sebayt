// Récupérer les paramètres de l'URL
const params = new URLSearchParams(window.location.search);
// Vérifier si le paramètre "password" existe dans l'URL
if (params.has("password")) {
   // Récupérer la valeur du paramètre "password"
   const pass = params.get("password");
   // Utiliser la valeur du mot de passe comme vous le souhaitez
   if (pass === 'sebayt') {
     document.cookie = 'SebaytAccess=yes';
     window.location.href = '../espace-adherents.html';
     console.log("Mot de passe : " + pass);
   } else {
    window.location.href = '../login.html';
   }
}
