function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read
    this.info = function() {
        return `${this.title} by ${this.author}, ${pages} pages, ${read ? "read" : "not read yet"}`
    }
}
const addBook = document.getElementById('btn')

addBook.addEventListener('click', ()=>{
    const form = document.getElementById('form')

    if (form.style.display === 'none') {
        // 👇️ this SHOWS the form
        form.style.display = 'block';
    } else {
        // 👇️ this HIDES the form
        form.style.display = 'none';
    }
})


myBook = new Book("Awaken", 'robbins', 600, false)

console.log(myBook.info())

function addBookToLibrary(){

}