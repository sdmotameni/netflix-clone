export default function formatCategoryName(str) {
  // Remove "fetch" from the string
  let formattedStr = str.split("fetch")[1];

  // Start index of Movies
  const index = formattedStr.indexOf("Movies");

  // If index is not -1, then the word "Movies" found; slicing "Movies" out
  if (index !== -1) formattedStr = formattedStr.slice(0, index);

  return formattedStr;
}
