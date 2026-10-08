async function loadAnnouncement() {
    const announcementPlaceholder = document.querySelector("#announcement-placeholder");

    if (!announcementPlaceholder) {
        throw new Error("Announcement placeholder was not found.");
    }

    try {
        const response = await fetch(new URL("../announcement.html", import.meta.url));

        if (!response.ok) {
            throw new Error(`Failed to load announcement: ${response.status} ${response.statusText}`);
        }

        announcementPlaceholder.outerHTML = await response.text();
    } catch (error) {
        console.error("Unable to load the announcement section.", error);
        announcementPlaceholder.innerHTML =
            '<p role="alert">Pengumuman tidak dapat dimuat. Silakan muat ulang halaman.</p>';
    }
}

loadAnnouncement();
