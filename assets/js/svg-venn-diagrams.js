/**
 * Diagramas de Venn SVG Interactivos
 * Versión mejorada con SVG para mejor calidad gráfica
 */

class SVGVennDiagram {
    constructor(containerId, options = {}) {
        this.container = document.getElementById(containerId);
        this.options = {
            width: 500,
            height: 400,
            animationDuration: 1500,
            ...options
        };
        this.svg = null;
        this.isAnimating = false;
        this.currentOperation = null;
        
        // Definir elementos de los conjuntos
        this.setA = [1, 2, 3, 4];
        this.setB = [4, 5, 6, 7];
        this.intersection = [4];
        this.union = [1, 2, 3, 4, 5, 6, 7];
        
        this.init();
    }
    
    init() {
        this.createSVG();
        this.setupEventListeners();
        this.drawInitial();
    }
    
    createSVG() {
        // Crear SVG
        this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.svg.setAttribute('width', this.options.width);
        this.svg.setAttribute('height', this.options.height);
        this.svg.setAttribute('viewBox', `0 0 ${this.options.width} ${this.options.height}`);
        this.svg.style.border = '2px solid #e0e0e0';
        this.svg.style.borderRadius = '8px';
        this.svg.style.background = '#fafafa';
        
        this.container.appendChild(this.svg);
        
        // Agregar estilos CSS
        const style = document.createElement('style');
        style.textContent = `
            .venn-set {
                transition: all 0.5s ease;
                cursor: pointer;
            }
            .venn-set:hover {
                opacity: 0.8;
            }
            .venn-element {
                transition: all 0.3s ease;
            }
            .venn-element:hover {
                r: 12;
            }
            .venn-text {
                font-family: 'Inter', sans-serif;
                font-weight: 600;
                user-select: none;
            }
            .venn-controls {
                display: flex;
                gap: 10px;
                margin-top: 15px;
                flex-wrap: wrap;
                justify-content: center;
            }
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
            .venn-controls button.active {
                background: var(--primary-color);
                color: white;
            }
        `;
        document.head.appendChild(style);
    }
    
