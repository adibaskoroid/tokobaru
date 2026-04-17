function openFullCover(imgSrc) {
    const modal = document.getElementById("coverModal");
    const fullImg = document.getElementById("fullImg");
    
    modal.style.display = "flex";
    fullImg.src = imgSrc;
    document.body.style.overflow = "hidden"; // Disable scroll
}

function closeModal() {
    const modal = document.getElementById("coverModal");
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Enable scroll
}