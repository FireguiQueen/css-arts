function CreatCard(nome, desenho){
    return`
    <a href="./${desenho}/Index.html" target="blank">
        <div id="card" style="background-image: url(./images/${desenho}.png);">
            <ul id="draws-name">
                <li>${nome}</li>
            </ul>
        </div>
    </a>
    `
}

var section = document.getElementById('draws');
section.innerHTML = 
CreatCard('Clã Uchiha', 'Uchiha') + 
CreatCard('Cubo', 'cube') + 
CreatCard('Flor', 'flower') + 
CreatCard('Gato', 'cat') + 
CreatCard('Em breve', 'soon') + 
CreatCard('Em breve', 'soon') + 
CreatCard('Em breve', 'soon') + 
CreatCard('Em breve', 'soon') +
CreatCard('Em breve', 'soon') 




