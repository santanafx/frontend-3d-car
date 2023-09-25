# Sobre o projeto

<p align="justify">
O projeto consistiu em realizar um desafio proposto pela empresa Softruck. Softruck é uma multinacional que oferece soluções de gerenciamento com o objetivo de reduzir custos operacionais, monitoramento e medição ativa do desempenho de recursos, sejam eles humanos ou manufaturados.
</p>

# O projeto

<p align="justify">
Para o desenvolvimento do projeto foi escolhido o React que é uma biblioteca do JavaScript amplamente utilizada para construir interfaces de usuário interativas e performaticas. Foi escolhido o Vite que é uma ferramenta que se destaca em velocidade e eficiência de desenvolvimento. Foi escolhido o TypeScript que adiciona tipagem opcional para o JavaScript adicionando mais facilidade de manutenção, robustês ao código, maior legibilidade e redução de bugs.
O projeto foi dividido em pastas separando cada elemento de acordo com sua respectiva função. A pasta "assets", armazena os arquivos de imagem do projeto. A pasta "components", segue a metodologia do Atomic design para possibilitar a criação de um sistema mais consistente e padronizado. A pasta "css", armazena o arquivo "main.css" e o arquivo "main.css.map" que tem a função de facilitar a depuração e manutenção do código. A pasta "styles", armazena os arquivos SCSS de todo o projeto.
</p>

<p align="justify">
Ao iniciar o projeto, é carregado uma página com um mapa que é obtido através do uso da API mapbox. O mapa foi renderizado utilizando a biblioteca "react-map-gl" que fornece componentes que possibilitam adicionar mais interação entre usuário e mapa. Foram adicionados os componentes "Map", "GeolocateControl", "FullscreenControl" e "NavigationControl".
</p>

1. Map, possibilita renderizar o mapa na tela.
2. GeolocateControl, possibilita o compartilhamento da localização geográfica do usuário.
3. FullscreenControl, possibilita aumentar o mapa para preencher toda a tela.
4. NavigationControl, adiciona botões de zomm in, zoom out e reset de direção (posição default norte).

<p align="justify">
Em seguida foram criados 4 componentes do React, cujo os nomes são, "CarMarker", "VehicleRoute", "BestRoute" e "Options".
</p>

1. CarMarker, renderiza o carro de acordo com a latitude, longitude, velocidade, direção e habilita o usuário a seguir automaticamente o carro de acordo com as coordenadas durante a rota. É neste componente que também é renderizado no canto inferior esquerdo da tela informações de longitude, latitude, direção e velocidade.
2. VehicleRoute, renderiza o trajeto ( linha de cor azul) do carro dinâmicamente de acordo com as coordenadas de latitude e longitude do arquivo "frontend_data_gps.json". É neste componente que tambem é renderizado o circulo verde (ponto de início da rota) e o circulo vermelho (ponto final da rota). Os componentes "Source" e "Layer" da biblioteca "react-map-gl" possibilitam desenhar pontos e linhas no mapa.
3. BestRoute, renderiza a rota mais eficiênte do ponto de início da rota até o ponto final da rota. O usuário pode escolher se ele deseja visualizar o trajeto (linha de cor preta) ou não. É neste componete que é feito uma requisição do tipo GET para API mapbox directions.
4. Options, renderiza todos os botões do menu, "Iniciar rota 1", "Iniciar rota 2", "Iniciar rota 3", "Iniciar rota 4", "Iniciar rota 5", "Exibir melhor rota", "Habilitar seguir veículo", "Esconder melhor rota", "Desabilitar seguir veículo" e "Resetar rota". É neste componente que também é renderizado se o carro ja chegou no seu destino final ou pede ao usuário para escolher uma rota.

#### Objetivo

<p align="justify">
No desafio foram fornecidas as seguintes instruções:

Utilizando os dados geográficos fornecidos e o sprite de dados, criar uma tela com um mapa que deve realizar a animação no sprite baseado na direção do carro.

</p>

##### Tarefa bônus

<p align="justify">
Utilizar a velocidade do veículo para definir quão rápido ele vai se mover no trajeto.
</p>
<p align="justify">
Deixar o usuário selecionar qual dos trajetos será desenhado naquele momento.
</p>

## Tecnologias e linguagens utilizadas

Typescript | React | HTML | SASS | Vite

## Bibliotecas utilizadas

1. mapbox-gl - biblioteca de mapeamento que permite criar mapas interativos e personalizados.
2. react-map-gl - biblioteca que fornece componentes React para a integração de mapas interativos. Está biblioteca funciona em conjunto com a biblioteca "mapbox-gl".
3. sass - biblioteca que permite a criação de estilos para páginas da web ou aplicativos.

## Como instalar

Para preparar o ambiente, precisaremos ter algumas coisas instaladas no computador, sendo elas:

Node.js
<a href="https://nodejs.org/pt-br">Clique aqui para instalar o Node.js</a>.

<p align="justify">
Para instalar o Node, clique no link e baixe a versão LTS (versão recomendada)
Para verificar se foi instalado corretamente, abra o terminal e escreva node -v ou node --version
alt text: site do Nodejs, com o botão da versão recomendada em foco por um quadrado vermelho!
</p>

<img align="center" src='./public/images/readme/instrucao-node.png'>

Git
<a href="https://git-scm.com/download/windows">Clique aqui para instalar o Git</a>.

<p align="justify">
Caso não tenha um terminal de preferência, recomendo utilizar o git bash. Para instalá-lo, haverá uma opção durante a instalação do git para permitir instalar o git bash
alt text: imagem mostrando várias caixas selecionáveis. A caixa “Git Bash Here” está em evidência por um quadrado vermelho com uma seta apontada para ele
</p>

<img align="center" src='./public/images/readme/instrucao-git.png'>

Para verificar se o git foi instalado corretamente, abra o terminal e escreva git --version
Visual Studio Code

Entre no link e baixe a versão de Windows.

<a href="https://code.visualstudio.com/download">Clique aqui para instalar o Visual Studio</a>.

Clique com o botão direito em algum local do computador e selecione a opção Git Bash Here.

<img align="center" src='./public/images/readme/instrucao-gitBashHere.png'>

Escreva no terminal o comando abaixo e no lugar de 'cole aqui' entre no projeto do GitHub e cole o link do projeto.

git clone 'cole aqui o link do projeto'

<img align="center" src='./public/images/readme/instrucao-clone.png'>

<img align="center" src='./public/images/readme/instrucao-gitClone.png'>

Uma pasta com o projeto desejado será adicionada a pasta em que foi escolhida.
Clique com o botão direito em cima da pasta e selecione "Abrir com Code"

<img align="center" src='./public/images/readme/instrucao-abrirCode.png'>

Uma vez que o Visual studio estiver aberto com o projeto desejado, abra o terminal clicando no menu da aba superior e digite no terminal aberto o código "npm install" e logo em seguida digite "npm run dev". Uma janela do browser será aberta e o projeto será iniciado em seu computador.

<img align="center" src='./public/images/readme/instrucao-terminal.png'>

<img align="center" src='./public/images/readme/instrucao-npm.png'>

<br />

# :sunglasses: Autor <a name="id07"></a>

<br />

Lucas Santana Figueiredo

<div>
 <a href="https://discordapp.com/users/254746660549296128" target="_blank"><img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" target="_blank"></a>
  <a href = "mailto:santanafx@hotmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
  <a href="https://www.linkedin.com/in/lucas-santana-figueiredo/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
  <a href="https://wa.me/5531997915854" target="_blank"><img src=https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white></a>
</div>