    setupEventListeners() {
        // Crear controles
        const controls = document.createElement('div');
        controls.className = 'venn-controls';
        controls.innerHTML = `
            <button class="btn-animate" data-type="union">
                <i class="fas fa-plus"></i> Unión (A ∪ B)
            </button>
            <button class="btn-animate" data-type="intersection">
                <i class="fas fa-times"></i> Intersección (A ∩ B)
            </button>
            <button class="btn-animate" data-type="difference">
                <i class="fas fa-minus"></i> Diferencia (A - B)
            </button>
            <button class="btn-animate" data-type="symmetric">
                <i class="fas fa-exchange-alt"></i> Diferencia Simétrica
            </button>
            <button class="btn-reset">
                <i class="fas fa-undo"></i> Reiniciar
            </button>
        `;
        
        this.container.appendChild(controls);
        
        // Event listeners
        controls.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-animate')) {
                const type = e.target.dataset.type;
                this.animateOperation(type);
                
                // Actualizar estado de botones
                controls.querySelectorAll('.btn-animate').forEach(btn => {
                    btn.classList.remove('active');
                });
                e.target.classList.add('active');
            } else if (e.target.classList.contains('btn-reset')) {
                this.reset();
                controls.querySelectorAll('.btn-animate').forEach(btn => {
                    btn.classList.remove('active');
                });
            }
        });
    }
    
    drawInitial() {
        this.clearSVG();
        
        // Definir posiciones y tamaños (agrandados)
        const centerX = this.options.width / 2;
        const centerY = this.options.height / 2;
        const radius = 100;
        const offsetX = 80;
        
        // Conjunto A (izquierda)
        const setA = this.createSet('A', centerX - offsetX, centerY, radius, '#4CAF50', 0.3);
        this.svg.appendChild(setA);
        
        // Conjunto B (derecha)
        const setB = this.createSet('B', centerX + offsetX, centerY, radius, '#2196F3', 0.3);
        this.svg.appendChild(setB);
        
        // Elementos con mejor distribución
        this.drawElements();
        
        // Etiquetas de los conjuntos
        this.drawSetLabels();
        
        // Información textual de los conjuntos
        this.drawSetInfo();
    }
    
    createSet(label, x, y, radius, color, opacity = 0.3) {
        const set = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        set.setAttribute('cx', x);
        set.setAttribute('cy', y);
        set.setAttribute('r', radius);
        set.setAttribute('fill', color);
        set.setAttribute('fill-opacity', opacity);
        set.setAttribute('stroke', color);
        set.setAttribute('stroke-width', '3');
        set.setAttribute('class', 'venn-set');
        set.setAttribute('data-set', label);
        
        return set;
    }
    
    drawElements() {
        const centerX = this.options.width / 2;
        const centerY = this.options.height / 2;
        const offsetX = 80;
        
        // Elementos solo en A (izquierda)
        const elementsA = [
            { label: '1', x: centerX - offsetX - 40, y: centerY - 30, color: '#4CAF50', set: 'A' },
            { label: '2', x: centerX - offsetX - 20, y: centerY - 50, color: '#4CAF50', set: 'A' },
            { label: '3', x: centerX - offsetX - 30, y: centerY + 20, color: '#4CAF50', set: 'A' }
        ];
        
        // Elementos solo en B (derecha)
        const elementsB = [
            { label: '5', x: centerX + offsetX + 40, y: centerY - 30, color: '#2196F3', set: 'B' },
            { label: '6', x: centerX + offsetX + 20, y: centerY - 50, color: '#2196F3', set: 'B' },
            { label: '7', x: centerX + offsetX + 30, y: centerY + 20, color: '#2196F3', set: 'B' }
        ];
        
        // Elementos en la intersección (centro)
        const elementsIntersection = [
            { label: '4', x: centerX, y: centerY, color: '#FF9800', set: 'both' }
        ];
        
        // Dibujar todos los elementos
        [...elementsA, ...elementsB, ...elementsIntersection].forEach(element => {
            this.drawElement(element);
        });
    }
    
    drawElement(element) {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', element.x);
        circle.setAttribute('cy', element.y);
        circle.setAttribute('r', '8');
        circle.setAttribute('fill', element.color);
        circle.setAttribute('stroke', 'white');
        circle.setAttribute('stroke-width', '2');
        circle.setAttribute('class', 'venn-element');
        circle.setAttribute('data-element', element.label);
        circle.setAttribute('data-set', element.set);
        
        this.svg.appendChild(circle);
        
        // Etiqueta del elemento
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', element.x);
        text.setAttribute('y', element.y + 4);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('fill', 'white');
        text.setAttribute('font-size', '12');
        text.setAttribute('font-weight', 'bold');
        text.setAttribute('class', 'venn-text');
        text.textContent = element.label;
        
        this.svg.appendChild(text);
    }
    
    drawSetLabels() {
        const centerX = this.options.width / 2;
        const offsetX = 80;
        
        // Etiqueta del conjunto A
        const labelA = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        labelA.setAttribute('x', centerX - offsetX);
        labelA.setAttribute('y', 60);
        labelA.setAttribute('text-anchor', 'middle');
        labelA.setAttribute('fill', '#4CAF50');
        labelA.setAttribute('font-size', '20');
        labelA.setAttribute('font-weight', 'bold');
        labelA.setAttribute('class', 'venn-text');
        labelA.textContent = 'A';
        
        this.svg.appendChild(labelA);
        
        // Etiqueta del conjunto B
        const labelB = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        labelB.setAttribute('x', centerX + offsetX);
        labelB.setAttribute('y', 60);
        labelB.setAttribute('text-anchor', 'middle');
        labelB.setAttribute('fill', '#2196F3');
        labelB.setAttribute('font-size', '20');
        labelB.setAttribute('font-weight', 'bold');
        labelB.setAttribute('class', 'venn-text');
        labelB.textContent = 'B';
        
        this.svg.appendChild(labelB);
    }
    
    drawSetInfo() {
        // Información textual de los conjuntos
        const infoY = this.options.height - 20;
        
        // Conjunto A
        const infoA = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        infoA.setAttribute('x', 20);
        infoA.setAttribute('y', infoY);
        infoA.setAttribute('fill', '#4CAF50');
        infoA.setAttribute('font-size', '14');
        infoA.setAttribute('font-weight', 'bold');
        infoA.setAttribute('class', 'venn-text');
        infoA.textContent = 'A = {1, 2, 3, 4}';
        
        this.svg.appendChild(infoA);
        
        // Conjunto B
        const infoB = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        infoB.setAttribute('x', this.options.width - 100);
        infoB.setAttribute('y', infoY);
        infoB.setAttribute('fill', '#2196F3');
        infoB.setAttribute('font-size', '14');
        infoB.setAttribute('font-weight', 'bold');
        infoB.setAttribute('class', 'venn-text');
        infoB.textContent = 'B = {4, 5, 6, 7}';
        
        this.svg.appendChild(infoB);
        
        // Intersección
        const infoIntersection = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        infoIntersection.setAttribute('x', this.options.width / 2);
        infoIntersection.setAttribute('y', infoY);
        infoIntersection.setAttribute('text-anchor', 'middle');
        infoIntersection.setAttribute('fill', '#FF9800');
        infoIntersection.setAttribute('font-size', '14');
        infoIntersection.setAttribute('font-weight', 'bold');
        infoIntersection.setAttribute('class', 'venn-text');
        infoIntersection.textContent = 'A ∩ B = {4}';
        
        this.svg.appendChild(infoIntersection);
    }
    
    animateOperation(type) {
        if (this.isAnimating) return;
        
        this.isAnimating = true;
        this.currentOperation = type;
        
        // Limpiar SVG
        this.clearSVG();
        
        switch (type) {
            case 'union':
                this.showUnion();
                break;
            case 'intersection':
                this.showIntersection();
                break;
            case 'difference':
                this.showDifference();
                break;
            case 'symmetric':
                this.showSymmetricDifference();
                break;
        }
        
        setTimeout(() => {
            this.isAnimating = false;
        }, this.options.animationDuration);
    }
    
    showUnion() {
        const centerX = this.options.width / 2;
        const centerY = this.options.height / 2;
        const radius = 100;
        const offsetX = 80;
        
        // Conjunto A
        const setA = this.createSet('A', centerX - offsetX, centerY, radius, '#4CAF50', 0.6);
        this.svg.appendChild(setA);
        
        // Conjunto B
        const setB = this.createSet('B', centerX + offsetX, centerY, radius, '#2196F3', 0.6);
        this.svg.appendChild(setB);
        
        // Resaltar intersección
        const intersection = this.createSet('intersection', centerX, centerY, 50, '#FF9800', 0.8);
        this.svg.appendChild(intersection);
        
        this.drawElements();
        this.drawSetLabels();
        this.drawSetInfo();
        
        // Título
        this.addTitle('A ∪ B = {1, 2, 3, 4, 5, 6, 7}', '#4CAF50');
    }
    
    showIntersection() {
        const centerX = this.options.width / 2;
        const centerY = this.options.height / 2;
        const radius = 100;
        const offsetX = 80;
        
        // Conjuntos con transparencia
        const setA = this.createSet('A', centerX - offsetX, centerY, radius, '#4CAF50', 0.2);
        this.svg.appendChild(setA);
        
        const setB = this.createSet('B', centerX + offsetX, centerY, radius, '#2196F3', 0.2);
        this.svg.appendChild(setB);
        
        // Resaltar intersección
        const intersection = this.createSet('intersection', centerX, centerY, 50, '#FF9800', 0.9);
        intersection.setAttribute('stroke-width', '4');
        this.svg.appendChild(intersection);
        
        this.drawElements();
        this.drawSetLabels();
        this.drawSetInfo();
        
        // Título
        this.addTitle('A ∩ B = {4}', '#FF9800');
    }
    
    showDifference() {
        const centerX = this.options.width / 2;
        const centerY = this.options.height / 2;
        const radius = 100;
        const offsetX = 80;
        
        // Conjunto B con transparencia
        const setB = this.createSet('B', centerX + offsetX, centerY, radius, '#2196F3', 0.2);
        this.svg.appendChild(setB);
        
        // Conjunto A resaltado
        const setA = this.createSet('A', centerX - offsetX, centerY, radius, '#4CAF50', 0.8);
        this.svg.appendChild(setA);
        
        this.drawElements();
        this.drawSetLabels();
        this.drawSetInfo();
        
        // Título
        this.addTitle('A - B = {1, 2, 3}', '#4CAF50');
    }
    
    showSymmetricDifference() {
        const centerX = this.options.width / 2;
        const centerY = this.options.height / 2;
        const radius = 100;
        const offsetX = 80;
        
        // Conjuntos con transparencia
        const setA = this.createSet('A', centerX - offsetX, centerY, radius, '#4CAF50', 0.3);
        this.svg.appendChild(setA);
        
        const setB = this.createSet('B', centerX + offsetX, centerY, radius, '#2196F3', 0.3);
        this.svg.appendChild(setB);
        
        // Resaltar diferencia simétrica
        const diffA = this.createSet('diffA', centerX - offsetX, centerY, radius, '#4CAF50', 0.8);
        this.svg.appendChild(diffA);
        
        const diffB = this.createSet('diffB', centerX + offsetX, centerY, radius, '#2196F3', 0.8);
        this.svg.appendChild(diffB);
        
        this.drawElements();
        this.drawSetLabels();
        this.drawSetInfo();
        
        // Título
        this.addTitle('A △ B = {1, 2, 3, 5, 6, 7}', '#9C27B0');
    }
    
    addTitle(text, color) {
        const title = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        title.setAttribute('x', this.options.width / 2);
        title.setAttribute('y', 40);
        title.setAttribute('text-anchor', 'middle');
        title.setAttribute('fill', color);
        title.setAttribute('font-size', '20');
        title.setAttribute('font-weight', 'bold');
        title.setAttribute('class', 'venn-text');
        title.textContent = text;
        
        this.svg.appendChild(title);
    }
    
    clearSVG() {
        while (this.svg.firstChild) {
            this.svg.removeChild(this.svg.firstChild);
        }
    }
    
    reset() {
        this.clearSVG();
        this.drawInitial();
        this.isAnimating = false;
        this.currentOperation = null;
    }
}

// Función para inicializar diagramas de Venn SVG
function initSVGVennDiagrams() {
    const vennContainers = document.querySelectorAll('.venn-diagram-container');
    
    vennContainers.forEach((container, index) => {
        if (!container.querySelector('svg')) {
            new SVGVennDiagram(container.id || `venn-svg-${index}`, {
                width: 400,
                height: 300
            });
        }
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initSVGVennDiagrams);
