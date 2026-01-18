const toggle = document.getElementById("theme-toggle");
const body = document.body;

toggle.addEventListener("click", () => {
    body.classList.toggle("dark");

    toggle.textContent = body.classList.contains("dark")
        ? "Light mode"
        : "Dark mode";
})

function navigate(){
    const select = document.getElementById("projectSelector");
    const selectedValue = select.value;

    if(selectedValue){
        window.location.href = "portfolio.html#" + selectedValue;
    }
}
