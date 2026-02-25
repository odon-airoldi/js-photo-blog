const endpoint = 'https://lanciweb.github.io/demo/api/pictures/'

const row_el = document.querySelector('.row');

fetch(endpoint)
    .then(res => res.json())
    .then(data => {




        data.forEach(photo => {
            const {id, title, date, url} = photo
            console.log(id, title, date, url);

            const markup = `<div>
                                <div id="card-photo-${id}" class="card-photo bg-white px-3 pt-3 pb-4 position-relative">
                                    <figure class="mb-0">
                                        <img class="mb-3" src="${url}" alt="${title}">
                                        <figcaption>
                                            <small class="photo-date text-secondary">${date}</small>
                                            <p class="photo-title mb-0">${title}</p>
                                        </figcaption>
                                    </figure> 
                                </div>
                            </div>`

            row_el.insertAdjacentHTML('beforeend', markup)
            
        })



    })