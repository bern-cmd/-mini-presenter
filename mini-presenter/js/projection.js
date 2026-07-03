const canciones = [
    {
        nombre: "Alabaré",
        letra: `Alabaré, alabaré,
alabaré a mi Señor.

Juan vio el número
de los redimidos
y todos alababan
al Señor.`
    },

    {
        nombre: "Grande y Fuerte",
        letra: `Grande y fuerte
es nuestro Dios.

Vestido de poder,
con gloria y majestad.`
    }
];

const lista = document.getElementById("canciones");
const preview = document.getElementById("contenido-preview");
const slides = document.getElementById("slides");

canciones.forEach(cancion => {

    const li = document.createElement("li");
    li.textContent = cancion.nombre;

    li.onclick = () => mostrarCancion(cancion);

    lista.appendChild(li);

});

function mostrarCancion(cancion) {

    slides.innerHTML = "";

    const partes = cancion.letra.split("\n\n");

    partes.forEach((parte, indice) => {

        const slide = document.createElement("div");

        slide.className = "slide";
        slide.textContent = `Diapositiva ${indice + 1}`;

        slide.onclick = () => {
            texto.textContent = parte;
        };

        slides.appendChild(slide);

    });

    // Mostrar la primera por defecto
    preview.textContent = partes[0];
}

let ventanaProyeccion = null;

function abrirProyeccion() {

    ventanaProyeccion = window.open(
        "",
        "proyeccion",
        "width=1280,height=720"
    );

    ventanaProyeccion.document.write(`
        <html>
        <head>
            <title>Proyección</title>

            <style>
                body{
                    margin:0;
                    background:black;
                    color:white;

                    display:flex;
                    justify-content:center;
                    align-items:center;

                    height:100vh;

                    font-size:60px;
                    text-align:center;

                    font-family:Arial;
                    padding:50px;
                }
            </style>

        </head>

        <body>

            <div id="contenido">
                Esperando diapositiva...
            </div>

        </body>
        </html>
    `);

}

slide.onclick = () => {

    // Actualiza el panel rojo
   preview.textContent = parte;

    // Actualiza la ventana de proyección
    if (ventanaProyeccion) {

        ventanaProyeccion
            .document
            .getElementById("contenido")
            .textContent = parte;

    }

};