const imgpath = [
  {
    image: "./images/images1.jpg",
    title: "Rice",
    description: "Rice plays a vital role in food security and the agricultural economy, especially in regions with monsoon-based farming. Accurate crop prediction enables sustainable rice farming and better resource utilization.",
    buttontext: "View"
  },
  {
    image: "./images/images2.webp",
    title: "Corn",
    description: "Corn grows best in warm climates with well-drained, fertile soil. It requires moderate rainfall and adequate sunlight during its growing period. Proper soil nutrients, especially nitrogen, play a key role in achieving high yield.",
    buttontext: "Next"
  },
  {
    image: "./images/images3.jpg",
    title: "Wheat",
    description: "Wheat grows best in cool climates with moderate rainfall and well-drained loamy soil. It requires proper soil nutrients, suitable temperature, and adequate water at different growth stages to achieve high yield.",
    buttontext : "View next"
  },
  {
    image: "./images/images4.jpg",
    title: "Tea planation",
    description: "The cultivation of tea plants in regions with cool climate, high rainfall, and fertile soil. Tea crops grow best in well-drained, acidic soil with a pH range of 4.5 to 5.5.",
    buttontext: "Skip"
  },
  {
    image: "./images/images5.jpg",
    title: "Grapes",
    description: "Grapes are an important horticultural crop grown widely in warm and semi-arid regions. They are cultivated for fresh consumption, raisins, juice, and wine production.",
    buttontext: "Pevious image"
  }
];

const div = document.getElementById("element");
let currentindex = 0;
let imageElement = [];

// create images
imgpath.forEach((item, index) => {
  const img = document.createElement("img");
  img.src = item.image;
  img.style.display = index === 0 ? "block" : "none";
  div.append(img);
  imageElement.push(img);
});

// get text elements
const title = document.getElementById("title");
const desc = document.getElementById("desc");
const btn = document.getElementById("btn");

// update text
function updatetext(index) {
  title.textContent = imgpath[index].title;
  desc.textContent = imgpath[index].description;
  btn.textContent = imgpath[index].buttontext;
}

updatetext(0);

// show selected image
function showing(index) {
  imageElement.forEach((img, i) => {
    img.style.display = i === index ? "block" : "none";
  });
  updatetext(index);
}

function nextimg() {
  currentindex = (currentindex + 1) % imageElement.length;
  showing(currentindex);
}

function preimg() {
  currentindex = (currentindex - 1 + imageElement.length) % imageElement.length;
  showing(currentindex);
}

// auto slide
setInterval(nextimg, 3000);