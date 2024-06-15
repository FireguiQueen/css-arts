function CreatCard(nome, desenho)
{
    return`
    <a href="./src/draws/${desenho}/index.html" target="blank">
        <div id="card" style="background-image: url(./src/assets/card-background/${desenho}.png);">
            <ul id="draws-name">
                <li>${nome}</li>
            </ul>
        </div>
    </a>`
}

const draws = [
    {
        name: "Clan Uchiha",
        file: 'uchiha'
    },
    {
        name: "Cube",
        file: 'cube'
    },
    {
        name: "Flower",
        file: 'flower'
    },
    {
        name: "Cat",
        file: 'cat'
    },
    {
        name: "Eric Cartman",
        file: 'eric-cartman'
    }, 
    {
        name: "Gumball",
        file: 'gumball'
    },
    {
        name: "Soon",
        file: 'soon'
    }
];
const drawListLength = draws.length; 

const section = document.getElementById('draws');
for (let i = 0; i < drawListLength; i++)
{
    const {name, file} = draws[i];
    section.innerHTML += CreatCard(name, file);
}