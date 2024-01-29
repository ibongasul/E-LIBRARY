const username = "admin"
const password = "admin"

const submitButton = document.getElementById("submit")

const usernameEl = document.getElementById("username")


const passwordEl = document.getElementById("password")


const addBookBtn = document.getElementById("addBookBtn")

const Boxfrm = document.getElementById("Boxfrm")

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
if (closeBtn) {
    closeBtn.addEventListener("click", (e) => {
        e.preventDefault()
        const addBookFrm = document.getElementById("addBookFrm")
        addBookFrm.style.display = "none"
        Boxfrm.style.display = "none"
    })
}

if (addBookBtn) {
    addBookBtn.addEventListener("click", () => {
        const addBookFrm = document.getElementById("addBookFrm")
        addBookFrm.style.display = "block"
        Boxfrm.style.display = "block"
    })
}

const books = localStorage.getItem("books") ? JSON.parse(localStorage.getItem("books")) : []

let numberOfItems = books.length

function addBook({ title, author, image }) {
    console.log("numberOfItems", numberOfItems)
    const book = { title, author, index: numberOfItems + 1, image }
    books.push(book)
    localStorage.setItem("books", JSON.stringify(books))
    location.reload()
}

const addFrmSbmt = document.getElementById("addFrmSbmt")


function deleteItemFromStorage(id) {
    let books = JSON.parse(localStorage.getItem('books'))
    books = books.filter((book) => {
        console.log(id)
        console.log(book.index != id)
        return book.index != id;
    });

    localStorage.setItem("books", JSON.stringify(books))
    location.reload()
}



const bookContainer = document.getElementById("bookContainer")
function getItemFromStorage() {

    const allBooks = JSON.parse(localStorage.getItem('books')) ? JSON.parse(localStorage.getItem('books')) : []

    let booksElement = ""
    allBooks.map(({ title, author, index, image }) => {
        console.log(index)
        booksElement += ` <br>
        <div style="background-color:white; width:260px; border:3px solid #404999; border-radius:5%; padding:15px; text-align:center;">
        <div id='book-${index}'>
        <span style = "font-size:18.0pt; font-style:bold; color:#404999; text-align:center;">"${title}"</span>
        <span id="itemName"></span>
        </div>
        <div id='book-${index}'>
        <img src='${image}' width="200" height="200"/>
        </div>
        <div>
        <span style = "font-size:18.0pt; font-style:oblique; color:#404999; text-align:center;" id="price">${author}</span>
        </div>
        
        <button style = "background-color:#d13838; font-size:15px; padding:5px 10px; color:white; text-align:center;" "onClick="deleteItemFromStorage(${index})">Delete</button>
        <div>
        <span style = "font-size:2px; font-style:oblique; color:white;">teehee</span>
        </div>
        </div>
        </br>
    `
    })
    bookContainer.innerHTML = booksElement

}

const stPageLibrary = document.getElementById("stPageLibrary");

const library = localStorage.getItem("library") ? JSON.parse(localStorage.getItem("library")) : []


function addItemToPersonal({ title, author, image, index }) {
    console.log("numberOfItems", numberOfItems)
    const book = { title, author, index: numberOfItems + 1, image }
    library.push(book)
    localStorage.setItem("library", JSON.stringify(library))
    const libraryAddItemBtn = document.getElementById(`libraryAddItemBtn${index}`)
    libraryAddItemBtn.innerHTML = "BOOK ADDED"
    location.reload()
}

function showItemOnStudent() {
    console.log("CHECK")
    const allBooks = JSON.parse(localStorage.getItem('books')) ? JSON.parse(localStorage.getItem('books')) : []

    let booksElement = ""
    allBooks.map(({ title, author, index, image }) => {
        console.log(index)
        booksElement += ` <br>
        <div style="background-color:white; width:260px; border:3px solid #d13838; border-radius:5%; padding:15px; text-align:center;">
        <div id='book-${index}'>
        <span style = "font-size:18.0pt; font-style:bold; color:#d13838; font-family: Garamond, serif; text-align:center;">"${title}"</span>
        <span  style = "font-size:18.0pt; font-style:bold; color:#d13838; font-family: Garamond, serif; text-align:center;" id="itemName"></span>
        </div>
        <div id='book-${index}'>
        <img src='${image}' width="200" height="200"/>
        </div>
        <div>
            <span style = "font-size:18.0pt; font-style:oblique; color:#d13838; font-family: Garamond, serif; text-align:center;" id="price"> ${author}</span>
        </div>

        <button  style = "background-color: #404999; font-size:15px; padding:5px 10px; color:white; font-family: Garamond, serif; text-align:center;" id="libraryAddItemBtn${index}" onClick="addItemToPersonal({title: '${title}',author:'${author}',image: '${image}', index: '${index}'})">Add to Library</button> 
        <div>
        <span style = "font-size:2px; font-style:oblique; color:white;">teehee</span>
        </div>
        </div>
        </br>
    `
    })
    stPageLibrary.innerHTML = booksElement

}

function deleteBookToPersonal({ id }) {
    console.log("DELETE", id)
    let library = JSON.parse(localStorage.getItem('library'))
    library = library.filter((book) => {

        return book.index != id;
    });

    localStorage.setItem("library", JSON.stringify(library))
    location.reload()
}


const personalLibraryContainer = document.getElementById("personalLibraryContainer");

function showPersonalLibrary() {
    console.log("CHECK")
    const allLibrary = JSON.parse(localStorage.getItem('library')) ? JSON.parse(localStorage.getItem('library')) : []

    let libraryElement = ""
    allLibrary.map(({ title, author, index, image }) => {
        console.log(index)
        libraryElement += `<br>
        <div style="background-color:white; width:260px; border:3px solid #d13838; border-radius:5%; padding:15px; text-align:center;">
        <div>
        <span style = "font-size:18.0pt; font-style:bold; color:#d13838; font-family: Garamond, serif; text-align:center;">"${title}"</span>
        <span style = "font-size:18.0pt; font-style:bold; color:#d13838; font-family: Garamond, serif; text-align:center;" id="itemName"></span>
        </div>
        <div id='book-${index}'>
        <img src='${image}' width="200" height="200"/>
        </div>
        <div>
            <span style = "font-size:18.0pt; font-style:oblique; color:#d13838; font-family: Garamond, serif; text-align:center;" id="price"> ${author}</span>
        </div>
        
        <button  style = "background-color: #404999; font-size:15px; padding:5px 10px; color:white; font-family: Garamond, serif; text-align:center;" id="libraryAddItemBtn${index}" onClick="deleteBookToPersonal({id: '${index}'})">Delete</button>
        <div>
        <span style = "font-size:2px; font-style:oblique; color:white;">teehee</span>
        </div>
     </div>
     </br>
    `
    })
    personalLibraryContainer.innerHTML = libraryElement

}

if (personalLibraryContainer) {
    showPersonalLibrary()
}



if (stPageLibrary) {
    showItemOnStudent();
}

if (bookContainer) {
    getItemFromStorage()
}

if (addFrmSbmt) {

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



}



}
