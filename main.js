const ptag = document.querySelector('#ptag')

ptag.innertext = 'bagban'

ptag.innerHTML = '<b>bagban</b>'

ptag.insertAdjacentText('afterbegin','orxan')
ptag.insertAdjacentText('afterend','orxan')
ptag.insertAdjacentText('beforeend','orxan')
ptag.insertAdjacentText('beforebegin','orxan')


ptag.insertAdjacentHTML('beforebegin','<i>orxan</i>')

const btn = document.querySelector('.btn')

btn.addEventListener('click',()=>{
    console.log('bagban')
})


window.addEventListener('load',()=>{
    console.log('loaded')
})

let newp = document.createElement('p')
let cont = document.querySelector('.container')
newp.InnerHTML = 'salam'

cont.appendChild(newp)
console.log(newp);

const parent = document.querySelector('.parent')
const child = document.querySelector('.child')

console.log(child.textContent);

child.classList.add('bagban')

child.classList.remove('bagban')