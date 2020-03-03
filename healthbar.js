var Health_State = {
    width:14
}
function LoseHealth() {
    
Health_State.width = Health_State.width - 2;
console.log (Health_State)
document.querySelector("#HealthBar").style.width = Health_State.width + "em";

}