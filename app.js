let input = document.querySelector("input")
let btn = document.querySelector("button")
let ul = document.querySelector("ul")


btn.addEventListener("click", function () {
    let listItems = document.createElement("li")
    listItems.innerText = input.value;
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add(".delete")
    listItems.appendChild(delBtn);

    ul.appendChild(listItems);
    input.value = "";
})

ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let paraRemove = event.target.parentElement;
        paraRemove.remove();
        console.log("Task has beeen deleted")
    }
})