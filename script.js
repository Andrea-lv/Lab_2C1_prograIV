let contador = 0;

// 1. click
document.getElementById("btnClick").addEventListener("click", function() {
    alert("Botón presionado");
});

// 2. input
document.getElementById("inputTexto").addEventListener("input", function() {
    console.log("Texto actual:", this.value);
});

// 3. mouseover
document.getElementById("cajaMouse").addEventListener("mouseover", function() {
    this.style.backgroundColor = "yellow";
});

// 4. mouseout
document.getElementById("cajaMouse").addEventListener("mouseout", function() {
    this.style.backgroundColor = "lightgray";
});

// 5. change
document.getElementById("selectColor").addEventListener("change", function() {
    document.body.style.backgroundColor = this.value;
});

// 6. submit
document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Formulario enviado correctamente");
});

// 7. keydown
document.getElementById("numero").addEventListener("keydown", function() {
    contador++;
    document.getElementById("contador").textContent = "Contador: " + contador;
});

// 8. dblclick
document.getElementById("btnDobleClick").addEventListener("dblclick", function() {
    this.style.backgroundColor = "purple";
});
