/**
 * Para Mi Solecito - Página de San Valentín
 * Fecha de inicio: 21 de diciembre de 2024
 */

class LovePage {
    constructor() {
        // Fecha de inicio de la relación
        this.startDate = new Date('2024-12-21T00:00:00');
        
        // Texto personalizado de Carlos
        this.textContent = {
            message: `Te quiero porque tienes las manos de cristal y el corazón de fuego. Te quiero porque eres la única persona que me hace sentir que el mundo es un lugar hermoso, a pesar de todo. Te quiero porque eres mi principio y mi fin, mi luz y mi sombra, mi todo y mi nada. Los amorosos son los que tienen que seguir, porque el amor no se acaba, porque el amor es la vida misma.

Te amo mucho mi amorcito, con cariño, Carlos.`,
            signature: '— I Love You!'
        };
        
        // Elementos DOM
        this.elements = {
            introScreen: document.getElementById('introScreen'),
            btnStart: document.getElementById('btnStart'),
            mainContent: document.getElementById('mainContent'),
            typedMessage: document.getElementById('typedMessage'),
            signature: document.getElementById('signature'),
            counter: {
                days: document.getElementById('days'),
                hours: document.getElementById('hours'),
                minutes: document.getElementById('minutes'),
                seconds: document.getElementById('seconds')
            }
        };
        
        this.init();
    }
    
    init() {
        // Evento del botón de inicio
        this.elements.btnStart.addEventListener('click', () => {
            this.startExperience();
        });
        
        // Iniciar contador
        this.updateCounter();
        setInterval(() => this.updateCounter(), 1000);
    }
    
    startExperience() {
        // Ocultar intro
        this.elements.introScreen.classList.add('hidden');
        
        // Mostrar contenido principal
        setTimeout(() => {
            this.elements.mainContent.classList.add('visible');
            this.startTyping();
        }, 300);
    }
    
    startTyping() {
        const el = this.elements.typedMessage;
        const text = this.textContent.message;
        let i = 0;
        
        // Cursor inicial
        el.innerHTML = '<span class="typing-cursor"></span>';
        
        const type = () => {
            if (i < text.length) {
                const char = text[i];
                
                if (char === '\n') {
                    el.innerHTML = text.substring(0, i + 1).replace(/\n/g, '<br>') + 
                                  '<span class="typing-cursor"></span>';
                } else {
                    el.textContent = text.substring(0, i + 1);
                    el.innerHTML += '<span class="typing-cursor"></span>';
                }
                
                i++;
                
                // Velocidad variable para efecto natural
                const delay = char === '\n' ? 500 : 35 + Math.random() * 45;
                setTimeout(type, delay);
            } else {
                // Terminado, mostrar firma
                el.innerHTML = text.replace(/\n/g, '<br>');
                setTimeout(() => {
                    this.elements.signature.classList.add('visible');
                }, 400);
            }
        };
        
        // Delay antes de empezar a escribir
        setTimeout(type, 600);
    }
    
    updateCounter() {
        const now = new Date();
        const diff = now - this.startDate;
        
        const days = Math.floor(diff / 86400000);
        const hours = Math.floor((diff % 86400000) / 3600000);
        const minutes = Math.floor((diff % 3600000) / 60000);
        const seconds = Math.floor((diff % 60000) / 1000);
        
        this.elements.counter.days.textContent = days;
        this.elements.counter.hours.textContent = hours;
        this.elements.counter.minutes.textContent = minutes;
        this.elements.counter.seconds.textContent = seconds;
    }
}

// Iniciar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new LovePage();
});