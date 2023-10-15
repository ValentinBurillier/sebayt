export const themeColor = function() {
  let bodyColor = document.getElementsByTagName('body')[0];
  console.log(document.getElementsByClassName('nav__img'))
  let imgColorMenu = document.getElementsByClassName('nav__img')[0];
  let imgColorTheme = document.getElementsByClassName('nav__img')[1];

  if(bodyColor.style.backgroundColor === '') {
    bodyColor.style.backgroundColor = 'black';
    bodyColor.style.color = 'white';
    console.log(1);
    imgColorMenu.src = 'assets/images/utils/menu_sombre.png';
    imgColorTheme.src = 'assets/images/utils/theme_sombre.png';
    return;
  }
  if(bodyColor.style.backgroundColor === 'black') {
    bodyColor.style.backgroundColor = 'white';
    bodyColor.style.color = 'black';
    imgColorMenu.src = 'assets/images/utils/menu_clair.png';
    imgColorTheme.src = 'assets/images/utils/theme_clair.png';
    return;
  }
  if(bodyColor.style.backgroundColor === 'white') {
    bodyColor.style.backgroundColor = 'black';
    bodyColor.style.color = 'white';
    imgColorMenu.src = 'assets/images/utils/menu_sombre.png';
    imgColorTheme.src = 'assets/images/utils/theme_sombre.png';
    return;
  }
}