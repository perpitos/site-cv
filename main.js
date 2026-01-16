// const nameInput = [document.querySelector("#name")]



// const form = document.querySelector("form")
// const nameInput = document.querySelector("#name")

// form.addEventListener("submit", function(event){
// 	event.preventDefault()
// 	if (nameInput.value === ""){
// 		nameInput.classList.add("border")
// 		// nameInput.classList.add("double")
// 	}
// 	else{
// 		nameInput.classList.remove("border")
// 	}
// })

const parent = document.querySelector("form")
const idsArray = [...parent.children].filter(el=>el.id).map(el => el.id)
console.log(idsArray)
const form = document.querySelector("form")


form.addEventListener("submit", function(event){
	event.preventDefault()
	idsArray.forEach((element) => {
		let test = document.getElementById(element)
		// check if the value is empty
		if (test.value === ""){
			// add a red border to all empty input needeed
			test.classList.remove("border_green")
			test.classList.add("border_red")

		}
		else{
			// add a green border to all input completed
			test.classList.remove("border_red")
			test.classList.add("border_green")
		}
	})
})

form.addEventListener("reset", function(event){
	idsArray.forEach((element) => {
		element = document.getElementById(element)
		element.classList.remove("border_red", "border_green")
	})
})