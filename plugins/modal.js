function createModal(options) {

    // const modalContent = document.querySelector('.modal').innerHTML;
    // document.querySelector('.modal').remove();

    // const title = document.querySelector('[data-title]');
    // const date = document.querySelector('[data-date]');
    // const subtitle = document.querySelector('[data-subtitle]');
    // const content = document.querySelector('[data-content]');



    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.insertAdjacentHTML('afterbegin', `

        <div class="modal-overlay">
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

    const modalElement = createModal(options);
    let destroyed = false;

    const modal = {
        open() {
            destroyed && console.log('Destroyed');
            modalElement.classList.add('open');
            document.querySelector('body').classList.add('.modal-overflow')
        },

        close() {
            modalElement.classList.remove('open');
            document.querySelector('body').classList.remove('.modal-overflow')
        }
    };

    const listener = event => {
        event.target.dataset.close && modal.close();
    };

    modalElement.addEventListener('click', listener);


    // возвращаем объект modal с дополнительными свойствами
    return Object.assign(modal, {
        destroy() {
            modalElement.removeEventListener('click', listener);
            modalElement.remove();
            destroyed = true;
        },
        
        setContent(subtitle, content) {
            modalElement.querySelector('[data-subtitle]').innerHTML = subtitle;
            modalElement.querySelector('[data-content]').innerHTML = content;
        }
    });
};