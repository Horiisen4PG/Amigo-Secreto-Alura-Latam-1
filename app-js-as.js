// Lista de amigos
const amigos = [];

// Agrega un amigo a la lista si el nombre es válido y único
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

// Elimina un amigo de la lista por índice
function eliminarAmigo(index) {
    const amigoEliminado = amigos.splice(index, 1)[0];
    alert(`Amigo eliminado: ${amigoEliminado}`);
    mostrarAmigos();
}

// Muestra la lista de amigos en el DOM
function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        // Botón para eliminar amigo
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.addEventListener('click', () => eliminarAmigo(index));
        li.appendChild(botonEliminar);
        lista.appendChild(li);
    });
}

// Realiza el sorteo del amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Necesitas al menos dos amigos para sortear.');
        return;
    }

    // Selecciona un amigo secreto aleatorio
    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    const resultadoSorteo = document.getElementById('resultadoSorteo');
    resultadoSorteo.innerHTML = `<p>Tu amigo secreto es: <strong>${amigoSecreto}</strong></p>`;
}

// Reinicia el sorteo (limpia el resultado en el DOM)
function reiniciarSorteo() {
    const resultadoSorteo = document.getElementById('resultadoSorteo');
    resultadoSorteo.innerHTML = '<p>El sorteo ha sido reiniciado.</p>';
// limpia el resultado del sorteo
    amigos.length = 0;
    mostrarAmigos();
}
