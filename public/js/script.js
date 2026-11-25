// Confirmar que o script carregou
console.log('Scripts do front-end carregados com sucesso!');

// Formatar CPF automaticamente enquanto digita
const inputCpf = document.querySelector('input[name="cpf"]');
if (inputCpf) {
    inputCpf.addEventListener('input', (e) => {
        let valor = e.target.value.replace(/\D/g, '');
        valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
        valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
        valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        e.target.value = valor;
    });
}
document.addEventListener("DOMContentLoaded", function () {
    const campos = document.querySelectorAll("input[required], select[required], textarea[required]");

    campos.forEach(campo => {
        campo.addEventListener("invalid", function () {
            if (campo.validity.valueMissing) {
                if (campo.tagName === "SELECT") {
                    campo.setCustomValidity("Por favor, selecione um item da lista.");
                } else {
                    campo.setCustomValidity("Por favor, preencha este campo.");
                }
            }
        });

        campo.addEventListener("input", function () {
            campo.setCustomValidity("");
        });
        
        campo.addEventListener("change", function () {
            campo.setCustomValidity("");
        });
    });
});
// Filtro
document.addEventListener("DOMContentLoaded", function () {
    const campoBusca = document.getElementById("campoBusca");
    const btnLimparBusca = document.getElementById("btnLimparBusca");

    if (campoBusca) {
        campoBusca.addEventListener("keyup", function () {
            const termo = this.value.toLowerCase().trim();
            const linhas = document.querySelectorAll("table tbody tr");

            linhas.forEach(linha => {
                const textoLinha = linha.textContent.toLowerCase();
                
                if (textoLinha.includes(termo)) {
                    linha.style.display = "";
                } else {
                    linha.style.display = "none";
                }
            });
        });
    }

    if (btnLimparBusca && campoBusca) {
        btnLimparBusca.addEventListener("click", function () {
            campoBusca.value = "";
            campoBusca.dispatchEvent(new Event("keyup")); //Restaura as linhas
            campoBusca.focus();
        });
    }
});