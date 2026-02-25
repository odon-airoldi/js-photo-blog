const endpoint = 'https://lanciweb.github.io/demo/api/pictures/'

const row_el = document.querySelector('.row');

fetch(endpoint)
    .then(res => res.json())
    .then(data => {




        data.forEach(photo => {
            const {title, date, url} = photo
            console.log(title, date, url);

            const markup = `<div>
                                <div class="card-photo bg-white px-3 pt-3 pb-4 position-relative">
                                    <figure class="mb-0">
                                        <img class="mb-3" src="${url}" alt="">
                                        <figcaption><p>${title}</p></figcaption>
                                    </figure> 
                                </div>
                            </div>`

            row_el.insertAdjacentHTML('beforeend', markup)
            
        })



    })