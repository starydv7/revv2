let products = {
    data: [
        {
            productsName: "Regular white Tshirts",
            category: "TopWear",
            price: "3054",
            image: ""
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
            price: "30",
            image: "https://m.media-amazon.com/images/I/71pyxqMnLUL._UL1500_.jpg"
        },

    ]
};
console.log(products.data);

for (let i of products.data) {
    //create card
    let card = document.createElement("div");
    card.classList.add("card", 'i.category');

    //image div

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag

    let image = document.createElement("img");
    imgContainer.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    

    document.getElementById("products").appendChild(card);
}