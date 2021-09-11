const searchField = document.getElementById('search-field');
const searchBtn = document.getElementById('search-btn');
const errorDiv = document.getElementById('errors');
const bookSpinner = document.getElementById("spinner")

    searchBtn.addEventListener("click", function (){
        const searchText = searchField.value;
        searchField.value = '';
        if(searchText === ""){
            errorDiv.innerText ='Search field cannot be empty'
            return;
        }  
            const url = 
            `https://openlibrary.org/search.json?q=${searchText}
            `
            spinner.classList.remove("d-none");   

            fetch(url)
            .then(res => res.json())
            .then(data =>displayBooks(data.docs))
            .finally(()=>{
                searchField.value === '';
                spinner.classList.add("d-none");
            })
            
        });
    

        const displayBooks = book => {
              if(book.status === 404){
            errorDiv.innerText = "NO Result Found"
        } else{ 
            errorDiv.innerText =""
    }

    const books = book.slice(0, 12)
    const bookContainer = document.getElementById('book-container')
    bookContainer.textContent = '';
    
        books.forEach(book=> {
            const bookShelf = document.createElement('div')
            bookShelf.classList.add("col-md-3")
            bookShelf.innerHTML = 
            `<div class="shadow rounded p-3 m-2">
            <img src='https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg' class="card-img-top">
            <h3>${book.title}</h3>
            <p>Author Name: ${book.author_name}</p>
            <p>Publisher: ${book.publisher.slice(0,20)}</p>
            <h6>First Publication: ${book.first_publish_year}</h6>
            </div>
            `
            bookContainer.appendChild(bookShelf);
        })
    }
