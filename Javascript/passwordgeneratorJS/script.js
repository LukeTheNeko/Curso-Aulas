function password() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzç0123456789!@#$%^&*()';
    const comprimento = Math.floor(Math.random() * 8) + 8;
    
    let password = '';
    
    for (let i = 0; i < comprimento; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      password += caracteres[indice];
    }
    
    return password;
  }
  
  const pass = password();
  console.log(pass);