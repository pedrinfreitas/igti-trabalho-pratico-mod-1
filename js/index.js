const atualizarCor = () => {

  let counts = document.querySelectorAll('input[type="text"]');
  let cores = Array.from(document.querySelectorAll('input[type="range"]'));

  let rgb = cores.map((e, i) => {
    counts[i].value = e.value;
    return e.value;
  })

  let corPrincipal = document.getElementById('cor');
  corPrincipal.style.backgroundColor = `rgb(${rgb.join()})`;

}

window.addEventListener("load", () => atualizarCor());
window.addEventListener("input", () => atualizarCor());