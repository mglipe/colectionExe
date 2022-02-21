
const increase = ()=>{
    const result = document.querySelector('p')
    let number = Number(result.textContent)
    result.innerHTML = number += 1

}


const reset = ()=>{
    const result = document.querySelector('p')
    let number = Number(result.textContent)
    result.innerHTML = number = 0
}


const decrease = ()=>{
    const result = document.querySelector('p')
    let number = Number(result.textContent)

    if(number > 0){
        result.innerHTML = number -= 1
    }
    
}
