let list = document.querySelector("#options");
list.addEventListener("change", select);


function select() {
    let value = list.value;
    console.log(value);
    document.querySelector("#bgColor").classList = [];
    document.querySelector("#bgColor").classList.push(value);
}






