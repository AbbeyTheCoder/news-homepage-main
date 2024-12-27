let menuIcon = document.getElementById("open-menu");
let mobileMenu = document.getElementById("mobile-menu");
let closeIcon = document.getElementById("close-menu");
menuIcon.onclick = () => {
  mobileMenu.showModal();
};
closeIcon.onclick = () => {
  mobileMenu.close();
};
menuIcon.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.target.click();
  }
});
closeIcon.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.target.click();
  }
});
