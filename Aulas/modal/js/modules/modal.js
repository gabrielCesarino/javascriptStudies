export default function initModal(){

    const buttonOpen = document.querySelector('[data-modal="login');
    const buttonClose = document.querySelector('[data-modal="close');
    const modalContainer = document.querySelector('[data-modal="container');

    if(buttonClose && buttonOpen && modalContainer) {
        function toggleModal(e) {
            e.preventDefault();
            modalContainer.classList.toggle('active');
        };

        function clickOutOfModal(e) {
            if (e.target === this)
                toggleModal(e);
        };

        modalContainer.addEventListener('click', clickOutOfModal)
        buttonOpen.addEventListener('click', toggleModal);
        buttonClose.addEventListener('click', toggleModal);
    };
};