// Pasa1: Vamos a crear una funcion constructora
// OJO: Pueden colocarle cualquier nombre a los parametros
function ImageElement(id, alt, src, count) {
  this.id = id;
  this.alt = alt;
  this.src = src;
  this.count = count;
}

// Como agregamos una funcion a una funcion constructora
ImageElement.prototype.sum = function () {
  // sumar 1 al count de cada imagen
  // this.count = this.count + 1
  // this.count += 1
  this.count++;
  // va a guardar el valor el localStorage
  localStorage.setItem(this.id, JSON.stringify(this.count));
};

const images = [
  {
    url: "https://i.blogs.es/debdc9/1629460557_098553_1629460592_portada_normal/840_560.jpeg",
    title: "Los Vengadores",
  },
  {
    url: "https://hips.hearstapps.com/hmg-prod/images/guardianes-de-la-galaxia-vol-3-chris-pratt-1549289460.jpg",
    title: "Los guardianes de la galaxia",
  },
  {
    url: "https://i0.wp.com/www.thewrap.com/wp-content/uploads/2023/03/032023-The-Rock-Artwork-V2.jpg?fit=1200%2C675&ssl=1",
    title: "Shazam",
  },
  {
    url: "https://lumiere-a.akamaihd.net/v1/images/cg_fantasticfour_summermovienights_mobile_19816_c1192e24.jpeg?region=0,20,640,360",
    title: "Los 4 fantasticos",
  },
  {
    url: "https://cloudfront-us-east-1.images.arcpublishing.com/gruponacion/I4KE3T3APVAWRIOH3PB2552M74.jpg",
    title: "Batman",
  },
];

// Esta variable va a guardar el array con los elmentos usando el funcion contructora
const imagesObjects = [];

for (let i = 0; i < images.length; i++) {
  const id = i + 1;
  const newImage = new ImageElement(id, images[i].title, images[i].url, 0);
  imagesObjects.push(newImage);
}

// Como obtener el secion en JS
const gallery = document.getElementById("gallery");
const galleryChart = document.getElementById("gallery-chart");
const labels = [];
const values = [];

const barchart = new Chart(galleryChart, {
  type: "bar",
  data: {
    labels: [],
    datasets: [
      {
        label: "Images gallery",
        data: [],
      },
    ],
  },
});

for (let j = 0; j < imagesObjects.length; j++) {
  const div = document.createElement("div");
  const img = document.createElement("img");
  const parrafo = document.createElement("p");

  // para poder agregar el src usamos la siguiente propiedad
  img.src = imagesObjects[j].src;
  // para poder agregar el alt usamos la siguiente propiedad
  img.alt = imagesObjects[j].alt;

  // Porque aca vamos a modificar count
  // Seria mejor hacer una validacion para saber si ese elmento existe
  if (localStorage.getItem(imagesObjects[j].id) === null) {
    // no existe en localStorage
    imagesObjects[j].count = 0;
  } else {
    // pero si el valor existe en localStorage lo usamos
    imagesObjects[j].count = JSON.parse(
      localStorage.getItem(imagesObjects[j].id)
    );
  }

  labels.push(imagesObjects[j].alt);
  values.push(Number(imagesObjects[j].count));

  img.addEventListener("click", function () {
    imagesObjects[j].sum();
  });

  parrafo.textContent = `Cantidad de clicks: ${imagesObjects[j].count}`;

  div.appendChild(img);
  div.appendChild(parrafo);
  gallery.appendChild(div);
}

barchart.data.labels = labels;
for (let k = 0; k < values.length; k++) {
  barchart.data.datasets.forEach((dataset) => {
    dataset.data.push(values[k]);
  });
}

barchart.update();
