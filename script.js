document.addEventListener('DOMContentLoaded', () => {

    /* --- MENU MOBILE --- */
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            // Altera ícone do botão
            const icon = menuToggle.querySelector('i');
            if (icon) {
                if (navMenu.classList.contains('active')) {
                    icon.className = 'fas fa-times';
                } else {
                    icon.className = 'fas fa-bars';
                }
            }
        });
    }

    // Fecha o menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) navMenu.classList.remove('active');
            const icon = menuToggle ? menuToggle.querySelector('i') : null;
            if (icon) icon.className = 'fas fa-bars';
        });
    });

    /* --- NAV SCROLL EFFECT --- */
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
        
        // Active menu items on scroll
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 120)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    /* --- PUBLIC SEGMENT TABS --- */
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');

            tabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const activeContent = document.getElementById(targetTab);
            if (activeContent) activeContent.classList.add('active');
        });
    });

    /* --- CAROUSEL MODALIDADES --- */
    const track = document.getElementById('modalidadesTrack');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');

    if (track && prevBtn && nextBtn) {
        let scrollAmount = 0;
        const cardWidth = 320 + 30; // Card width + gap

        nextBtn.addEventListener('click', () => {
            const maxScroll = track.scrollWidth - track.clientWidth;
            if (scrollAmount < maxScroll) {
                scrollAmount += cardWidth;
                if (scrollAmount > maxScroll) scrollAmount = maxScroll;
                track.style.transform = `translateX(-${scrollAmount}px)`;
            }
        });

        prevBtn.addEventListener('click', () => {
            if (scrollAmount > 0) {
                scrollAmount -= cardWidth;
                if (scrollAmount < 0) scrollAmount = 0;
                track.style.transform = `translateX(-${scrollAmount}px)`;
            }
        });
    }

    /* --- FAQ ACCORDION --- */
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(btn => {
        btn.addEventListener('click', () => {
            const faqItem = btn.parentElement;
            const answer = faqItem.querySelector('.faq-answer');
            const isActive = faqItem.classList.contains('active');

            // Fecha outros abertos
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                const ans = item.querySelector('.faq-answer');
                if (ans) ans.style.maxHeight = null;
            });

            if (!isActive) {
                faqItem.classList.add('active');
                if (answer) {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }
            } else {
                faqItem.classList.remove('active');
                if (answer) {
                    answer.style.maxHeight = null;
                }
            }
        });
    });

    /* --- CONVERSION FORM & WHATSAPP REDIRECT --- */
    const conviteForm = document.getElementById('conviteForm');

    if (conviteForm) {
        conviteForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('formName').value;
            const whatsapp = document.getElementById('formWhatsApp').value;
            const modalidade = document.getElementById('formModalidade').value;

            // Simular envio
            const submitBtn = conviteForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processando...';

            setTimeout(() => {
                submitBtn.style.background = '#25D366';
                submitBtn.style.color = '#FFFFFF';
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Agendado com Sucesso!';

                // Criar link dinâmico para WhatsApp da recepção do Studio
                // Mensagem formatada e encodada
                const message = `Olá Studio Revelar-se! Me chamo ${name}. Gostaria de confirmar meu agendamento da Aula Experimental Cortesia para a modalidade/perfil: ${modalidade}. Meu contato é ${whatsapp}.`;
                const encodedMessage = encodeURIComponent(message);
                
                // Número fictício do Studio Premium
                const phone = '5511997755082'; 
                const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

                // Cria um toast ou feedback na tela antes do redirecionamento
                const feedbackDiv = document.createElement('div');
                feedbackDiv.style.cssText = `
                    margin-top: 15px;
                    padding: 12px;
                    background: rgba(37, 211, 102, 0.15);
                    border: 1px solid #25D366;
                    border-radius: 8px;
                    color: #25D366;
                    font-size: 0.9rem;
                    text-align: center;
                `;
                feedbackDiv.innerHTML = 'Você será redirecionado para o WhatsApp da recepção para confirmar seu horário em instantes...';
                conviteForm.appendChild(feedbackDiv);

                setTimeout(() => {
                    window.open(whatsappUrl, '_blank');
                    // Reset do formulário
                    conviteForm.reset();
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                    submitBtn.style.color = '';
                    submitBtn.innerHTML = originalText;
                    feedbackDiv.remove();
                }, 2000);

            }, 1500);
        });
    }

});
