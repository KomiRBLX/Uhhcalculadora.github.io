// Obtém a caixa de alerta e o botão de fechar
const alertBox = document.querySelector('.alert-box');
const closeBtn = document.querySelector('.close-btn');

// Adiciona um ouvinte de evento para o botão de fechar
closeBtn.addEventListener('click', function() {
  alertBox.style.display = 'none';
});