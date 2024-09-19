function adicionar() {

    const novaTarefa = document.getElementById('novaTarefa');
    const text = novaTarefa.value;

      if (text === ''){
        alert ('Não sou adivinha, amor! Adicione uma tarefa');
        return;
      }

      const li = document.createElement('li');
      li.textContent = text;

      li.onclick = function() {
        this.classList.toggle('completed');
      };

      document.getElementById('lista').appendChild(li);
      novaTarefa.value = ``;

}

  