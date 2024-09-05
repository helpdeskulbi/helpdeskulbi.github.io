import { onClick } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.0.4/element.js";
import { redirect } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.0.4/url.js";

onClick('loginulbi', loginUlbi);

function loginUlbi() {
    console.log('loginulbi');
    
    // Menyimpan URL saat ini ke dalam cookie
    setCookieWithExpireHour('redirect', window.location.href, 1);
    
    // Tambahkan logging untuk memastikan URL tersimpan
    console.log('Current href:', window.location.href);
    
    // Redirect ke halaman login
    redirect('https://login.ulbi.ac.id');
}

export function setCookieWithExpireHour(cname, cvalue, exhour) {
    const d = new Date();
    d.setTime(d.getTime() + (exhour * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    
    // Set domain to ulbi.ac.id to allow subdomains access
    let domain = "domain=.ulbi.ac.id"; 
  
    // Set the cookie with name, value, expiry, domain, and path
    document.cookie = cname + "=" + encodeURIComponent(cvalue) + ";" + expires + ";" + domain + ";path=/";
}
