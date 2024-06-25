"use strict";

function Location(
  locationName,
  minClientPerHour,
  maxClientPerHour,
  agvCookiePerSale,
  cookieEachHour
) {
  this.locationName = locationName;
  this.minClientPerHour = minClientPerHour;
  this.maxClientPerHour = maxClientPerHour;
  this.agvCookiePerSale = agvCookiePerSale;
  this.cookieEachHour = cookieEachHour;
}

Location.prototype.estimate = function () {
  console.log(this.locationName);
};

const seattle = new Location("seattle", 23, 65, 6.3, []);
const tokio = new Location("tokio", 3, 24, 1.2, []);
const dubai = new Location("dubai", 11, 38, 3.7, []);
const paris = new Location("paris", 20, 38, 2.3, []);
const lima = new Location("lima", 2, 16, 4.6, []);

seattle.estimate();
tokio.estimate();
dubai.estimate();

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

// Este es el contendor de mi table
const tableContainer = document.getElementById("table-container");

function renderTr() {
  const tr = document.createElement("tr");
  return tr;
}

function renderTh(text) {
  const th = document.createElement("th");
  th.textContent = text;

  return th;
}

// crear una tabla
const table = document.createElement("table");

const tHead = document.createElement("thead");
const tr = renderTr();

// const th1 = renderTh("6:00 am");
// const th2 = renderTh("7:00 am");
// tr.appendChild(th1);
// tr.appendChild(th2);
for (let i = 0; i < hours.length; i++) {
  const th = renderTh(hours[i]);
  tr.appendChild(th);
}

tHead.appendChild(tr);

table.appendChild(tHead);
console.log(table);

tableContainer.append(table);
