const form = document.getElementById('formRegistro');
const mensagem = document.getElementById('mensagem');

if (localStorage.getItem('registrado') === 'true') {
  form.style.display = 'none';
  mensagem.textContent = '⚠️ Você já se registrou.';
  mensagem.style.color = 'white';
  mensagem.style.textAlign = 'center';
  mensagem.style.fontSize = '18px';
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  if (localStorage.getItem('registrado') === 'true') {
    mensagem.textContent = '⚠️ Você já registrou anteriormente.';
    return;
  }

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;

  localStorage.setItem('registrado', 'true');
  mensagem.textContent = '✅ Registrado com sucesso!';
  mensagem.style.color = 'green';

  form.reset();
  setTimeout(() => {
    form.style.display = 'none';
  }, 1000);
});
