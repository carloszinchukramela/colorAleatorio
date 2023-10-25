//Selección de elementos del DOM
const boton = document.querySelector('button');
const color = document.getElementById('color');

function generarColorAleatorio() {
  let digitos = "0123456789ABCDEF";
  let color2 = "#";

  for (let i = 0; i < 6; i++) {
    let indiceAlea = Math.floor(Math.random() * 16);
    color2 += digitos[indiceAlea];    
  }
  return color2;
}

boton.addEventListener('click', function() {
  let colorAleatorio = generarColorAleatorio();
  color.textContent = colorAleatorio;
  document.body.style.backgroundColor = colorAleatorio;
});