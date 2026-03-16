fetch("dados.json")

.then(res => res.json())

.then(d => {

    /* CARDS */

    document.getElementById("pop").innerText = d.populacao
    document.getElementById("veic").innerText = d.veiculos
    document.getElementById("roubos").innerText = d.roubosVeiculos
    document.getElementById("furtos").innerText = d.furtosVeiculos


    /* GERAR ULTIMOS 6 MESES (ATE FEVEREIRO) */

    const meses = [
        "Jan","Fev","Mar","Abr","Mai","Jun",
        "Jul","Ago","Set","Out","Nov","Dez"
    ]

    let ultimoMes = 1 // fevereiro (0 = janeiro)

    let ultimosMeses = []

    for(let i = 5; i >= 0; i--){

        let index = (ultimoMes - i + 12) % 12

        ultimosMeses.push(meses[index])

    }


    /* GRAFICO CRIMES */

    new Chart(document.getElementById("graficoCrimes"),{

        type:"line",

        data:{

            labels:ultimosMeses,

            datasets:[{

                label:"Ocorrências de roubo e furto de veículos",

                data:d.crimesMes,

                borderColor:"#ef4444",

                backgroundColor:"rgba(239,68,68,0.2)",

                fill:true,

                tension:0.3,

                borderWidth:3

            }]

        },

        options:{

            responsive:true

        }

    })


    /* GRAFICO COMPARACAO ENTRE CIDADES */

    new Chart(document.getElementById("graficoCidades"),{

        type:"bar",

        data:{

            labels:["Camutanga","Itambé","Ferreiros","Pedras de Fogo"],

            datasets:[{

                label:"Roubo/Furto de veículos (6 meses)",

                data:d.comparacao,

                backgroundColor:[

                    "#3b82f6",
                    "#22c55e",
                    "#f59e0b",
                    "#ef4444"

                ]

            }]

        },

        options:{

            responsive:true

        }

    })


    /* MAPA */

    let map = L.map("map").setView([-7.413,-35.269],13)

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    ).addTo(map)


    /* MARCADORES */

    d.ocorrencias.forEach(o => {

        L.marker([o.lat,o.lng])
        .addTo(map)
        .bindPopup(o.tipo)

    })


    /* PREVISAO SIMPLES */

    let soma = 0

    d.crimesMes.forEach(c => {

        soma += c

    })

    let media = soma / d.crimesMes.length

    let previsao = Math.round(media + 1)

    console.log("Previsão de ocorrências próximo mês:", previsao)

})