// Define the gallery items in an array (Object format)
const galleryItems = [
	{ category: "shoe", full: "shoe-1.jpg", thumb: "shoe-1.jpg", caption: "Shoe - The latest collection" },
	{ category: "headphone", full: "headphone-1.jpg", thumb: "headphone-1.jpg", caption: "Headphone - Wireless over-ear" },
	{ category: "camera", full: "camera-1.jpg", thumb: "camera-1.jpg", caption: "Camera - DSLR model" },
	{ category: "headphone", full: "headphone-2.jpg", thumb: "headphone-2.jpg", caption: "Headphone - Noise Cancelling" },
	{ category: "camera", full: "camera-2.jpg", thumb: "camera-2.jpg", caption: "Camera - Compact mirrorless" },
	{ category: "headphone", full: "headphone-3.jpg", thumb: "headphone-3.jpg", caption: "Headphone - Sports model" }
  ];
  
  // Function to display the thumbnail images dynamically
  function displayThumbnails() {
	const thumbnailList = document.getElementById("thumbnail-list");
  
	// Iterate through the galleryItems array and create <li> and <img> for each item
	galleryItems.forEach(item => {
	  const listItem = document.createElement("li");
	  const img = document.createElement("img");
	  img.src = item.thumb;
	  img.alt = item.category;
	  img.classList.add("thumbnail");
	  listItem.appendChild(img);
	  thumbnailList.appendChild(listItem);
  
	  // Add event listener to update the featured image and caption when a thumbnail is clicked
	  img.addEventListener("click", function() {
		const featuredImg = document.getElementById("featured-img");
		const caption = document.getElementById("image-caption");
		featuredImg.src = item.full;
		caption.textContent = item.caption;
		
		// Update the active state for thumbnails
		document.querySelectorAll(".thumbnail").forEach(thumbnail => thumbnail.classList.remove("active"));
		img.classList.add("active");
	  });
	});
  }
  
  // Call the function to populate the thumbnails
  displayThumbnails();
  