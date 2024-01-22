

const username = "admin"
const password = "admin"

const submitButton = document.getElementById("submit")

const usernameEl = document.getElementById("username")


const passwordEl = document.getElementById("password")


const addBookBtn = document.getElementById("addBookBtn")

if (submitButton) {
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        console.log("username: ", usernameEl.value)
        console.log("password: ", passwordEl.value)

        if (username === usernameEl.value && password === passwordEl.value) {
            window.location.href = "/AU-LIBRARY.html"
        }
    })
}


const closeBtn = document.getElementById("closeBtn")

closeBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const addBookFrm = document.getElementById("addBookFrm")
    addBookFrm.style.display = "none"
})


addBookBtn.addEventListener("click", () => {
    const addBookFrm = document.getElementById("addBookFrm")
    addBookFrm.style.display = "block"
})


const books = localStorage.getItem("books") ? JSON.parse(localStorage.getItem("books")) : []

let numberOfItems = books.length

function addBook({ title, author, image }) {
    console.log(title)
    const book = { title, author, index: numberOfItems + 1, image }
    books.push(book)
    localStorage.setItem("books", JSON.stringify(books))
}

const addFrmSbmt = document.getElementById("addFrmSbmt")



const bookContainer = document.getElementById("bookContainer")
function getItemFromStorage() {

    const allBooks = JSON.parse(localStorage.getItem('books')) ? JSON.parse(localStorage.getItem('books')) : []

    let booksElement = ""
    allBooks.map(({ title, author, index, image }) => {
        console.log(index)
        booksElement += `<div id='book-${index}'>
        <img src='${image}' width="200" height="200"/>
        <span>Title: ${title}</span>
        <span id="itemName"></span>
        </div>
        <div>
            <span>Author: </span>
            <span id="price"> ${author}</span>
        </div>
        
        <button onClick="deleteItemFromStorage(${index})">Delete</button>
    `
    })
    bookContainer.innerHTML = booksElement

}


getItemFromStorage()


addFrmSbmt.addEventListener("click", (e) => {
    e.preventDefault()

    const titleIn = document.getElementById("title")
    const authorIn = document.getElementById("author")
    const imageIn = document.getElementById("imageLink")
    addBook({ title: titleIn.value, author: authorIn.value, image: imageIn.value })

    const addBookFrm = document.getElementById("addBookFrm")
    addBookFrm.style.display = "none"

    getItemFromStorage()

})
