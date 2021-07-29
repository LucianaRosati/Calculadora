const BotonNumeros=document.getElementsByName('data-number'); /* Crear una constante llamando al elemento por su nombre. */
const BotonOperacion=document.getElementsByName('data-operation');/* Arreglo que devuelve un conjunto de botones*/
const BotonIgual=document.getElementsByName('data-equal')[0]; /* Arreglo que devuelve el indice 0 porque contiene solo un elemento*/
const BotonDelete=document.getElementsByName('data-delete')[0]; 
const BotonBack=document.getElementsByName('data-back')[0]; 


var  result =document.getElementById('result');/* Crear una variable llamada por su id que puede cambiar*/
var OpeActual='';
var OpeAnterior='';
var Operacion= undefined;

BotonNumeros.forEach(function(boton){ /* Reccorre los elementos del arreglo */
    boton.addEventListener('click', function(){ /* Registrar un evento onclick para llamar a la funcion  */
    AgregarNumero(boton.innerText);
    })
});
BotonOperacion.forEach(function(boton){
    boton.addEventListener('click', function(){
    SelecionarOperacion(boton.innerText);
    })
});
BotonIgual.addEventListener('click', function(){
    Calcular();
    ActualizarDisplay();
});
BotonDelete.addEventListener('click', function(){
    clear();
    ActualizarDisplay();
})
BotonBack.addEventListener('click', function(){
    borrarNumero();
})


function SelecionarOperacion(ope){
if(OpeActual==='') return;
if(OpeAnterior!==''){
    Calcular()
}
Operacion=ope.toString();
OpeAnterior=OpeActual;
OpeActual='';
}

function Calcular(){ 
var Calculo;
const Anterior=parseFloat(OpeAnterior);
const Actual = parseFloat(OpeActual);
if(isNaN(Anterior) || isNaN(Actual)) return; /*Verifica si es un numero*/  
switch(Operacion){
case '+':
    Calculo= Anterior + Actual;
    break;
case '-':
    Calculo= Anterior - Actual;
    break;
case 'X':
    Calculo= Anterior * Actual;
    break;
case '/':
    Calculo= Anterior/Actual;    
    break;
default:
    return;
    }
OpeActual = Calculo;
Operacion= undefined;
OpeAnterior='';
}

function clear (){
OpeActual='';
OpeAnterior='';
Operacion=undefined
};

function AgregarNumero(num){
OpeActual=OpeActual.toString() + num.toString(); /* Se aplica a las cadenas de texto*/
ActualizarDisplay();
}

function ActualizarDisplay(){
result.value = OpeActual;
}
clear();


function borrarNumero (){
    caracteresPantalla = OpeActual.length;
    ultimoCaracter=OpeActual.substr(caracteresPantalla,caracteresPantalla-1);/* Extrae caracteres*/
    OpeActual=OpeActual.substr(0,caracteresPantalla-1);
    result.value=OpeActual;    
}
   
    