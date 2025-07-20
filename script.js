const form = document.getElementById('formRegistro');
const mensagem = document.getElementById('mensagem');

if (localStorage.getItem('registrado') === 'true') {
  form.style.display = 'none';
  mensagem.textContent = 'Já registrado';
  mensagem.style.color = 'red';
  mensagem.style.fontSize = '22px';
  mensagem.style.fontFamily = '"Comic Sans MS", cursive, sans-serif';
  mensagem.style.textAlign = 'center';
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  if (localStorage.getItem('registrado') === 'true') {
    mensagem.textContent = 'Já registrado';
    mensagem.style.color = 'red';
    mensagem.style.fontSize = '22px';
    mensagem.style.fontFamily = '"Comic Sans MS", cursive, sans-serif';
    mensagem.style.textAlign = 'center';
    return;
  }

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;

  localStorage.setItem('registrado', 'true');
  mensagem.textContent = '✅ Registrado com sucesso!';
  mensagem.style.color = 'green';
  mensagem.style.fontSize = '18px';
  mensagem.style.fontFamily = 'inherit';

  form.reset();
  setTimeout(() => {
    form.style.display = 'none';
  }, 1000);
});
