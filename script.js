const form = document.getElementById('formRegistro');
const mensagem = document.getElementById('mensagem');

// Se já está registrado no localStorage, esconde o formulário
if (localStorage.getItem('registrado') === 'true') {
  form.style.display = 'none';
  mensagem.textContent = 'Você já se registrou.';
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  if (localStorage.getItem('registrado') === 'true') {
    mensagem.textContent = 'Você já registrou anteriormente.';
    return;
  }

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;

  // Simulando o registro (sem backend)
  localStorage.setItem('registrado', 'true');
  mensagem.textContent = 'Registrado com sucesso!';
  form.reset();
  form.style.display = 'none';
});
