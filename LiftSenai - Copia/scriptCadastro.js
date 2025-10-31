const form = document.getElementById('formCadastro');
    const msg = document.getElementById('msg');

    function getUsers() {
      try {
        const users = localStorage.getItem('users');
        return users ? JSON.parse(users) : [];
      } catch {
        return [];
      }
    }

    function saveUsers(users) {
      localStorage.setItem('users', JSON.stringify(users));
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      msg.textContent = '';
      msg.className = 'msg'; // reset classes

      const username = form.username.value.trim();
      const password = form.password.value;
      const passwordConfirm = form.passwordConfirm.value;

      if (username.length < 3) {
        msg.textContent = 'Usuário precisa ter ao menos 3 caracteres.';
        msg.classList.add('error');
        form.username.focus();
        return;
      }

      if (password.length < 4) {
        msg.textContent = 'Senha precisa ter ao menos 4 caracteres.';
        msg.classList.add('error');
        form.password.focus();
        return;
      }

      if (password !== passwordConfirm) {
        msg.textContent = 'As senhas não conferem.';
        msg.classList.add('error');
        form.passwordConfirm.focus();
        return;
      }

      const users = getUsers();
      const userExists = users.some(u => u.username.toLowerCase() === username.toLowerCase());
      if (userExists) {
        msg.textContent = 'Usuário já existe.';
        msg.classList.add('error');
        form.username.focus();
        return;
      }

      users.push({ username, password });
      saveUsers(users);

      msg.textContent = 'Cadastro realizado com sucesso! Você será redirecionado para login...';
      msg.classList.add('success');

      form.reset();

      setTimeout(() => {
        window.location.href = 'login.html';
      }, 2000);
    });