function toggleNav() {
    var nav = document.getElementById("left-nav");
    nav.classList.toggle("show-nav");
  }


  let globalArr = []

    getFetchData()
    async function getFetchData() {
        try {
            let response = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products")
            let data1 = await response.json()
            console.log(data1)

            globalArr = data1.data
            Display(globalArr)

        } catch (error) {
            console.log(error)
        }
    }
    let CartArr = JSON.parse(localStorage.getItem("cart")) || []

    let containerEl = document.querySelector(".Container")
    function Display(data) {
        containerEl.innerHTML = ""
        data.map((element, index) => {
            let cards = document.createElement("div")
            cards.className = "cards"

            let image = document.createElement("img")
            image.src = element.img
            image.className = "imgClass"

            // let rightDiv = document.createElement('div')

            let name = document.createElement("h3")
            // 18px
            name.innerText = element.brand

            let desc = document.createElement("p")
            desc.innerText = element.details
            // 13px

            // let brand = document.createElement("h5")
            // brand.innerText = element.brand

            let price = document.createElement("h2")
            price.innerText = `₹${element.price}`

            let category = document.createElement("p")
            category.innerText = element.category

            // let rating = document.createElement("p")
            // rating.innerText = element.rating

            let addtoCart = document.createElement("button")
            addtoCart.innerText = "Add To Cart"
            addtoCart.addEventListener("click", () => {
                if (checkDuplicate(element)) {
                    alert("Product Already in the cart")
                } else {
                    CartArr.push({ ...element, quantity: 1 })
                    localStorage.setItem("cart", JSON.stringify(CartArr))
                    alert("Product Added")
                }
            })


            cards.append(image, name, price, desc, category, addtoCart)
            containerEl.append(cards)

        })
    }

    //search by name
    let formEl1 = document.querySelector("#searchName")
    formEl1.addEventListener("submit", (e) => {
        e.preventDefault()
        let searchpara = formEl1.searchpara.value
        let filtered = globalArr.filter((element) => {
            if (element.brand.toLowerCase().includes(searchpara.toLowerCase())) {
                return true
            } else {
                return false
            }
        })
        Display(filtered)
    })


    //price range

    let filterForm = document.querySelector("#priceForm")
    filterForm.addEventListener("submit", (event) => {
        event.preventDefault()
        let fromPrice = +document.querySelector("#from").value
        let toPrice = +document.querySelector("#to").value
        let filtered = globalArr.filter((element) => {
            if (element.price >= fromPrice && element.price <= toPrice) {
                return true
            } else {
                return false
            }
        })
        Display(filtered)

    })


    //Cart Duplicate
    function checkDuplicate(element) {
        for (let i = 0; i < CartArr.length; i++) {
            if (CartArr[i].id == element.id) {
                return true
            }
        }
        return false
    }

   

    let sortBrandInp = document.querySelector("#sortBrand")


    sortBrandInp.addEventListener("change", () => {
        if (sortBrandInp.value == "") {
            Display(globalArr)
        } else {
            let filtered = globalArr.filter((element) => {
                if (element.brand == sortBrandInp.value) {
                    return true
                }
                return false
            })
            console.log(sortBrandInp.value)
            Display(filtered)
        }
    })


    //sort by Category --> mobile, laptop

    let categoryInp = document.querySelector("#filterbyCategory")

    categoryInp.addEventListener("change", () => {
        if (categoryInp.value == "") {
            Display(globalArr)
        } else {
            let filtered = globalArr.filter((element) => {
                if (element.category == categoryInp.value) {
                    return true
                }
                return false
            })
            console.log(categoryInp.value)
            Display(filtered)
        }
    })


    function cart()
    {
      window.location.assign("cartpage.html")
    }
    
    function mobiles()
    {
      window.location.assign("productspage.html")
    }

    function image()
    {
      window.location.assign("homepage.html")
    }