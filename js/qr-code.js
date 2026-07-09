function decodeBase64Url(payload) {
  try {
    if (!payload) {
      return null;
    }

    let base64 = payload.replace(/-/g, "+").replace(/_/g, "/");

    while (base64.length % 4) {
      base64 += "=";
    }

    const jsonString = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (char) {
          return "%" + ("00" + char.charCodeAt(0).toString(16)).slice(-2);
        })
        .join(""),
    );

    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Gagal decode data:", error);
    return null;
  }
}

function formatTanggalIndonesia(dateValue) {
  if (!dateValue) {
    return "-";
  }

  const bulanIndonesia = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  let date;

  // Format dari payload kamu: 2026-07-09
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateValue)) {
    const [year, month, day] = dateValue.split("-");
    return `${Number(day)} ${bulanIndonesia[Number(month) - 1]} ${year}`;
  }

  // Format lama: 09/07/2027
  if (/^\d{2}\/\d{2}\/\d{4}$/.test(dateValue)) {
    const [day, month, year] = dateValue.split("/");
    return `${Number(day)} ${bulanIndonesia[Number(month) - 1]} ${year}`;
  }

  // Fallback jika format lain
  date = new Date(dateValue);

  if (isNaN(date.getTime())) {
    return dateValue;
  }

  const day = date.getDate();
  const month = bulanIndonesia[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

function setTextById(id, value) {
  const element = document.getElementById(id);

  if (!element) {
    return;
  }

  element.textContent = value || "-";
}

function loadSignatureData() {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  if (!code) {
    console.warn("Parameter code tidak ditemukan di URL");
    return;
  }

  const data = decodeBase64Url(code);

  if (!data) {
    alert("Data signature tidak valid atau gagal dibaca.");
    return;
  }

  setTextById("nomorSurat", data.n);
  setTextById("tanggal", formatTanggalIndonesia(data.t));
  setTextById("unitPengirim", data.u);
  setTextById("jenisSurat", data.j);
  const kepadaElement = document.getElementById("kepada");
  setTextById("jenisPenerima", data.r);
  setTextById("perihal", data.p);

  const lampiran = document.getElementById("urlLampiran");

  if (kepadaElement) {
    kepadaElement.innerHTML = formatKepada(data.k);
  }

  if (lampiran) {
    if (data.l) {
      lampiran.textContent = "Lihat Lampiran";
      lampiran.href = data.l;
      lampiran.target = "_blank";
      lampiran.rel = "noopener noreferrer";
    } else {
      lampiran.textContent = "-";
      lampiran.removeAttribute("href");
      lampiran.removeAttribute("target");
      lampiran.removeAttribute("rel");
    }
  }
}

function formatKepada(value) {
  if (!value) {
    return "-";
  }

  return value
    .split(/\),\s*/)
    .map(function (item, index, array) {
      if (index < array.length - 1) {
        return item.trim() + ")";
      }

      return item.trim();
    })
    .filter(Boolean)
    .join("<br>");
}

document.addEventListener("DOMContentLoaded", loadSignatureData);
