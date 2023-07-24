let cuentas = [
    { nombre: "Mali", saldo: 200, password: "123" },
    { nombre: "Gera", saldo: 290, password: "456" },
    { nombre: "Maui", saldo: 67, password: "789" }
];

let selectedAccount;
let currentPassword;

function authenticate() {
    let usernameInput = document.getElementById('username');
    let passwordInput = document.getElementById('password');

    let username = usernameInput.value;
    currentPassword = passwordInput.value;

    if (currentPassword === "") {
        alert("Ingresa la contraseña.");
        return;
    }

    let foundAccount = false;

    for (let i = 0; i < cuentas.length; i++) {
        let account = cuentas[i];
        console.log(account);
        if (account.nombre === username && account.password === currentPassword) {
            foundAccount = true;
            showModal();
            setTimeout(function () {
                redirectToNewTab();
            }, 3000);
            break;
        }
    }

    if (!foundAccount) {
        alert("Nombre de usuario o contraseña incorrectos. Inténtalo de nuevo.");
        usernameInput.value = "";
        passwordInput.value = "";
    }

    if (foundAccount) {
        selectedAccount = username;
    }
}

function logout() {
    selectedAccount = null;
    window.location.href = "../Login/index.html";
}

function showModal() {
    let dialog = document.getElementById("dialog");
    dialog.showModal();
}

function redirectToNewTab() {
    window.location.href = "../Saldo/saldo.html";
}
