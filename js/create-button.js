const createButton = document.querySelector(".create");
const buttonList = document.querySelector(".button-list");
const removeButton = document.querySelector(".remove");

createButton.addEventListener("click", creatte);
removeButton.addEventListener("click", remove);

let labelCaunter = 1;
function creatte() {
  const btn = document.createElement("button");
  btn.textContent = `Новая кнопка ${labelCaunter}`;
  btn.type = "button";
  btn.classList.add("newbutton");
  btn.style.margin = "10px";
  //btn.style.color = "teal";
  //btn.style.backgroundColor = "yellow";
  buttonList.appendChild(btn);
  labelCaunter += 1;
}
function remove() {
  buttonList.removeChild(btn);
}

const list = document.querySelector(".button-list");
list.addEventListener("click", onClick);

function onClick(evnt) {
  if (evnt.target.nodeName !== "BUTTON") {
    return;
  }
  //   const activeBtn = document.querySelector(".taggle-class");
  //   if (activeBtn) {
  //     activeBtn.classList.remove("taggle-class");
  //   }
  //     evnt.target.classList.add("taggle-class");
  evnt.target.classList.toggle("taggle-class");

  console.log(evnt.target.textContent);
  console.log(evnt.currentTarget);
  console.log(evnt.target.nodeName);
}
