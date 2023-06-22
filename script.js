let inicioDeCalculadora = inicioCalculadora()

function inicioCalculadora() {
    let nombre = prompt('Ingrese su Nombre')
    let apellido = prompt('Ingrese su Apellido')
    let dni = Number(prompt("Ingrese su DNI"))
    if (isNaN(dni)) {
        alert("Por favor ingrese su DNI sin puntos ni espacios")
        inicioCalculadora()
    } else if (dni === 0) {
        alert("Por favor ingrese su DNI sin puntos ni espacios")
        inicioCalculadora()
    } else {
        alert('Bienvenido/a ' + nombre + ' ' + apellido + ' ' + "DNI: " + dni + ' a la calculadora de divisas \nAFIP le agradece sus datos. ')
    }
}

let divisa = [
    { id: 1, nombre: 'dolares', continente: 'américa', pais: 'eeuu', valorBlue: 500 },
    { id: 2, nombre: 'euro', continente: 'europa', pais: 'union europea', valorBlue: 540 },
    { id: 3, nombre: 'real', continente: 'américa', pais: 'brasil', valorBlue: 91 }
]

let funcionSeleccionContinente = seleccionContinente()

function seleccionContinente() {
    let respuestaContinente = Number(prompt('De qué continente desea buscar divisas?\n(Ingrese sólo números) \n 1) América \n 2) Europa \n 3) Asia \nClick en "Cancel" para salir'))
    if (isNaN(respuestaContinente)) {
        alert('Ingrese sólo números')
        seleccionContinente()
    } else if (respuestaContinente > 3) {
        alert('Ingrese sólo números de las opciones en pantalla')
        seleccionContinente()
    }

    let continenteElegido = divisa.find(divisa => divisa.id === respuestaContinente)

    if (continenteElegido) {
        if (continenteElegido.id === 1) {
            seleccionDivisas()
        } else if (continenteElegido.id === 2) {
            validarDatosEuro()
        } else if (continenteElegido.id === 3) {
            validarDatosYen()
        } else {
            alert('Continente no encontrado. Por favor, ingrese un continente válido.')
            seleccionContinente()
        }
    }
}

function seleccionDivisas() {
    let seleccionDivisa = prompt('Selecciona la divisa que deseas convertir a pesos argentinos: \n 1) Dólares \n 2) Reales \n 0) Para volver al menú anterior \nClick en "Cancel" para Salir').toLowerCase()

    if (seleccionDivisa === '1' || seleccionDivisa === 'dólares' || seleccionDivisa === 'dolares') {
        validarDatosDolares()
    } else if (seleccionDivisa === '2' || seleccionDivisa === 'reales') {
        validarDatosReales()
    } else if (seleccionDivisa === '0') {
        seleccionContinente()
    } else {
        alert('Opción inválida. Por favor, elija una opción válida.')
    }
}

function validarDatosDolares() {
    let intentos = 0
    let cambio

    while (intentos < 3) {

        cambio = prompt('Qué desea convertir? \n (1 U$D = $500) \n (D) Dólares americanos a pesos argentinos \n (P) Pesos argentinos a dólares americanos \nIngrese 0 para volver al menú anterior').toUpperCase()

        if (cambio === "D") {
            cambioDolar()
        } else if (cambio === "P") {
            cambioPesos()
        } else if (cambio === "0") {
            seleccionDivisas()
        } else {
            alert('ingrese solo "D" o "P" sin comillas')
            intentos++
        }
    }

    if (intentos === 3) {
        alert('La "D" está junto a la "S" y la "P" está pegada a la "O", no es tan difícil')
        validarDatosDolares()
    }
}

function cambioDolar() {

    let dolar = Number(prompt('Ingrese la cantidad de dólares sin decimales o "0" para voler al menú'))

    if (isNaN(dolar)) {
        alert('ingrese cifra numerica')
        cambioDolar()
    } else if (dolar === 0) {
        validarDatosDolares()
    } else {
        alert('La cantidad en pesos sería de ' + (dolar * 500))
    }
}

function cambioPesos() {

    let pesos = Number(prompt('Ingrese la cantidad de pesos sin decimales o "0" para voler al menú'))

    if (isNaN(pesos)) {
        alert('ingrese cifra numerica')
        cambioPesos()
    } else if (pesos === 0) {
        validarDatos()
    } else {
        alert('La cantidad en dolar blue sería de' + ' ' + (pesos / 500))
    }
}

function validarDatosReales() {
    let intentos = 0
    let cambio

    while (intentos < 3) {

        cambio = prompt('Qué desea convertir? \n (1 Real = $91) \n (R) Reales a pesos argentinos \n (P) Pesos argentinos a Reales \nIngrese 0 para volver al menú anterior').toUpperCase()

        if (cambio === "R") {
            cambioReal()
        } else if (cambio === "P") {
            cambioPesosReales()
        } else if (cambio === "0") {
            seleccionDivisas()
        } else {
            alert('ingrese solo "R" o "P" sin comillas')
            intentos++
        }
    }

    if (intentos === 3) {
        alert('La "R" está junto a la "T" y la "P" está pegada a la "O", no es tan difícil')
        validarDatosDolares()
    }
}

function cambioReal() {

    let real = Number(prompt('Ingrese la cantidad de Reales sin decimales o "0" para voler al menú'))

    if (isNaN(real)) {
        alert('ingrese cifra numerica')
        cambioReal()
    } else if (real === 0) {
        validarDatosReales()
    } else {
        alert('La cantidad en pesos sería de ' + (real * 91))
    }
}

function cambioPesosReales() {

    let pesos = Number(prompt('Ingrese la cantidad de pesos sin decimales o "0" para voler al menú'))

    if (isNaN(pesos)) {
        alert('ingrese cifra numerica')
        cambioPesosReales()
    } else if (pesos === 0) {
        validarDatos()
    } else {
        alert('La cantidad en Real Blue sería de' + ' ' + (pesos / 91))
    }
}

function validarDatosEuro() {
    let intentos = 0
    let cambio

    while (intentos < 3) {

        cambio = prompt('Qué desea convertir? \n (1 Euro = $540) \n (E) Euros a pesos argentinos \n (P) Pesos argentinos a Euros \nIngrese 0 para volver al menú anterior').toUpperCase()

        if (cambio === "E") {
            cambioEuro()
        } else if (cambio === "P") {
            cambioPesosEuros()
        } else if (cambio === "0") {
            seleccionContinente()
        } else {
            alert('ingrese solo "E" o "P" sin comillas')
            intentos++
        }
    }

    if (intentos === 3) {
        alert('La "E" está junto a la "R" y la "P" está pegada a la "O", no es tan difícil')
        validarDatosDolares()
    }
}

function cambioEuro() {

    let euro = Number(prompt('Ingrese la cantidad de Euros sin decimales o "0" para voler al menú'))

    if (isNaN(euro)) {
        alert('ingrese cifra numerica')
        cambioEuro()
    } else if (euro === 0) {
        validarDatosEuro()
    } else {
        alert('La cantidad en pesos sería de ' + (euro * 540))
    }
}

function cambioPesosEuros() {

    let pesos = Number(prompt('Ingrese la cantidad de pesos sin decimales o "0" para voler al menú'))

    if (isNaN(pesos)) {
        alert('ingrese cifra numerica')
        cambioPesosEuros()
    } else if (pesos === 0) {
        validarDatos()
    } else {
        alert('La cantidad en Euro Blue sería de' + ' ' + (pesos / 540))
    }
}

function validarDatosYen() {
    alert("Disculpe, por el momento esta función no se encuentra disponible")
    seleccionContinente()
}