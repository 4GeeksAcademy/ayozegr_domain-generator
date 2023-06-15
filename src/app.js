/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onLoad = function() {
  // Generar los nombres de dominio
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon", "mouse"];
  let extension = [".com", ".net", ".pt", ".ly", ".es", ".org"];
  let domains = "";

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < extension.length; l++) {
          let domain = pronoun[i] + adj[j] + noun[k] + extension[l];
          domains += "<ol>" + domain + "</ol>";
        }
      }
    }
  }
  console.log(domains);
  let domainList = document.querySelector("#domainList");
  domainList.innerHTML = domains;
};
