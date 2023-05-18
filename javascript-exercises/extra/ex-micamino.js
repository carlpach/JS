const miCamino = {
    inicio: "dar el primer paso.",
    objetivo:
      "recorrer los 14 ochomiles y llegar hasta la cima del mundo: el Everest.",
    material: [
      {
        nombre: "Piolets",
        descripcion:
          "un instrumento usado en alpinismo para asegurarse en el hielo o la nieve; consiste en una especie de pico de metal con el extremo del mango afilado.",
        imagenes: [
          {
            imagen1: {
              url: "has conseguido acceder a la primera imagen del piolet",
            },
          },
          {
            imagen2: {
              url: "has conseguido acceder a la segunda imagen del piolet",
            },
          },
        ],
      },
      {
        nombre: "Crampones",
        descripcion:
          "una pieza de metal con púas que se sujeta a la suela de la bota para escalar o caminar sobre el hielo o la nieve.",
        imagenes: [
          {
            imagen1: {
              url: "has conseguido acceder a la primera imagen de los crampones",
            },
          },
          {
            imagen2: {
              url: "has conseguido acceder a la segunda imagen de los crampones",
            },
          },
        ],
      },
      {
        nombre: "Cuerdas",
        descripcion:
          "un objeto delgado, muy alargado y flexible, hecho de hilos o fibras torcidos o entrelazados, que se usa generalmente para atar o sujetar cosas.",
        imagenes: [
          {
            imagen1: {
              url: "has conseguido acceder a la primera imagen de la cuerda",
            },
          },
          {
            imagen2: {
              url: "has conseguido acceder a la segunda imagen de la cuerda",
            },
          },
        ],
      },
      {
        nombre: "Mochila",
        descripcion:
          "una bolsa para transportar provisiones en excursiones, viajes u otro tipo de desplazamientos, que está confeccionada con tela resistente y a menudo impermeable y se lleva colgada a la espalda por medio de correas.",
        imagenes: [
          {
            imagen1: {
              url: "has conseguido acceder a la primera imagen de la mochila",
            },
          },
          {
            imagen2: {
              url: "has conseguido acceder a la segunda imagen de la mochila",
            },
          },
        ],
      },
    ],
    cimas: [
      {
        nombre: "K2",
        altitud: 8.611,
        localizacion: "China/Pakistan",
      },
      {
        nombre: "Kangchenjunga",
        altitud: 8.586,
        localizacion: "India/Nepal",
      },
      {
        nombre: "Lhotse",
        altitud: 8.516,
        localizacion: "Nepal/Tibet",
      },
      {
        nombre: "Makalu",
        altitud: 8.463,
        localizacion: "Nepal/Tibet",
      },
      {
        nombre: "Cho Oyu",
        altitud: 8.201,
        localizacion: "Nepal/Tibet",
      },
      {
        nombre: "Dhaulagiri",
        altitud: 8.167,
        localizacion: "Nepal/Tibet",
      },
      {
        nombre: "Manaslu",
        altitud: 8.163,
        localizacion: "Nepal",
      },
      {
        nombre: "Nanga Parbat",
        altitud: 8.125,
        localizacion: "Pakistan",
      },
      {
        nombre: "Annapurna",
        altitud: 8.091,
        localizacion: "Nepal",
      },
      {
        nombre: "Gasherbrum I",
        altitud: 8.068,
        localizacion: "Pakistan/China",
      },
      {
        nombre: "Broad Peak",
        altitud: 8.846,
        localizacion: "Nepal/Tibet",
      },
      {
        nombre: "Gasherbrum II",
        altitud: 8.035,
        localizacion: "Pakistan/China",
      },
      {
        nombre: "Shisha Pangma",
        altitud: 8.027,
        localizacion: "Tibet",
      },
      {
        nombre: "Everest",
        altitud: 8.846,
        localizacion: "Nepal/Tibet",
      },
    ],
    subiendoAlEverest: [
      [
        {
          campoBase: [
            {
              campoI: {
                campoII: {
                  campoIII: {
                    campoIV: [
                      "Tranquilo",
                      "lo",
                      "peor",
                      "ha",
                      "pasado",
                      8.846,
                      "ya.",
                      "¡Animo!",
                      {
                        cima: "¡Enhorabuena!, probablemente no seas el primero en llegar hasta aquí, pero estas con la programación, no con el alpinismo.",
                      },
                    ],
                  },
                },
              },
            },
          ],
        },
      ],
    ],
  };
console.log(`Lo mas importante es ${miCamino.inicio}`);
console.log(`Lo mas importante es ${miCamino.objetivo}`);
console.log(`El material que debo llevar es: `);

const numbers = {1: "primero", 2: "segundo", 3: "tercero"}
let materiales = miCamino.material;
for (let mat of materiales) {
    let ix = materiales.indexOf(mat);
    if (ix != materiales.length - 1) {
    console.log(`Lo ${numbers[ix+1]} ${mat.nombre}, que es ${mat.descripcion}`);
    }
    else {
    console.log(`Y por ultimo la ${mat.nombre}, que es ${mat.descripcion}`);

    }
}

let cimas = miCamino.cimas
for (let cima of cimas) {
    console.log(`Para subir a ${cima.nombre} 
                debo escalar ${cima.altitud} metros 
                y viajar a ${cima.localizacion}`);
}

let i = miCamino.subiendoAlEverest[0]
let campoIV = i[0].campoBase[0].campoI.campoII.campoIII.campoIV;
for (let tx of campoIV) {
    //console.log(campoIV.indexOf(tx));
    //console.log(tx);
    if (tx == 8.846) {   
    }
    else if (campoIV.indexOf(tx) == campoIV.length - 1) {

    }
    else {
        console.log(tx);
    }

}

console.log(campoIV[campoIV.length-1].cima);

// urls de todas las imagenes
let mats = miCamino.material;
for (let mat of mats) {
    let imgs = mat.imagenes;
    for (let img of imgs) {
        if (imgs.indexOf(img) == 0) {
            console.log(img.imagen1.url);
        }
        if (imgs.indexOf(img) == 1) {
            console.log(img.imagen2.url);
        }
    }
}

// media de cimas
const arrAlturas = [];
let sumAlturas = 0;
for (let cima of miCamino.cimas) {
    let altit = cima.altitud;
    arrAlturas.push(altit);
    sumAlturas += altit;
}

avgAltitud = sumAlturas / arrAlturas.length;
console.log(avgAltitud);
