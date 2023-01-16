const form = document.querySelector('form');
const button = document.getElementById('submit');
const title = document.getElementById('title');
const author = document.getElementById('author');
const ptitle = document.getElementById('ptitle');
const pauthor = document.getElementById('pauthor');

const myBookLibrary = [];





function addBook(title, author) {

    this.title = title;
    this.author = author;

}


button.addEventListener('click', function () {

    myBookLibrary.push(addBook.prototype)

})

const newBook = new addBook(title.value, author.value);



console.log(myBookLibrary);








