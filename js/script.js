class Persona {
    constructor(nombre, altura, peso) {
        this.nombre = nombre;
        this.altura = altura;
        this.peso = peso;
    }
}

const getPersonaje = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let url = "https://swapi.dev/api/people/" + id;
            let response = await fetch(url);
            let data = await response.json();
            let { name, height, mass } = data;
            let nuevoPersonaje = new Persona(name, height, mass);
            resolve(nuevoPersonaje);
        } catch (error) {
            reject();
        }
    });
};

function* generator1() {
    yield getPersonaje(1);
    yield getPersonaje(2);
    yield getPersonaje(3);
    yield getPersonaje(4);
    yield getPersonaje(5);
}

function* generator2() {
    yield getPersonaje(6);
    yield getPersonaje(7);
    yield getPersonaje(8);
    yield getPersonaje(9);
    yield getPersonaje(10);
}

function* generator3() {
    yield getPersonaje(11);
    yield getPersonaje(12);
    yield getPersonaje(13);
    yield getPersonaje(14);
    yield getPersonaje(15);
}




const gen1 = generator1();
const card1 = document.getElementById("card1");

card1.addEventListener('mouseenter', () => {
    let resultado = gen1.next();
    if(resultado.done){
        console.log('Ha terminado las opciones');
    }else{
        resultado.value
        .then((personaje) => {
            generateCard(personaje ,card1);
        })
        .catch((error) => {
            console.log('Error al consultar el personaje');
        });
    }
    
});

const gen2 = generator2();
const card2 = document.getElementById("card2");

card2.addEventListener('mouseenter', () => {
    let resultado = gen2.next();
    if(resultado.done){
        console.log('Ha terminado las opciones');
    }else{
        resultado.value
        .then((personaje) => {
            generateCard(personaje, card2);
        })
        .catch((error) => {
            console.log('Error al consultar el personaje');
        });
    }
    
});

const gen3 = generator3();
const card3 = document.getElementById("card3");


card3.addEventListener('mouseenter', () => {
    let resultado = gen3.next();
    if(resultado.done){
        console.log('Ha terminado las opciones');
    }else{
        resultado.value
        .then((personaje) => {
            generateCard(personaje, card3);
        })
        .catch((error) => {
            console.log('Error al consultar el personaje');
        });
    }
    
});

function generateCard(personaje, container){
    const card = document.createElement("div");
    card.className = "cardPersonaje";

    const title = document.createElement("h2");
    title.textContent = personaje.nombre;

    const height = document.createElement("p");
    height.textContent = `Altura: ${personaje.altura}`;

    const mass = document.createElement("p");
    mass.textContent = `Peso: ${personaje.peso}`;

    card.appendChild(title);
    card.appendChild(height);
    card.appendChild(mass);

    container.appendChild(card);
}