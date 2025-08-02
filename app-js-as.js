// Crear un codigo para seleccionar un amigo secreto, con if, else,array para almacenar los nombres, función para agregar amigos,  una función para sortear los amigos utilizando el html de manera correcta.

const amigos = [];

function agregarAmigo() {
    const nombreAmigo = document.getElementById('amigo').value.trim();
    if (nombreAmigo) {
        amigos.push(nombreAmigo);
        document.getElementById('amigo').value = '';
        console.log('Amigo agregado:', nombreAmigo);
        mostrarAmigos();
    } else {
        console.log('Por favor, ingresa un nombre válido.');
    }
}

function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para agregar amigos al array, y se muestren en la pagina web utilizando este html <button class="button-add" onclick="agregarAmigo()">Añadir</button>
// guiandose de este html <input type="text" id="nombreAmigo" placeholder="Nombre del amigo" />

function sortearAmigo() {
    if (amigos.length < 2) {
        console.log('Necesitas al menos dos amigos para sortear.');
        return;
    }

    const amigosSorteados = amigos.sort(() => Math.random() - 0.5);
    const resultados = {};

    for (let i = 0; i < amigosSorteados.length; i++) {
        const amigo = amigosSorteados[i];
        const amigoSecreto = amigosSorteados[(i + 1) % amigosSorteados.length];
        resultados[amigo] = amigoSecreto;
    }

    const resultadoSorteo = document.getElementById('resultadoSorteo');
    resultadoSorteo.innerHTML = '';

    for (const [amigo, amigoSecreto] of Object.entries(resultados)) {
        const div = document.createElement('div');
        div.textContent = `${amigo} ha sacado a ${amigoSecreto}`;
        resultadoSorteo.appendChild(div);
    }

    console.log('Resultados del sorteo:', resultados);
}


// debe elegir a un solo amigo secreto de la lista de amigos y mostrarlo en la pagina web utilizando el html como su guia. y que solo sea ese amigo en la pagina web, y que se muestre en el html <div id="resultadoSorteo"></div>

function elegirAmigoSecreto() {
    if (amigos.length < 2) {
        console.log('Necesitas al menos dos amigos para elegir un amigo secreto.');
        return;
    }

    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    const resultadoSorteo = document.getElementById('resultadoSorteo');
    resultadoSorteo.innerHTML = `<p>Tu amigo secreto es: <strong>${amigoSecreto}</strong></p>`;
}


// app.js
