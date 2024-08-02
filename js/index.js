const elList = document.querySelector(".list")

function renderBooks(arr, htmlElement) {
  arr.forEach((element) => {
    const newLi = document.createElement("li")
    const newimg = document.createElement("img")
    const newTitle = document.createElement("h4")
    const newText = document.createElement("p")
    const newSecondText = document.createElement("p")
    const newBtn1 = document.createElement("button")
    const newBtn2 = document.createElement("button")
    const newBtn3 = document.createElement("button")

    newBtn1.textContent = "Bookmark"
    newBtn2.textContent = "More info"
    newBtn1.textContent = "Read"
    newTitle.textContent = element.volumeInfo.title
    newText.textContent = element.volumeInfo.description
    newSecondText.textContent = element.volumeInfo.publishedDate
    newimg.setAttribute("src", `${element.volumeInfo.imageLinks.thumbnail}`)

    newLi.appendChild(newimg)
    newLi.appendChild(newTitle)
    newLi.appendChild(newText)
    newLi.appendChild(newSecondText)
    newLi.appendChild(newBtn1)
    newLi.appendChild(newBtn2)
    newLi.appendChild(newBtn3)
    htmlElement.appendChild(newLi)
  })
}