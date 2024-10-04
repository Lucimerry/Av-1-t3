
import { getCSS, tickConfig } from "./common.js";

async function quantidadePoluentesPorCidade() {
    const url = 'https://api.openaq.org/v2/measurements?city=São Paulo&limit=5';
    const res = await fetch(url);
    const dados = await res.json();

    const nomeDosPoluentes = dados.results.map(resultado => resultado.parameter);
    const valoresDosPoluentes = dados.results.map(resultado => resultado.value);

    const data = [
        {
            x: nomeDosPoluentes,
            y: valoresDosPoluentes,
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ];

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Níveis de Poluentes no Ar em São Paulo',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                size: 30,
                font: getCSS('--font')
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Poluentes',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Concentração (µg/m³)',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }
    };

    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('graficos-container').appendChild(grafico);
    Plotly.newPlot(grafico, data, layout);
}

quantidadePoluentesPorCidade();
