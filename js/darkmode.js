const body = document.querySelector("body"),
    modeToggle = body.querySelector(".mode-toggle");
sidebar = body.querySelector("nav");
sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
    body.classList.add("dark");
} else {
    body.classList.remove("dark"); // Asegúrate de eliminar la clase "dark" si está en modo claro
}

let getStatus = localStorage.getItem("status");
if (getStatus && getStatus === "close") {
    sidebar.classList.add("close");
} else {
    sidebar.classList.remove("close"); // Asegúrate de eliminar la clase "close" si la barra lateral está abierta
}

modeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        localStorage.setItem("mode", "dark");
        saldoInput.classList.add("valorsaldo");
    } else {
        localStorage.setItem("mode", "light");
        saldoInput.classList.remove("valorsaldo");
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if (sidebar.classList.contains("close")) {
        localStorage.setItem("status", "close");
    } else {
        localStorage.setItem("status", "open");
    }
});


