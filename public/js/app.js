/*Ici je selectionne mes elements */
const btnMenu = document.querySelector('.logo-menu');
const menu = document.querySelector('.liste-nav');
      /*Ici je met en place mon ecouteur d'evenement , avec la methode
      toggle j'ouvre et je ferme ma navbar */
btnMenu.addEventListener('click',()=>{
menu.classList.toggle('active')
});
/*Ici je viens que mes liens pointe directement sur la zone concerné
je mets donc en place une boucle foreach qui va me permettre de 
parcourir mes liens */
const allLinks = document.querySelectorAll('.item-nav');
allLinks.forEach(item => {
      item.addEventListener('click',()=>{
            menu.classList.toggle('active')
      })
})