document.addEventListener('DOMContentLoaded', () => {
  // 1. Gerenciamento de Modal e Foco por Teclado
  const openModalBtn = document.getElementById('open-modal-btn');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modal = document.getElementById('modal');

  function openModal() {
    modal.removeAttribute('hidden');
    closeModalBtn.focus(); // Move o foco diretamente para dentro do modal
  }

  function closeModal() {
    modal.setAttribute('hidden', '');
    openModalBtn.focus(); // Retorna o foco ao elemento que abriu o modal
  }

  openModalBtn.addEventListener('click', openModal);
  closeModalBtn.addEventListener('click', closeModal);

  // Fechar o modal usando a tecla ESC
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hasAttribute('hidden')) {
      closeModal();
    }
  });

  // 2. Validação Acessível de Formulário
  const form = document.getElementById('contact-form');
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('email-error');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!emailInput.value.includes('@')) {
      emailError.textContent = 'Por favor, insira um e-mail válido com o caractere @.';
      emailInput.setAttribute('aria-invalid', 'true');
      emailInput.focus();
    } else {
      emailError.textContent = '';
      emailInput.removeAttribute('aria-invalid');
      alert('Formulário enviado com sucesso!');
      form.reset();
    }
  });
});
