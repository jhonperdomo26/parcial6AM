function registro() {
    var nombre = document.getElementById("nombre").value;

    var email = document.getElementById("email").value;

    var apellidos = document.getElementById("apellidos").value;

    var telefono = document.getElementById("telefono").value;

    var estrato = document.getElementById("estrato").value;
        
    alert("Nombre: " + nombre + "\nApellidos: " + apellidos
    + "\nCorreo: " + email + "\nTelefono: " + telefono + "\nEstrato: " + estrato);
}