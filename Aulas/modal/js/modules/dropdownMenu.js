export default function initDropdownMenu () {
    const dropdownMenus = document.querySelectorAll('[data-dropdown]');

    dropdownMenus.forEach(menu => {
        ['touchstart', 'click'].forEach(userEvent => {
            menu.addEventListener(userEvent, handleClick);
        })
    })

    function handleClick(e) {
        e.preventDefault();
        this.classList.add('active');
        outsideClick(this, () => {
            this.classList.remove('active');
        })
    }

    function outsideClick(element, callback) {
        const html = document.documentElement;
        const outside =  'data-outside'

        if(!element.hasAttribute(outside)){
            html.addEventListener('click', handleOutsideClick);
            element.setAttribute(outside, '');
        }
        function handleOutsideClick (e) {
            if(!element.contains(event.target)){
                element.removeAttribute(outside, '');
                callback();
                html.removeEventListener('click', handleOutsideClick)
            }
        };
    }


};