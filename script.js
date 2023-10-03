let pass1 = document.querySelector("#password")
let pass2 = document.querySelector("#password-b")

pass1.addEventListener("click", ()=>{
    checkPwd()
})
pass2.addEventListener("click", ()=>{
    checkPwd()
})
pass1.addEventListener("keydown", (event)=>{
    if(event.key === "Tab"){
        checkPwd()
    }
})
pass2.addEventListener("keydown", (event)=>{
    if(event.key === "Tab"){
        checkPwd()
    }
})

function checkPwd(){
    if(pass1.value != pass2.value || (pass1.value == "" && pass2.value == "")){
        pass1.classList.remove("custom-pwd")
        pass2.classList.remove("custom-pwd")
        pass1.classList.add("custom-pwd-invalid")
        pass2.classList.add("custom-pwd-invalid")
        pass1.setCustomValidity("Password don't match")
        pass2.setCustomValidity("Password don't match")

    }
    if(pass1.value == pass2.value && pass1.value != "" && pass2.value != "") {
        pass1.classList.remove("custom-pwd-invalid")
        pass2.classList.remove("custom-pwd-invalid")
        pass1.classList.add("custom-pwd")
        pass2.classList.add("custom-pwd")
        pass1.setCustomValidity("")
        pass2.setCustomValidity("")
    }
}

let inputsRqd = document.querySelectorAll("input:required:not([type='password'])")
let inputsOpt = document.querySelectorAll("input:optional:not([type='password'])")


inputsRqd.forEach((elem) => {
    elem.addEventListener("click", (event)=>{
        setCheckValidity(event, elem)
    })
    elem.addEventListener("keydown", (event)=>{
        if(event.key === "Tab"){
            setCheckValidity(event, elem)
        }
    })
})

inputsOpt.forEach((elem) => {
    elem.addEventListener("click", (event)=>{
        setCheckValidity(event, elem)
    })
    elem.addEventListener("keydown", (event)=>{
        if(event.key === "Tab"){
            setCheckValidity(event, elem)
        }
    })
})

function setCheckValidity(event, elem){
    if(event.target.checkValidity()) {
        elem.classList.remove("invalid")
        elem.classList.add("valid")
    } else{
        elem.classList.remove("valid")
        elem.classList.add("invalid")
    }
}

