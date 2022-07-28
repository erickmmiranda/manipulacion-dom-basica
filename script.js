const h1 = document.querySelector('h1');
const pid = document.getElementById('pid');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');
const form = document.querySelector('#formulario');

form.addEventListener('submit', sumarInputsValues)

function sumarInputsValues(event){
    event.preventDefault();
    const sumaInputs = Number(input1.value) + Number(input2.value);
    result.innerHTML = "Resultado: " + sumaInputs;
}