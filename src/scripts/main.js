document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual > alturaHero) {
            ocultaElementoDoHeader();
        } else {
            exibeElementosDoHeader();
        }
    });

    // Seção de atrações, programação das abas
    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            const abaAlvo = event.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            event.target.classList.add('shows__tabs__button--is-active');
        });
    });

    function ocultaElementoDoHeader() {
        const header = document.querySelector('header');
        header.classList.add('header--is-hidden');
    }

    function exibeElementosDoHeader() {
        const header = document.querySelector('header');
        header.classList.remove('header--is-hidden');
    }

    function removeBotaoAtivo() {
        buttons.forEach(button => {
            button.classList.remove('shows__tabs__button--is-active');
        });
    }

    function escondeTodasAbas() {
        const tabsContainer = document.querySelectorAll('[data-tab-id]');
        tabsContainer.forEach(tab => {
            tab.classList.remove('shows__list--is-active');
        });
    }
});
