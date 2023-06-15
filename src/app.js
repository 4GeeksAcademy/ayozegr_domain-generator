/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Generar los nombres de dominio
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon", "mouse"];
  let extension = [".com", ".net", ".pt", ".ly", ".es", ".org"];

  function dominio1() {
    let domains = "<h1 class='text-center'>Domain Generator</h1><div class='d-flex justify-content-center'><ol class='mt-5 list-group-numbered'>";

    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          for (let l = 0; l < extension.length; l++) {
            let domain = pronoun[i] + adj[j] + noun[k] + extension[l];
            domains += `<li class="list-group-item">${domain}</li>`;
          }
        }
      }
    }
    domains += "</ol></div>";
    return domains;
  }
  // console.log(dominio1());

  let domainList = document.querySelector("#domainList");
  domainList.innerHTML = dominio1();
};
