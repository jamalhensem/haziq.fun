const experiences = {
  delilits: {
    img: "img/delilits.png",
    title: "Delilits",
    description: "Delilits was an online shawl brand. I was a developer for their website which was Delilits.com (The domain was no longer available). I also made three Instagram posts for Delilits which could be seen at the My work section.",
    images: []
  },
  tetrabit: {
    img: "img/TetraBit2.png",
    title: "TETRABIT25",
    description: "TETRABIT25 is an event organized by my course MC111. The event was to get beta testers to try our game. I am the treasurer and protocol bureau leader for the event. My job was to handle the event's financial flow and making sure that the event went as planned. I am also the developer of the game SILENT RESISTANCE for the TETRABIT25 exhibition.",
    images: ["img/DSC_7385-Enhanced-NR.jpg", "img/DSC_7483-Enhanced-NR.jpg", "img/DSC_7884-Enhanced-NR.jpg", "img/_DSC0107.JPG"]
  },
  sepresi: {
    img: "img/sepresi.jpg",
    title: "Sepresi",
    description: "SEPRESI is an acting club at my campus. On 4th of January, the club held a play and I was responsible of handling the ticketing process of the play. All the tickets were preordered and I will have to look for the buyers information before they claim the ticket.",
    images: ["img/semarak2.jpg", "img/semarak3.jpg", "img/semarak4.jpg", "img/semarakj.jpg"]
  }
};

const videos = {
  silent: {
    src: "MyProject10 Preview [NetMode_ Standalone 0]  (64-bit_PC D3D SM6) 2025-01-25 18-56-20.mp4",
    thumbnail: "poster landscape.png"
  },
  portfolio: {
    src: "Adobe XD 2025-01-25 22-15-40.mp4",
    thumbnail: "Screenshot 2025-01-25 230722.png"
  }
};

let currentVideoIndex = 0;
const videoKeys = Object.keys(videos);
let currentPopupKey = null;
let currentImageIndex = 0;

function showPopup(key) {
  const popup = document.getElementById('popup');
  const img = document.getElementById('popup-img');
  const title = document.getElementById('popup-title');
  const description = document.getElementById('popup-description');
  const popupImagesContainer = document.getElementById('popup-images');

  img.src = experiences[key].img;
  title.textContent = experiences[key].title;
  description.innerHTML = experiences[key].description;
  popupImagesContainer.innerHTML = '';

  if (key === 'delilits') {
    const delilitsLink = document.getElementById('delilits-link');
    delilitsLink.style.display = 'block';
  } else {
    document.getElementById('delilits-link').style.display = 'none';
  }

  experiences[key].images.forEach((image) => {
    const imgElement = document.createElement('img');
    imgElement.src = image;
    imgElement.alt = "Experience Image";
    imgElement.onclick = () => showPopupImage(image);
    popupImagesContainer.appendChild(imgElement);
  });

  popup.style.display = 'flex';
}

function showPopupImage(imageSrc) {
  const popupImageContainer = document.getElementById('popup-image-container');
  const popupImage = document.getElementById('popup-image');
  popupImage.src = imageSrc;
  popupImageContainer.style.display = 'flex';
}

function hidePopupImage() {
  document.getElementById('popup-image-container').style.display = 'none';
}

function hidePopup() {
  document.getElementById('popup').style.display = 'none';
}

function showVideoPopup(key) {
  const videoPopup = document.getElementById('video-popup');
  const videoPlayer = document.getElementById('video-player');
  videoPlayer.src = videos[key].src;
  videoPlayer.poster = videos[key].thumbnail;
  videoPopup.style.display = 'flex';
  videoPlayer.play();
  currentVideoIndex = videoKeys.indexOf(key);
}

function hideVideoPopup() {
  const videoPopup = document.getElementById('video-popup');
  const videoPlayer = document.getElementById('video-player');
  videoPlayer.pause();
  videoPopup.style.display = 'none';
}

function nextVideo() {
  currentVideoIndex = (currentVideoIndex + 1) % videoKeys.length;
  const nextKey = videoKeys[currentVideoIndex];
  const videoPlayer = document.getElementById('video-player');
  videoPlayer.src = videos[nextKey].src;
  videoPlayer.poster = videos[nextKey].thumbnail;
  videoPlayer.play();
}

function previousVideo() {
  currentVideoIndex = (currentVideoIndex - 1 + videoKeys.length) % videoKeys.length;
  const prevKey = videoKeys[currentVideoIndex];
  const videoPlayer = document.getElementById('video-player');
  videoPlayer.src = videos[prevKey].src;
  videoPlayer.poster = videos[prevKey].thumbnail;
  videoPlayer.play();
}

function scrollToHero() {
  const heroSection = document.getElementById('hero');
  window.scrollTo({
    top: heroSection.offsetTop,
    behavior: 'smooth'
  });
}

function scrollToContact() {
  const contactSection = document.getElementById('contact');
  window.scrollTo({
    top: contactSection.offsetTop,
    behavior: 'smooth'
  });
}

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    const headerOffset = targetElement.offsetTop;

    if (targetElement) {
      window.scrollTo({
        top: headerOffset,
        behavior: 'smooth'
      });
    }
  });
});

window.addEventListener('click', function (event) {
  const popup = document.getElementById('popup');
  const popupImageContainer = document.getElementById('popup-image-container');
  const videoPopup = document.getElementById('video-popup');
  if (popup && event.target === popup) {
    hidePopup();
  }
  if (popupImageContainer && event.target === popupImageContainer) {
    hidePopupImage();
  }
  if (videoPopup && event.target === videoPopup) {
    hideVideoPopup();
  }
});

/* Mobile Hamburger Menu */
document.querySelector('.hamburger').addEventListener('click', function () {
  const navLinks = document.querySelector('.nav-links');
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});
