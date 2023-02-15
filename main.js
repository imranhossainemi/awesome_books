let bookArr = JSON.parse(localStorage.getItem('book')) || [];
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBook = () => {
    document.querySelector('.form').addEventListener('submit', () => {
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      if (title && author) {
        const newBook = {
          title,
          author,
        };
        bookArr.push(newBook);
        localStorage.setItem('book', JSON.stringify(bookArr));
        this.showBooks();
      }
    });
  };

  showBooks = () => {
    if (!bookArr.length) {
      document.querySelector('.book-list').innerHTML = 'No books added';
    } else {
      let markup = '';
      bookArr.forEach((elem, index) => {
        markup += `<div class='book'>
        <p> " ${elem.title} " by ${elem.author}</p>
        <button type="button" class="remove-btn" id="${index}">Remove</button>
      </div>`;
      });
      document.querySelector('.book-list').innerHTML = markup;
    }
    const removeBook = () => {
      const removeBtn = document.querySelectorAll('.remove-btn');

      removeBtn.forEach((item) => item.addEventListener('click', () => {
        const removeId = parseInt(item.id, 10);
        let obj = JSON.parse(localStorage.getItem('book'));
        bookArr = obj;
        bookArr = bookArr.filter((element, index) => index !== removeId);
        obj = bookArr;
        localStorage.setItem('book', JSON.stringify(obj));
        this.showBooks();
      }));
    };
    removeBook();
  };
}
const awesomeBooks = new Book();
awesomeBooks.addBook();
awesomeBooks.showBooks();