document.addEventListener('DOMContentLoaded', (event) => {
    // Cria o container para o botão
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    document.body.appendChild(buttonContainer);
  
    // Cria o botão
    const button = document.createElement('button');
    button.classList.add('btn');
    button.innerText = 'NÃO';
    buttonContainer.appendChild(button);
  
    // Função para mover o botão para uma posição aleatória
    function moveButton() {
      const x = Math.random() * (window.innerWidth - button.clientWidth);
      const y = Math.random() * (window.innerHeight - button.clientHeight);
      button.style.position = 'absolute';
      button.style.left = x + 'px';
      button.style.top = y + 'px';
      
      // Remove o botão do container para permitir a movimentação livre
      document.body.appendChild(button);
    }
  
    // Adiciona o evento de mouseover ao botão
    button.addEventListener('mouseover', moveButton);
  });
  