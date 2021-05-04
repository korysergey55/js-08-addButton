const debounseInputRef = document.querySelector(".input-debounse");
const jsListRef = document.querySelector(".js-list");

const tech = [
  { label: "HTML" },
  { label: "CSS" },
  { label: "JavaScript" },
  { label: "React" },
  { label: "Redux" },
  { label: "Vue" },
  { label: "Java" },
  { label: "Piton" },
];

debounseInputRef.addEventListener("input", onFilterChange);

function createListItem(items) {
  const markup = items.map((item) => `<li>${item.label}</li>`).join("");
  return markup;
}
const addListItems = createListItem(tech);
jsListRef.insertAdjacentHTML("afterbegin", addListItems);

function onFilterChange(simbol) {
  const filter = simbol.target.value;
  const filteredItems = tech.filter((t) =>
    t.label.toLocaleLowerCase().includes(filter)
  );
  const filteredMarkup = createListItem(filteredItems);
  jsListRef.innerHTML = filteredMarkup;
}
