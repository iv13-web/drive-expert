function createModal(options) {


    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.insertAdjacentHTML('afterbegin', `

        <div class="modal-overlay" data-close="close">
            <div class="modal-window">
                <div class="modal-header">
                    <div class="modal-header-title">${options.title || ''}</div>
                    <div class="modal-header-date">${options.date}</div>
                </div>
                <hr>
                <div class="modal-body">
                    <div class="modal-body-title" data-subtitle>${options.subtitle || ''} ${options.date}:</div>
                    <img class="modal-img" src="${options.src || ''}" alt="">
                    <p class="modal-text" data-content>
                        ${options.content || ''}
                    </p>
                </div>
                ${options.closable ? `<div class="modal-close" data-close="close"></div>` : ''}  
            </div>
        </div>

    `);

    document.querySelector('body').insertAdjacentElement('beforeend', modal);
    return modal;
}


$.modal = function(options) {

    let destroyed = false;
    let modalElement;

    const listener = event => {
        const target = event.target;
        target.dataset.close && modal.close();
    };

    const modal = {

        open() {
            destroyed && console.log('Destroyed');

            modalElement = createModal(options);
            modalElement.classList.add('open');
            document.querySelector('body').classList.add('modal-overflow');
            modalElement.addEventListener('click', listener);
        },

        close() {
            modalElement.classList.remove('open');
            document.querySelector('body').classList.remove('.modal-overflow')
            setTimeout(() =>  modalElement.remove(), 200);
        }
    };

    // возвращаем объект modal с дополнительными свойствами
    return Object.assign(modal, {
        destroy() {
            modalElement.removeEventListener('click', listener);
            modalElement.remove();
            destroyed = true;
        },
    });
};



