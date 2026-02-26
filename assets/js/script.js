const endpoint = 'https://lanciweb.github.io/demo/api/pictures/'
const row_el = document.querySelector('.row');


    const overlay_el = document.querySelector('.overlay');
    const overlay_content_el = document.querySelector('.overlay-content');
    const overlay_next_el = document.querySelector('.next');
    const overlay_prev_el = document.querySelector('.prev');
    const close_el = document.querySelector('.close');

    fetch(endpoint)
    .then(res => res.json())
    .then(data => {


        data.forEach(photo => {
            let {id, title, date, url} = photo;

            const card_photo_el = document.createElement('div');
            card_photo_el.id = `card-photo-${id}`;
            row_el.appendChild(card_photo_el);
            
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

            card_photo_el.innerHTML = markup;
        
            const card_el = document.getElementById(`card-photo-${id}`);

            card_el.addEventListener('click', function(){

                overlay_el.classList.remove('d-none')

                
                const overlay_img = document.createElement('img');
                overlay_img.src = url
                overlay_content_el.innerHTML = ''
                overlay_content_el.appendChild(overlay_img)

                let i = id - 1
                console.log(i)

                overlay_next_el.addEventListener('click', function(){

                    i++

                    if(i >= data.length) {
                        i = 0
                    }

                    url = data[i].url
                    overlay_img.src = url
                    
                });

                overlay_prev_el.addEventListener('click', function(){

                    i--

                    if(i == -1) {
                        i = data.length - 1
                    }
                    
                    url = data[i].url
                    overlay_img.src = url
                    
                });

            });



        });

    });


close_el.addEventListener('click', function(){

    overlay_el.classList.add('d-none');

});



 


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
