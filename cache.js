function set(myObject) {
    fetch('https://ws.cipiaceinfo.it/cache/set', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        key: myToken,
      },
      body: JSON.stringify({
        key: myKey,
        value: myObject,
      }),
    })
      .then((r) => r.json())
      .then((r) => {
        console.log('Entra in set');
      });
  }
  
  function get() {
    fetch('https://ws.cipiaceinfo.it/cache/get', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        key: myToken,
      },
      body: JSON.stringify({
        key: myKey,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data.result);
        //myObject = JSON.parse(r.result); // r.result conterrà l'oggetto richiesto
        //table2.render(myObject);
      });
  }
  
const i = setInterval((get) => {    
    console.log("salvataggio ogni 5 minuti"); 
}, 300000);