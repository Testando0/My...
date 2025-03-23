function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    
    // Define a posição inicial aleatória para os corações
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = Math.random() * 100 + 'vh';
    
    // Define a duração da animação aleatoriamente
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    
    document.getElementById('hearts').appendChild(heart);

    // Remove o coração após a animação terminar
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Cria novos corações a cada 300ms
setInterval(createHeart, 300);

function changeText() {
    const mainText = document.getElementById('mainText');
    const subText = document.getElementById('subText');
    const buttonContainer = document.getElementById('buttonContainer');

    // Altera o texto após 6 segundos
    setTimeout(() => {
        mainText.textContent = "Você Foi A Melhor Coisa Que Aconteceu Em Minha Vida";
        subText.textContent = ""; // Opcional: Limpa o texto secundário
        
        // Altera o texto novamente após mais 6 segundos
        setTimeout(() => {
            mainText.textContent = "Minha Melhor Escolha";
            
            // Altera o texto novamente após mais 6 segundos
            setTimeout(() => {
                mainText.textContent = "Minha Vida Já Não Tem Mais Sentido Sem Você";
                
                // Altera o texto novamente após mais 6 segundos
                setTimeout(() => {
                    mainText.textContent = "Queria Pedir Desculpa Por Todos Os Meus Erros, Você É Mais Especial Que Qualquer Coisa Neste Mundo Para Mim...";
                    
                    // Exibe a mensagem final e o link após mais 6 segundos
                    setTimeout(() => {
                        mainText.textContent = "Volta Para Mim...";
                        buttonContainer.innerHTML = '<a href="https://api.whatsapp.com/send/?phone=5512988255401&text&type=phone_number&app_absent=0" class="button">Voltar...</a>';
                    }, 6000);
                }, 6000);
            }, 6000);
        }, 6000);
    }, 6000);
}

// Inicializa a mudança de texto
changeText();
