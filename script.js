let myLibrary = [];

function Book(title,author,pages,read) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    addBookToLibrary(this);
}

function addBookToLibrary(b) {
    // takes user input and stores new book object into array
    let n = myLibrary.length;
    myLibrary[n] = b;
}


const display = document.querySelector(".display");
function displayBooks() {

    for(let i=0;i<myLibrary.length;i++)
    {
        let x = myLibrary[i];

        const bDiv = document.createElement("div");
        bDiv.setAttribute("id", "book" + i);
        

        bDiv.style.cssText = 'border: 2px solid black; width: 400px; height: 200px; margin: 10px';


        const bTitle = document.createElement("div");
        bTitle.setAttribute("id", "title" + i);
        bTitle.textContent = "Book" + Number(i+1) + ":"  + x.title;
        bTitle.style.cssText = 'padding: 3px; font-size: 30px';

        const bAuthor = document.createElement("div");
        bAuthor.setAttribute("id", "author" + i);
        bAuthor.textContent = "Author: " + x.author;
        bAuthor.style.cssText = 'padding: 3px; font-size: 30px';

        const bPages = document.createElement("div");
        bPages.setAttribute("id", "pages" + i);
        bPages.textContent = "Pages: " + x.pages;
        bPages.style.cssText = 'padding: 3px; font-size: 30px';

        const bRead = document.createElement("button");
        bRead.setAttribute("id", "read" + i);
        if(x.read == "Y" || x.read == "y")
        {
            bRead.textContent = "Read";
            bRead.style.cssText = 'padding: 3px; font-size: 25px; color: green';

        }
        else if(x.read == "N" || x.read == "n")
        {
            bRead.textContent = "Not read";
            bRead.style.cssText = 'padding: 3px; font-size: 25px; color: red';
        }
        


        const bRemove = document.createElement("button");
        bRemove.setAttribute("id", "remove" + i);
        bRemove.textContent = "Remove?";
        bRemove.style.cssText = 'padding: 3px; font-size: 25px';
        


        bDiv.appendChild(bTitle);
        bDiv.appendChild(bAuthor);
        bDiv.appendChild(bPages);
        bDiv.appendChild(bRead);
        bDiv.appendChild(bRemove);



        display.appendChild(bDiv);

        bRead.addEventListener("click", () => {
            if(bRead.textContent == "Not read")
            {
                bRead.textContent = "Read";
                bRead.style.cssText = 'padding: 3px; font-size: 25px; color: green';
            }
            else if(bRead.textContent = "Read")
            {
                bRead.textContent = "Not read";
                bRead.style.cssText = 'padding: 3px; font-size: 25px; color: red';
            }
        })

        bRemove.addEventListener('click', () => {
            display.removeChild(bDiv);
        })
    }
}

const book1 = new Book("Petunia","Laura",245,"Y");
const book2 = new Book("Fireflies","Elliot",397,"N");

displayBooks();