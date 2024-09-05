import { onClick } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.0.4/element.js";
import { redirect } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.0.4/url.js";

onClick('loginulbi', loginUlbi);

function loginUlbi() {
    console.log('loginulbi');
    // Menyimpan URL saat ini ke dalam cookie
    setCookieWithExpireHour('redirect', window.location.href, 1);

    // Tambahkan logging untuk memastikan URL tersimpan
    console.log('Current href:', window.location.href);
    console.log('Cookie after set:', document.cookie);
}

export function setCookieWithExpireHour(cname, cvalue, exhour) {
    const d = new Date();
    d.setTime(d.getTime() + (exhour * 60 * 60 * 1000));  // Set expiry time dalam jam
    let expires = "expires=" + d.toUTCString();

    let samSite = "sameSite=None; Secure";
    let domain = "domain=.ulbi.ac.id"; 

    // Karena bekerja di localhost, jangan tambahkan domain untuk cookie
    document.cookie = cname + "=" + cvalue + ";" + expires + ";" + domain + ";path=/" + samSite;    
    // Set cookie tanpa domain untuk pengujian lokal
    // document.cookie = cname + "=" + encodeURIComponent(cvalue) + ";" + expires + ";path=/";
    
    // Logging untuk memastikan cookie disetel dengan benar
    console.log(`Set cookie: ${cname}=${cvalue}; ${expires}; path=/`);
}