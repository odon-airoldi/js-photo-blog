const endpoint = 'https://lanciweb.github.io/demo/api/pictures/'
const row_el = document.querySelector('.row');




    fetch(endpoint)
    .then(res => res.json())
    .then(data => {

        data.forEach(photo => {
            const {id, title, date, url} = photo

            const col = document.createElement('div');
            col.id = `card-photo-${id}`
            row_el.appendChild(col)
            
            const markup = `<div class="card-photo position-relative">
                                <div class="card-content bg-white p-3">
                                    <figure class="mb-0">
                                        <img class="mb-3" src="${url}" alt="${title}">
                                        <figcaption>
                                            <small class="photo-date text-secondary">${date}</small>
                                            <p class="photo-title mb-0 fs-4 text-uppercase fw-bold lh-sm">${title}</p>
                                        </figcaption>
                                    </figure> 
                                </div>
                            </div>`

            col.innerHTML = markup

        })

        myFunction();

    })



const overlay_el = document.querySelector('.overlay');
const close_el = document.querySelector('.close');


close_el.addEventListener('click', function(){

    overlay_el.classList.add('d-none')

});

function myFunction() {

    const card_el = document.getElementById('card-photo-1')
    console.log(card_el)

    card_el.addEventListener('click', function(){

        overlay_el.classList.remove('d-none')

    });

}



 


// fetch(endpoint)
//     .then(res => res.json())
//     .then(data => {

//         data.forEach(photo => {
//             const {id, title, date, url} = photo

//             const markup = `<div id="card-photo-${id}" class="card-photo position-relative">
//                                 <div class="card-content bg-white p-3">
//                                     <figure class="mb-0">
//                                         <img class="mb-3" src="${url}" alt="${title}">
//                                         <figcaption>
//                                             <small class="photo-date text-secondary">${date}</small>
//                                             <p class="photo-title mb-0 fs-4 text-uppercase fw-bold lh-sm">${title}</p>
//                                         </figcaption>
//                                     </figure> 
//                                 </div>
//                             </div>`

//             row_el.insertAdjacentHTML('beforeend', markup)

//         })

//     })
