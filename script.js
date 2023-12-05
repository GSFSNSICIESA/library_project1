const myLibrary = []
// Book object constructor
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read
    this.info = function() {
        return `${this.title} by ${this.author}, ${pages} pages, ${read ? "read" : "not read yet"}`
    }
}

const bookShelf = document.querySelector('.shelf')
const newBtn = document.getElementById('new_book')
const show = document.getElementById('show_books')

newBtn.addEventListener('click', ()=>{
    const form = document.getElementById('form')
    form.classList.toggle('hidden')
    
})

myBook = new Book("Awaken", 'robbins', 600, false)
otherBook = new Book("Think", 'Napoleon', 250, true)
myLibrary.push(myBook)
myLibrary.push(otherBook)


// function that show or hides the book
function showBooks(){
    for (let book of myLibrary){
        item = document.createElement('div')
        bookShelf.appendChild(item)
        // creating elements for each piece of info
        titleParagraph = document.createElement('p')
        authorParagraph = document.createElement('p')
        pagesParagraph = document.createElement('p')
        readParagraph = document.createElement('p')

        // writing the info into these html elements
        titleParagraph.innerText = `Title: ${book.title}`
        authorParagraph.innerText = `Author: ${book.author}`
        pagesParagraph.innerText = `No. Of Pages: ${book.pages}`
        readParagraph.innerText = `Read: ${book.read ? 'yes' : 'no'}`

        // just for trial:
        console.log(`Author: ${book.author}`)
        console.log(`Author: ${book.pages}`)
        console.log(`Author: ${book.title}`)
        console.log(`Read: ${book.read ? 'yes' : 'no'}`)

        // adding each each element to the div 
        item.appendChild(titleParagraph)
        item.appendChild(authorParagraph)
        item.appendChild(pagesParagraph)
        item.appendChild(readParagraph)

    }
    item.classList.add('my-book')
    

    // toggle show books button text
    if (show.innerText == 'SHOW BOOKS'){
        show.innerText = 'HIDE BOOKS'
    }
    else if (show.innerText == 'HIDE BOOKS'){
        show.innerText = 'SHOW BOOKS';
        while(bookShelf.firstChild){
            bookShelf.removeChild(bookShelf.firstChild)
        }
    }
}

show.addEventListener('click', showBooks)

function addBookToLibrary(){
    // TODO


}