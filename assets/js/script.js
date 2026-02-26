const endpoint = 'https://lanciweb.github.io/demo/api/pictures/'
const row_el = document.querySelector('.row');


fetch(endpoint)
    .then(res => res.json())
    .then(data => {

        data.forEach(photo => {
            const {id, title, date, url} = photo

            const markup = `<div id="card-photo-${id}">
                                <div class="card-photo bg-white p-3 position-relative">
                                    <figure class="mb-0">
                                        <img class="mb-3" src="${url}" alt="${title}">
                                        <figcaption>
                                            <small class="photo-date text-secondary">${date}</small>
                                            <p class="photo-title mb-0 fs-4 text-uppercase fw-bold lh-sm">${title}</p>
                                        </figcaption>
                                    </figure> 
                                </div>
                            </div>`

            row_el.insertAdjacentHTML('beforeend', markup)

        })

    })



const overlay_el = document.querySelector('.overlay');

overlay_el.addEventListener('click', function(){

    this.classList.add('d-none')

});


    /*

    fetch(endpoint)
    .then(res => res.json())
    .then(data => {

        data.forEach(photo => {
            const {id, title, date, url} = photo

            const col = document.createElement('div');
            col.classList.add(`card-photo-${id}`)
            row_el.appendChild(col)
            
            const markup = `<div class="card-photo bg-white p-3 position-relative">
                                    <figure class="mb-0">
                                        <img class="mb-3" src="${url}" alt="${title}">
                                        <figcaption>
                                            <small class="photo-date text-secondary">${date}</small>
                                            <p class="photo-title mb-0 fs-4 text-uppercase fw-bold lh-sm">${title}</p>
                                        </figcaption>
                                    </figure> 
                                </div>`

            col.innerHTML = markup

        })

    })

    */
