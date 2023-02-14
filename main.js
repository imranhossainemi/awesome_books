const form = document.querySelector('.form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const bookList = document.querySelector('.book-list');
let bookArr = [];
let book = '';
const localItems = JSON.parse(localStorage.getItem('book'));

if (localItems === null) {
  bookArr = [];
} else {
  bookArr = JSON.parse(localStorage.getItem('book'));
}

form.addEventListener('submit', () => {
  const newBook = { title: title.value, author: author.value };
  bookArr.push(newBook);
  localStorage.setItem('book', JSON.stringify(bookArr));
});
bookArr.forEach((item, index) => {
  book += `
  <div class='book'>
    <p> "${item.title}" by ${item.author}</p>
    <button type="button" class="remove-btn" id="${index}">Remove</button>
    <hr>
  </div>`;
});

bookList.innerHTML = book;

const removeBtn = document.querySelectorAll('.remove-btn');

removeBtn.forEach((item) => item.addEventListener('click', () => {
  const removeId = parseInt(item.id, 10);
  let obj = JSON.parse(localStorage.getItem('book'));
  bookArr = obj;
  bookArr = bookArr.filter((element, index) => index !== removeId);
  obj = bookArr;
  localStorage.setItem('book', JSON.stringify(obj));
  window.location.reload();
}));