fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    data.forEach((book) => {
      const card = document.createElement("div");
      card.classList.add("col-4");
      card.innerHTML = `
      <div class="card" style="width: 18rem;">
        <img src="${book.img}" class="card-img-top" alt="" />
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <p class="card-text">
            ${book.price} €
          </p>
          <button class="scarta">Scarta</button>
        </div>
      </div>
      `;
      // CODICE PER SCARTARE LA CARD
      document.getElementById("row").appendChild(card);
      card.querySelector(".scarta").addEventListener("click", () => {
        card.remove();
      });
    });
  });
