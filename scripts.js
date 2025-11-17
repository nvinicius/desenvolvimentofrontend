// scripts.js - máscara simples e feedback de validação
document.addEventListener('DOMContentLoaded', () => {
  const cpf = document.getElementById('cpf');
  const tel = document.getElementById('telefone');
  const cep = document.getElementById('cep');
  const form = document.getElementById('cadastroForm');

  function onlyDigits(value){ return value.replace(/\D/g,''); }

  // Máscara de CPF: 000.000.000-00
  cpf && cpf.addEventListener('input', () => {
    let v = onlyDigits(cpf.value).slice(0,11);
    if (v.length > 9) v = v.replace(/^(\d{3})(\d{3})(\d{3})(\d{0,2}).*/, '$1.$2.$3-$4');
    else if (v.length > 6) v = v.replace(/^(\d{3})(\d{3})(\d{0,3}).*/, '$1.$2.$3');
    else if (v.length > 3) v = v.replace(/^(\d{3})(\d{0,3}).*/, '$1.$2');
    cpf.value = v;
  });

  // Telefone: (00) 00000-0000 ou (00) 0000-0000
  tel && tel.addEventListener('input', () => {
    let v = onlyDigits(tel.value).slice(0,11);
    if (v.length > 10) v = v.replace(/^(\d{2})(\d{5})(\d{4}).*/,'($1) $2-$3');
    else if (v.length > 6) v = v.replace(/^(\d{2})(\d{4})(\d{0,4}).*/,'($1) $2-$3');
    else if (v.length > 2) v = v.replace(/^(\d{2})(\d{0,5}).*/,'($1) $2');
    tel.value = v;
  });

  // CEP: 00000-000
  cep && cep.addEventListener('input', () => {
    let v = onlyDigits(cep.value).slice(0,8);
    if (v.length > 5) v = v.replace(/^(\d{5})(\d{0,3}).*/,'$1-$2');
    cep.value = v;
  });

  // Validação: mostrar mensagens nativas + prevenir envio se inválido
  form && form.addEventListener('submit', (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
      form.reportValidity();
      return;
    }
    // aqui você pode adicionar envio por fetch/AJAX
    e.preventDefault();
    alert('Formulário válido — pronto para envio (substitua por envio real).');
  });
});
