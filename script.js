document.body.innerHTML = `<h2>Loading...</h2>`
// async & await 
async function getData() {
    // url
    const url = "http://makeup-api.herokuapp.com/api/v1/products.json";
    try {
        // fetching data
        const data = await fetch(url);
        const jsonData = await data.json();
        // console.log(jsonData);

        // Creating HTML tags #header #description #product #mainContainer
        document.body.innerHTML = `
        <div id="header" class="header">
        <h1>Makeup API</h1><br>
        <p id="description">Creating a site by using Makeup API </p>
        </div>
        <div id="product">
        <h3 id="sort">Select Product</h3>
            <button onclick="" id="nail-polish">Nail Polish</button>
            <button onclick="" id="lip_liner">Lip Liner</button>
            <button onclick="" id="foundation">Foundation</button>
            <button onclick="" id="eyebrow">Eyebrow</button>
            <button onclick="" id="eyeshadow">Eyeshadow</button>
            <button onclick="" id="lipstick">Lipstick</button>
            <button onclick="" id="mascara">Mascara</button>
            <button onclick="" id="eyeliner">Eyeliner</button>
            <button onclick="" id="blush">Blush</button>
            <button onclick="" id="bronzer">Bronzer</button>
        </div>
        <div id="mainContainer" class="main-container">`

        // items on open
        for (let i = 0; i < 30; i++) {
            displayData(jsonData[i]);
        }

        // button nailPolish
        var nailPolish = document.getElementById("nail-polish")
        nailPolish.addEventListener("click", function () {
            mainContainer.innerHTML = ""
            for (let data of jsonData) {
                // console.log(data.product_type)
                if (data.product_type == "nail_polish") {
                    displayData(data)
                }
            }
        })

        // button lipLiner
        var lipLiner = document.getElementById("lip_liner")
        lipLiner.addEventListener("click", function () {
            mainContainer.innerHTML = ""
            for (let data of jsonData) {
                // console.log(data.product_type)
                if (data.product_type == "lip_liner") {
                    displayData(data)
                }
            }
        })

        // button lipLiner
        var foundation = document.getElementById("foundation")
        foundation.addEventListener("click", function () {
            mainContainer.innerHTML = ""
            for (let data of jsonData) {
                // console.log(data.product_type)
                if (data.product_type == "foundation") {
                    displayData(data)
                }
            }
        })

        // button lipLiner
        var eyebrow = document.getElementById("eyebrow")
        eyebrow.addEventListener("click", function () {
            mainContainer.innerHTML = ""
            for (let data of jsonData) {
                // console.log(data.product_type)
                if (data.product_type == "eyebrow") {
                    displayData(data)
                }
            }
        })

        // button lipLiner
        var eyeshadow = document.getElementById("eyeshadow")
        eyeshadow.addEventListener("click", function () {
            mainContainer.innerHTML = ""
            for (let data of jsonData) {
                // console.log(data.product_type)
                if (data.product_type == "eyeshadow") {
                    displayData(data)
                }
            }
        })

        // button lipLiner
        var lipstick = document.getElementById("lipstick")
        lipstick.addEventListener("click", function () {
            mainContainer.innerHTML = ""
            for (let data of jsonData) {
                // console.log(data.product_type)
                if (data.product_type == "lipstick") {
                    displayData(data)
                }
            }
        })

        // button mascara
        var mascara = document.getElementById("mascara")
        mascara.addEventListener("click", function () {
            mainContainer.innerHTML = ""
            for (let data of jsonData) {
                // console.log(data.product_type)
                if (data.product_type == "mascara") {
                    displayData(data)
                }
            }
        })

        // button eyeliner
        var eyeliner = document.getElementById("eyeliner")
        eyeliner.addEventListener("click", function () {
            mainContainer.innerHTML = ""
            for (let data of jsonData) {
                // console.log(data.product_type)
                if (data.product_type == "eyeliner") {
                    displayData(data)
                }
            }
        })

        // button blush
        var blush = document.getElementById("blush")
        blush.addEventListener("click", function () {
            mainContainer.innerHTML = ""
            for (let data of jsonData) {
                // console.log(data.product_type)
                if (data.product_type == "blush") {
                    displayData(data)
                }
            }
        })

        // button bronzer
        var bronzer = document.getElementById("bronzer")
        bronzer.addEventListener("click", function () {
            mainContainer.innerHTML = ""
            for (let data of jsonData) {
                if (data.product_type == "bronzer") {
                    displayData(data)
                }
            }
        })

    } catch (error) {
        console.log(error);
    }
};

//calling function
getData();

//function to display items
function displayData(data) {
    mainContainer.innerHTML += `
  <div class="container">
  <img src="${data.image_link}" alt="">
  <p><b>${data.name}</b></p>
  <p>Brand: ${data.brand}</p>
  <p>${data.price_sign} ${data.price}</p>
  <p>${data.description}</p>
  <button id="shop" onclick="window.location.href='${data.product_link}'">Shop</button>
  </div>
  `;
};
