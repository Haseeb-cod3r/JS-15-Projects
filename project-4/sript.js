// ====== Unsplash API Access Key ======
const accessKey = "M8ajvgpqzqF8InmHfQ5_BH7h4fnxQ89V0KTj256tcxw";

// ====== DOM Elements ======
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

// ====== Global Variables ======
let keyWord = ""; 
let page = 1; 

// ====== Function to Search Images from Unsplash ======
async function searchImages() {
  // Get user input from search box
  keyWord = searchBox.value;

  // Build Unsplash API URL
  const URL = `https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${accessKey}&per_page=12`;


  // Fetch data from Unsplash API
  const response = await fetch(URL);
  const data = await response.json();

  // Clear previous results when it's a new search
  if (page === 1) {
    searchResult.innerHTML = "";
  }



  // Get results array from API response
  const results = data.results;

  // Loop through results and create image elements
  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small; 


    const imageLink = document.createElement("a");
    imageLink.href = result.links.html; 
    imageLink.target = "_blank";

    // Append image inside link
    imageLink.appendChild(image);



    // Append link inside search result container
    searchResult.appendChild(imageLink);
  });

  // Show "Show More" button after results are displayed
  showMoreBtn.style.display = "block";
}

// ====== Event Listener: Form Submit ======
searchForm.addEventListener("submit", (e) => {
  e.preventDefault(); 
  page = 1; 
  searchImages(); 
});



// ====== Event Listener: Show More Button ======
showMoreBtn.addEventListener("click", () => {
  page++; 
  searchImages(); 
});
