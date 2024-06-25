"use strict";

const contenedor = document.getElementById("contenedor");
console.log(contenedor);

const listaOrdenada = document.createElement("ol"); // <ol></ol>
const item1 = document.createElement("li"); // <li></li>
// <li><a></a></li>
const subItem = document.createElement("a"); // <a></a>
console.log("subItem", subItem);
item1.appendChild(subItem);

subItem.textContent = "Primer Elemento"; // <li>Primer Elemento</li>
const item2 = document.createElement("li");
item2.textContent = "Segundo Elemento"; //
listaOrdenada.appendChild(item1); // <ol> <li></li> </ol>
listaOrdenada.appendChild(item2);

contenedor.append(listaOrdenada);

/**
 <ol>
    <li>Primer Elemento</li>
    <li>Segundo Elemento</li>
 </ol>
 */
