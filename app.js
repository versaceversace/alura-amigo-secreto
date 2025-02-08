let amigos = []; // Array para almacenar los nombres de los amigos

function agregarAmigo() {
  let inputNombre = document.getElementById('amigo');
  let nuevoAmigo = inputNombre.value.trim();
  // Validar si el campo está vacío
  if (nuevoAmigo === '') {
    alert('Por favor, ingrese un nombre.');
    return;
  }
  if (amigos.includes(nuevoAmigo)){
    alert(`¡${nuevoAmigo} ese nombre ya fue registrado`);
    return;
  }
  amigos.push(nuevoAmigo);
  // Limpiar el campo de texto
  inputNombre.value = '';
  console.log(amigos);
  mostrarListaAmigos();  // Actualizar la lista de amigos al agregar un nuevo amigo
}
mostrarListaAmigos(); 
function mostrarListaAmigos() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';
  amigos.forEach((amigo) => {
    const li = document.createElement('li');
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert('No hay amigos para sortear, agregue uno');
    return;
  }
  if (amigos.length < 2) {
    alert('No hay suficientes amigos para realizar este sorteo (min. 3)');
    return;
  }
  const randomizar = Math.floor(Math.random() * amigos.length); // Escogemos aleatoriamente alguien del array
  const amigoSorteado = amigos[randomizar]; // Obtenemos el resultado del call anterior y lo guardamos en una variable 
  document.getElementById('resultado').innerHTML = `El amigo seleccionado es: ${amigoSorteado}`;
  // alert(`El amigo seleccionado es: ${amigoSorteado}`);
}