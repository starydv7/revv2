
const base_url = "https://masai-api-mocker.herokuapp.com"

window.addEventListener("load", function(){
    //Registering
    let registerForm = document.getElementById("registerForm")

    registerForm.addEventListener("submit", (event) => {
        event.preventDefault()
        
        const formData = new FormData(registerForm);
        let name = formData.get("name_input")
        let email = formData.get("email_input")
        let password = formData.get("password_input")
        let username = formData.get("username_input")
        let mobile = formData.get("mobile_input")
        let description = formData.get("description_input")

        let obj = {
            name,
            email,
            password,
            username,
            mobile,
            description
        }

        let data = JSON.stringify(obj)
        register(data)
    })

    //Login
    let loginForm = document.getElementById("loginForm")
    loginForm.addEventListener("submit", function(event){
        event.preventDefault();
        
        const loginformData = new FormData(loginForm);

        const username = loginformData.get("username_input")
        const password = loginformData.get("password_input")

        let obj = {
            password : password,
            username : username
        }
        localStorage.setItem("username", username)

        let payload = JSON.stringify(obj)
        login(payload)

    })
})

const register = (data) => {
    // - we need to send/post the data to the server

    fetch(`${base_url}/auth/register`, {
        method : "POST",
        headers : {
            'Content-Type' : 'application/json'
        },
        body : data
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
}


const login = (data) => {
    fetch(`${base_url}/auth/login`, {
        method : "POST",
        headers : {
            'Content-Type' : 'application/json'
        },
        body : data
    })
    .then((res) => res.json())
    .then((data) => {
        if(data.error){
            alert(data.message)
        }
        else{
            localStorage.setItem("token", data.token)
            window.location.href = "profile.html"
        }
    })
    .catch((err) => console.log(err))
}