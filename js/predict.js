    let csvData = [];

    
    fetch("../datas/crop_dataset.csv")
      .then(res => res.text())
      .then(data => {
        const lines = data.trim().split("\n");
        const headers = lines[0].split(",");

        csvData = lines.slice(1).map(line => {
          const values = line.split(",");
          let obj = {};
          headers.forEach((header, index) => {
            obj[header.trim()] = parseFloat(values[index].trim()) || values[index].trim();
          });
          return obj;
        });

        console.log(csvData); 
      });

    function PredictCrop() {
      const temp = parseFloat(document.getElementById("temp").value);
      const humidity = parseFloat(document.getElementById("humidity").value);
      const ph = parseFloat(document.getElementById("ph").value);
      const rainfall = parseFloat(document.getElementById("rainfall").value);

      let closest = null;
      let minDistance = Infinity;  

      csvData.forEach(item => {
        const distance = Math.sqrt(
          Math.pow(item.temperature - temp, 2) +
          Math.pow(item.humidity - humidity, 2) +
          Math.pow(item.ph - ph, 2) +
          Math.pow(item.rainfall - rainfall, 2)
        );

        if (distance < minDistance) {
          minDistance = distance;
          closest = item;
        }
      });

      if (closest) {
        document.getElementById("result").innerText = `Best match: ${closest.label}`;
      } else {
        document.getElementById("result").innerText = "No match found!";
      }
    }