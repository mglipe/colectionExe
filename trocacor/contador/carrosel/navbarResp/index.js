const navBar = document.querySelector('.reorder')
const menu = document.querySelector('.list')
navBar.addEventListener('click', (event)=>{
    console.log(event.currentTarget.classList)
    const invisible = event.currentTarget.classList.contains('invisible')
    if(!invisible){
        menu.classList.toggle('invisible')
    }
})






/*const navBar = document.querySelector('.list')
const reoder = document.querySelector('.reorder')

function myFunction(boolean) {
    
    console.log(reoder)
    if (boolean.matches) {
        navBar.classList.toggle('invisible')
        reoder.classList.remove('invisible')
    }else{
        navBar.classList.remove('invisible')
        reoder.classList.add('invisible')
    }
  }
  
  // // Create a MediaQueryList object
  const resolution = window.matchMedia("(max-width: 900px)")
  console.log(resolution)
  
  // Call the match function at run time:
  myFunction(resolution);
  
  // Add the match function as a listener for state changes:
  resolution.addListener(myFunction);


reoder.addEventListener('click', (event)=>{
    navBar.style.display = "block"
    navBar.classList.toggle('invisible')
    console.log(event)
})

*/
