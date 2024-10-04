const url = 'https://api.openaq.org/v2/measurements?city=São Paulo';

async function visualizarInformacoesQualidadeAr() {
    const res = await fetch(url);
    const dados = await res.json();

    const qualidadeAr = dados.results.map(resultado => ({
        parameter: resultado.parameter,
        value: resultado.value,
        unit: resultado.unit,
        date: resultado.date.local
    }));

    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container__texto');
    paragrafo.innerHTML = `A qualidade do ar em São Paulo apresenta diferentes parâmetros: <br> ${qualidadeAr.map(q => `${q.parameter}: <span>${q.value} ${q.unit}</span> (${q.date})`).join('<br>')}`;

    const container = document.getElementById('graficos-container');
    container.appendChild(paragrafo);
}

visualizarInformacoesQualidadeAr();

