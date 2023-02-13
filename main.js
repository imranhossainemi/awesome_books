const form = document.querySelector('.form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const addBtn = document.querySelector('.btn-add');

form.addEventListener('submit', () => {
    const newBook = {
      title: title.value,
      author: author.value,
    };
  
    // const obj = JSON.parse(localStorage.getItem('books'));
  
    // obj.allbook.push(newBook);
  
    // booklist = obj.allbook;
    localStorage.setItem('books', JSON.stringify(newBook));
  });