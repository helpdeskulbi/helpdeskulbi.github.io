import { onClick } from 'https://cdn.jsdelivr.net/gh/jscroot/lib@0.0.4/element.js';
import { redirect } from 'https://cdn.jsdelivr.net/gh/jscroot/lib@0.0.4/url.js';

onClick('loginulbi', loginUlbi);

function loginUlbi() {
  console.log('loginulbi');

  // Menyimpan URL saat ini ke dalam cookie sebelum redirect
  setCookieWithExpireHour('redirect', window.location.href, 1);

  // Menambahkan sedikit delay untuk memastikan cookie tersimpan sebelum redirect
  setTimeout(() => {
    redirect('https://login.ulbi.ac.id');
  }, 100);
}

export function setCookieWithExpireHour(cname, cvalue, exhour) {
    const d = new Date();
    d.setTime(d.getTime() + (exhour * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();

    // Set domain to ulbi.ac.id to allow subdomains access
    let domain = "domain=.ulbi.ac.id"; 

    // Set SameSite and Secure for cross-subdomain cookie sharing (especially for HTTPS)
    let sameSite = "SameSite=None; Secure";
  
    // Menyimpan cookie dengan atribut yang benar
    document.cookie = cname + "=" + encodeURIComponent(cvalue) + ";" + expires + ";" + domain + ";path=/;" + sameSite;
}