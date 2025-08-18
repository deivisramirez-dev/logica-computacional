// Funcionalidad principal del sitio
document.addEventListener('DOMContentLoaded', function() {
    
    // Navegación activa
    const navLinks = document.querySelectorAll('.nav a');
    const sections = document.querySelectorAll('section[id]');
    
    // Función para actualizar navegación activa
    function updateActiveNav() {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Escuchar scroll para actualizar navegación
    window.addEventListener('scroll', updateActiveNav);
    
    // Navegación suave para enlaces internos
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Animaciones de entrada para elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos para animaciones
    const animatedElements = document.querySelectorAll('.tema-card, .recurso-card, .info-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Funcionalidad para botones de tema
    const temaCards = document.querySelectorAll('.tema-card');
    
    temaCards.forEach(card => {
        const buttons = card.querySelectorAll('.btn');
        
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                if (this.classList.contains('disabled')) {
                    e.preventDefault();
                    showNotification('Este tema estará disponible próximamente', 'info');
                }
            });
        });
    });
    
    // Sistema de notificaciones
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        // Estilos para la notificación
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            display: flex;
            align-items: center;
            gap: 1rem;
            max-width: 400px;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Animar entrada
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Cerrar notificación
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        });
        
        // Auto-cerrar después de 5 segundos
        setTimeout(() => {
            if (document.body.contains(notification)) {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    if (document.body.contains(notification)) {
                        document.body.removeChild(notification);
                    }
                }, 300);
            }
        }, 5000);
    }
    
    // Funcionalidad de búsqueda (para futuras implementaciones)
    function initializeSearch() {
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                const temaCards = document.querySelectorAll('.tema-card');
                
                temaCards.forEach(card => {
                    const title = card.querySelector('h3').textContent.toLowerCase();
                    const description = card.querySelector('p').textContent.toLowerCase();
                    
                    if (title.includes(searchTerm) || description.includes(searchTerm)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        }
    }
    
    // Funcionalidad de filtros (para futuras implementaciones)
    function initializeFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                const temaCards = document.querySelectorAll('.tema-card');
                
                // Remover clase activa de todos los botones
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                temaCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-status') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Funcionalidad de progreso (para futuras implementaciones)
    function updateProgress() {
        const completedTemas = document.querySelectorAll('.tema-card.completed').length;
        const totalTemas = document.querySelectorAll('.tema-card').length;
        const progressPercentage = (completedTemas / totalTemas) * 100;
        
        const progressBar = document.querySelector('.overall-progress .progress-fill');
        if (progressBar) {
            progressBar.style.width = `${progressPercentage}%`;
        }
    }
    
    // Funcionalidad de modo oscuro (para futuras implementaciones)
    function initializeDarkMode() {
        const darkModeToggle = document.querySelector('.dark-mode-toggle');
        
        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', function() {
                document.body.classList.toggle('dark-mode');
                const isDark = document.body.classList.contains('dark-mode');
                localStorage.setItem('darkMode', isDark);
                
                // Cambiar icono
                const icon = this.querySelector('i');
                icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
            });
            
            // Cargar preferencia guardada
            const savedDarkMode = localStorage.getItem('darkMode');
            if (savedDarkMode === 'true') {
                document.body.classList.add('dark-mode');
                const icon = darkModeToggle.querySelector('i');
                icon.className = 'fas fa-sun';
            }
        }
    }
    
    // Funcionalidad de accesibilidad
    function initializeAccessibility() {
        // Navegación por teclado
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                // Cerrar modales o notificaciones
                const notifications = document.querySelectorAll('.notification');
                notifications.forEach(notification => {
                    if (document.body.contains(notification)) {
                        notification.style.transform = 'translateX(100%)';
                        setTimeout(() => {
                            if (document.body.contains(notification)) {
                                document.body.removeChild(notification);
                            }
                        }, 300);
                    }
                });
            }
        });
        
        // Mejorar focus visible
        const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
        focusableElements.forEach(element => {
            element.addEventListener('focus', function() {
                this.style.outline = '2px solid var(--primary-color)';
                this.style.outlineOffset = '2px';
            });
            
            element.addEventListener('blur', function() {
                this.style.outline = '';
                this.style.outlineOffset = '';
            });
        });
    }
    
    // Funcionalidad de carga lazy (para futuras implementaciones)
    function initializeLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    // Funcionalidad de analytics (para futuras implementaciones)
    function trackEvent(eventName, data = {}) {
        // Aquí se puede integrar Google Analytics u otras herramientas
        console.log('Event tracked:', eventName, data);
    }
    
    // Inicializar todas las funcionalidades
    function initializeAll() {
        updateActiveNav();
        initializeSearch();
        initializeFilters();
        initializeDarkMode();
        initializeAccessibility();
        initializeLazyLoading();
        
        // Trackear eventos importantes
        temaCards.forEach(card => {
            card.addEventListener('click', function() {
                const temaNumber = this.querySelector('.tema-number').textContent;
                trackEvent('tema_clicked', { tema: temaNumber });
            });
        });
    }
    
    // Inicializar cuando el DOM esté listo
    initializeAll();
    
    // Funcionalidad de scroll to top
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--primary-color);
        color: white;
        border: none;
        cursor: pointer;
        box-shadow: var(--shadow-md);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    // Mostrar/ocultar botón de scroll to top
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
    
    // Funcionalidad del botón scroll to top
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Preloader (opcional)
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 300);
        }
    });
    
    // Funcionalidad de copiar enlaces
    function initializeCopyLinks() {
        const copyButtons = document.querySelectorAll('.copy-link');
        
        copyButtons.forEach(button => {
            button.addEventListener('click', function() {
                const url = window.location.href + this.getAttribute('data-href');
                
                navigator.clipboard.writeText(url).then(() => {
                    showNotification('Enlace copiado al portapapeles', 'success');
                }).catch(() => {
                    showNotification('Error al copiar el enlace', 'error');
                });
            });
        });
    }
    
    // Inicializar funcionalidad de copiar enlaces
    initializeCopyLinks();
    
    // Funcionalidad de marcadores (para futuras implementaciones)
    function initializeBookmarks() {
        const bookmarkButtons = document.querySelectorAll('.bookmark-btn');
        
        bookmarkButtons.forEach(button => {
            button.addEventListener('click', function() {
                const temaId = this.getAttribute('data-tema');
                const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
                
                if (bookmarks.includes(temaId)) {
                    const index = bookmarks.indexOf(temaId);
                    bookmarks.splice(index, 1);
                    this.innerHTML = '<i class="far fa-bookmark"></i>';
                    showNotification('Tema removido de marcadores', 'info');
                } else {
                    bookmarks.push(temaId);
                    this.innerHTML = '<i class="fas fa-bookmark"></i>';
                    showNotification('Tema agregado a marcadores', 'success');
                }
                
                localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
            });
        });
    }
    
    // Inicializar marcadores
    initializeBookmarks();
});

// Funciones utilitarias globales
window.LogicaComputacional = {
    showNotification: function(message, type) {
        // Implementación de notificación
    },
    
    trackProgress: function(temaId, progress) {
        const progressData = JSON.parse(localStorage.getItem('progress') || '{}');
        progressData[temaId] = progress;
        localStorage.setItem('progress', JSON.stringify(progressData));
    },
    
    getProgress: function(temaId) {
        const progressData = JSON.parse(localStorage.getItem('progress') || '{}');
        return progressData[temaId] || 0;
    }
};
