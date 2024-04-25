
//validar a snha
var register = document.getElementById("register")
register.addEventListener("submit", function (event){
    event.preventDefault()
    var senha = event.target.passoword
    var senha2 = event.target.confirmepassword
    if (senha.value === senha2.value) {
        senha.classList.add("valided")
        senha.classList.remove("invalid")
        console.log(senha.classList)
        senha2.classList.add("valided")
        senha2.classList.remove("invalid")
    }
    else {
        senha.classList.add("invalid")
        senha.classList.remove("valided")
        alert("ESCREVE CERTO SEU MERDA")
        senha2.classList.add("invalid")
        senha2.classList.remove("valided")
    }
})

//cpf
document.getElementById('cpf').addEventListener('input', function(e) {
    var value = e.target.value;
    var cpfPattern = value.replace(/\D/g, '') // Remove qualquer coisa que não seja número
                          .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o terceiro dígito
                          .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o sexto dígito
                          .replace(/(\d{3})(\d)/, '$1-$2') // Adiciona traço após o nono dígito
                          .replace(/(-\d{2})\d+?$/, '$1'); // Impede entrada de mais de 11 dígitos
    e.target.value = cpfPattern;
  });
  //acaba o cpf

  //telefone
  const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }
  
  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }