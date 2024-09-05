import { onClick } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.0.4/element.js";
import { redirect } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.0.4/url.js";

onClick('loginulbi', loginUlbi);

function loginUlbi() {
    console.log('loginulbi');
    
    // Menyimpan URL saat ini ke dalam cookie
    setCookieWithExpireHour('redirect', window.location.href, 1);
    // redirect('https://login.ulbi.ac.id')
    // Tambahkan logging untuk memastikan URL tersimpan
    console.log('Current href:', window.location.href);
}

export function setCookieWithExpireHour(cname, cvalue, exhour) {
    try {
    const d = new Date();
    d.setTime(d.getTime() + (exhour * 60 * 60 * 1000));  // Set expiry time dalam jam
    let expires = "expires=" + d.toUTCString();

    // Tambahkan SameSite=None dan Secure hanya jika HTTPS digunakan
    // let sameSite = "SameSite=None; Secure";
    let domain = "domain=.ulbi.ac.id"; 

    // Set cookie tanpa domain jika tidak di ulbi.ac.id
    document.cookie = cname + "=" + cvalue + ";" + expires + ";" + domain + ";path=/";

    // Logging untuk memeriksa cookie yang disetel
    console.log(`Set cookie: ${cname}=${cvalue}; ${expires}; path=/; ${domain}`);

    // Verifikasi apakah cookie berhasil disimpan
    if (document.cookie.includes(cname)) {
        console.log(`Cookie ${cname} saved successfully.`);
    } else {
        console.error(`Error: Cookie ${cname} was not saved.`);
    }
    }catch (error) {
        console.error('Error:', error);
    }
}