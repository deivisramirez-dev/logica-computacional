/**
 * Árboles semánticos para validar un sistema formal.
 * Dibujo con Canvas e interactividad (hover, tooltip).
 */

const semanticTreeExamples = {
    variableP: {
        id: 'variableP',
        title: 'Variable p',
        description: 'Representación de los dos posibles valores de verdad de una variable proposicional p.',
        legendHtml:
            '<p><strong>Objetivo:</strong> Ver cómo se representan los valores de verdad de <em>p</em> en un árbol semántico.</p>' +
            '<ul><li><strong>v(p) = 1</strong>: rama en la que <em>p</em> es verdadero.</li>' +
            '<li><strong>v(p) = 0</strong>: rama en la que <em>p</em> es falso.</li>' +
            '<li>Por la regla Rs5, cuando <em>p</em> es falso la fórmula puede resultar verdadera; se marca la hoja con <strong>V</strong>.</li></ul>',
        steps: [
            {
                title: 'Valores posibles de p',
                description: 'Árbol con dos ramas: v(p) = 1 (p verdadero) y v(p) = 0 (p falso).',
                tree: {
                    formula: 'p',
                    children: [
                        { edgeLabel: 'v(p) = 1', value: null },
                        { edgeLabel: 'v(p) = 0', value: null }
                    ]
                }
            },
            {
                title: 'Rama que hace la fórmula verdadera',
                description: 'Por la regla Rs5, cuando p es falso la fórmula resulta verdadera. Marcamos esa hoja con V.',
                tree: {
                    formula: 'p',
                    children: [
                        { edgeLabel: 'v(p) = 1', value: null },
                        { edgeLabel: 'v(p) = 0', value: 'V' }
                    ]
                }
            }
        ]
    },
    implicacionPQ: {
        id: 'implicacionPQ',
        title: 'p → q',
        description: 'Árbol semántico de la implicación: bajo qué asignaciones la fórmula es verdadera (V) o falsa (F).',
        legendHtml:
            '<p><strong>Objetivo:</strong> Construir el árbol semántico de <em>p → q</em>.</p>' +
            '<ul><li>Ramas según <em>p</em>: v(p)=1 y v(p)=0.</li>' +
            '<li>Cuando <em>p</em> es falso (v(p)=0), la implicación es verdadera → hoja <strong>V</strong>.</li>' +
            '<li>Cuando <em>p</em> es verdadero (v(p)=1), depende de <em>q</em>: v(q)=1 → <strong>V</strong>, v(q)=0 → <strong>F</strong>.</li></ul>',
        steps: [
            {
                title: 'Árbol semántico de p → q',
                description: 'Rama v(p)=0 → V. Rama v(p)=1 se bifurca en v(q)=1 → V y v(q)=0 → F.',
                tree: {
                    formula: 'p → q',
                    children: [
                        {
                            edgeLabel: 'v(p) = 1',
                            children: [
                                { edgeLabel: 'v(q) = 1', value: 'V' },
                                { edgeLabel: 'v(q) = 0', value: 'F' }
                            ]
                        },
                        { edgeLabel: 'v(p) = 0', value: 'V' }
                    ]
                }
            }
        ]
    }
};

// --- Layout y geometría para Canvas ---
const CONFIG = {
    levelDy: 88,
    nodeRadius: 20,
    leafRadius: 22,
    spread: 220,
    fontSize: 14,
    fontFormula: 16,
    colors: {
        root: '#1d4ed8',
        edge: '#64748b',
        edgeHighlight: '#2563eb',
        leafV: '#059669',
        leafF: '#dc2626',
        dot: '#64748b',
        line: '#94a3b8',
        lineHighlight: '#2563eb',
        bg: '#ffffff',
        text: '#1e293b'
    }
};

function countLeaves(node) {
    if (node.value !== undefined && node.value !== null) return 1;
    if (node.children && node.children.length > 0) {
        return node.children.reduce((s, c) => s + countLeaves(c), 0);
    }
    return 1;
}

