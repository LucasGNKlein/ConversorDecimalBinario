function convertBinaryToDecimal() {
  const binaryInput = document.getElementById('binary-input').value;
  const decimalOutput = document.getElementById('decimal-output');

  const decimalNumber = parseInt(binaryInput, 2);
  if (isNaN(decimalNumber)) {
    decimalOutput.textContent = 'Entrada inválida';
  } else {
    decimalOutput.textContent = 'Decimal: ' + decimalNumber;
  }
}

function convertDecimalToBinary() {
  const decimalInput = document.getElementById('decimal-input').value;
  const binaryOutput = document.getElementById('binary-output');

  const binaryNumber = (decimalInput >>> 0).toString(2);
  binaryOutput.textContent = 'Binário: ' + binaryNumber;
}