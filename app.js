setInterval(() => {
    calc()
    setEverything()
  }, 200);

  var plan1 = "1GB"
  var plan2 = "2GB"
  var plan3 = "3GB"
  var plan4 = "5GB + 10GB DE REGALO"
  var plan5 = "8GB + 10GB DE REGALO"
  var plan6 = "15GB + 10GB DE REGALO"
  var plan7 = "25GB + 10GB DE REGALO"
  var plan8 = "40GB"
  var psdesc1 = 100.00
  var psdesc2 = 200.00
  var psdesc3 = 300.00
  var psdesc4 = 400.00
  var psdesc5 = 500.00
  var psdesc6 = 600.00
  var psdesc7 = 700.00
  var psdesc8 = 800.00
  document.getElementById("i1").placeholder = plan1
  document.getElementById("i2").placeholder = plan2
  document.getElementById("i3").placeholder = plan3
  document.getElementById("i4").placeholder = plan4
  document.getElementById("i5").placeholder = plan5
  document.getElementById("i6").placeholder = plan6
  document.getElementById("i7").placeholder = plan7
  document.getElementById("i8").placeholder = plan8
  document.getElementById("sd1").placeholder = "$" + (Math.round(psdesc1 * 100) / 100).toFixed(2);
  document.getElementById("sd2").placeholder = "$" + (Math.round(psdesc2 * 100) / 100).toFixed(2);
  document.getElementById("sd3").placeholder = "$" + (Math.round(psdesc3 * 100) / 100).toFixed(2);
  document.getElementById("sd4").placeholder = "$" + (Math.round(psdesc4 * 100) / 100).toFixed(2);
  document.getElementById("sd5").placeholder = "$" + (Math.round(psdesc5 * 100) / 100).toFixed(2);
  document.getElementById("sd6").placeholder = "$" + (Math.round(psdesc6 * 100) / 100).toFixed(2);
  document.getElementById("sd7").placeholder = "$" + (Math.round(psdesc7 * 100) / 100).toFixed(2);
  document.getElementById("sd8").placeholder = "$" + (Math.round(psdesc8 * 100) / 100).toFixed(2);
  setEverything()
  var descuento = des()

  function des() {
    var e = document.getElementById("values")
    switch (e.value) {
      case "per50":
        return 50
        break;
      case "per60":
        return 40
        break;
      case "per70":
        return 30
        break;
      case "movi80":
        return 20
        break;
      case "movi85":
        return 15
        break;
      case "movi90":
        return 10
        break;
      default:
        break;
    }
  }

  function resetInputs(){
    var cuit = document.getElementById("cuit").value = ""
    var razon = document.getElementById("razon").value = ""
    var fecha = document.getElementById("fecha").value = ""
    var tel = document.getElementById("telefono").value = ""
    var email = document.getElementById("email").value = ""
    var prestador = document.getElementById("prestador").value = ""
    var dom = document.getElementById("instalacion").value = ""
    var entreCalles = document.getElementById("entreCalles").value = ""
    var planTerreno = document.getElementById("planTerreno").value = ""
    var capacidad = document.getElementById("capacidad").value = ""
    var decos = document.getElementById("decos").value = ""
    var obser = document.getElementById("observacion").value = ""
  }
  function setEverything() {
    descuento = des()
    if (descuento == 50) {
      document.getElementById("titulo").innerText = "Oferta Estandar Personal 50%"
      pDescuento(descuento)
    } else if (descuento == 40) {
      document.getElementById("titulo").innerText = "Campaña Especial Personal 60%, CUIT 2x hasta 9 lineas"
      pDescuento(descuento)
    } else if (descuento == 30) {
      document.getElementById("titulo").innerText = "Campaña Especial Personal 70%, CUIT 2x hasta 9 lineas"
      pDescuento(descuento)
    } else if (descuento == 20) {
      document.getElementById("titulo").innerText = "Oferta Estandar Movistar 80%"
      pDescuento(descuento)
    } else if (descuento == 15) {
      document.getElementById("titulo").innerText = "Oferta Estandar Movistar 85%"
      pDescuento(descuento)
    } else {
      document.getElementById("titulo").innerText = "Campaña Especial Movistar 90%"
      pDescuento(descuento)
    }
  }

  function pDescuento(d) {
    document.getElementById("cd1").placeholder = "$" + (Math.round(((psdesc1 * d) / 100) * 100) / 100).toFixed(2);
    document.getElementById("cd2").placeholder = "$" + (Math.round(((psdesc2 * d) / 100) * 100) / 100).toFixed(2);
    document.getElementById("cd3").placeholder = "$" + (Math.round(((psdesc3 * d) / 100) * 100) / 100).toFixed(2);
    document.getElementById("cd4").placeholder = "$" + (Math.round(((psdesc4 * d) / 100) * 100) / 100).toFixed(2);
    document.getElementById("cd5").placeholder = "$" + (Math.round(((psdesc5 * d) / 100) * 100) / 100).toFixed(2);
    document.getElementById("cd6").placeholder = "$" + (Math.round(((psdesc6 * d) / 100) * 100) / 100).toFixed(2);
    document.getElementById("cd7").placeholder = "$" + (Math.round(((psdesc7 * d) / 100) * 100) / 100).toFixed(2);
    document.getElementById("cd8").placeholder = "$" + (Math.round(((psdesc8 * d) / 100) * 100) / 100).toFixed(2);
  }

  function calc() {
    let q1 = document.getElementById("q1").value;
    let q2 = document.getElementById("q2").value;
    let q3 = document.getElementById("q3").value;
    let q4 = document.getElementById("q4").value;
    let q5 = document.getElementById("q5").value;
    let q6 = document.getElementById("q6").value;
    let q7 = document.getElementById("q7").value;
    let q8 = document.getElementById("q8").value;
    // console.log("pito", q1, q2, q3, q4, q5, q6, q7, q8)
    let r1 = (Math.round((((psdesc1 * descuento) / 100) * q1) * 100) / 100);
    let r2 = (Math.round((((psdesc2 * descuento) / 100) * q2) * 100) / 100);
    let r3 = (Math.round((((psdesc3 * descuento) / 100) * q3) * 100) / 100);
    let r4 = (Math.round((((psdesc4 * descuento) / 100) * q4) * 100) / 100);
    let r5 = (Math.round((((psdesc5 * descuento) / 100) * q5) * 100) / 100);
    let r6 = (Math.round((((psdesc6 * descuento) / 100) * q6) * 100) / 100);
    let r7 = (Math.round((((psdesc7 * descuento) / 100) * q7) * 100) / 100);
    let r8 = (Math.round((((psdesc8 * descuento) / 100) * q8) * 100) / 100);
   
    document.getElementById("r1").value = "$" + r1;
    document.getElementById("r2").value = "$" + r2;
    document.getElementById("r3").value = "$" + r3;
    document.getElementById("r4").value = "$" + r4;
    document.getElementById("r5").value = "$" + r5;
    document.getElementById("r6").value = "$" + r6;
    document.getElementById("r7").value = "$" + r7;
    document.getElementById("r8").value = "$" + r8;
    document.getElementById("rsub").value = "$" + (Math.round((r1 + r2 + r3 + r4 + r5 + r6 + r7 + r8) * 100) / 100).toFixed(2);
    document.getElementById("rtot").value = "$" + (Math.round(((r1 + r2 + r3 + r4 + r5 + r6 + r7 + r8) * 1.33) * 100) / 100).toFixed(2);
   

    // let converval = document.getElementById("convergencia")
    let cant = parseInt(q1)
    let cant2 = parseInt(q2)
    let cant3 = parseInt(q3)
    let cant4 = parseInt(q4)
    let cant5 = parseInt(q5)
    let cant6 = parseInt(q6)
    let cant7 = parseInt(q7)
    let cant8 = parseInt(q8)
    
    var arrr = [q1, q2, q3, q4, q5, q6, q7, q8]
    var suma = 0
    for (let index = 0; index < arrr.length; index++) {
      const element = arrr[index];
      if (element != 0) {
        suma = suma + parseInt(element)
      }
    }
  }