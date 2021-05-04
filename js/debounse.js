const InputRef = document.querySelector(".input-debounse");
const jsListRef = document.querySelector(".js-list");

const tech = [
  { label: "Apple" },
  { label: "Apricot" },
  { label: "Avocado" },
  { label: "Pineapple" },
  { label: "Banana" },
  { label: "Grapefruit" },
  { label: "Lemon" },
  { label: "Orange" },
];

const addListItems = createListItem(tech);

function createListItem(items) {
  const markup = items.map((item) => `<li>${item.label}</li>`).join("");
  //markup.classList.add("js-li");
  return markup;
}
jsListRef.insertAdjacentHTML("afterbegin", addListItems);

InputRef.addEventListener("input", onFilterChange);

function onFilterChange(item) {
  const filter = item.target.value;
  const filteredItems = tech.filter((t) =>
    t.label.toLocaleLowerCase().includes(filter)
  );
  const filteredMarkup = createListItem(filteredItems);
  jsListRef.innerHTML = filteredMarkup;
}


