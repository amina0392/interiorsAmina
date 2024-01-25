let modalUne = document.querySelector(".bodyJson");


fetch("https://www.tbads.eu/greta/kercode/ajax/?article=1")
.then(response => response.json())
.then(function(jsonObj){
    populateModale(jsonObj);
    console.log("Reponse : %0", response)
})
    .catch(msg => console.log("Message d'erreur :", msg));

function populateModale(jsonObj){
    let myH5 = document.createElement("h3");
    myH5.textContent = jsonObj.title;
    modalUne.appendChild(myH5);
    myH5.classList.add("fw-bold", "text-center", "fs-2")
   
    let paraUn = document.createElement("p");
   paraUn.textContent = "Edité le : " + jsonObj.date.day + " " + jsonObj.date.month + " " + jsonObj.date.year;
    modalUne.appendChild(paraUn);


    let para = document.createElement("p");
    para.textContent ="Auteur : " + jsonObj.author.name + " " + jsonObj.author.surname + " , " +jsonObj.author.position;
    modalUne.appendChild(para);

    let paraDeux = document.createElement("p");
    paraDeux.textContent = jsonObj.keyword[0] + " " + jsonObj.keyword[1] + " " + jsonObj.keyword[2];
    modalUne.appendChild(paraDeux);

    let paraTrois = document.createElement("p");
    paraTrois.textContent = jsonObj.content[0];
    modalUne.appendChild(paraTrois);

    let paraQuatre = document.createElement("p");
    paraQuatre.textContent =  jsonObj.content[1];
    modalUne.appendChild(paraQuatre)
   

    let image = document.createElement("img");
    image.src = jsonObj.picture;
    modalUne.appendChild(image);
    image.classList.add("img-fluid");
    
    
}
let modalDeux = document.querySelector(".bodyJsonDeux");


fetch("https://www.tbads.eu/greta/kercode/ajax/?article=2")
.then(response => response.json())
.then(function(jsonObjDeux){
    populateModaleDeux(jsonObjDeux);
    console.log("Reponse : %0", response)
})
    .catch(msg => console.log("Message d'erreur :", msg));

function populateModaleDeux(jsonObjDeux){
    let myH5 = document.createElement("h3");
    myH5.textContent = jsonObjDeux.title;
    modalDeux.appendChild(myH5);
    myH5.classList.add("fw-bold", "text-center", "fs-2")
   
    let paraUn = document.createElement("p");
   paraUn.textContent = "Edité le : " + jsonObjDeux.date.day + " " + jsonObjDeux.date.month + " " + jsonObjDeux.date.year;
   modalDeux.appendChild(paraUn);


    let para = document.createElement("p");
    para.textContent ="Auteur : " + jsonObjDeux.author.name + " " + jsonObjDeux.author.surname + " , " +jsonObjDeux.author.position;
    modalDeux.appendChild(para);

    let paraDeux = document.createElement("p");
    paraDeux.textContent = jsonObjDeux.keyword[0] + " " + jsonObjDeux.keyword[1] + " " + jsonObjDeux.keyword[2];
    modalDeux.appendChild(paraDeux);

    let paraTrois = document.createElement("p");
    paraTrois.textContent = jsonObjDeux.content[0];
    modalDeux.appendChild(paraTrois);

    let paraQuatre = document.createElement("p");
    paraQuatre.textContent =  jsonObjDeux.content[1];
    modalDeux.appendChild(paraQuatre)
   

    let image = document.createElement("img");
    image.src = jsonObjDeux.picture;
    modalDeux.appendChild(image);
    image.classList.add("img-fluid");
    
    
}
