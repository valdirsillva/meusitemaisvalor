var form = document.getElementById("form-contato");
 
if (form.addEventListener) {                   
    form.addEventListener("submit", validaCadastro);
} else if (form.attachEvent) {                  
    form.attachEvent("onsubmit", validaCadastro);
}




 
function validaCadastro(evt){
	var nome = document.getElementById('nome');
	var email = document.getElementById('email');
	var sexo = document.getElementById('sexo');
	var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	var contErro = 
 
 
	/* Validação do campo nome */
	caixa_nome = document.querySelector('.msg-nome');
	if(nome.value == ""){
		caixa_nome.innerHTML = "Favor preencher o Nome";
		caixa_nome.style.display = 'block';
		contErro += 1;
	}else{
		caixa_nome.style.display = 'none';
	}
 
	/* Validação do campo email */
	caixa_email = document.querySelector('.msg-email');
	if(email.value == ""){
		caixa_email.innerHTML = "Favor preencher o E-mail";
		caixa_email.style.display = 'block';
		contErro += 1;
	}else if(filtro.test(email.value)){
		caixa_email.style.display = 'none';
	}else{
		caixa_email.innerHTML = "Formato do E-mail inválido";
		caixa_email.style.display = 'block';
		contErro += 1;
	}	
 
	/* Validação do campo sexo */
	caixa_sexo = document.querySelector('.msg-sexo');
	if(sexo.value == ""){
		caixa_sexo.innerHTML = "Favor preencher o Sexo";
		caixa_sexo.style.display = 'block';
		contErro += 1;
	}else{
		caixa_sexo.style.display = 'none';
	}
	if(contErro){
		evt.preventDefault();
	}
}
