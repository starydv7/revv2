fetch("data.json")
.then((res)=>res.json())
.then((res)=>{
   getdata(res.detail)
})
 

function getdata(data) {
      data.map(function(el,i) {
        var mainbox = document.createElement("div")
        mainbox.setAttribute("class", mainbox)
        var box1 = document.createElement("div")
        var img = document.createElement('img')
        img.style.height = "100px"
        img.style.width = "100px"
        img.style.borderRadius = "100px"
        img.src="https://images.hindustantimes.com/img/2022/09/06/550x309/CRICKET-ASIANCUP-UAE-17_1662453913754_1662453913754_1662453933049_1662453933049.JPG"

// --------------------------2nd part
        var box2 = document.createElement('div')
        var name = document.createElement('h4')
        name.innerText = el.company
        name.style.color = "blue"

        var position = document.createElement('h3')
        position.innerText = el.position;
        var div1 = document.createElement('div')
        div1.setAttribute("class", "local")
        var contact = document.createElement("p")
        contact.innerText = el.postedAt;
        var contract = document.createElement('p')
        contract.innerText = el.contract
        var location = document.createElement('p')
        location.innerText = el.location;



        // ------------------3rd Part

        var box3 = document.createElement("div");
        box3.setAttribute("class", "box3")
        var role = document.createElement("p")
        role.innerText = el.role;
        role.style.color = "green";
        var level = document.createElement('p')
        level.innerText = el.role;
        level.style.color = "blue";

        var language = document.createElement("p");
        language.innerText = el.language;
        language.style.color = "blue";



        div1.append(contact, contract, location)
        box1.append(img)
        box2.append(name, position, div1)
        box3.append(role, level, language)
        mainbox.append(box1, box2, box3)
        document.querySelector("#data-output").append(mainbox)

        })
    }

