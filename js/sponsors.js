window.addEventListener('load', adjustElementSize);

function adjustElementSize() {
    const sponsorTable = document.getElementById('sponsors');
    const sponsorBuffer = document.getElementById('sponsors-buffer');
    if (!isMobileDevice()) {
        sponsorTable.classList.add("four-table");
        sponsorBuffer.innerHTML = "&nbsp;&nbsp;";
    }
}

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
