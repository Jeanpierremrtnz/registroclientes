document.getElementById('clientForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const cedula = document.getElementById('cedula').value;
    const apellidos = document.getElementById('apellidos').value;
    const nombres = document.getElementById('nombres').value;
    const direccion = document.getElementById('direccion').value;
    const correo = document.getElementById('correo').value;
    const fechaNacimiento = document.getElementById('fecha-nacimiento').value;
    const ciudad = document.getElementById('ciudad').value;

    const message = `Cliente registrado:
    Cédula: ${cedula}
    Apellidos: ${apellidos}
    Nombres: ${nombres}
    Dirección: ${direccion}
    Correo: ${correo}
    Fecha de Nacimiento: ${fechaNacimiento}
    Ciudad: ${ciudad}`;

    document.getElementById('message').textContent = message;
});
