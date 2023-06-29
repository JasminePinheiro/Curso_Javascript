document.addEventListener('DOMContentLoaded', () => { // Garante que o Javascript vai ser carregado após o DOM
    const input = document.getElementById('pesquisa');
    const table = document.getElementById('tabela');
    const prevBtn = document.getElementById('antBtn');
    const nextBtn = document.getElementById('proxBtn');
    const currentPageSpan = document.getElementById('numPag');
    const rows = table.getElementsByTagName('tr');

    let currentPage = 1;
    const pageSize = 3;
    let filteredRows = Array.from(rows).slice(1); // Ignorar o cabeçalho da tabela

    function aplicarPaginacao() {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const displayedRows = [rows[0], ...filteredRows.slice(startIndex, endIndex)];

        // Ocultar todas as linhas da tabela
        Array.from(rows).forEach(row => {
            row.style.display = 'none';
        });

        // Exibir apenas as linhas correspondentes ao filtro
        displayedRows.forEach(row => {
            row.style.display = '';
        });

        currentPageSpan.textContent = currentPage;
    }

    function atualizarBotoesPaginacao() {
        if (currentPage === 1) {
            prevBtn.disabled = true;
        } else {
            prevBtn.disabled = false;
        }

        if (currentPage * pageSize >= filteredRows.length) {
            nextBtn.disabled = true;
        } else {
            nextBtn.disabled = false;
        }
    }

    input.addEventListener('keyup', () => {
        const filtro = input.value.toUpperCase();
        filteredRows = Array.from(rows).slice(1).filter(row => {
            const colunaNome = row.getElementsByTagName('td')[0];
            const valorNome = colunaNome.textContent || colunaNome.innerText;
            return valorNome.toUpperCase().includes(filtro);
        });

        // Resetar a paginação para a primeira página após a pesquisa
        currentPage = 1;
        aplicarPaginacao();
        atualizarBotoesPaginacao();
    });

    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            aplicarPaginacao();
            atualizarBotoesPaginacao();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentPage * pageSize < filteredRows.length) {
            currentPage++;
            aplicarPaginacao();
            atualizarBotoesPaginacao();
        }
    });

    aplicarPaginacao();
    atualizarBotoesPaginacao();
});