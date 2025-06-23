// Aguardar o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    const ultraHeart = document.getElementById('ultraHeart');
    const ultraButton = document.getElementById('ultraButton');
    const loveTextUltra = document.getElementById('loveTextUltra');
    const subtitleUltra = document.getElementById('subtitleUltra');
    const customCursor = document.getElementById('customCursor');
    const fireworks = document.getElementById('fireworks');
    
    // Arrays de mensagens românticas expandidos
    const loveMessages = [
        ["Meu", "coração", "bate", "por", "você"],
        ["Você", "é", "tudo", "para", "mim"],
        ["Te", "amo", "infinitamente", "meu", "amor"],
        ["Você", "é", "minha", "vida", "inteira"],
        ["Meu", "amor", "eterno", "e", "verdadeiro"],
        ["Você", "é", "meu", "mundo", "completo"],
        ["Para", "sempre", "juntos", "meu", "bem"],
        ["Minha", "alma", "gêmea", "do", "coração"],
        ["Você", "me", "completa", "por", "inteiro"],
        ["Minha", "razão", "de", "viver", "feliz"]
    ];
    
    const subtitleMessages = [
        { text: "Você é tudo para mim", emoji: "💖" },
        { text: "Para sempre e sempre", emoji: "💕" },
        { text: "Minha razão de viver", emoji: "💗" },
        { text: "Meu coração é seu", emoji: "💝" },
        { text: "Juntos para sempre", emoji: "💞" },
        { text: "Você me completa", emoji: "💓" },
        { text: "Meu amor verdadeiro", emoji: "💘" },
        { text: "Minha felicidade", emoji: "💖" },
        { text: "Minha alma gêmea", emoji: "💕" },
        { text: "Meu tesouro precioso", emoji: "💗" }
    ];
    
    let messageIndex = 0;
    
    // Configurar cursor personalizado
    document.addEventListener('mousemove', function(e) {
        customCursor.style.left = e.clientX - 10 + 'px';
        customCursor.style.top = e.clientY - 10 + 'px';
    });
    
    // Função para trocar mensagens com animação avançada
    function changeMessage() {
        messageIndex = (messageIndex + 1) % loveMessages.length;
        
        // Animação de saída das palavras
        const words = loveTextUltra.querySelectorAll('.word');
        words.forEach((word, index) => {
            setTimeout(() => {
                word.style.transform = 'translateY(-50px) scale(0)';
                word.style.opacity = '0';
            }, index * 100);
        });
        
        // Animação de saída do subtítulo
        setTimeout(() => {
            subtitleUltra.style.transform = 'translateY(-30px)';
            subtitleUltra.style.opacity = '0';
        }, 300);
        
        // Trocar conteúdo e animar entrada
        setTimeout(() => {
            // Atualizar palavras
            words.forEach((word, index) => {
                if (loveMessages[messageIndex][index]) {
                    word.textContent = loveMessages[messageIndex][index];
                    setTimeout(() => {
                        word.style.transform = 'translateY(0px) scale(1)';
                        word.style.opacity = '1';
                    }, index * 150);
                }
            });
            
            // Atualizar subtítulo
            const glowText = subtitleUltra.querySelector('.glow-text');
            const heartEmoji = subtitleUltra.querySelector('.heart-emoji');
            glowText.textContent = subtitleMessages[messageIndex].text;
            heartEmoji.textContent = subtitleMessages[messageIndex].emoji;
            
            setTimeout(() => {
                subtitleUltra.style.transform = 'translateY(0px)';
                subtitleUltra.style.opacity = '1';
            }, 500);
        }, 600);
    }
    
    // Função para criar explosão de partículas ultra avançada
    function createUltraExplosion(x, y) {
        const hearts = ['💖', '💕', '💗', '💝', '💞', '💓', '💘', '✨', '⭐', '💫'];
        const colors = ['#ff1744', '#e91e63', '#ff6b9d', '#ffb3d9', '#ffffff'];
        
        // Criar múltiplas ondas de partículas
        for (let wave = 0; wave < 3; wave++) {
            setTimeout(() => {
                for (let i = 0; i < 12; i++) {
                    const particle = document.createElement('div');
                    particle.textContent = hearts[Math.floor(Math.random() * hearts.length)];
                    particle.style.position = 'fixed';
                    particle.style.left = x + 'px';
                    particle.style.top = y + 'px';
                    particle.style.fontSize = (1.5 + Math.random() * 1) + 'rem';
                    particle.style.pointerEvents = 'none';
                    particle.style.zIndex = '10000';
                    particle.style.color = colors[Math.floor(Math.random() * colors.length)];
                    particle.style.textShadow = '0 0 10px currentColor';
                    
                    document.body.appendChild(particle);
                    
                    // Animação de explosão em múltiplas direções
                    const angle = (i / 12) * Math.PI * 2;
                    const distance = 150 + Math.random() * 100 + (wave * 50);
                    const endX = x + Math.cos(angle) * distance;
                    const endY = y + Math.sin(angle) * distance;
                    
                    particle.animate([
                        { 
                            transform: 'translate(0, 0) scale(0) rotate(0deg)', 
                            opacity: 1 
                        },
                        { 
                            transform: `translate(${(endX - x) * 0.7}px, ${(endY - y) * 0.7}px) scale(1.5) rotate(180deg)`, 
                            opacity: 1,
                            offset: 0.6
                        },
                        { 
                            transform: `translate(${endX - x}px, ${endY - y + 100}px) scale(0) rotate(360deg)`, 
                            opacity: 0 
                        }
                    ], {
                        duration: 2000 + (wave * 500),
                        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }).onfinish = () => {
                        particle.remove();
                    };
                }
            }, wave * 200);
        }
    }
    
    // Função para criar ondas de choque
    function createShockWave(x, y) {
        for (let i = 0; i < 3; i++) {
            const wave = document.createElement('div');
            wave.style.position = 'fixed';
            wave.style.left = x + 'px';
            wave.style.top = y + 'px';
            wave.style.width = '10px';
            wave.style.height = '10px';
            wave.style.border = '2px solid rgba(255, 255, 255, 0.8)';
            wave.style.borderRadius = '50%';
            wave.style.pointerEvents = 'none';
            wave.style.zIndex = '9999';
            
            document.body.appendChild(wave);
            
            wave.animate([
                { 
                    transform: 'translate(-50%, -50%) scale(0)', 
                    opacity: 1,
                    borderColor: 'rgba(255, 23, 68, 0.8)'
                },
                { 
                    transform: 'translate(-50%, -50%) scale(20)', 
                    opacity: 0,
                    borderColor: 'rgba(255, 255, 255, 0.2)'
                }
            ], {
                duration: 1500,
                delay: i * 300,
                easing: 'ease-out'
            }).onfinish = () => {
                wave.remove();
            };
        }
    }
    
    // Função para criar fogos de artifício
    function createFireworks() {
        const colors = ['#ff1744', '#e91e63', '#ff6b9d', '#ffb3d9', '#ffffff', '#ffd700'];
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * (window.innerHeight * 0.6);
        
        for (let i = 0; i < 20; i++) {
            const spark = document.createElement('div');
            spark.style.position = 'fixed';
            spark.style.left = x + 'px';
            spark.style.top = y + 'px';
            spark.style.width = '4px';
            spark.style.height = '4px';
            spark.style.background = colors[Math.floor(Math.random() * colors.length)];
            spark.style.borderRadius = '50%';
            spark.style.pointerEvents = 'none';
            spark.style.zIndex = '8000';
            spark.style.boxShadow = '0 0 6px currentColor';
            
            document.body.appendChild(spark);
            
            const angle = (i / 20) * Math.PI * 2;
            const distance = 100 + Math.random() * 80;
            const endX = x + Math.cos(angle) * distance;
            const endY = y + Math.sin(angle) * distance;
            
            spark.animate([
                { 
                    transform: 'translate(-50%, -50%) scale(0)', 
                    opacity: 1 
                },
                { 
                    transform: `translate(${endX - x - 2}px, ${endY - y - 2}px) scale(1)`, 
                    opacity: 1,
                    offset: 0.7
                },
                { 
                    transform: `translate(${endX - x - 2}px, ${endY - y + 50}px) scale(0)`, 
                    opacity: 0 
                }
            ], {
                duration: 1500,
                easing: 'ease-out'
            }).onfinish = () => {
                spark.remove();
            };
        }
    }
    
    // Função para criar partículas de brilho avançadas
    function createAdvancedSparkles(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        for (let i = 0; i < 20; i++) {
            const sparkle = document.createElement('div');
            sparkle.style.position = 'fixed';
            sparkle.style.left = centerX + 'px';
            sparkle.style.top = centerY + 'px';
            sparkle.style.width = (3 + Math.random() * 4) + 'px';
            sparkle.style.height = sparkle.style.width;
            sparkle.style.background = '#fff';
            sparkle.style.borderRadius = '50%';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '10000';
            sparkle.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.8)';
            
            document.body.appendChild(sparkle);
            
            const angle = (i / 20) * Math.PI * 2;
            const distance = 80 + Math.random() * 60;
            const endX = centerX + Math.cos(angle) * distance;
            const endY = centerY + Math.sin(angle) * distance;
            
            sparkle.animate([
                { 
                    transform: 'translate(-50%, -50%) scale(0)', 
                    opacity: 1 
                },
                { 
                    transform: `translate(${endX - centerX}px, ${endY - centerY}px) scale(1)`, 
                    opacity: 1,
                    offset: 0.8
                },
                { 
                    transform: `translate(${endX - centerX}px, ${endY - centerY}px) scale(0)`, 
                    opacity: 0 
                }
            ], {
                duration: 1200,
                easing: 'ease-out'
            }).onfinish = () => {
                sparkle.remove();
            };
        }
    }
    
    // Event listener para o coração ultra
    ultraHeart.addEventListener('click', function(e) {
        const rect = ultraHeart.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        
        createUltraExplosion(x, y);
        createShockWave(x, y);
        createAdvancedSparkles(ultraHeart);
        changeMessage();
        
        // Adicionar classe para animação especial
        ultraHeart.classList.add('clicked');
        setTimeout(() => {
            ultraHeart.classList.remove('clicked');
        }, 800);
    });
    
    // Event listener para o botão ultra
    ultraButton.addEventListener('click', function(e) {
        const rect = ultraButton.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        
        createUltraExplosion(x, y);
        createShockWave(x, y);
        changeMessage();
        
        // Animação do botão
        ultraButton.style.transform = 'scale(0.9) translateY(-5px)';
        setTimeout(() => {
            ultraButton.style.transform = 'scale(1.05) translateY(-5px)';
        }, 150);
        
        // Partículas do botão
        const particles = ultraButton.querySelectorAll('.btn-particle');
        particles.forEach((particle, index) => {
            setTimeout(() => {
                particle.style.animation = 'btnParticlePop 0.8s ease-out';
                setTimeout(() => {
                    particle.style.animation = '';
                }, 800);
            }, index * 100);
        });
    });
    
    // Trocar mensagem automaticamente a cada 6 segundos
    setInterval(changeMessage, 6000);
    
    // Adicionar efeito de hover avançado no coração
    ultraHeart.addEventListener('mouseenter', function() {
        createAdvancedSparkles(ultraHeart);
    });
    
    // Criar fogos de artifício ocasionais
    setInterval(createFireworks, 15000);
    
    // Função para criar corações aleatórios mais frequentes
    function createRandomHeartUltra() {
        const hearts = ['💖', '💕', '💗', '💝', '💞', '💓', '💘'];
        const heart = document.createElement('div');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = window.innerHeight + 'px';
        heart.style.fontSize = (1.5 + Math.random() * 1) + 'rem';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '6';
        heart.style.color = 'rgba(255, 255, 255, 0.9)';
        heart.style.textShadow = '0 0 10px rgba(255, 182, 193, 0.8)';
        
        document.body.appendChild(heart);
        
        heart.animate([
            { 
                transform: 'translateY(0) rotate(0deg) scale(0)', 
                opacity: 0 
            },
            { 
                transform: 'translateY(-100px) rotate(180deg) scale(1)', 
                opacity: 1,
                offset: 0.1
            },
            { 
                transform: 'translateY(-' + (window.innerHeight + 200) + 'px) rotate(360deg) scale(0.8)', 
                opacity: 0 
            }
        ], {
            duration: 8000 + Math.random() * 4000,
            easing: 'linear'
        }).onfinish = () => {
            heart.remove();
        };
    }
    
    // Criar corações aleatórios a cada 2 segundos
    setInterval(createRandomHeartUltra, 2000);
    
    // Sistema de partículas com Canvas
    const particleCanvas = document.getElementById('particleCanvas');
    const ctx = particleCanvas.getContext('2d');
    
    function resizeCanvas() {
        particleCanvas.width = window.innerWidth;
        particleCanvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Partículas flutuantes no canvas
    const particles = [];
    
    class Particle {
        constructor() {
            this.x = Math.random() * particleCanvas.width;
            this.y = Math.random() * particleCanvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = (Math.random() - 0.5) * 2;
            this.speedY = (Math.random() - 0.5) * 2;
            this.opacity = Math.random() * 0.5 + 0.2;
            this.color = `rgba(255, ${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100 + 155)}, ${this.opacity})`;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x < 0 || this.x > particleCanvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > particleCanvas.height) this.speedY *= -1;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.shadowBlur = 10;
            ctx.shadowColor = this.color;
        }
    }
    
    // Criar partículas
    for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
    }
    
    function animateParticles() {
        ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        requestAnimationFrame(animateParticles);
    }
    
    animateParticles();
    
    // Adicionar CSS para animação de clique ultra
    const style = document.createElement('style');
    style.textContent = `
        .ultra-heart.clicked {
            animation: ultraHeartClickPulse 0.8s ease-out !important;
        }
        
        @keyframes ultraHeartClickPulse {
            0% { transform: scale(1); }
            25% { transform: scale(1.4) rotate(5deg); }
            50% { transform: scale(1.2) rotate(-3deg); }
            75% { transform: scale(1.3) rotate(2deg); }
            100% { transform: scale(1); }
        }
        
        @keyframes btnParticlePop {
            0% { opacity: 0; transform: scale(0) translate(-50%, -50%); }
            50% { opacity: 1; transform: scale(1.5) translate(-50%, -50%); }
            100% { opacity: 0; transform: scale(0.5) translate(-50%, -50%) translateY(-80px); }
        }
    `;
    document.head.appendChild(style);
    
    // Efeito de rastro do cursor
    let cursorTrails = [];
    
    document.addEventListener('mousemove', function(e) {
        // Criar rastro do cursor
        if (Math.random() > 0.7) {
            const trail = document.createElement('div');
            trail.style.position = 'fixed';
            trail.style.left = e.clientX + 'px';
            trail.style.top = e.clientY + 'px';
            trail.style.width = '6px';
            trail.style.height = '6px';
            trail.style.background = 'rgba(255, 255, 255, 0.6)';
            trail.style.borderRadius = '50%';
            trail.style.pointerEvents = 'none';
            trail.style.zIndex = '9998';
            
            document.body.appendChild(trail);
            
            trail.animate([
                { opacity: 1, transform: 'scale(1)' },
                { opacity: 0, transform: 'scale(0)' }
            ], {
                duration: 1000,
                easing: 'ease-out'
            }).onfinish = () => {
                trail.remove();
            };
        }
    });
    
    console.log('Site ultra animado carregado com sucesso! 💖✨');
});

