function converter() {
    var valor = parseFloat(document.getElementById("valor").value);
    var unidadeDe = document.getElementById("unidadeDe").value;
    var unidadePara = document.getElementById("unidadePara").value;
    var resultado = document.getElementById("resultado");
  
    if (isNaN(valor)) {
      alert("Por favor, insira um valor válido.");
      return;
    }
  
    var fatores = {
      cm: {
        m: 0.01,
        km: 0.00001,
        in: 0.3937,
        ft: 0.0328,
        yd: 0.0109
      },
      m: {
        cm: 100,
        km: 0.001,
        in: 39.3701,
        ft: 3.2808,
        yd: 1.0936
      },
      km: {
        cm: 100000,
        m: 1000,
        in: 39370.1,
        ft: 3280.84,
        yd: 1093.61
      },
      in: {
        cm: 2.54,
        m: 0.0254,
        km: 0.0000254,
        ft: 0.0833,
        yd: 0.0278
      },
      ft: {
        cm: 30.48,
        m: 0.3048,
        km: 0.0003048,
        in: 12,
        yd: 0.3333
      },
      yd: {
        cm: 91.44,
        m: 0.9144,
        km: 0.0009144,
        in: 36,
        ft: 3
      }
    };
  
    if (unidadeDe === unidadePara) {
      resultado.textContent = "As unidades selecionadas são iguais. Nenhuma conversão é necessária.";
    } else if (fatores[unidadeDe] && fatores[unidadeDe][unidadePara]) {
      var fator = fatores[unidadeDe][unidadePara];
      var resultadoValor = valor * fator;
      resultado.textContent = valor + " " + unidadeDe + " equivale a " + resultadoValor + " " + unidadePara;
    } else {
      alert("Não foi possível realizar a conversão. Por favor, verifique as unidades selecionadas.");
    }
  }
  