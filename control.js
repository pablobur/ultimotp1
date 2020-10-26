function validateForm() {
	var formUsuario = document.forms["form1"]["usuario"].value;
	var formContraseña = document.forms["form1"]["contraseña"].value;

	if (formUsuario == "") {
		alert("Ingrese un usuario por favor");
		return false;
	}
	if(formContraseña == ""){
		alert("Inserte una contraseña");
		return false;
	}

	if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(form1.usuario.value)){
		return (true)
	}
	alert("Ese formato de usuario no es válido")
	return (false)

}