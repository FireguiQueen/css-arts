function CreatCard(nome, desenho){
    return`
    <a href="./${desenho}/index.html" target="blank">
        <div id="card" style="background-image: url(./images/${desenho}.png);">
            <ul id="draws-name">
                <li>${nome}</li>
            </ul>
        </div>
    </a>
    `
}

const draws = [
    {
        name: "Clã Uchiha",
        file: 'Uchicha'
    },
    {
        name: "Cubo",
        file: 'Cube'
    },
    {
        name: "Flor",
        file: 'Flower'
    },
    {
        name: "Gato",
        file: 'Cat'
    },
    {
        name: "Eric Cartman",
        file: 'Eric-Cartman'  
    }, 
    {
        name: "Gumball",
        file: 'Gumball'
    },
    {
        name: "Em breve",
        file: 'Soon'   
    }
];
const drawListLength = draws.length; 

const section = document.getElementById('draws');
for (let i = 0; i < drawListLength; i++)
{
    const {name, file} = draws[i];
    section.innerHTML += CreatCard(name, file);
}

