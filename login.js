let o1 = document.getElementById("o1");
let o2 = document.getElementById('o2');
let mail = document.getElementById('mail')
let mdp = document.getElementById('mdp')
let sub = document.getElementById('sub');
console.log(mdp.value);
sub.addEventListener("click", () => {
    console.log(form.values)
})
o1 = addEventListener('click', () => {
    console.log("j ai cliquer");
    if (o1.style.opacity= 0){
        o1.style.opacity = 1;
        o2.style.opacity = 0;
    }else{
        o1.style.opacity = 1;
    }
    // o2 = addEventListener('click', () => {
    //     console.log("j ai cliquer de deuxieme");
    //     o2.style.opacity = 1;

    // })
});
