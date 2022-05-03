console.log("This is my index js file");

// Initialize the news api parameters
let category = "business";
let domains = "yahoo.com";
let sortby = "popularity";
let language = "en";
let pagesize = "5";
let apiKey = "c729e26ec97e4b6b905df8a6c90f38da";

// Grab the news container
let newsAccordion = document.getElementById("newsAccordion");

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/everything?q=stock&domains=${domains}&sortby=${sortby}&language=${language}&pagesize=${pagesize}&apiKey=${apiKey}`,
  true
);

// What to do when response is ready
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let newsHtml = "";
    articles.forEach(function (element, index) {
      // console.log(element, index)
      let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-light collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}" style="white-space: normal; text-align: left;">
                                   • ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href="${element["url"]}" target="_blank" >Read more</a>  </div>
                            </div>
                        </div>`;
      newsHtml += news;
    });
    newsAccordion.innerHTML = newsHtml;
  } else {
    console.log("Some error occured");
  }
};

xhr.send();
