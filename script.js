function addNewWEField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter Here")
    newNode.setAttribute("rows",2);

    let weAddButtonob = document.getElementById("weAddButton");
    let weob = document.getElementById("we");
    weob.insertBefore(newNode,weAddButtonob);
}
function addNewAQField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter Here")
    newNode.setAttribute("rows",2);

    let aqAddButtonob = document.getElementById("aqAddButton");
    let aqob = document.getElementById("aq");
    aqob.insertBefore(newNode,aqAddButtonob);
}
function addNewPField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("pField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter Here");
    newNode.setAttribute("rows",2);

    let pAddButtonob = document.getElementById("pAddButton");
    let pob = document.getElementById("p");
    pob.insertBefore(newNode,pAddButtonob);
}
function generateCv(){
    let namefield = document.getElementById("nameField").value;
    let name1 = document.getElementById('name1T');
    name1.innerHTML=namefield;

    document.getElementById('name2T').innerHTML = namefield;
    document.getElementById('contactT').innerHTML = document.getElementById("contactField").value;
    document.getElementById('addressT').innerHTML = document.getElementById("addressField").value;
    document.getElementById('fbT').innerHTML = document.getElementById("fbField").value;
    document.getElementById('igT').innerHTML = document.getElementById("igField").value;
    document.getElementById('linkedT').innerHTML = document.getElementById("liField").value;

    document.getElementById('objectiveT').innerHTML = document.getElementById("objectiveField").value;
//academic qualification....
    let aqs = document.getElementsByClassName("aqField");
    let str = "";
    for(let e of aqs){
        str = str + `<li>${e.value}</li>`;
    }
    document.getElementById("aqT").innerHTML = str;
//work experiance....
    let wes = document.getElementsByClassName("weField");
    let str1 = "";
    for(let e of wes){
        str1 = str1 + `<li>${e.value}</li>`;
    }
    document.getElementById("weT").innerHTML = str1;

//projects....
    let ps = document.getElementsByClassName("pField");
    let str2 = "";
    for(let e of ps){
        str2 = str2 + `<li>${e.value}</li>`;
    }
    document.getElementById("pT").innerHTML = str2;  
      
    
    document.getElementById("cv-form").style.display = 'none';
    document.getElementById("cv-template").style.display = 'block';


}
function printCv(){
    window.print();                       
}