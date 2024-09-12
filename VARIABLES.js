// VARIABLES PARA EL 11/09/2024 

// LET
let n1 = 50;
let n2 = 100;
let n4 = 0.5;
let Suma = n1 + n2;
let Resta = n2 - n1;
let Multi = n2 * n4;
let Divi = n2 / n4;
let Peticion = true;
let HM = 'HOLA MUNDO: ';
let Hoy = new Date(); // Fecha actual
let Dia = Hoy.getDate(); // Obtiene el día del mes
let Par = Dia % 2 === 0; // Verifica si el día es par
let Fecha = Hoy.toDateString(); // Fecha en strnig

// CONST
const PI = 3.1416; 
const radio = 7; 
const areaCirculo = PI * radio * radio; 
const ladoCuadrado = 4; 
const areaCuadrado = ladoCuadrado * ladoCuadrado; 
const baseTriangulo = 10; 
const alturaTriangulo = 5; 
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2; 
const numeroMaximo = Math.max(n1, n2); 

// Operador ternario
let resultadoSuma = Suma > 100 ? 'La suma es mayor que 100' : 'La suma es 100 o menor';
let resultadoDia = Par ? 'El día del mes es par' : 'El día del mes es impar';
let resultadoPeticion = Peticion ? 'La petición es verdadera' : 'La petición es falsa';

// Imprimir
console.log(`${HM} La fecha actual es ${Fecha}.`);
console.log(`Suma: ${Suma}`);
console.log(`Resta: ${Resta}`);
console.log(`Multiplicación: ${Multi}`);
console.log(`División: ${Divi}`);
console.log(`Número positivo: ${n1 > 0 ? 'Sí' : 'No'}`);
console.log(`Área del círculo (radio ${radio}): ${areaCirculo.toFixed(2)}`);
console.log(`Área del cuadrado (lado ${ladoCuadrado}): ${areaCuadrado}`);
console.log(`Área del triángulo (base ${baseTriangulo}, altura ${alturaTriangulo}): ${areaTriangulo}`);
console.log(`Número máximo entre ${n1} y ${n2}: ${numeroMaximo}`);
console.log(resultadoSuma);
console.log(resultadoDia);
console.log(resultadoPeticion);