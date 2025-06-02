function converter() {
  const temp = parseFloat(document.getElementById('tempInput').value);
  const scale = document.getElementById('scale').value;
  let resultado = '';

  if (isNaN(temp)) {
    resultado = 'Por favor, digite um número válido.';
  } else {
    if (scale === 'c') {
      const f = (temp * 9/5) + 32;
      resultado = `${temp}°C é igual a ${f.toFixed(2)}°F`;
    } else {
      const c = (temp - 32) * 5/9;
      resultado = `${temp}°F é igual a ${c.toFixed(2)}°C`;
    }
  }
  document.getElementById('resultado').innerText = resultado;
}
