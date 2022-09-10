let products = {
    data: [
        {
            productsName: "Regular white Tshirts",
            category: "TopWear",
            price: "3054",
            image: "https://m.media-amazon.com/images/I/71pyxqMnLUL._UL1500_.jpg"
        },
          
        {
            productsName: "Beige shorts",
            category: "Bottom",
            price: "36",
            image: "https://m.media-amazon.com/images/I/71pyxqMnLUL._UL1500_.jpg"
        },
      
        {
            productsName: "sporty smartwatch",
            category: "watch",
            price: "305",
            image: "https://m.media-amazon.com/images/I/71pyxqMnLUL._UL1500_.jpg"
        },
    
        {
            productsName: "basics knee",
            category: "Topwear",
            price: "300",
            image: "https://m.media-amazon.com/images/I/71pyxqMnLUL._UL1500_.jpg"
        },
      
        {
            productsName: "Black leevis",
            category: "Jacket",
            price: "3000",
            image: "https://m.media-amazon.com/images/I/71pyxqMnLUL._UL1500_.jpg"
        },
        
        {
            productsName: "Stylish",
            category: "Bottom",
            price: "30055",
            image: "https://m.media-amazon.com/images/I/71pyxqMnLUL._UL1500_.jpg"
        },
          
        {
            productsName: "Brown",
            category: "Jacket",
            price: "4780",
            image: "https://m.media-amazon.com/images/I/71pyxqMnLUL._UL1500_.jpg"
        },
    
        {
            productsName: "Regular red Tshirts",
            category: "TopWear",
            price: 30,
            image: "https://m.media-amazon.com/images/I/71pyxqMnLUL._UL1500_.jpg"
        },

    ]
};
console.log(products.data);

for (let i of products.data) {
    let card = document.createElement("div");
    card.classList.add("card", "i.category");
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");

    //products name

    let name = document.createElement('h5');
    name.classList.add("product-name");
    name.innerText=i.productsName.toUpperCase();
    container.appendChild(name);
//price
    let price= document.createElement("h6");
    price.innerText = "$"+ i.price;
    container.appendChild(price);
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}