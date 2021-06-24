function addBook () {
  var book = document.getElementById("book");
  var author = document.getElementById("author");

  var books = JSON.parse(localStorage.getItem("dadosLivros"));

  if (dados == null) {
    localStorage.setItem("booksData", "[]");
    data = [];
  }
  
  var registerHold = {
    title: book.nodeValue,
    nameAuthor: author.value
  }

  data.push(registerHold);

  localStorage.setItem("booksData", JSON.stringify(data));
  alert("Sucess addition!");

  book.value = ""; 
  author.value = "";
}