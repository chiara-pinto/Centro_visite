function cambiaPagina(paginaDaChiudere, paginaDaAprire) {
    document.getElementById(paginaDaChiudere).style.display = 'none';
    document.getElementById(paginaDaAprire).style.display = 'block';
}
  
function effettuaPrenotazione() {
    selTipologia = document.querySelector('input[name="selAgenda"]:checked');
    data = document.getElementById('dataPrenotazione');
    ora = document.getElementById('oraPrenotazione');
    nome = document.getElementById('nomePrenotazione');
    // da caricare la prenotazione
}