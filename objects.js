const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
    isAvailable: true },
    { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
    isAvailable: false },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
    1866, isAvailable: true },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
    isAvailable: false },
    { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
    ];
// Create a function called getAvailableBooks that returns an array of all available
// books.
function getAvailableBooks(books){
 let booksAvailable = [];
 for(let i=0;i<books.length;i++){
    if(books[i].isAvailable===true){
        booksAvailable.push(books[i].title)
    }
 } 
 return booksAvailable ; 
}
console.log(getAvailableBooks(books));

// Create a function getBooksByAuthor that takes an author's name as an argument and
// returns an array of all books by that author.

function getBooksByAuthor(books){
    let booksAuthor = [];
    for(let i=0;i<books.length;i++){
       if(books["author"]===authorname)
       booksAuthor.push(books["author"])

    }
return booksAuthor;
}
console.log(getBooksByAuthor(books));

// Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
// publicationYear, and isAvailable).

function addNewBook(books){

    function addNewBook(book) {
        let library = [];
        if (!book.title || !book.author || !book.publicationYear) {
          console.error(`books lack required properties`); 
        }
        
        else if (book.isAvailable ===books) {
          book.isAvailable = true;
        }
        
        library.push(book);
      }
    }
//       Create a function checkoutBook that takes a book title as an argument and changes
// the book's isAvailable property to false. If the book is not found in the library, the
// function should return a message indicating that the book is not available.
function checkoutBook(bookTitle,library){
    let book = library.findIndex(book => booktitle===bookTitle);
    if(book!== -1){
        library[book].isAvailable = false;
    }
    console.log(`${bookTitle}`);
        else{
            return "book is not available"
        }

}
checkoutBook(bookTitle,library)
      
        

      

      
