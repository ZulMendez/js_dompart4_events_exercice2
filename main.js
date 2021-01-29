// 1
let titre = document.querySelector('h1');

let style = () => {
    titre.style.backgroundColor = "red";
    titre.style.color = "white"
};
titre.addEventListener('dblclick', style)

// 2
let myH3 = document.querySelector('h3')

myH3.addEventListener('mouseover', () => {
    // myH3.innerText = myH3.innerText.substring(1)
    myH3.innerText = myH3.innerText.substring(0, myH3.innerText.length - 1)

})

// 3
let monP = document.querySelector('p')
// methode1
// monP.addEventListener('click', () => {
//     if (monP.style.backgroundColor.length ==0  && monP.style.color.length ==0) {
//         monP.style.cssText = "background-color:blue; color:grid"
//     } else {
//         monP.style = ""
//     }
// })

// methode2
// let i = 2
// console.log(i % 2);
// monP.addEventListener('click', () => {
//     if (i % 2 == 0) {
//         monP.style.cssText = "background-color:blue; color:grid"
//         i++
//     } else {
//         monP.style = ""
//         i++
//     }
// })


// méthode3
let clique = false
console.log(clique);
console.log(!clique);

monP.addEventListener('click', () => {
    if (!clique) {
        monP.style.cssText = "background-color:blue; color:grid"
        clique = true
    } else{
        monP.style = ""
        clique =false
    }
})

// méthode toogle
// monP.addEventListener('click', () => {
//     monP.classList.toggle('color')
// })