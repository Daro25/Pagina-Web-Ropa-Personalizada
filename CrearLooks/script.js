
function cambiarSuperior() {
    const src = document.getElementById('canvas1B').toDataURL();
    const content = document.getElementById("super");
    content.src = src;
  }
  function cambiarSuperiorUp() {
    const src = document.getElementById('canvas3B').toDataURL();
    const content = document.getElementById("superUp");
    content.src = src;
  }
  
  function cambiarInferior() {
    const src = document.getElementById('canvas2B').toDataURL();
    const content = document.getElementById("infer");
    content.src = src;
  }
  function deletesup() {
    const content = document.getElementById("super");
    content.src = '';
  }
  function deletesupUp() {
    const content = document.getElementById("superUp");
    content.src = '';
  }
  function deleteinf() {
    const content = document.getElementById("infer");
    content.src = '';
  }