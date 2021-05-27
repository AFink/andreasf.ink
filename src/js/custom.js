var navbar = document.getElementById('navbar')
var collapse = document.getElementById('navbar-collapse')
collapse.addEventListener('hidden.bs.collapse', function () {
    navbar.classList.remove("open");
})
collapse.addEventListener('shown.bs.collapse', function () {
    navbar.classList.add("open");
})