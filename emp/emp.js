 let cart = JSON.parse(localStorage.getItem("cart")) || []
    let products = JSON.parse(localStorage.getItem("product"))
    // console.log(product)
    let y = []
    function fetchdata(page = 1, sort = "asc") {

        fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${page}&limit=12&orderBy=${sort}`).
            then((res) => res.json()).
            then((res) => {
                let data = res.data
                y = data

                getdata(data)
                console.log(data)
                //    localStorage.setItem("product",JSON.stringify(data))

            }).catch((err) => {
                console.log(err)
            })
    }
    fetchdata()
    var x = 1
    function handleclick(value) {
        x = value
        fetchdata(value)


    }


    function handlechange(sort) {
        // console.log(sort)
        fetchdata(x, sort)
    }

    function handlefilter(value) {
        const newdata = y.filter((el) => {
            return el.department === value

        })
        getdata(newdata)
        console.log(newdata)
    }
    function getdata(product) {
         document.querySelector("#container").innerHTML = ""
         product.map(function (elem) {
             var box = document.createElement("div");
             box.setAttribute("class","maindiv")
             let img = document.createElement("img");
             img.src = "https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png";
             img.style.height = "200px";
             



            var div = document.createElement("div")
            div.setAttribute("class", "name")
             var div2 = document.createElement("div")
             var department = document.createElement("p");
             department.innerText = elem.department;
            var title = document.createElement("p");
            title.textContent = elem.name;
            
            var price = document.createElement("p");
            price.innerText = elem.salary + "$";
            var div3 = document.createElement("div")
             var gender = document.createElement("p");
             gender.innerText=elem.gender
             

            div2.append(title, price,department)
            div3.append(gender)
            div.append(div2, div3)
            box.append(img, div);

            document.querySelector("#container").append(box);
        });

        function addTowishlist(elem) {
            cart.push(elem)
            localStorage.setItem("cart", JSON.stringify(cart))
        }
    }
