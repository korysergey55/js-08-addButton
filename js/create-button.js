const createButton = document.querySelector(".create");
const buttonList = document.querySelector(".button-list");
const removeButton = document.querySelector(".remove");
const changeBtm = document.querySelector(".button-list");

createButton.addEventListener("click", creatte);
removeButton.addEventListener("click", remove);
changeBtm.addEventListener("click", onClick);

let labelCaunter = 1;

function creatte() {
  const btn = document.createElement("button");
  btn.textContent = `New button ${labelCaunter}`;
  btn.type = "button";
  btn.classList.add("new-created-button");
  btn.style.margin = "10px";
  //btn.style.color = "teal";
  //btn.style.backgroundColor = "yellow";
  buttonList.appendChild(btn);
  labelCaunter += 1;
}

function remove() {
  buttonList.removeChild(btn);
}

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
