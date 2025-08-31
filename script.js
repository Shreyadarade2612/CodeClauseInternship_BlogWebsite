// Blog post data
const blogPosts = {
  1: {
    title: "20 Books To Add To Your 2025 Reading List",
    content: "Explore our carefully curated list of books you must read this year. From timeless classics to modern gems, this list will inspire and expand your reading horizons.",
    img: "images/book.png"
  },
  2: {
    title: "3 Content Repurposing Steps To Boost Your Marketing",
    content: "Learn how to recycle and repurpose your old content effectively to maximize reach and engagement across different platforms.",
    img: "images/food.png"
  },
  3: {
    title: "3 Tips To Engage Your Newsletter Audience",
    content: "Discover simple yet powerful tips to keep your subscribers hooked, engaged, and excited about your newsletter.",
    img: "images/image.png"
  },
  4: {
    title: "3 Content Repurposing Steps To Boost Your Marketing Game",
    content: "Maximize your content strategy by repurposing existing material. Save time while reaching more audiences effectively.",
    img: "images/marketing.png"
  },
  5: {
    title: "3 Tips To Engage Your Newsletter Audience",
    content: "From storytelling to personalization, explore creative techniques to make your newsletters stand out.",
    img: "images/growth.png"
  },
  6: {
    title: "Top 10 Destinations To Visit In 2025",
    content: "Dreaming of travel? Here’s a curated list of the top 10 destinations you must visit this year for adventure, culture, and relaxation.",
    img: "images/nature.jpg"
  }
};

// Load post based on ID from URL
window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (id && blogPosts[id]) {
    document.getElementById("post-title").innerText = blogPosts[id].title;
    document.getElementById("post-content").innerText = blogPosts[id].content;
    document.getElementById("post-img").src = blogPosts[id].img;
  }
};

// Comment functionality
function addComment() {
  const input = document.getElementById("comment-input");
  const commentText = input.value.trim();
  if (commentText) {
    const commentList = document.getElementById("comment-list");
    const newComment = document.createElement("p");
    newComment.textContent = commentText;
    commentList.appendChild(newComment);
    input.value = "";
  }
}
