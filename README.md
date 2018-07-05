# React News Search App

A one-page news search application built in React.

___

## Project Notes

This was a fun project, and I learned a lot! I should mention that I spent about 8 hours on this project, but I added about 4 hours of time with extra research, detail work that I wasn''t asked to do, some humble mobile and super-large-screen responsiveness, and accounting for some weird cases and errors with NewsAPI (detailed below).


### Some weird NewsAPI stuff

I understood that I had to use NewsAPI's `everything` endpoint for this app, because `top headlines` doesn't have options for `language=en` or `sortBy`. But querying for just `language=en`, or both `language=en` and `sortBy` would return an error stating that the search was too broad. This led me to a couple of fixes:

* In the case of no query or sort I queried `top headlines` instead. This is what you see after the initial load or if you do a blank search and no sort.

* In the case of a sort with a blank search, I ended up querying the word `news`. This isn't a good fix, but I put it in just so that the app wouldn't break. I understand why sorting everything with no query is too broad of a search, so I guess my only recommended solution would be for NewsAPI to add `sortBy` to `top headlines`.

One more thing: in this process I actually caught a bug in NewsAPI! They say their default `sortBy` is `publishedAt`, but it's actually `relevancy`. I couldn't find a place to report bugs, so I tweeted them about it. (Also, their `relevancy` sort is super weird - I don't know how they're evaluating relevancy but it returns a ton of results from DeviantArt.)


### Things that went well

* It works!

* I'm happy with my component separation - it might have been overkill but I tried to make all components single responsibility.

* The design is pretty much pixel-perfect, and I added in some mobile and super-large-screen design.

* The project was really interesting and I had a lot of fun! Any time I used something I was unfamiliar with, I had a great time digging into extra research.


### Things that need impovement

* I went a bit over time (even taking away the extra work, I came in about an hour over).

* In `App.js`, I think my implementation of repopulating the articles is a bit too chunky, and relies a little bit too much on promises. I'd love some feedback on this!

* My current solution is a slightly bloated because I update the query and sort in `state` unnecessarily. I currently grab the query and sort from their respective fields, send them to state, and then run the `setArticles` method using `this.state.query` and `this.state.sort` as params, when I could just grab the query and sort and send those directly to the `setArticles` method. My thinking was that you'd want to hold the query and sort in `state` for a more complex implementation, as this is a pretty lightweight project. But I think there may be a better/lighter implementation that does depend on `this.state.query` and `this.state.sort` that's eluding me.

___

This project is [Powered by News API](https://newsapi.org).

___

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

For information on how to perform common tasks, please visit:<br>
[here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
