const newsURL = 'https://newsapi.org/v2/everything?';
const language = 'language=en&';
const apiKey = 'apiKey=ac90f850db654a71aa83238c70b4dc77';

export async function getArticles(query, sort) {
  let combinedURL = newsURL + language + query + sort + apiKey;
  let req = new Request(combinedURL);

  let data = await fetch(req)
  .then(function(response) {
    return response.json();
  });

  return data.articles;
}
