// Exemplo: Mensagem no console do navegador para confirmar que o script carregou
console.log('Scripts do front-end carregados com sucesso!');

// Exemplo: Máscara simples para formatar CPF automaticamente enquanto digita
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
