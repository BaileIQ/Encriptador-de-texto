const ingresoTexto = document.getElementById("ingresoTexto"); 

const botonEncriptar = document.getElementById("botonEncriptar");

const botonDesencriptar = document.getElementById("botonDesencriptar");

const botonCopiar = document.getElementById("botonCopiar");

const mensajeFinal = document.getElementById("mensajeFinal");

const munheco = document.getElementById("munheco");

const RightInfo = document.getElementById("RightInfo");

const Right = document.getElementById("Right");
let reemplazar=[
    ["e", "enter"], 
    ["o", "ober"],
    ["i","imes"],
    ["a", "ai"],
    ["u", "ufat"],

]

const remplace = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor;

    munheco.style.display = "none";
    RightInfo.style.display = "none";
    botonCopiar.style.display = "block";
    Right.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar")


}


botonEncriptar.addEventListener("click", () =>{
    const texto = ingresoTexto.value.toLowerCase()
    function encriptar(newText){
        for (let i = 0; i < reemplazar.length; i++){
            if (newText.includes(reemplazar[i][0])){
                newText = newText.replaceAll(reemplazar[i][0], reemplazar[i][1]);
            };
        };
        return newText
    }
    //const textoEncriptado = encriptar(texto);

    remplace( encriptar(texto));

});
botonDesencriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    function desencriptar(newText){
        for (let i = 0; i < reemplazar.length; i++){
            if (newText.includes(reemplazar[i][1])) {
                newText = newText.replaceAll(reemplazar[i][1], reemplazar[i][0]);
            };
        };
        return newText
    }
    const textoDesencriptado = desencriptar(texto);
    remplace(desencriptar(texto)) 
});

botonCopiar.addEventListener("click", () => {
    let texto = mensajeFinal;
    //navigator.clipboard.writeText(texto.value);
    texto.select();
    document.execCommand('copy')
    alert("Texto fue copiado")
})