/** Construye listas de elementos dibujables y zonas de hit. (x,y) en coordenadas lógicas; luego escalamos al canvas. */
function buildLayout(tree, width, cx) {
    const totalLeaves = tree.formula ? tree.children.reduce((s, c) => s + countLeaves(c), 0) : 0;
    const items = [];
    const rootY = 36;
    const scaleX = (i) => (i / Math.max(totalLeaves - 1, 1)) * (width * 0.85) + (cx - (width * 0.85) / 2);

    if (!tree.formula) return items;

    const rootX = cx;
    items.push({ type: 'root', x: rootX, y: rootY, label: tree.formula, hit: { cx: rootX, cy: rootY, r: CONFIG.nodeRadius + 6 } });

    function placeChildren(children, parentX, parentY, depth, leafStart) {
        const y = rootY + (depth + 1) * CONFIG.levelDy;
        let idx = leafStart;
        children.forEach((ch) => {
            const n = countLeaves(ch);
            const centerNorm = idx + n / 2;
            const childX = scaleX(centerNorm);
            const mx = (parentX + childX) / 2;
            const my = (parentY + y) / 2;

            items.push({
                type: 'edge',
                x1: parentX, y1: parentY, x2: childX, y2: y,
                label: ch.edgeLabel,
                hit: { type: 'edge', x1: parentX, y1: parentY, x2: childX, y2: y },
                mid: { x: mx, y: my }
            });

            if (ch.value !== undefined && ch.value !== null) {
                items.push({
                    type: 'leaf',
                    x: childX, y: y,
                    value: ch.value,
                    hit: { cx: childX, cy: y, r: CONFIG.leafRadius + 6 }
                });
            } else if (ch.children && ch.children.length > 0) {
                placeChildren(ch.children, childX, y, depth + 1, idx);
            } else {
                items.push({
                    type: 'dot',
                    x: childX, y: y,
                    hit: { cx: childX, cy: y, r: CONFIG.nodeRadius + 6 }
                });
            }
            idx += n;
        });
    }

    if (tree.children && tree.children.length > 0) {
        placeChildren(tree.children, rootX, rootY, 0, 0);
    }

    return items;
}

/** Hit-test: devuelve el elemento bajo (x, y) o null. */
function hitTest(items, x, y) {
    for (let i = items.length - 1; i >= 0; i--) {
        const it = items[i];
        if (it.type === 'root' && it.hit) {
            const d = Math.hypot(x - it.hit.cx, y - it.hit.cy);
            if (d <= it.hit.r) return it;
        }
        if (it.type === 'edge' && it.hit) {
            const d = distToSegment(x, y, it.x1, it.y1, it.x2, it.y2);
            if (d <= 14) return it;
        }
        if ((it.type === 'leaf' || it.type === 'dot') && it.hit) {
            const d = Math.hypot(x - it.hit.cx, y - it.hit.cy);
            if (d <= it.hit.r) return it;
        }
    }
    return null;
}

function distToSegment(px, py, x1, y1, x2, y2) {
    const dx = x2 - x1, dy = y2 - y1;
    const len = Math.hypot(dx, dy) || 1;
    const t = Math.max(0, Math.min(1, ((px - x1) * dx + (py - y1) * dy) / (len * len)));
    const qx = x1 + t * dx, qy = y1 + t * dy;
    return Math.hypot(px - qx, py - qy);
}

// --- Dibujo en Canvas ---
function drawTree(canvas, treeData, highlight) {
    const ctx = canvas.getContext('2d');
    const cw = canvas.offsetWidth || 600;
    const ch = canvas.offsetHeight || 320;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = Math.round(cw * dpr);
    canvas.height = Math.round(ch * dpr);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, cw, ch);

    if (!treeData || !treeData.formula) return [];

    const cx = cw / 2;
    const items = buildLayout(treeData, cw, cx);

    // Dibujar aristas primero (para que queden bajo los nodos)
    items.forEach((it) => {
        if (it.type !== 'edge') return;
        const isHover = highlight && highlight === it;
        ctx.strokeStyle = isHover ? CONFIG.colors.lineHighlight : CONFIG.colors.line;
        ctx.lineWidth = isHover ? 3 : 2;
        ctx.beginPath();
        ctx.moveTo(it.x1, it.y1);
        ctx.lineTo(it.x2, it.y2);
        ctx.stroke();
        ctx.fillStyle = CONFIG.colors.edge;
        ctx.font = `${CONFIG.fontSize}px "Courier New", monospace`;
        ctx.textAlign = 'center';
        ctx.fillText(it.label, it.mid.x, it.mid.y - 6);
    });

    // Nodo raíz
    items.forEach((it) => {
        if (it.type === 'root') {
            ctx.fillStyle = CONFIG.colors.bg;
            ctx.strokeStyle = CONFIG.colors.root;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(it.x, it.y, CONFIG.nodeRadius, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            ctx.fillStyle = CONFIG.colors.root;
            ctx.font = `bold ${CONFIG.fontFormula}px Inter, sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(it.label, it.x, it.y);
        }
    });

    // Hojas y puntos
    items.forEach((it) => {
        if (it.type === 'leaf') {
            const isV = it.value === 'V';
            ctx.fillStyle = isV ? 'rgba(5, 150, 105, 0.2)' : 'rgba(220, 38, 38, 0.15)';
            ctx.strokeStyle = isV ? CONFIG.colors.leafV : CONFIG.colors.leafF;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(it.x, it.y, CONFIG.leafRadius, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            ctx.fillStyle = isV ? CONFIG.colors.leafV : CONFIG.colors.leafF;
            ctx.font = `bold ${CONFIG.fontSize + 2}px Inter, sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(it.value, it.x, it.y);
        } else if (it.type === 'dot') {
            ctx.fillStyle = CONFIG.colors.dot;
            ctx.beginPath();
            ctx.arc(it.x, it.y, 6, 0, Math.PI * 2);
            ctx.fill();
        }
    });

    return items;
}

