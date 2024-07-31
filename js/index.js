const elList = document.querySelector(".list");

const renderPost = (arr, htmlElement) => {
  arr.forEach((item) => {
    const newLi = document.createElement("li");
    const newP = document.createElement("p");
    const newTitle = document.createElement("h4");
    const newText = document.createElement("p");

    newP.textContent = item.id;
    newTitle.textContent = item.title;
    newText.textContent = item.body;

    newLi.appendChild(newP);
    newLi.appendChild(newTitle);
    newLi.appendChild(newText);
    htmlElement.appendChild(newLi);
  });
};

fetch("https://www.googleapis.com/books/v1/volumes?qsearch+terms")
  .then((res) => res.json())
  .then((data) => renderPost(data, elList));
