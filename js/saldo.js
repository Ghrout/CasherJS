// Función para manejar el clic del botón "Depositar"
function depositar() {
    let depositInput = document.getElementById('dinero');
    let depositValue = parseFloat(depositInput.value);

    if (isNaN(depositValue) || depositValue <= 0) {
        alert("Ingresa un valor válido para depositar.");
        return;
    }

    for (let i = 0; i < cuentas.length; i++) {
        let account = cuentas[i];
        if (account.nombre === selectedAccount) {
            account.saldo += depositValue;
            actualizarSaldoInput(account.saldo);
            alert("¡Depósito exitoso! Tu nuevo saldo es: $" + account.saldo.toFixed(2));
            break;
        }
    }

    depositInput.value = "";
}

// Función para manejar el clic del botón "Retirar"
function retirar() {
    let withdrawInput = document.getElementById('dinero');
    let withdrawValue = parseFloat(withdrawInput.value);

    if (isNaN(withdrawValue) || withdrawValue <= 0) {
        alert("Ingresa un valor válido para retirar.");
        return;
    }

    for (let i = 0; i < cuentas.length; i++) {
        let account = cuentas[i];
        if (account.nombre === selectedAccount) {
            if (withdrawValue > account.saldo) {
                alert("Fondos insuficientes. No puedes retirar más de lo que tienes en tu cuenta.");
                return;
            }

            account.saldo -= withdrawValue;
            actualizarSaldoInput(account.saldo);
            alert("¡Retiro exitoso! Tu nuevo saldo es: $" + account.saldo.toFixed(2));
            break;
        }
    }

    withdrawInput.value = "";
}

// Función para actualizar el campo de saldo con el valor actual
function actualizarSaldoInput(saldo) {
    let saldoInput = document.getElementById('saldo');
    saldoInput.value = saldo.toFixed(2);
}

// Listeners de eventos para los botones de depositar y retirar
let depositButton = document.querySelector('.box3 #depositar');
let withdrawButton = document.querySelector('.box4 #retirar');

depositButton.addEventListener('click', depositar);
withdrawButton.addEventListener('click', retirar);