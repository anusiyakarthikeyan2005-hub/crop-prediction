
    let datas = []

    fetch("../datas/data.json")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        data.forEach(item => {
          const data = document.getElementById("result")
          data.innerHTML += `
          <div class="crops-card">
            <img src="${item.image}">
            <h1>${item.crop} </h1>
            <p> <b> Crop Description: </b> ${item.description} </p>  
      
            <p> ${item.grow}</p>
          </div>
          `
          datas.push(item);
          // console.log(item.name);
          // console.log(item.age);
          // console.log(item.mail);
        });
      })
      .catch(error => console.error('Error fetching JSON:', error));

    console.log(datas);


    function search() {
      const name = document.getElementById("name").value;

      datas.forEach(item => {
        if (item.name === name) {
          // console.log("Name: " + item.name);
          // console.log("Age: " + item.age);
          // console.log("Mail: " + item.mail);
        } else {
          console.log("No data found");
        }
      })

    }