function getTooltipText(item) {
    if (!item) return '';
    if (item.type === 'root') return 'Fórmula: ' + item.label;
    if (item.type === 'edge') return item.label;
    if (item.type === 'leaf') return 'Resultado: ' + (item.value === 'V' ? 'Verdadero' : 'Falso');
    if (item.type === 'dot') return 'Rama aún sin valor final';
    return '';
}

function renderSemanticTree(treeData) {
    const wrapper = document.getElementById('tree-wrapper');
    const canvas = document.getElementById('tree-canvas');
    const tooltipEl = document.getElementById('tree-tooltip');
    if (!wrapper || !canvas) return;

    canvas.style.width = '100%';
    canvas.style.height = '320px';

    let layoutItems = [];
    let hovered = null;

    function redraw() {
        layoutItems = drawTree(canvas, treeData, hovered);
    }

    function onMove(e) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const item = hitTest(layoutItems, x, y);
        if (item !== hovered) {
            hovered = item;
            redraw();
            if (tooltipEl) {
                tooltipEl.textContent = getTooltipText(item);
                tooltipEl.classList.toggle('visible', !!item);
            }
        }
    }

    function onLeave() {
        if (hovered != null) {
            hovered = null;
            redraw();
            if (tooltipEl) {
                tooltipEl.textContent = '';
                tooltipEl.classList.remove('visible');
            }
        }
    }

    canvas.removeEventListener('mousemove', onMove);
    canvas.removeEventListener('mouseleave', onLeave);
    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('mouseleave', onLeave);

    if (!treeData || !treeData.formula) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.offsetWidth || 1, canvas.offsetHeight || 1);
        return;
    }

    layoutItems = drawTree(canvas, treeData, null);
}

document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('tree-example');
    const legend = document.getElementById('trees-legend');
    const stepTitle = document.getElementById('trees-step-title');
    const stepDescription = document.getElementById('trees-step-description');
    const info = document.getElementById('trees-info');
    const btnPrev = document.getElementById('trees-prev');
    const btnNext = document.getElementById('trees-next');
    const btnReset = document.getElementById('trees-reset');

    let currentExample = semanticTreeExamples.variableP;
    let currentStepIndex = 0;

    function updateUI() {
        const total = currentExample.steps.length;
        const currentStep = currentExample.steps[currentStepIndex];

        if (legend) {
            legend.innerHTML =
                '<h3>Leyenda</h3>' +
                '<p><strong>' + currentExample.title + '</strong></p>' +
                '<p>' + currentExample.description + '</p>' +
                currentExample.legendHtml;
        }

        if (stepTitle) stepTitle.textContent = currentStep.title;
        if (stepDescription) stepDescription.textContent = currentStep.description;
        if (info) info.textContent = 'Paso ' + (currentStepIndex + 1) + ' de ' + total;

        if (btnPrev) btnPrev.disabled = currentStepIndex === 0;
        if (btnNext) btnNext.disabled = currentStepIndex === total - 1;

        renderSemanticTree(currentStep.tree);
    }

    function changeExample(id) {
        const example = semanticTreeExamples[id];
        if (!example) return;
        currentExample = example;
        currentStepIndex = 0;
        updateUI();
    }

    if (select) select.addEventListener('change', (e) => changeExample(e.target.value));
    if (btnPrev) btnPrev.addEventListener('click', () => { if (currentStepIndex > 0) { currentStepIndex--; updateUI(); } });
    if (btnNext) btnNext.addEventListener('click', () => { if (currentStepIndex < currentExample.steps.length - 1) { currentStepIndex++; updateUI(); } });
    if (btnReset) btnReset.addEventListener('click', () => { currentStepIndex = 0; updateUI(); });

    window.addEventListener('resize', () => {
        if (currentExample && currentExample.steps[currentStepIndex]) {
            renderSemanticTree(currentExample.steps[currentStepIndex].tree);
        }
    });

    updateUI();
});
