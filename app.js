function india() {
  let country = "in";
  news(country);
}

function us() {
  let country = "us";
  news(country);
  console.log(country);
}

function news(country) {
  var apikey = "eeeb07f7be8a4fb8a84e71dda0107507";

  axios
    .get(
      `http://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apikey}`
    )
    .then((response) => {
      console.log(response);
      let section = document.querySelector("section");
      section.innerHTML = "";
      response.data.articles.forEach((news) => {
        let div = document.createElement("div");
        div.classList.add("card");

        let img = document.createElement("img");
        img.setAttribute("src", news.urlToImage);

        div.appendChild(img);

        let heading = document.createElement("h3");
        let headingText = document.createTextNode(news.title);
        heading.appendChild(headingText);
        div.appendChild(heading);

        let content = document.createElement("p");
        let contentText = document.createTextNode(news.description);
        content.appendChild(contentText);
        div.appendChild(content);

        let readlink = document.createElement("a");
        let readText = document.createTextNode("Read More");
        readlink.setAttribute("href", news.url);
        readlink.appendChild(readText);
        div.appendChild(readlink);
        section.appendChild(div);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
