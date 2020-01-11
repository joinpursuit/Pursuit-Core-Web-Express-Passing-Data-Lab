# Pursuit-Core-Web-Express-Passing-Data-Lab

Build a server that has endpoints for both images from Pixabay, and gifs from giphy.  Additionally, build out a simple front end that you can use to query the backend and display the results.

## Backend

### Endpoints

Sign up for free accounts at the following websites:

- https://pixabay.com/api/docs/#api_javascript_example
- https://developers.giphy.com/explorer

Build a server that has two routes:

#### /gifs

Sample query:

```
localhost:3000/gif/?search=spongebob
```

Your response should look like the following:

```
[
  "https://giphy.com/gifs/spongebob-meme-imma-head-out-ight-PkLPBuyozY7F31wCxF",
  "https://giphy.com/gifs/embarrassed-spongebob-squarepants-njPdRtrrdyoVO",
  ...
]
```

- Use the [Giphy API](https://developers.giphy.com/explorer) to do your GIF search. 
- Parse through their results.


#### /images

sample query:

```
localhost:3000/images/?search=javascript
```

Your response should look like the following:

```
[
  "https://pixabay.com/get/35bbf209e13e39d2_640.jpg",
  ...
]
```

- Use the [Pixabay API](https://pixabay.com/api/docs/#api_javascript_example) to do your image search. 
- Parse through their results.

## Fontend

Build a simple frontend to access your backend.  It should consist of:

- An `input` for entering the search term
- A `button` for "Gif search"
- A `button` for "`Image search`"

Tapping a button should load either gifs or images in a `div` below the search bar.
