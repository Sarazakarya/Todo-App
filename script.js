let inputBox = document.getElementById('input-box');
let listCointainer = document.getElementById('list-cointainer')
function AddTask() {
    if (inputBox.value === '') {
        alert('Please Enter Somthing')
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listCointainer.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span)

    }
    inputBox.value = '';
    saveData()

    listCointainer.addEventListener("click", function (e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked")
            saveData()
        }
        else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove()
            saveData()

        }
    })

}

function saveData() {
    localStorage.setItem("data", listCointainer.innerHTML)
}
function showData() {
    listCointainer.innerHTML = localStorage.getItem("data")
}
showData()