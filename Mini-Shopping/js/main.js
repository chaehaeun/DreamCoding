const listUl = document.querySelector(".list-section");
const tButton = document.querySelector(".tshirt");
const pButton = document.querySelector(".pants");
const sButton = document.querySelector(".skirt");
const bButton = document.querySelector(".blue");
const yButton = document.querySelector(".yellow");
const pinkButton = document.querySelector(".pink");

async function getData(keyword, value, action) {
  const dataResponse = await fetch("../data.JSON");
  const jsonResponse = await dataResponse.json();

  const insert = await jsonResponse.items.filter(
    (data) => data[keyword] == value
  );
  const allItem = await jsonResponse.items;

  const item = (data) => {
    const resultLi = document.createElement("li");
    resultLi.innerHTML = `
    <img src="${data.image}" alt="" />
    <span>${data.gender}, </span>
    <span>${data.size} size</span>
    `;
    listUl.appendChild(resultLi);
  };

  if (action == "insert") {
    insert.forEach((data) => {
      item(data);
    });
  } else if (action == "allItem") {
    allItem.forEach((data) => {
      item(data);
    });
  }
}

const empty = () => {
  listUl.innerHTML = "";
};

tButton.addEventListener("click", () => {
  empty();
  getData("type", "tshirt", "insert");
});

pButton.addEventListener("click", () => {
  empty();
  getData("type", "pants", "insert");
});

sButton.addEventListener("click", () => {
  empty();
  getData("type", "skirt", "insert");
});

bButton.addEventListener("click", () => {
  empty();
  getData("color", "blue", "insert");
});

yButton.addEventListener("click", () => {
  empty();
  getData("color", "yellow", "insert");
});

pinkButton.addEventListener("click", () => {
  empty();
  getData("color", "pink", "insert");
});

getData("", "", "allItem");
