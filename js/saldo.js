let accounts = [
	{ username: "Mali", password: "123", balance: 200 },
	{ username: "Gera", password: "456", balance: 290 },
	{ username: "Maui", password: "789", balance: 67 }
];

// let selectedAccount;
// let selectedAccountData;
// let currentPassword;

let currentUser = null;
let balance = 0;

function authenticate() {
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;

	// let username = usernameInput.value;
	// currentPassword = passwordInput.value;
	const account = accounts.find(acc => acc.username === username && acc.password === password);

	if (account) {
		currentUser = username;
		balance = account.balance;
		document.getElementById("loggedInUser").textContent = username;
		document.getElementById("balance").textContent = balance;
		// document.getElementById("loginForm").style.display = "none";
		// document.getElementById("accountInfo").style.display = "block";
	} else {
		alert("Credenciales inválidas. Inténtalo de nuevo.");
	}
	// if (currentPassword === "") {
	//     alert("Ingresa la contraseña.");
	//     return;
	// }

	// let foundAccount = false;

	// for (let i = 0; i < cuentas.length; i++) {
	//     let account = cuentas[i];
	//     console.log(account);
	//     if (account.nombre === username && account.password === currentPassword) {
	//         foundAccount = true;
	//         selectedAccount = account.nombre;
	//         selectedAccountData = account;
	//         actualizarSaldoInput(selectedAccountData.saldo);
	//         showModal();
	//         setTimeout(function () {
	//             redirectToNewTab();
	//         }, 3000);
	//         break;
	//     }
	// }

	// if (!account) {
	//     alert("Nombre de usuario o contraseña incorrectos. Inténtalo de nuevo.");
	//     usernameInput.value = "";
	//     passwordInput.value = "";
	// }
}

// Función para actualizar el campo de saldo con el valor actual

// Función para manejar el clic del botón "Depositar"
// function depositar() {
//     let depositInput = document.getElementById('dinero');
//     let depositValue = parseFloat(depositInput.value);

//     if (isNaN(depositValue) || depositValue <= 0) {
//         alert("Ingresa un valor válido para depositar.");
//         return;
//     }

//     for (let i = 0; i < cuentas.length; i++) {
//         let account = cuentas[i];
//         if (account.nombre === selectedAccount) {
//             account.saldo = (parseFloat(account.saldo) + depositValue).toFixed(2);
//             actualizarSaldoInput(account.saldo);
//             alert("¡Depósito exitoso! Tu nuevo saldo es: $" + account.saldo);
//             break;
//         }
//     }

//     depositInput.value = "";
// }

// Función para manejar el clic del botón "Retirar"
// function retirar() {
//     let withdrawInput = document.getElementById('dinero');
//     let withdrawValue = parseFloat(withdrawInput.value);

//     if (isNaN(withdrawValue) || withdrawValue <= 0) {
//         alert("Ingresa un valor válido para retirar.");
//         return;
//     }

//     for (let i = 0; i < cuentas.length; i++) {
//         let account = cuentas[i];
//         if (account.nombre === selectedAccount) {
//             if (withdrawValue > parseFloat(account.saldo)) {
//                 alert("Fondos insuficientes. No puedes retirar más de lo que tienes en tu cuenta.");
//                 return;
//             }

//             account.saldo = (parseFloat(account.saldo) - withdrawValue).toFixed(2);
//             actualizarSaldoInput(account.saldo);
//             alert("¡Retiro exitoso! Tu nuevo saldo es: $" + account.saldo);
//             break;
//         }
//     }

//     withdrawInput.value = "";
// }

// Listeners de eventos para los botones de depositar y retirar

function depositar() {
	const amount = parseFloat(document.getElementById("dinero").value);
	if (isNaN(amount) || amount <= 0) {
		alert("Ingresa un monto válido para depositar.");
		return;
	} else {
		alert("Deposito realizado exitosamente!");
	}

	balance += amount;
	updateBalance();

	// Vaciar el input de monto después del depósito exitoso
	document.getElementById("dinero").value = "";
}

function retirar() {
	const amount = parseFloat(document.getElementById("dinero").value);
	if (isNaN(amount) || amount <= 0) {
		alert("Ingresa un monto válido para retirar.");
		return;
	}

	if (balance >= amount) {
		balance -= amount;
		updateBalance();
		alert("Retiro realizado exitosamente!");
	} else {
		alert("Saldo insuficiente para retirar esa cantidad.");
	}

	// Vaciar el input de monto después del retiro exitoso
	document.getElementById("dinero").value = "";
}

// let depositButton = document.querySelector('.box3 .button');
// let withdrawButton = document.querySelector('.box4 .button2');

// depositButton.addEventListener('click', depositar);
// withdrawButton.addEventListener('click', retirar);

function logout() {
	selectedAccount = null;
	window.location.href = "../Login/index.html";
}

function updateBalance() {
	document.getElementById("balance").textContent = balance;
}

function showModal() {
	let dialog = document.getElementById("dialog");
	dialog.showModal();
}

function redirectToNewTab() {
	window.location.href = "../Saldo/saldo.html";
}