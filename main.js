
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
const tabla2 = document.getElementById('tabla2');

const agregar = document.getElementById('agregarFormulario');
agregar.addEventListener("click",agg);

const eliminarFormulario = document.getElementById('eliminarFormulario');
eliminarFormulario.addEventListener('click',elim)

const modificarFormulario = document.getElementById('modificarFormulario');
modificarFormulario.addEventListener('click',modify)

const municipioOrigen = document.getElementById('municipioOrigen');
const municipioDestino = document.getElementById('municipioDestino');

const totalizador = document.getElementById('totalizador');
totalizador.addEventListener('click',calcularTotal)


function validarOrigen() {
    if (departamentoOrigen.value == 0 || departamentoOrigen.value == " ") {
        alert("seleccione un departamento de origen")
        departamentoOrigen.focus()
        municipioOrigen.setAttribute("disabled","")
        tabla2.style.display = "none"
        municipioOrigen.innerHTML = `
        <option value="0">Seleccione Municipio</option>`
    }
}

function validarDestino() {
    if (departamentoDestino.value == 0 || departamentoDestino.value == " ") {
        alert("seleccione un departamento de Destino")
        departamentoDestino.focus() 
        municipioDestino.setAttribute("disabled","")
        tabla2.style.display = "none"
        municipioDestino.innerHTML = `
        <option value="0">Seleccione Municipio</option>`
    }
}

