function formatCategoryName(str) {
  // Remove "fetch" from the string
  let formattedStr = str.split("fetch")[1];

  // Start index of Movies
  const index = formattedStr.indexOf("Movies");

  // If index is not -1, then the word "Movies" found; slicing "Movies" out
  if (index !== -1) formattedStr = formattedStr.slice(0, index);

  return formattedStr;
}

function pickRandomMovie(movies) {
  // select random category
  const randomCategory =
    Object.keys(movies)[Math.floor(Math.random() * Object.keys(movies).length)];

  // select random movie from the category
  const randomMovie =
    movies[randomCategory][
      Math.floor(Math.random() * movies[randomCategory].length)
    ];

  return randomMovie;
}

export { formatCategoryName, pickRandomMovie };
