var state = {
    name:""
}
function ChangeName() {
    state.name = document.querySelector("#input1").value;
    console.log(state);

    document.querySelector("#elements").innerText = "Hi" + " " + state.name;
    }
