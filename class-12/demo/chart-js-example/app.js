"use strict";

const mychart = document.getElementById("mychart");
const barchart = new Chart(mychart, {
  type: "bar",
  data: {
    labels: ["red", "green", "blue", "yellow"],
    datasets: [
      {
        label: "Quantity colors",
        data: [10, 25, 15, 50],
        backgroundColor: ["red", "yellow", "blue", "green"],
      },
    ],
  },
});
