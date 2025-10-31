// Controle das tabs
    const tabButtons = document.querySelectorAll('.tab-btn');
    const sections = document.querySelectorAll('.section');
    const logoutBtn = document.querySelector('.logout');
    const userWelcome = document.getElementById('userWelcome');

    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const target = btn.dataset.target;
        sections.forEach(section => {
          section.classList.toggle('active', section.id === target);
        });
      });
    });

    // Logout: limpar localStorage e voltar para login.html
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('loggedUser');
      window.location.href = 'login.html'; // ajuste o nome da página de login se necessário
    });

    // Verifica login no carregamento da página
    window.addEventListener('load', () => {
      const loggedUser = localStorage.getItem('loggedUser');
      if (!loggedUser) {
        // Se não estiver logado, redireciona para login
        window.location.href = 'login.html';
        return;
      }
      const user = JSON.parse(loggedUser);
      userWelcome.textContent = `Olá, ${user.name}!`;
    });

    // Exemplo simples de cadastro que só limpa o formulário (sem backend)
    document.getElementById('formCadastro').addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Cadastro realizado com sucesso (funcionalidade simulada).');
      e.target.reset();
    });