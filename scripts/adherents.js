import { themeColor } from './theme.js';

const mainSection = document.getElementsByClassName('main__interviews_list')[0];

const links = [
  './interviews_page/anais_montoto_soto.html',
  './interviews_page/benedice_lhoyer.html',
  './interviews_page/dimitri_laboury.html',
  './interviews_page/livia.html',
  './interviews_page/romain.html'
];

const videos_interviews = [
  './assets/videos/interviews/Interviews/anais.mp4',
  './assets/videos/interviews/Interviews/benedicte_lhoyer.mp4',
  './assets/videos/interviews/Interviews/dimitri_laboury.mp4',
  './assets/videos/interviews/Interviews/livia.mp4',
  './assets/videos/interviews/Interviews/romain.mp4'
];

const miniatures_interviews = [
  './assets/videos/interviews/Interviews/anais.jpg',
  './assets/videos/interviews/Interviews/benedicte_lhoyer.jpg',
  './assets/videos/interviews/Interviews/dimitri_laboury.jpg',
  './assets/videos/interviews/Interviews/livia.jpg',
  './assets/videos/interviews/Interviews/romain.jpg'

]

for(let i = 0; i < miniatures_interviews.length; i++) {
  /* CREATION DES LIENS POUR CHAQUE INTERVIEWS */
  let link = document.createElement('a');
  link.classList = 'interview'+[i];
  link.href = links[i];
  mainSection.appendChild(link);


  /* CREATION DUNE IMAGE POUR CHAQUE INTERVIEW */
  let img = document.createElement('img');
  img.classList = 'img'+[i];
  img.src = miniatures_interviews[i];
  link.appendChild(img);
}
function changeTheme() {
  
  let iconTheme = document.getElementsByClassName('btn-theme')[0];
  iconTheme.addEventListener('click', themeColor);
}

changeTheme();