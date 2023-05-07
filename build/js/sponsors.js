window.addEventListener('load', adjustElement);

function adjustElement() {
    const sponsorTable = document.getElementById('sponsors');
    const sponsorTable2 = document.getElementById('sponsors-3-per-row');

    if (isMobileDevice()) {
        const tds = document.getElementsByTagName("td");
        for (let i = 0; i < tds.length; i++) {
            tds[i].style.maxHeight = "450px";
            tds[i].style.maxWidth = "450px";
            tds[i].style.padding = "5px";
        }
        const sponsor_thanks = document.getElementById("sponsor-thanks");
        sponsor_thanks.style.margin = "10";
        sponsor_thanks.style.fontSize = "5vw";
        document.getElementById("sponsors-buffer").remove();
        const tables = document.getElementsByTagName("table");
        for (let i = 0; i < tables.length; i++) {
            tables[i].style.aspectRatio = "2";
        }
    } else {
        sponsorTable.classList.add("four-table");
        sponsorTable2.classList.add("three-table");
        const tds = document.getElementsByTagName("td");
        for (let i = 0; i < tds.length; i++) {
            tds[i].style.maxWidth = "250px";
            tds[i].style.maxHeight = "250px";
        }
    }
}

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
