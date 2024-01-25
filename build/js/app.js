// Selecciona todos los elementos con la clase .sub_navegacion
const subNavegacion = document.querySelectorAll('.sub_navegacion');

// Recorre cada elemento .sub_navegacion
subNavegacion.forEach(element => {
  // Agrega un evento de clic a cada elemento
  element.addEventListener('click', () => {
    // Selecciona el elemento .sub_item correspondiente
    const subItem = element.nextElementSibling;

    // Verifica si el submenú está oculto o visible
    if (subItem.classList.contains("s_mobile")) {
      // Si está oculto, lo muestra quitando la clase .s_mobile
      subItem.classList.remove("s_mobile");
    } else {
      // Si está visible, lo oculta agregando la clase .s_mobile
      subItem.classList.add("s_mobile");
    }
  });
});

const menu = document.querySelector('.menu');
const nav_mobile = document.querySelector('.navegacion')
const acceso = document.querySelector('.acceso');
const cn = document.querySelector('.contenedor_navegacion')
const header = document.querySelector('.header')

menu.addEventListener('click',function(){
    nav_mobile.classList.toggle('trans')
    acceso.classList.toggle('trans')
    cn.classList.toggle('bg')
    header.classList.toggle('ff')
})