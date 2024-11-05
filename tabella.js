document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
  
    if (!container) {
      console.error("L'elemento container non esiste.");
      return;
    }
  
    const tableHTML = ` 
      <table class="table mt-3">
        <thead>
          <tr>
            <th>Orario</th>
            <th>Lunedì</th>
            <th>Martedì</th>
            <th>Mercoledì</th>
            <th>Giovedì</th>
            <th>Venerdì</th>
          </tr>
        </thead>
        <tbody id="schedule-container">
        </tbody>
      </table>
    `;
  
    container.innerHTML = tableHTML;
  
    const scheduleContainer = document.getElementById('schedule-container');
  
    function caricaPrenotazioni() {
      const prenotazioni = [
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
      ];
  
      const orari = ['8:00', '9:00', '10:00', '11:00', '12:00'];
      let rowsHTML = '';
  
      orari.forEach((orario, index) => {
        rowsHTML += `
          <tr>
            <td>${orario}</td>
            <td>${prenotazioni[0][index]}</td>
            <td>${prenotazioni[1][index]}</td>
            <td>${prenotazioni[2][index]}</td>
            <td>${prenotazioni[3][index]}</td>
            <td>${prenotazioni[4][index]}</td>
          </tr>
        `;
      });
      console.log(rowsHTML); // Debug: verifica che le righe HTML siano corrette
      scheduleContainer.innerHTML = rowsHTML;
    }
  
    caricaPrenotazioni();
});