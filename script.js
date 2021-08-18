let myLibrary = [];
let i = -1; // position of last book in myLibrary[]

function Book(title,author,pages,read) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    // console.log("hi2");

    addBookToLibrary(this);
}



function addBookToLibrary(b) {
    // takes user input and stores new book object into array
    i++;
    
    myLibrary[i] = b;
    
    // console.log("hi3");

    displayBooks();
}




const display = document.querySelector(".display");

function displayBooks() {

    // console.log("hi4");


        let x = myLibrary[i];

        const bDiv = document.createElement("div");
        bDiv.setAttribute("id", "book" + i);
        

        bDiv.style.cssText = 'border: 2px solid black; width: 400px; height: 200px; margin: 10px';


        const bTitle = document.createElement("div");
        bTitle.setAttribute("id", "title" + i);
        bTitle.textContent = "Title: "  + x.title;
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
            // console.log("hi5");

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


        // console.log("hi6");

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

        // console.log("hi7");

    
}

const book1 = new Book("Petunia","Laura",245,"Y");
// const book2 = new Book("Fireflies","Elliot",397,"N");
// const book3 = new Book("Ecstacy","Medellin",601,"Y");






const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.popUp')
    modals.forEach(modal => {
        closeModal(modal);
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const title = document.getElementById('title')
        const author = document.getElementById('author')
        const pages = document.getElementById('pages')
        const check = document.getElementById('read')

        const a = title.value;
        const b = author.value;
        const c = pages.value;
        const d = read.value;
        
        if(a != "" && b != "" && c!= "" && d != "")
        {
            const modal = button.closest('.popUp')
            closeModal(modal)
            const book = new Book(a,b,c,d);
            // console.log("hi1");
        }
        else{
            alert("Enter all fields");
        }
        
        
    })
})

function openModal(modal) {
    if(modal == null)
    return;

    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if(modal == null)
    return;

    modal.classList.remove('active');
    overlay.classList.remove('active');
}