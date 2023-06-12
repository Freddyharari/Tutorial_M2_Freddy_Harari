function trazerNome() {
    var xhr = new XMLHttpRequest();
    var TblUSER;
    var nomesUsuarios;
  
    xhr.open('GET', 'http://127.0.0.1:3005/usuarios', true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          TblUSER = JSON.parse(xhr.responseText);
          nomesUsuarios = TblUSER.map(usuario => usuario.NOME);
          document.getElementById('nameID').textContent = nomesUsuarios;
          console.log(xhr)
          console.log(TblUSER)
          console.log(nomesUsuarios)
        }
      }
    };
    xhr.send();
  }
  