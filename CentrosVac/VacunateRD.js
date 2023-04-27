  javascript:(function() {
    function seleccionarDPS() {
      const selectElement = document.querySelector('#dps');
      if (selectElement) {
        selectElement.value = 'SAN JUAN'; //<--- Selecciona tu DPS (pueden buscarlo desde f12 y recuerda eliminar este comentario).
        const event = new Event('change', { bubbles: true });
        selectElement.dispatchEvent(event);
      }
    }
  
    function Pbutton() {
      const filtrarBtn = document.querySelector('.btn.btn-primary.btn-block');
      if (filtrarBtn) {
        filtrarBtn.click();
      }
    }
  
    function AccionKey(event) {
      const tecla = 'X'; //<--- Tecla de accion y recuerda eliminar este comentario.
      const elementoActivo = document.activeElement;
  
      if (
        elementoActivo.tagName === 'INPUT' ||
        elementoActivo.tagName === 'TEXTAREA' ||
        elementoActivo.isContentEditable
      ) {
        return;
      }
  
      if (event.key.toUpperCase() === tecla.toUpperCase()) {
        seleccionarDPS();
        Pbutton();
      }
    }
  
    document.addEventListener('keydown', AccionKey);
  })();