var paquet = [];

 function agg() {
            if (inputradio1.checked) 
            {
                if (peso.value <= 0 || alto.value <= 0 || ancho.value <= 0 || largo.value <= 0) {
                    alert("ingrese todos los datos de su paquete")
                }
                else{
                agregandoCaja();
                print();
                }
            }
            else{
                if (peso.value <= 0) {
                    alert("ingrese todos los datos de su paquete")
                }
                else{
                    agregandoSobre();
                    print();
                }       
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
    let dimension = 0;
    let pesado = 0;
    for (const elementos of paquet) 
    {
        dimension = ((elementos.largo * elementos.ancho * elementos.alto)/5000) * 2.20;
        pesado = elementos.peso;
        
        if (dimension > pesado)
        {
            resultado = ((parseFloat(dimension) - 30) * 0.90); 
        }
        else
        {
            resultado = ((parseFloat(pesado) - 30) * 0.90);
        }

        let parar = resultado + 30
        let valor = 17;
        for (let index = 0; index < parar; index++) {
            if (parar <= 30) {
                resultado = 0;
            }
            if (parar < 37) {
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
            tabla.innerHTML += `<td><input id="${contador}" type ="checkbox" value = "${contador}"></input></td>` + `<td>${elementos.tipo}</td>` + `<td>${elementos.peso}</td>` + `<td>${elementos.alto}</td>` + `<td>${elementos.largo}</td>` + `<td>${resultado.toFixed(2)}</td>`;
            contador +=1;
            suma = suma + resultado;
        }
        else
        {
            tabla.innerHTML += `<td><input id="${contador}" type ="checkbox" value = "${contador}"></input></td>` + `<td>${elementos.tipo}</td>` + `<td>${elementos.peso}</td>` + `<td></td>` + `<td></td>` + `<td>${resultado.toFixed(2)}</td>`;
            contador +=1;
            suma = suma + resultado;
        } 
    } 
    
    tabla.innerHTML += `<td></td>` + `<td></td>` + `<td></td>` + `<td></td>` + `<td>Total: </td>` + `<td>${suma.toFixed(2)}</td>`;
    tabla2.style.display = "none";
}

// function eliminar() 
// {
//     position = eliminarPocicion.value -1;
//     if (position >= 0)
//     {
//         paquet.splice(position,1);
//         print();
//         eliminarPocicion.value = " ";
//     }
//     else{
//         paquet.pop();
//         print();
//     }
// }

function elim() {

    for (let index = 1; index < paquet.length + 1; index++) {
        let id = index;
        let pocition = index - 1;
        let val = document.getElementById(`${id}`);
        if (val.checked) {
            paquet.splice(pocition,1);
            print();
        }
        
    }
    
}

// function modificar() 
// {
//     position = modificarPocicion.value - 1;

//     if (position >= 0 & inputradio2.checked) 
//     {
//         if (peso.value <= 0) {
//             alert("ingrese todos los datos de su paquete")
//         }
//         else{
//             paquet.splice(position,1,new sobre("sobre",peso.value));
//             print();
//             modificarPocicion.value = " ";
//         }
        
//     }
//     if (position >= 0 & inputradio1.checked) 
//     {
//         if (peso.value <= 0 || alto.value <= 0 || ancho.value <= 0 || largo.value <= 0) {
//             alert("ingrese todos los datos de su paquete")
//         }
//         else{
//         paquet.splice(position,1,new caja("caja",peso.value,largo.value,ancho.value,alto.value));
//         print();
//         modificarPocicion.value = " ";
//         }
//     }
//     else{
//         alert("ingrese una pocicion")
//     }
// }

function modify() {
    
    if (inputradio2.checked) {
        if (peso.value <= 0) {
             alert("ingrese todos los datos de su paquete");
         }
         else{
             for (let index = 1; index < paquet.length + 1; index++) {
                let id = index;
                let pocition = index - 1;
                let val = document.getElementById(`${id}`);
                if (val.checked) {
                    paquet.splice(pocition,1,new sobre("sobre",peso.value));
                    print(); 
                }
             }
         }
    }
    if (inputradio1.checked){
        if (peso.value <= 0 || alto.value <= 0 || ancho.value <= 0 || largo.value <= 0) {
             alert("ingrese todos los datos de su paquete");
        }
        else{
            for (let index = 1; index < paquet.length + 1; index++) {
               let id = index;
               let pocition = index - 1;
               let val = document.getElementById(`${id}`);
               if (val.checked) {
                   paquet.splice(pocition,1,new caja("caja",peso.value,largo.value,ancho.value,alto.value));
                   print();  
               }  
            } 
        }
    }
    
}






function calcularTotal() 
{
    if (departamentoOrigen.value <= 0 || departamentoDestino.value <= 0) {
        tabla2.style.display = "none";
        alert("seleccione departamento Origen o Destino")
    }
    else
    {
        let totalDistancia = 0;
    
        if (departamentoDestino.value == departamentoOrigen.value) 
        {
            totalDistancia = 25 * paquet.length;
        }
        else{
            totalDistancia = 35 * paquet.length;
        }
    
        let suma = 0;
        let resultado = 0;
        let dimension = 0;
        let pesado = 0;
    
        for (const elementos of paquet) 
        {
            dimension = ((elementos.largo * elementos.ancho * elementos.alto)/5000) * 2.20;
            pesado = elementos.peso;
            
            if (dimension > pesado)
            {
                resultado = ((parseFloat(dimension) - 30) * 0.90);
                console.log( "dimension " +resultado)
            }
            else
            {
                resultado = ((parseFloat(pesado) - 30) * 0.90);
                console.log("pesado " + resultado)
            }
    
            let parar = resultado + 30
            let valor = 17;
            for (let index = 0; index < parar; index++) {
                if (parar <= 30) {
                    resultado = 0;
                }
                if (parar < 37) {
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
            suma = suma + resultado;
        }
        const descuento = (suma + totalDistancia) * 0.1;
        const granTotal = totalDistancia + suma - descuento;
        tabla2.style.display = "table";
        tabla2.innerHTML = `<tr><th>TOTALES</th><td>Cifras en (Q)</td>` + `<tr><th>tarifa total envio</th><td>${totalDistancia.toFixed(2)}</td>` + `<tr><th>tarifa total Recargo peso</th><td>${suma.toFixed(2)}</td>` + `<tr><th>Descuento del 10%</th><td>${descuento.toFixed(2)}</td>` + `<tr><th>Total a Pagar</th><td>${granTotal.toFixed(2)}</td>`;
      
    }
    
}




