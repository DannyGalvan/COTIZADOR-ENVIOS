
// const agregar = document.getElementById("agregarFormulario");

// const contenido = document.getElementById("nuevoContenedor");

// agregar.addEventListener("click", e => {
//     e.preventDefault();
    
//     let clonado = document.querySelector('.clonar');
//     let clon = clonado.cloneNode(true);

//     contenido.appendChild(clon).classList.remove('clonar');

// });

 $(function(){

     $("#inlineRadio1").change(function(){
         $("#contenedor2 div").fadeIn();
         $("#imagencaja").fadeIn();
     })

     $("#inlineRadio2").change(function(){
         $("#contenedor2 div").fadeOut();
         $("#imagencaja").fadeOut();
     })  
 })

const inputradio1 = document.getElementById('inlineRadio1');
const inputradio2 = document.getElementById('inlineRadio2');
const alto = document.getElementById('alto');
const ancho = document.getElementById('ancho');
const largo = document.getElementById('largo');
const peso = document.getElementById('peso');
const tabla = document.getElementById('tabla');

const agregar = document.getElementById('agregarFormulario');
agregar.addEventListener("click",agg);


var paquet = [];

 function agg() {
     if (inputradio1.checked) 
 {
     agregandoCaja();
     print();
 }
 else{
     agregandoSobre();
     print();
 }
 }

function agregandoSobre() {
    paquet.push(new sobre("sobre",peso.value));      
}

function agregandoCaja() {
    paquet.push(new caja("caja",peso.value,largo.value,ancho.value,alto.value));      
}

function print()
{
    tabla.innerHTML = " ";
    let contador = 1;
    let suma = 0;
    let resultado = 0;
    for (const elementos of paquet) 
    {
        resultado = ((parseFloat(elementos.peso) - 30) * 0.90);
        let valor = 17;
        for (let index = 0; index < elementos.peso; index++) {
            if (elementos.peso <= 30) {
                resultado = 0;
            }
            if (elementos.peso < 37) {
                resultado = resultado;
            }
            else
            {
                if (index == valor){
                    resultado = resultado - 0.10;
                    valor = valor + 10;
                    if (valor > resultado) {
                        break
                    }
                }
            }   
        }
        if (elementos.tipo == "caja") {
            tabla.innerHTML += `<td>${contador}</td>` + `<td>${elementos.tipo}</td>` + `<td>${elementos.peso}</td>` + `<td>${elementos.alto}</td>` + `<td>${elementos.largo}</td>` + `<td>${resultado.toFixed(2)}</td>`;
            contador +=1;
            suma = suma + resultado;
        }
        else
        {
            tabla.innerHTML += `<td>${contador}</td>` + `<td>${elementos.tipo}</td>` + `<td>${elementos.peso}</td>` + `<td></td>` + `<td></td>` + `<td>${resultado.toFixed(2)}</td>`;
            contador +=1;
            suma = suma + resultado;
        } 
    } 
    
    tabla.innerHTML += `<td></td>` + `<td></td>` + `<td></td>` + `<td></td>` + `<td>Total: </td>` + `<td>${suma.toFixed(2)}</td>`;
}






