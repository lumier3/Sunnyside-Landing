const navlinkTag = document.querySelector(".navlinks");
const MenuTag = document.querySelector(".fa-bars");
const fasolidTag = document.querySelector(".fa-xmark");

MenuTag.addEventListener("click", () => {
    navlinkTag.style.right = "0"
    
});

fasolidTag.addEventListener("click", () => {
    navlinkTag.style.right = "-100%"
})