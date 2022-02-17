

// В этом проекте структура кода ужастна :с

const
 elements       = document.getElementsByClassName("elements"),
 background     = document.getElementById("background"),
 bottom         = document.getElementById("bottom"),
 orbitales      = [];

let
 size             = 4;     // размер таблицы, параметр можно менять без последствий, стандартное значение - 4
 //shiftTop       = 0,
 //bottomElements = 0;


function resize(){
  console.log(window.innerHeight / window.innerWidth * size, window.innerHeight / window.innerWidth * size < -1.4);
  const locat = "100000000000000001110000000000111111110000000000".split(""); //  отвечает за расположение елементов, где 0 - элемента нет, 1 - есть

  locat.x = 0;
  locat.y = 0;
  locat.index = 0;

  for (let i = 0; i < elements.length; i++) {
    let el = elements[i];

    el.style.width       = size + "%";
    el.style.height      = el.offsetWidth + "px";
    el.style.width       = el.offsetWidth  + "px";
    el.style.borderWidth = el.offsetWidth / 25 + "px";


    let
      name  = el.childNodes[7],
      title = el.childNodes[5],
      mass  = el.childNodes[3],
      numer = el.childNodes[1];

    numer.style.fontSize  = el.offsetWidth / 7 + "px";
    numer.style.zIndex    = 2;
    numer.style.textAlign = "left";
    numer.style.top       = -el.offsetWidth / 90 + "px";
    mass.style.fontSize   = el.offsetWidth / 10 + "px";
    mass.style.zIndex     = 3;
    mass.style.top        = el.offsetWidth / 1.7 + "px";
    title.style.fontSize  = el.offsetWidth / 2.5 + "px";
    title.style.zIndex    = 4;
    title.style.top       = -el.offsetWidth / 4 + "px";
    title.textContent     = el.id;
    name.style.fontSize   = el.offsetWidth / 8 + "px";
    name.style.zIndex     = 5;
    name.style.top        = -el.offsetWidth / 3.33 + "px";

     if (el.id == "57-71" || el.id == "89-103"){

       title.style.fontSize = el.offsetWidth / 2.5 * 0.625 + "px";
       title.style.top      = el.offsetWidth / 3.5 + "px";
    //   if (elements[89]) el.style.boxShadow = `0px ${el.offsetWidth / 1.2}px 0px ${-el.offsetWidth / 15.5}px, 0px ${el.offsetWidth / 0.9}px 0px ${-el.offsetWidth / 15.5}px, 0px ${el.offsetWidth / 0.7}px 0px ${-el.offsetWidth / 15.5}px, 0px ${el.offsetWidth / 0.5}px 0px ${-el.offsetWidth / 15.5}px`;
    //   else el.style.boxShadow = "";   Зелёная полоса (тень) под элементами групп *
     }

    while (locat[locat.index] == 0){
      locat.index++;
      locat.x++;
    }

    el.style.left = locat.x * (el.offsetWidth + 4) + ((window.innerWidth - 18 * (el.offsetWidth + 4)) / 2) + "px";
    el.style.top  = locat.y * (el.offsetWidth + 4) + ((window.innerHeight - 7 * (el.offsetWidth + 4)) / 2) + "px";
    locat.x++;
    locat.index++;
    if (locat.x == 18) {
      locat.x = 0;
      locat.y++;
    }
  }
  let width = elements[89].offsetWidth;


  let topEnd = Number(elements[89].style.top.slice(0, -2)) + Number(elements[89].style.height.slice(0, -2) * 1.35) + "px";
  // locat.y * (elements[89].offsetWidth + 4) + ((window.innerHeight - 7 * (elements[89].offsetWidth + 4)) / 2 * 1.2) + "px"    две разные формулы,
  // Number(elements[89].style.top.slice(0, -2)) + Number(elements[89].style.height.slice(0, -2) * 1.35) + "px";                и обе сделаны на коленке
  console.log(Number(elements[89].style.top.slice(0, -2)) + Number(elements[89].style.height.slice(0, -2) * 1.35) + "px", topEnd)

  bottom.style.top = topEnd;
  bottom.style.fontSize = topEnd.slice(0,-2) / 45 + "px";
  bottom.childNodes.forEach((item) => item.style.margin = topEnd.slice(0, -2) / 20 + "px");
}


background.addEventListener("click", function(e){
   if (e.target.id == "background") offBrightness();
 });

window.addEventListener("contextmenu", (e) => e.preventDefault())
window.addEventListener("resize",      ()  => resize())

