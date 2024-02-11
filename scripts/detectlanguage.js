function detectLanguage() {
  const cookies = document.cookie.split(";");
  cookies.forEach((e) => {
    const [name, value] = e.split('=');
    if(name === 'test' && value === '1') {
      const getUrl = window.location.pathname;
      switch(getUrl){
        case "/":
          window.location.href = './pages/en/home.html';
          break;
        case "/pages/navigation/evenements.html":
          window.location.href = "../en/events.html";
          break;
        case "/pages/connexion/login.html":
          window.location.href = "../en/connect/login.html";
          break;
        case "/pages/navigation/espace-adherents.html":
          window.location.href = "../en/member-area.html";
      }
    }
  });
}
detectLanguage();