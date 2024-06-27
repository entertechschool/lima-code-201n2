"use strict";

const tbody = document.getElementById("table-body");

const hours = [
  `6am`,
  `7am`,
  `8am`,
  `9am`,
  `10am`,
  `11am`,
  `12pm`,
  `1pm`,
  `2pm`,
  `3pm`,
  `4pm`,
  `5pm`,
  `6pm`,
  `7pm`,
];

function Location(
  locationName,
  minClientPerHour,
  maxClientPerHour,
  avgCookiePerSale,
  cookieEachHour
) {
  this.locationName = locationName;
  this.minClientPerHour = minClientPerHour;
  this.maxClientPerHour = maxClientPerHour;
  this.avgCookiePerSale = avgCookiePerSale;
  this.cookieEachHour = cookieEachHour;
}

// prototype: Sirve para poder agregar una funcion a los objetos creado con
// la funcion constructora
Location.prototype.estimate = function () {
  console.log(this.locationName);
};

Location.prototype.earningsPerDay = function () {
  console.log(this.avgCookiePerSale);
};

Location.prototype.render = function () {
  const storeTr = document.createElement("tr");
  const storeTd = document.createElement("td");
  storeTd.textContent = this.locationName;
  storeTr.appendChild(storeTd);
  tbody.appendChild(storeTr);

  for (let k = 0; k < hours.length; k++) {
    const hoursTd = document.createElement("td");
    storeTr.appendChild(hoursTd);
  }

  const totalTd = document.createElement("td");
  storeTr.appendChild(totalTd);
};

const seattle = new Location("Seattle", 23, 65, 6.3, []);
const tokio = new Location("Tokio", 3, 24, 1.2, []);
const dubai = new Location("Dubai", 11, 38, 3.7, []);
const paris = new Location("Paris", 20, 38, 2.3, []);
const lima = new Location("Lima", 2, 16, 4.6, []);

seattle.render();
tokio.render();
dubai.render();
paris.render();
lima.render();

seattle.earningsPerDay();

seattle.estimate();
tokio.estimate();
dubai.estimate();
const stores = [seattle, tokio, dubai, paris, lima];

const title = document.getElementById("title"); // Salon "Cookies" ' Cookies'
const title2 = document.getElementById("title2"); // Salon "Cookies" ' Cookies'
title.textContent = 'Salmom "Cookies"';
title2.textContent = "Salmom 'Cookies'";

const hederRowContainer = document.getElementById("header-row-container");

for (let i = 0; i < hours.length; i++) {
  const th = document.createElement("th");
  th.textContent = hours[i];
  console.log(hours[i]);
  hederRowContainer.appendChild(th);
}

const thExtra = document.createElement("th");
thExtra.textContent = "Total diario de la ubicación";
hederRowContainer.appendChild(thExtra);

// const tbody = document.getElementById("table-body");

// for (let j = 0; j < stores.length; j++) {
//   const tr = document.createElement("tr");
//   const td = document.createElement("td");
//   console.log(stores[j].locationName);
//   td.textContent = stores[j].locationName;
//   tr.appendChild(td);

//   for (let k = 0; k < hours.length; k++) {
//     const hoursTd = document.createElement("td");
//     tr.appendChild(hoursTd);
//   }

//   const totalTd = document.createElement("td");
//   tr.appendChild(totalTd);

//   tbody.appendChild(tr);
// }

// // Este es el contendor de mi table
// const tableContainer = document.getElementById("table-container");

// function renderTr() {
//   const tr = document.createElement("tr");
//   return tr;
// }

// function renderTh(text) {
//   const th = document.createElement("th");
//   th.textContent = text;

//   return th;
// }

// // crear una tabla
// const table = document.createElement("table");

// const tHead = document.createElement("thead");
// const tr = renderTr();

// // const th1 = renderTh("6:00 am");
// // const th2 = renderTh("7:00 am");
// // tr.appendChild(th1);
// // tr.appendChild(th2);
// for (let i = 0; i < hours.length; i++) {
//   const th = renderTh(hours[i]);
//   tr.appendChild(th);
// }

// tHead.appendChild(tr);

// table.appendChild(tHead);
// console.log(table);

// tableContainer.append(table);
