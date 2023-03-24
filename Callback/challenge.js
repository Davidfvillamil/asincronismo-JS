const xmlhttprequest = require('xmlhttprequest')
const API = 'https://api.escuelajs.co/api/v1'

function fetchdata (url_api, callback){
    let xhttp = new XMLHttpRequest()

    xhttp.open('GET',url_api,true)
    xhttp.onreadystatechange = function(event){
        if(xhttp.readyState === 4) { //
            // el estado 0 es que no se ha inicializado 
            // el estado 1 es cuando esta Loading
            // el estado 2 es cuaando se mando el estado sent 
            // el estado 3 esta descargando o interactuando con la solicitud 
            // cuando ya esta cargado 
            if(xhttp.status === 200){ // validar que el cervidor respondio de forma correcta
                callback(null, JSON.parse(xhttp.responseText))
            } 
        } else{
            const error = new Error('error' + url_api)
            return callback(error, null)
        }
    }
    xhttp.send()
}