window.addEventListener("wheel", (e) => {
  if (e.ctrlKey) {
    e.preventDefault();
    size = Math.max(Math.min(size, 7), 2) - e.deltaY / 500;
    resize();
  }
}, {passive: false});

function brightness(way, value) {
  offBrightness();
  for (var i = 0; i < elements.length; i++) {
    if (elements[i][way] != value) {
        elements[i].style.filter = "brightness(50%)";
        elements[i].style.cursor = "default";
    }
  }
  bottom.childNodes.forEach((item) => {
    if (value == "elements " + item.id + "-elements") return;
    item.style.filter = "brightness(50%)";
    item.style.cursor = "default";
  });
}


function offBrightness() {
  for (var i = 0; i < elements.length; i++) {
    let elSt = elements[i].style;
    elSt.filter = "";
    elSt.transform = "";
    setTimeout(() => elSt.zIndex = 2, 100);
    elSt.focused = false;
    elSt.cursor = "pointer";
  }
  bottom.childNodes.forEach((item, i) => {
    item.style.filter = "";
    item.style.cursor = "pointer";
  });
}

function start() {
  resize();
  for (let i = 0; i < elements.length; i++) {
    let el = elements[i];
    el.style.focused = false;

    el.addEventListener("contextmenu", (e) => {
      // выпадающее меню при клике правой кнопкой
    });

    el.addEventListener("click", function(e){
      let id = e.target.parentElement.id, el = e.target.parentElement;
      // if (e.target.id == "57-71" || id == "57-71" || e.target.id == "89-103" || id == "89-103") return showBottomElements(el.id);
      // if (id == "background"){
      //   id = e.target.id;
      //   el = e.target;
      // }
      if (el.style.focused == true) return offBrightness();
      brightness("id", id);
      el.style.transform = "scale(2, 2)";
      el.style.zIndex = 5;
      setTimeout(() => el.style.zIndex = 5, 100);
      el.style.focused = true;
    });

    el.addEventListener("mouseenter", function(e){
      if (!el.style.filter && !el.style.focused && el.id != "57-71" && el.id != "89-103") {
        el.style.transform = "scale(1.4, 1.4)";
        el.style.zIndex = 3;
      }
    });

    el.addEventListener("mouseleave", function(e){
      if (!el.style.focused && el.id != "57-71" && el.id != "89-103") {
        el.style.transform = "";
        el.style.zIndex = 2;
      }
    });

    let numer = el.childNodes[1];
    numer.textContent = i + 1;
    if (i == 56) numer.textContent = "";
    if (i == 74) numer.textContent = "";
    if (numer.textContent > 57) numer.textContent = numer.textContent - 1 + 15;
    if (numer.textContent > 89) numer.textContent = numer.textContent - 1 + 15;
  }
}
start();

bottom.childNodes[0].addEventListener("click", () => brightness("className", "elements s-elements"));
bottom.childNodes[1].addEventListener("click", () => brightness("className", "elements p-elements"));
bottom.childNodes[2].addEventListener("click", () => brightness("className", "elements d-elements"));


// function showBottomElements(id){
//
//   if (id == "57-71") bottomElements = (bottomElements == 0 || bottomElements == 2) ? 1 : 0;
//   else               bottomElements = (bottomElements == 0 || bottomElements == 1) ? 2 : 0;
//
//   if (bottomElements != 0) shiftTop = -30;
//   else shiftTop = 0;
//   resize();
//   console.log(window.outerHeight - bottom.style.top.slice(0, -2));
// }




// let
//   menu = document.getElementById("settings"),
//     setOk = document.getElementById("setOk"),
//     setFlooter = document.getElementById("setFlooter"),
//     setColorBlock = document.getElementById("setColorBlock"),
//     setColorForm = document.getElementById("setColorForm"),
//     setColorLast = document.getElementById("setColorLast"),
//     setLastColors = setColorLast.childNodes;
//   menu.style.width = window.innerWidth - 6 + "px";
//
//   menu.style.height = window.innerHeight  - 6 + "px";
//   setFlooter.style.height = window.innerHeight / 10 * 9 / 10 + "px";
//
//
//   document.addEventListener("keydown", function(e){
//     if (e.keyCode == 27) {
//       if (menu.open == false) {
//         menu.open = true;
//         menu.style.opacity = 1;
//         menu.style.display = "block";
//         setColorForm.focus();
//       } else {
//         menu.open = false;
//         menu.style.opacity = 0;
//         menu.style.display = "none";
//       }
//     }})
