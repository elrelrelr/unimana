var derecha=document.getElementById('derecha');
var izquierda=document.getElementById('izquierda');
var imagengrado=document.getElementById('imagengrado');
var momento=document.getElementById('añog');
var dere= 0;
var izq= 0;

var imagenesgrados=["multimedia/imagenes/graduacion.jpg","multimedia/imagenes/graduacionmuno.jpg","multimedia/imagenes/graduaciondos.jpg","multimedia/imagenes/graduaciontres.jpg","multimedia/imagenes/graduacionuno.jpg"];
var tiempo=["2021","2016","2021","2021","2014"];

var num = 0;
derecha.addEventListener("click",()=>{
	num++;
    if(num >= imagenesgrados.length) {
        num = 0;
    }
    imagengrado.src = imagenesgrados[num];
    momento.textContent= tiempo[num];
})

izquierda.addEventListener("click",()=>{
	num--;
    if(num < 0) {
        num = imagenesgrados.length-1;
    }
    imagengrado.src = imagenesgrados[num];
    momento.textContent= tiempo[num];
})