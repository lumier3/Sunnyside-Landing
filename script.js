const navlinkTag = document.querySelector(".navlinks");
const MenuTag = document.querySelector(".fa-bars");
const fasolidTag = document.querySelector(".fa-xmark");


MenuTag.addEventListener("click", () => {
    navlinkTag.classList.add("toshow");
    
});

fasolidTag.addEventListener("click", () => {
    navlinkTag.classList.remove("toshow");
})