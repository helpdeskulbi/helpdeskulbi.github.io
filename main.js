import {get} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.0.4/api.js";
import {setInner} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.0.4/element.js";
import {getCookie} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.0.4/cookie.js";

let token = getCookie("login");

if (token === "") {
    // No token, stay on the current page (index page)
    console.log("No token found. Staying on index page.");
} else {
    // Token exists, redirect to WhatsApp URL
    window.location.replace("https://helpdesk.ulbi.ac.id/pdboard_helpdesk/");
}
if (getCookie("login")){
    document.getElementById('tombollogin').href = '/auth';
    setInner('tombollogin','Dashboard');
}

get("https://msg.ulbi.ac.id/data/phone/all",runafterGet);
// get("https://msg.ulbi.ac.id/data/lms/random/testi",runafterGetTesti);

function runafterGet(result){
    // Mendapatkan elemen HTML dengan id 'phoneList'
    let phoneListElement = document.getElementById('listnomorbot');

    // Iterasi melalui phonelist dan buat elemen <li> untuk setiap nomor telepon
    result.phonelist.forEach(function(phone) {
        let li = document.createElement('li'); // Membuat elemen <li>
        li.textContent = phone; // Mengisi <li> dengan nomor telepon
        phoneListElement.appendChild(li); // Menambahkan <li> ke dalam elemen <ul> atau <ol> dengan id 'phoneList'
    });

}

async function runafterGetTesti(result){
    //await result.list.forEach(addTestimonial);
    for (const testi of result.list) {
        addTestimonial(testi);
    }
    //===== testimonial active

    $('.testimonial-active').slick({
        dots: true,
        speed: 800,
        arrows: false,
        centerMode: true,
        centerPadding: "0",
        slidesToShow: 3,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
}



// Fungsi untuk membuat elemen testimonial baru
// function addTestimonial(testi) {
//     // Membuat elemen div untuk testimonial baru
//     const colDiv = document.createElement('div');
//     colDiv.classList.add('col-lg-4');

//     const testimonialDiv = document.createElement('div');
//     testimonialDiv.classList.add('single-testimonial');

//     // Bagian review
//     const reviewDiv = document.createElement('div');
//     reviewDiv.classList.add('testimonial-review', 'd-flex', 'align-items-center', 'justify-content-between');

//     const quotaDiv = document.createElement('div');
//     quotaDiv.classList.add('quota');
//     quotaDiv.innerHTML = '<i class="lni-quotation"></i>';

//     const starDiv = document.createElement('div');
//     starDiv.classList.add('star');
//     starDiv.innerHTML = `
//         <ul>
//             <li><i class="lni-star-filled"></i></li>
//             <li><i class="lni-star-filled"></i></li>
//             <li><i class="lni-star-filled"></i></li>
//             <li><i class="lni-star-filled"></i></li>
//             <li><i class="lni-star-filled"></i></li>
//         </ul>
//     `;

//     reviewDiv.appendChild(quotaDiv);
//     reviewDiv.appendChild(starDiv);

//     // Bagian text
//     const textDiv = document.createElement('div');
//     textDiv.classList.add('testimonial-text');
//     const textP = document.createElement('p');
//     textP.classList.add('text');
//     textP.textContent = testi.isi;
//     textDiv.appendChild(textP);

//     // Bagian author
//     const authorDiv = document.createElement('div');
//     authorDiv.classList.add('testimonial-author', 'd-flex', 'align-items-center');

//     const authorImageDiv = document.createElement('div');
//     authorImageDiv.classList.add('author-image');
//     authorImageDiv.innerHTML = `
//         <img class="shape" src="imgs/textimonial-shape.svg" alt="shape">
//         <img class="author" src="imgs/user2.png" alt="author">
//     `;

//     const authorContentDiv = document.createElement('div');
//     authorContentDiv.classList.add('author-content', 'media-body');
//     const authorNameH6 = document.createElement('h6');
//     authorNameH6.classList.add('holder-name');
//     authorNameH6.textContent = testi.nama;

//     const authorDaerahP = document.createElement('p');
//     authorDaerahP.classList.add('text');
//     authorDaerahP.textContent = testi.daerah;

//     authorContentDiv.appendChild(authorNameH6);
//     authorContentDiv.appendChild(authorDaerahP);

//     authorDiv.appendChild(authorImageDiv);
//     authorDiv.appendChild(authorContentDiv);

//     // Menggabungkan semua bagian ke dalam div testimonial
//     testimonialDiv.appendChild(reviewDiv);
//     testimonialDiv.appendChild(textDiv);
//     testimonialDiv.appendChild(authorDiv);

//     colDiv.appendChild(testimonialDiv);

//     // Menambahkan testimonial ke dalam container
//     const testimonialContainer = document.querySelector('.testimonial-active');
//     testimonialContainer.appendChild(colDiv);
// }

