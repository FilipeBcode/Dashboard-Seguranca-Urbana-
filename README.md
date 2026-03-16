# Dashboard-Seguranca-Urbana-
Dashboard da cidade de camutanga pe
# Dashboard de Segurança Urbana – Camutanga

## 📊 Descrição do Projeto

Este projeto consiste em um dashboard interativo desenvolvido em **HTML, CSS e JavaScript** para visualização de indicadores urbanos e de segurança pública do município de Camutanga (PE).

O objetivo é demonstrar como dados municipais podem ser organizados em um painel visual semelhante a ferramentas de Business Intelligence (BI), como **Power BI** ou **Tableau**.

O sistema apresenta indicadores principais, gráficos analíticos e um mapa interativo de ocorrências.

---

# 🧠 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Chart.js (biblioteca de gráficos)
- Leaflet.js (biblioteca de mapas)
- OpenStreetMap (mapa base)

---

# 📁 Estrutura do Projeto

---

# 📊 Indicadores Apresentados

## População

População aproximada do município de Camutanga.

Valor utilizado:

7.750 habitantes

Fonte:

IBGE – Censo Demográfico 2022

---

## Frota de Veículos

Número aproximado de veículos registrados no município.

Valor utilizado:

1.850 veículos

Observação:

Valor estimado baseado na média de cidades brasileiras com população semelhante.

---

## Roubo de Veículos

Quantidade estimada de ocorrências de roubo de veículos no período analisado.

Valor utilizado:

5 ocorrências nos últimos 6 meses.

---

## Furto de Veículos

Quantidade estimada de ocorrências de furto de veículos.

Valor utilizado:

9 ocorrências nos últimos 6 meses.

---

# 📅 Período dos Dados

Os dados de criminalidade apresentados no dashboard representam **os últimos 6 meses**, considerando o último mês analisado como **fevereiro**.

Distribuição utilizada no projeto:

| Mês | Ocorrências |
|----|----|
| Setembro | 1 |
| Outubro | 2 |
| Novembro | 1 |
| Dezembro | 3 |
| Janeiro | 3 |
| Fevereiro | 4 |

Total no período: **14 ocorrências**.

---

# 📊 Comparação Regional

O dashboard apresenta comparação de ocorrências entre cidades próximas:

- Camutanga
- Itambé
- Ferreiros
- Pedras de Fogo

Esses valores são utilizados para demonstrar análise comparativa regional.

---

# 🗺 Mapa de Ocorrências

O mapa interativo utiliza a biblioteca **Leaflet.js**.

Fonte do mapa:

OpenStreetMap

Os pontos exibidos representam **ocorrências simuladas de roubo e furto de veículos** dentro do município.

---

# 📈 Previsão de Crimes

O sistema também calcula uma previsão simples para o próximo mês com base na média das ocorrências dos últimos 6 meses.

Esse cálculo é realizado diretamente no **JavaScript**.

Observação:

Este método não utiliza modelos avançados de inteligência artificial, sendo apenas uma estimativa baseada em média.

---

# ⚠ Observações Importantes

Alguns dados utilizados neste projeto são **estimativas educacionais**, utilizadas apenas para demonstrar o funcionamento do dashboard.

Dados oficiais de criminalidade em Pernambuco são divulgados pela:

Secretaria de Defesa Social de Pernambuco (SDS-PE)

No entanto, relatórios públicos geralmente apresentam estatísticas por região e não detalham municípios pequenos individualmente.

---

# 🎯 Objetivo do Projeto

Este projeto demonstra:

- criação de dashboards com JavaScript
- visualização de dados urbanos
- uso de gráficos interativos
- integração de mapas interativos
- organização de dados em formato JSON