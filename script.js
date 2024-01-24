/* FUNÇÃO QUE CONVERTE DE BINÁRIO PARA DECIMAL*/
function convertBinaryToDecimal() {
  const binaryInput = document.getElementById('binary-input').value; /*DEFININDO VARIÁVEIS E SETANDO SAÍDAS*/
  const decimalOutput = document.getElementById('decimal-output');

  const decimalNumber = parseInt(binaryInput, 2);
  if (isNaN(decimalNumber)) {
    decimalOutput.textContent = 'Entrada inválida'; /*MENSAGEM DE AVISO SE NÃO FOR DECIMAL*/
  } else {
    decimalOutput.textContent = 'Decimal: ' + decimalNumber;
  }
}

/* FUNÇÃO QUE CONVERTE DE DECIMAL PARA BINÁRIO*/
function convertDecimalToBinary() {
  const decimalInput = document.getElementById('decimal-input').value;
  const binaryOutput = document.getElementById('binary-output');

  const binaryNumber = (decimalInput >>> 0).toString(2);
  binaryOutput.textContent = 'Binário: ' + binaryNumber;
}
