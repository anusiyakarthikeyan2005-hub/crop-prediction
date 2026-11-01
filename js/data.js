
let datas = [];

fetch("./datas/data.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);

    data.forEach(item => {
      const result = document.getElementById("result");

      result.innerHTML += `
        <div class="crops-card">

          <img 
            src="${item.image}" 
            alt="${item.crop}"
            onerror="this.style.display='none'"
          >

          <h1>${item.crop}</h1>

          <p>
            <b>Crop Description:</b> ${item.description}
          </p>

          <p>${item.grow}</p>

        </div>
      `;

      datas.push(item);
    });
  })
  .catch(error => console.error("Error fetching JSON:", error));


function search() {
  const name = document.getElementById("name").value.toLowerCase();

  datas.forEach(item => {
    if (item.crop.toLowerCase() === name) {
      console.log("Crop found:", item);
    }
  });
}
