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
        mainText.textContent = "Achei que essa fosse a melhor decisão pra nós, mas eu estava completamente errado.";
        subText.textContent = ""; // Opcional: Limpa o texto secundário
        
        // Altera o texto novamente após mais 6 segundos
        setTimeout(() => {
            mainText.textContent = "Eu não consigo viver sem você, você é tudo o que eu mais quero na vida";
            
            // Altera o texto novamente após mais 6 segundos
            setTimeout(() => {
                mainText.textContent = "Por favor, me dê uma chance de corrigir meus erros.";
                
                // Altera o texto novamente após mais 6 segundos
                setTimeout(() => {
                    mainText.textContent = "Queria pedir mil desculpas por ter te feito passar por isso.";
                    
                    // Exibe a mensagem final e o link após mais 6 segundos
                    setTimeout(() => {
                        mainText.textContent = "Queria conversar com você, gostaria de tentar novamente?";
                        buttonContainer.innerHTML = '<a href="https://api.whatsapp.com/send/?phone=553499082489&text&type=phone_number&app_absent=0" class="button">Voltar para mim</a>';
                    }, 6000);
                }, 6000);
            }, 6000);
        }, 6000);
    }, 6000);
}

// Inicializa a mudança de texto
changeText();
