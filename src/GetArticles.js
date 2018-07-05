const newsURL = 'https://newsapi.org/v2/everything?';
const language = 'language=en&';
const apiKey = 'apiKey=ac90f850db654a71aa83238c70b4dc77';
const topHeadlineURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=ac90f850db654a71aa83238c70b4dc77";

export async function getArticles(query, sort) {
  let requestURL = "";
  let formattedQuery = "";

  if (query !== "") {
    formattedQuery = "q=" + query + "&";
  }

  if (query === "" && sort === "") {
    // fix for "too broad" error when neither sorting nor querying
    requestURL = topHeadlineURL;
  } else if (query === "") {
    // fix for "too broad" error when using sortBy alone.
    requestURL = newsURL + language + "q=news&" + sort + apiKey;
  } else {
    requestURL = newsURL + language + formattedQuery + sort + apiKey;
  }

  let req = new Request(requestURL);

  let data = await fetch(req)
    .then(function(response) {
      return response.json();
    });

  return data.articles;
}
