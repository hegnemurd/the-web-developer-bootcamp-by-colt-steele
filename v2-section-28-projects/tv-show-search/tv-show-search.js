const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } }; // , {headers: }, {etc}
  const res = await axios.get("http://api.tvmaze.com/search/shows", config);
  displayImages(res.data);
  form.elements.query.value = "";
});

const displayImages = (displays) => {
  for (let display of displays) {
    if (display.show.image) {
      const img = document.createElement("IMG");
      img.src = display.show.image.medium;
      document.body.append(img);
    }
  }
};
