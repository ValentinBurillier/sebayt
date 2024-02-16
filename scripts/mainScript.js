function changePays() {
  const img = document.querySelector(".imgPays");
  img.addEventListener('click', () => {
  const getUrl = window.location.pathname;
    if(img.lang === 'en') {
      switch(getUrl) {
        case "/sebayt/index.html":
          document.location.href = "/sebayt/pages/en/home.html";
          break;
        case "/sebayt/pages/navigation/evenements.html":
          document.location.href = "/sebayt/pages/en/events.html";
          break;
        case "/sebayt/pages/navigation/espace-adherents.html":
          document.location.href = "/sebayt/pages/en/member-area.html";
          break;
      }
    } else {
      if(img.lang === 'fr'){
        switch(getUrl) {
          case "/sebayt/pages/en/home.html":
            document.location.href = '/sebayt/';
            break;
          case "/sebayt/pages/en/events.html":
            console.log('bravo');
            document.location.href = "/sebayt/pages/navigation/evenements.html";
            break;
        }
      }
    }
  })
}
changePays();