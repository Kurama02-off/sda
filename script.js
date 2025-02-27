
slides.forEach((slide, i) =>{
    let watchVideoBtn = slide.querySelector(".watch-video-btn");
    let SlideVideoModal = slide.querySelector(".slide-video-modal");
    let VideoModalContent =slide.querySelector(".video-modal-content");
    let VideoCloseBtn = slide.querySelector(".video-close-btn");

    watchVideoBtn.addEventListener("click", () => {
        SlideVideoModal.classList.add("active");
        VideoModalContent.classList.add("active");
    });
});

