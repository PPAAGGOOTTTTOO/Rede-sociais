const url ='https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInfomacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas) / 1e9
    const pessoasNoMundo = (dados.total_pessoas_mundo) / 1e9
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.roud ((dados.tempo_medio- horas)*100)
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('Graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${dados.total_pessoas_mundo} Bilhoes </span> de pessoas e que aproximadamente <span>${dados.total_pessoas_conectadas} Bilhoes </span> estão conectadas em alguma rede social e passam em média <span>${horas}</span> horas e <span>${minutos}</span> minutos conectadas.`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
    console.log(paragrafo);    
}
visualizarInfomacoesGlobais()