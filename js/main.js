const books = document.querySelector(".js-books");
const caption = document.querySelector(".js-caption");

if (bookData.length == 0 || bookData == null || bookData == undefined) {

  caption.innerHTML = `NO BOOKS TO SHOW SAD LIFE`;
} else {
  bookData.forEach(
    (book) =>
      (books.innerHTML += `
    <tr>
        <th scope="row">${book.title}</td>
        <td>${book.author}</td>
        <td>${book.year}</td>
        <td>${book.genre}</td>
    </tr>
    `)
  );
}
