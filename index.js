function CreatCard(nome, desenho, redirecionamento){
    let PageCard = WhatDraw => window.location.href = `./${WhatDraw}/index.html`;
    return`
    <div id="card" onclick="PageCard(${redirecionamento})" style="background-image: url(./images/${desenho}.png);">
        <ul id="draws-name">
            <li>${nome}</li>
        </ul>
    </div>
    `
}

var section = document.getElementById('draws');
section.innerHTML = 
CreatCard('Clã Uchiha', 'Uchiha', 'Uchiha') + 
CreatCard('Cubo', 'Cube', 'Cubo') + 
CreatCard('Flor', 'Flower', 'Flower') + 
CreatCard('Gato', 'Cat', 'Cat') + 
CreatCard('Clã Uchiha', 'Uchiha', 'Uchiha') + 
CreatCard('Clã Uchiha', 'Uchiha', 'Uchiha') + 
CreatCard('Clã Uchiha', 'Uchiha', 'Uchiha') + 
CreatCard('Clã Uchiha', 'Uchiha', 'Uchiha') 




