const agregar = document.getElementById("agregar");
const mostrar = document.getElementById("mostrar");
const ordenar = document.getElementById("ordenar");
const validar = document.getElementById("validar");
const show = document.getElementById("show");

let vector = []

agregar.addEventListener("click", () =>{
    vector.push(getRandom(1, 10))
})

mostrar.addEventListener("click", () =>{
    show.innerHTML= vector
})

ordenar.addEventListener("click", () =>{
    vector.sort((a, b) => a - b)
})

validar.addEventListener("click", () =>{
   //DEsPUES PONETE HACER EL OTRO DE HOY. 28-3
   let texto = document.getElementById("text").value;

   if(esta(Math.floor(texto))){
    document.body.style.backgroundColor = "#58c112";
   }
   else{
    document.body.style.backgroundColor = "#e01d17"
   }
})

function esta(valor){
    return vector.includes(valor)
}

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }



