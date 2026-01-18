const parent = document.querySelector("form")
const idsArray = [...parent.children].filter(el=>el.id).map(el => el.id)
console.log(idsArray)
const form = document.querySelector("form")


// reset the page and remove green/red border to inputs
form.addEventListener("reset", function(event){
    // take each element of idsArray
    idsArray.forEach((element) => {
        element = document.getElementById(element)
        element.classList.remove("border_red", "border_green")
    })
})


form.addEventListener("submit", function(event) {
    event.preventDefault()
    // initialise completed for all the block
    var completed = false
    var count = 1
    // take each element of idsArray
    idsArray.forEach((element) => {
        // transform the string "element" into js data
        element = document.getElementById(element)
        // check if the input (element) is empty
        if (element.value === ""){
            //add red border to the inputs not completed
            element.classList.add("border_red")
            element.classList.remove("border_green")
        }
        else{
            // add green border to the inputs completed
            element.classList.add("border_green")
            element.classList.remove("border_red")
        }
    })
    //take each element of idsArray
    var completed = false
    for (var i = idsArray.length - 1; i >= 0; i--) {
        element = document.getElementById(idsArray[i])
        if (element.classList.contains("border_red")){
            completed = false
            break
        }
        else{
            completed = true
        }
    }
    console.log(completed)
    // check if all element have a value
    if (completed === true){
        const confirmation = document.getElementById("confirm")
        // reset form and dispplay a message during 5 seconds
        confirmation.classList.remove("hidden")
        setTimeout(() => {
            form.reset()
            confirmation.classList.add("hidden")
        }, 5000)
    }
})
