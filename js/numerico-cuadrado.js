// --- 1. Selección de elementos (DOM) ---
const input = document.getElementById('numero');
const btnCalcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

// --- 2. Función lógica ---
// Esta función recibe un array y devuelve uno nuevo con los cuadrados
const elevarAlCuadrado = (lista) => {
  return lista.map(num => num * num);
};

// --- 3. Función del manejador ---
const procesar = () => {
  const valor = input.value;
  
  // Limpiamos la entrada:
  // 1. .split(',') divide el texto donde haya comas.
  // 2. .map(item => parseFloat(item.trim())) convierte cada trozo a número real
  //    eliminando posibles espacios extra.
  const arrayDeNumeros = valor.split(',').map(item => parseFloat(item.trim()));
  
  // Verificamos si algún elemento no es un número (por ejemplo, si el usuario escribió letras)
  if (arrayDeNumeros.some(isNaN)) {
    resultado.textContent = "Error: Asegúrate de introducir solo números separados por comas (ej: 1, 4, 5).";
  } else {
    // Calculamos los cuadrados
    const cuadrados = elevarAlCuadrado(arrayDeNumeros);
    
    // Mostramos el resultado con corchetes
    resultado.textContent = `Resultado: [${cuadrados.join(", ")}]`;
  }
};

// --- 4. Escuchador ---
btnCalcular.addEventListener('click', procesar);