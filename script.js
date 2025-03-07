document.addEventListener("wheel", (event) => {
    event.preventDefault();
    window.scrollBy({
        top: event.deltaY > 0 ? window.innerHeight : -window.innerHeight,
        behavior: "smooth"
    });
}, { passive: false });
