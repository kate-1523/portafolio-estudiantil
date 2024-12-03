function appendValue(value) {
    const result = document.getElementById('result');
    result.value += value;
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  function calculateResult() {
    const result = document.getElementById('result');
    try {
      result.value = eval(result.value);
    } catch (error) {
      alert('Expresión inválida');
      result.value = '';
    }
  }