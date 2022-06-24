//Protitype Study Code

// Main Prototype Object
function Book(title,author,pages,isRead){
    //Add prototype atributes
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.isRead=isRead;
}
// Add a prototype function
Book.prototype.info = function(){
    let string = this.title + " by " + this.author + ", " + this.pages + " pages, " ;
    if (this.isRead == true){
        return string + "already read.";
    }
    return string + "not read yet.";
}   
//Create a new Object from the prototype
const farenheit = new Book("Farenheit 451","Ray Bradbury","123",true);
console.log(farenheit.info());
//Create a new Prototype that inherits from the Main Prototype
function BadBook(title, author, pages, isRead, comment){
    //call() adds Book parameters unto BadBook
    Book.call(this, title, author, pages, isRead)
    //comment is a new parameter that Book Objects wont have but BadBooks will
    this.comment = comment;
}
//The following code sets the prototype of BadBook to be Book, giving it all of its methods/functions
Object.setPrototypeOf(BadBook.prototype, Book.prototype); // Or BadBook.prototype = Object.create(Book.prototype);
BadBook.prototype.badMouth = function() {
    return `What i really think about ${this.title} by ${this.author} is: ${this.comment}. Why is it ${this.pages} pages long? The mystery remains.`;
}

const harryPotter = new BadBook("Harry Potter & All Of His Boring Books", "An English Woman", "infinite",false,"I wouldn't touch this book.");

console.log( harryPotter.info() );
console.log(harryPotter.badMouth());


//The Class Rework
class BookClass{
    constructor(title,author,pages,isRead){
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.isRead=isRead;
    }
    info(){
        let string = this.title + " by " + this.author + ", " + this.pages + " pages, " ;
        if (this.isRead == true){
            return string + "already read.";
        }
        return string + "not read yet.";
    }
}

let aBook = new BookClass("To cook a kid","An Old Witch","1",true);
console.log(aBook.info());

class MagazineClass extends BookClass{
    constructor(title,author,pages,isRead,type){
        super(title,author,pages,isRead);
        this.type = type;
    }
    bore(){
        let string = super.info();
        string = "This magazine's type is "+ this.type + " which i don't really care for. What am i talking about? Well, " + string;
        return string;
    }
}

let aMagazine = new MagazineClass("Beautiful Dorks","The Horny Group","Around 120",false,"Luxury");
console.log(aMagazine.bore());