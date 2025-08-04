const amigos = [];

function agregarAmigo() {
    const nombreAmigo = document.getElementById('amigo').value.trim();
    if (nombreAmigo && !amigos.includes(nombreAmigo)) {
        amigos.push(nombreAmigo);
        document.getElementById('amigo').value = '';
        console.log('Amigo agregado:', nombreAmigo);
        mostrarAmigos();
    } else {
        alert('Por favor, ingresa un nombre válido y único.');
    }
}

function eliminarAmigo(index) {
    const amigoEliminado = amigos.splice(index, 1) [0];
      alert(`Amigo eliminado: ${amigoEliminado}`);
    mostrarAmigos();
}

function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.addEventListener('click', () => eliminarAmigo(index));
        li.appendChild(botonEliminar);
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Necesitas al menos dos amigos para sortear.');
        return;
    }

     const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    const resultadoSorteo = document.getElementById('resultadoSorteo');
    resultadoSorteo.innerHTML = `<p>Tu amigo secreto es: <strong>${amigoSecreto}</strong></p>`;
}

    for (let i = 0; i < amigosSorteados.length; i++) {
        const amigo = amigosSorteados[i];
        let amigoSecreto;
        do {
            amigoSecreto = amigosSorteados[(i + 1) % amigosSorteados.length];
        } while (amigo === amigoSecreto);
        resultados[amigo] = amigoSecreto;
    }

    const resultadoSorteo = document.getElementById('resultadoSorteo');
    resultadoSorteo.innerHTML = '';

    for (const [amigo, amigoSecreto] of Object.entries(resultados)) {
        const div = document.createElement('div');
        div.textContent = `${amigo} ha sacado a ${amigoSecreto}`;
        resultadoSorteo.appendChild(div);
    }

    {
    console.log('Resultados del sorteo:', resultados);
    alert('Sorteo realizado con éxito. Revisa los resultados.');
}

function reiniciarSorteo() {
    const resultadoSorteo = document.getElementById('resultadoSorteo');
    resultadoSorteo.innerHTML = '';
}
