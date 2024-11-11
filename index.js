const laptopSize = window.matchMedia("(min-width:800px)");
const barMenu = document.getElementById("bar-icon");

laptopSize.addEventListener("change", handleSizeChange);

function handleSizeChange(e) {
  if (e.matches) {
    const blog4 = document.getElementById("blog-4");
    blog4.classList.toggle("hidden");
    const blog5 = document.getElementById("blog-5");
    blog5.classList.toggle("hidden");
    const blog6 = document.getElementById("blog-6");
    blog6.classList.toggle("hidden");
  }
}

barMenu.addEventListener("click", openMenu);

function openMenu() {
  const nav = document.getElementById("nav-menu");
  console.log(nav);
  nav.classList.toggle("hidden");
}
