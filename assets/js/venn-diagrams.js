/**
 * Diagramas de Venn Interactivos
 * Componente para mostrar diagramas de Venn animados
 */

class VennDiagram {
    constructor(containerId, options = {}) {
        this.container = document.getElementById(containerId);
        this.options = {
            width: 400,
            height: 300,
            animationDuration: 2000,
            ...options
        };
        this.canvas = null;
        this.ctx = null;
        this.animationId = null;
        this.currentStep = 0;
        this.isAnimating = false;
        
        this.init();
    }
    
    init() {
        this.createCanvas();
        this.setupEventListeners();
    }
    
    createCanvas() {
        // Crear canvas
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.options.width;
        this.canvas.height = this.options.height;
        this.canvas.style.border = '2px solid #e0e0e0';
        this.canvas.style.borderRadius = '8px';
        this.canvas.style.background = '#fafafa';
        
        this.ctx = this.canvas.getContext('2d');
        this.container.appendChild(this.canvas);
        
        // Dibujar diagrama inicial
        this.drawInitial();
    }
    
    setupEventListeners() {
        // Agregar controles de animación
        const controls = document.createElement('div');
        controls.className = 'venn-controls';
        controls.innerHTML = `
            <button class="btn-animate" data-type="union">
                <i class="fas fa-plus"></i> Mostrar Unión
            </button>
            <button class="btn-animate" data-type="intersection">
                <i class="fas fa-times"></i> Mostrar Intersección
            </button>
            <button class="btn-animate" data-type="difference">
                <i class="fas fa-minus"></i> Mostrar Diferencia
            </button>
            <button class="btn-reset">
                <i class="fas fa-undo"></i> Reiniciar
            </button>
        `;
        
        // Estilos para los controles
        controls.style.cssText = `
            display: flex;
            gap: 10px;
            margin-top: 15px;
            flex-wrap: wrap;
            justify-content: center;
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            .venn-controls button {
                padding: 8px 16px;
                border: 2px solid var(--primary-color);
                background: white;
                color: var(--primary-color);
                border-radius: 6px;
                cursor: pointer;
                transition: all 0.3s ease;
                font-size: 14px;
                font-weight: 500;
            }
            .venn-controls button:hover {
                background: var(--primary-color);
                color: white;
            }
            .venn-controls button:active {
                transform: scale(0.95);
            }
        `;
        
        document.head.appendChild(style);
        this.container.appendChild(controls);
        
        // Event listeners para los botones
        controls.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-animate')) {
                const type = e.target.dataset.type;
                this.animateOperation(type);
            } else if (e.target.classList.contains('btn-reset')) {
                this.reset();
            }
        });
    }
    
    drawInitial() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Dibujar conjunto A
        this.drawSet('A', 120, 150, 80, '#4CAF50', 0.3);
        
        // Dibujar conjunto B
        this.drawSet('B', 200, 150, 80, '#2196F3', 0.3);
        
        // Dibujar etiquetas
        this.drawLabels();
    }
    
    drawSet(label, x, y, radius, color, alpha = 0.3) {
        this.ctx.save();
        this.ctx.globalAlpha = alpha;
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = 3;
        this.ctx.stroke();
        this.ctx.restore();
        
        // Etiqueta del conjunto
        this.ctx.fillStyle = color;
        this.ctx.font = 'bold 16px Inter, sans-serif';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(label, x, y - radius - 10);
    }
    
    drawLabels() {
        // Etiquetas de elementos
        const elements = [
            { label: '1', x: 100, y: 120, color: '#4CAF50' },
            { label: '2', x: 140, y: 100, color: '#4CAF50' },
            { label: '3', x: 160, y: 140, color: '#4CAF50' },
            { label: '4', x: 180, y: 120, color: '#2196F3' },
            { label: '5', x: 220, y: 100, color: '#2196F3' },
            { label: '6', x: 240, y: 140, color: '#2196F3' },
            { label: '7', x: 160, y: 180, color: '#FF9800' }, // Intersección
        ];
        
        elements.forEach(element => {
            this.drawElement(element);
        });
    }
    
    drawElement(element) {
        this.ctx.save();
        this.ctx.fillStyle = element.color;
        this.ctx.beginPath();
        this.ctx.arc(element.x, element.y, 8, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.strokeStyle = 'white';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
        
        // Etiqueta del elemento
        this.ctx.fillStyle = 'white';
        this.ctx.font = 'bold 12px Inter, sans-serif';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(element.label, element.x, element.y + 4);
        this.ctx.restore();
    }
    
    animateOperation(type) {
        if (this.isAnimating) return;
        
        this.isAnimating = true;
        this.currentStep = 0;
        
        const steps = this.getAnimationSteps(type);
        this.animateSteps(steps, 0);
    }
    
    getAnimationSteps(type) {
        const steps = [];
        
        switch (type) {
            case 'union':
                steps.push(() => this.highlightSet('A', '#4CAF50'));
                steps.push(() => this.highlightSet('B', '#2196F3'));
                steps.push(() => this.highlightUnion());
                break;
            case 'intersection':
                steps.push(() => this.highlightSet('A', '#4CAF50'));
                steps.push(() => this.highlightSet('B', '#2196F3'));
                steps.push(() => this.highlightIntersection());
                break;
            case 'difference':
                steps.push(() => this.highlightSet('A', '#4CAF50'));
                steps.push(() => this.highlightSet('B', '#2196F3'));
                steps.push(() => this.highlightDifference());
                break;
        }
        
        return steps;
    }
    
    animateSteps(steps, stepIndex) {
        if (stepIndex >= steps.length) {
            this.isAnimating = false;
            return;
        }
        
        // Ejecutar paso actual
        steps[stepIndex]();
        
        // Continuar con el siguiente paso después de un delay
        setTimeout(() => {
            this.animateSteps(steps, stepIndex + 1);
        }, 1000);
    }
    
    highlightSet(setLabel, color) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Redibujar ambos conjuntos
        this.drawSet('A', 120, 150, 80, '#4CAF50', 0.3);
        this.drawSet('B', 200, 150, 80, '#2196F3', 0.3);
        
        // Resaltar conjunto específico
        if (setLabel === 'A') {
            this.drawSet('A', 120, 150, 80, color, 0.7);
        } else {
            this.drawSet('B', 200, 150, 80, color, 0.7);
        }
        
        this.drawLabels();
    }
    
    highlightUnion() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Dibujar unión con color especial
        this.ctx.save();
        this.ctx.globalAlpha = 0.5;
        this.ctx.fillStyle = '#4CAF50';
        this.ctx.beginPath();
        this.ctx.arc(120, 150, 80, 0, 2 * Math.PI);
        this.ctx.fill();
        
        this.ctx.fillStyle = '#2196F3';
        this.ctx.beginPath();
        this.ctx.arc(200, 150, 80, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.restore();
        
        // Resaltar intersección
        this.ctx.save();
        this.ctx.globalAlpha = 0.8;
        this.ctx.fillStyle = '#FF9800';
        this.ctx.beginPath();
        this.ctx.arc(160, 150, 40, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.restore();
        
        this.drawLabels();
        
        // Agregar texto explicativo
        this.ctx.fillStyle = '#333';
        this.ctx.font = 'bold 14px Inter, sans-serif';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('A ∪ B', this.canvas.width / 2, 50);
    }
    
    highlightIntersection() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Dibujar conjuntos con transparencia
        this.drawSet('A', 120, 150, 80, '#4CAF50', 0.3);
        this.drawSet('B', 200, 150, 80, '#2196F3', 0.3);
        
        // Resaltar intersección
        this.ctx.save();
        this.ctx.globalAlpha = 0.8;
        this.ctx.fillStyle = '#FF9800';
        this.ctx.beginPath();
        this.ctx.arc(160, 150, 40, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.strokeStyle = '#FF9800';
        this.ctx.lineWidth = 4;
        this.ctx.stroke();
        this.ctx.restore();
        
        this.drawLabels();
        
        // Agregar texto explicativo
        this.ctx.fillStyle = '#333';
        this.ctx.font = 'bold 14px Inter, sans-serif';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('A ∩ B', this.canvas.width / 2, 50);
    }
    
    highlightDifference() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Dibujar conjunto B con transparencia
        this.drawSet('B', 200, 150, 80, '#2196F3', 0.2);
        
        // Resaltar diferencia A - B
        this.ctx.save();
        this.ctx.globalAlpha = 0.7;
        this.ctx.fillStyle = '#4CAF50';
        this.ctx.beginPath();
        this.ctx.arc(120, 150, 80, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.restore();
        
        // Marcar elementos de la diferencia
        this.ctx.fillStyle = '#4CAF50';
        this.ctx.font = 'bold 12px Inter, sans-serif';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('A - B', this.canvas.width / 2, 50);
        
        this.drawLabels();
    }
    
    reset() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawInitial();
        this.isAnimating = false;
    }
}

// Función para inicializar diagramas de Venn
function initVennDiagrams() {
    // Buscar todos los contenedores de diagramas de Venn
    const vennContainers = document.querySelectorAll('.venn-diagram-container');
    
    vennContainers.forEach((container, index) => {
        new VennDiagram(container.id || `venn-${index}`, {
            width: 400,
            height: 300
        });
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initVennDiagrams);
