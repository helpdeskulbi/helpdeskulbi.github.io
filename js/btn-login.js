import { onClick } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.0.4/element.js";
import { redirect } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.0.4/url.js";

function setCookieWithExpireHour(cname, cvalue, exhour) {
    const d = new Date();
    d.setTime(d.getTime() + (exhour * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();

    // Set domain to ulbi.ac.id to allow subdomains access
    let domain = "domain=.ulbi.ac.id";

    document.cookie = cname + "=" + cvalue + ";" + expires + ";" + domain + ";path=/";
}

function loginUlbi() {
    console.log('loginulbi');
    setCookieWithExpireHour('redirect', window.location.href, 1);
    console.log('url yang disimpan:', window.location.href);
}

// Menggunakan onClick dari library yang diimpor
onClick('loginulbi', loginUlbi);
