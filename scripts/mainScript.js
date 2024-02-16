function changePays() {
  const img = document.querySelector(".imgPays");
  img.addEventListener('click', () => {
  const getUrl = window.location.pathname;
    if(img.lang === 'en') {
      switch(getUrl) {
        case "/index.html":
          document.location.href = "/pages/en/home.html";
          break;
        case "/pages/navigation/evenements.html":
          document.location.href = "/pages/en/events.html";
          break;
        case "/pages/navigation/espace-adherents.html":
          document.location.href = "/pages/en/member-area.html";
          break;
      }
    } else {
      if(img.lang === 'fr'){
        switch(getUrl) {
          case "/pages/en/home.html":
            document.location.href = '/';
            break;
          case "/pages/en/events.html":
            console.log('bravo');
            document.location.href = "/pages/navigation/evenements.html";
            break;
        }
      }
    }
  })
}
changePays();