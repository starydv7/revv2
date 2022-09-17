fetch("https://dbdat.herokuapp.com/cars")
.then(function (response) {
    return response.json();
})
.then(function (products) {
  
  let  dat=products
  append(dat)
    }).catch((err)=>console.log(err))

   function append(data){
    console.log(data,"ss")
    let main=  document.querySelector("#main")
    main.innerHTML=null;
    main.style.borderRadius="50px"
    data?.map(function (elem) {
    let div =document.createElement("div");
    div.style.borderRadius="7px"
    div.style.border="2px solid"
   
    var avatar = document.createElement("img");
    avatar.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyTyvwCyjMOfmb-lN7FuzOm_cSPb030bnnx1SBEXXg&s";
    avatar.style.width="100%"
    avatar.style.height="40%"
    let h2= document.createElement("h2")
    h2.style.color="green"
    h2.innerText="Brand :-"+elem.brand
    h2.style.marginBottom="-10px"
    let ha= document.createElement("h3")
    ha.style.marginBottom="-10px"
    ha.innerText="Type :-"+elem.type
    var h3 = document.createElement("h3");
    h3.style.marginBottom="-10px"
    h3.innerText="Year :-"+elem.year
    var h4 = document.createElement("h4");
    h4.style.marginBottom="-10px"
    h4.innerText="Kms Driven:-"+elem.kms
    var hx= document.createElement("h4");
    hx.style.marginBottom="-10px"
    hx.innerText="Price:-"+elem.Price
    hx.style.color="red"
    var h5= document.createElement("h4");
    h5.innerText="Description:-"+elem.Description
    h5.style.color="blue"
    var delet = document.createElement("button");
    delet.style.marginRight="20px"
    delet.innerText = "Delete";
    delet.style.backgroundColor="red";
    delet.style.color="white";
    delet.style.border="none";
    delet.style.borderRadius="5px";
    delet.addEventListener("click", function () {
      addTodelet(elem.id);
    });
    var edit = document.createElement("button");
    edit.innerText = "Edit";
    edit.style.backgroundColor="blue";
    edit.style.marginRight="20px"
    edit.style.color="white";
    edit.style.border="none";
    edit.style.borderRadius="5px";
    edit.addEventListener("click", function () {
      addToedit(elem.id);
    });
    var wishlist= document.createElement("button");
    wishlist.innerText ="Add_to_wishlist";
    wishlist.style.backgroundColor="green";
    wishlist.style.marginRight="20px"
    wishlist.style.color="white";
    wishlist.style.border="none";
    wishlist.style.borderRadius="5px";
    wishlist.addEventListener("click", function () {
      addTowishist(elem);
    });
   
   div.append(avatar,h2,ha,h3,h4 ,hx,h5,delet,edit,wishlist)
 main.append(div)
})

    }
    function  addTowishist(elem){
        fetch("https://dbdat.herokuapp.com/wishlisted_cars",{
      "method":"POST",
      headers: {"Content-Type":"application/json","Accept":"application/json"},
       body:JSON.stringify(elem) 
}).then((res)=>{return res.json()})
    .then((res)=>{
     console.log(res,"sd")
   
      alert("Item Added to Wishlist")
    }).catch((err)=>{
        alert(" Item already added");
    })
}


    function addTodelet(id) {
        fetch(`https://dbdat.herokuapp.com/cars/${id}`,{
      "method":"DELETE"
})
.then(function (products) {
    fetch("https://dbdat.herokuapp.com/cars")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
      
      let  dat=products
      append(dat)
        })
      })
console.log(id)
        alert("deleted Successful");
      }


      function addToedit(id) {
        localStorage.setItem("id",(id))
       window.location.href="edit.html"
      }


      document.getElementById("filter_sort").addEventListener("change",functii);
      document.getElementById("filter_sor").addEventListener("change",functii);
      document.getElementById("filter_so").addEventListener("change",functii);

      function functii(){
        event.preventDefault()
     let filter=document.getElementById("filter_sort").value;
     let sort=document.getElementById("filter_sor").value;
     console.log(filter,sort)
        fetch("https://dbdat.herokuapp.com/cars")
.then(function (response) {
    return response.json();
})
.then(function (products) {
  
  let  dat=products
  if(filter=="a" &&sort =="a"){
  
 append(dat)
}
else if(filter=="a" &&sort=="asc"){
    dat.sort((a,b)=> a.price-b.price)
    append(dat)
}
else if(filter=="a" &&sort=="desc"){
    dat.sort((b,a)=> a.price-b.price)
    append(dat)
}
else if(filter!="a" &&sort=="a"){
   let ax=[];
   dat.map((ele)=>{
    if(ele.brand==filter){
        ax.push(ele)
    }
   })
    append(ax)
}
else if(filter!="a" &&sort=="asc"){
    let ax=[];
    dat.map((ele)=>{
     if(ele.brand==filter){
         ax.push(ele)
     }
    })
    ax.sort((a,b)=>a.price-b.price)
     append(ax)
 }
 else if(filter!="a" &&sort=="desc"){
    let ax=[];
    dat.map((ele)=>{
     if(ele.brand==filter){
         ax.push(ele)
     }
    })
    ax.sort((b,a)=>a.price-b.price)
     append(ax)
 }
    }).catch((err)=>console.log(err))       
      }     
     

function cdi(){
  event.preventDefault();
  let name=document.getElementById("name").value;
  console.log(name,"d")
  console.log("cdi")
  fetch(`https://dbdat.herokuapp.com/users?q=${name}`)
.then(function (response) {
    return response.json();
})
.then(function (products) {
  
  let  dat=products
  console.log(dat)
  append(dat)
    }).catch((err)=>console.log(err))

}