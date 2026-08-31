console.log("Hello World Star Wars");

async function obtenerPersonajes() {
    const response = await fetch("https://swapi.dev/api/people/");
    const data = await response.json();
    console.log('Personajes:', data.results);
    return data.results;
}

function pintarPersonajes(personajes) {
    console.log("Pintando personajes:", personajes);
    let tarjetasHTML = "";
    console.log("Tarjetas HTML:", tarjetasHTML);
    personajes.forEach(personaje => {
        tarjetasHTML += `
        <div class="card">
            <h3>${personaje.name}</h3>
            <p class="birth-year">Nacimiento: ${personaje.birth_year}</p>
            <p class="gender">Género: ${personaje.gender}</p>
            <p class="height">Altura: ${personaje.height} cm</p>
        </div>
        `;
    });
    document.getElementById("main-container").innerHTML = tarjetasHTML;
}

obtenerPersonajes().then(pintarPersonajes);