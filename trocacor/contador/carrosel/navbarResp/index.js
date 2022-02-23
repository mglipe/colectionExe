const navBar = document.querySelector('.reorder')
const menu = document.querySelector('.list')
navBar.addEventListener('click', ()=>{
    console.log(menu.classList)
    const invisible = menu.classList.contains('invisible')
    if(!invisible){
        menu.classList.add('invisible')
    }else{
        menu.classList.remove('invisible')
    }
})

function resolucao(resolution) {
    if (resolution.matches) {
        menu.classList.remove('invisible')
    }else{
        menu.classList.add('invisible')
    }
  }
  
  // // Create a MediaQueryList object
  const resolution = window.matchMedia("(min-width: 801px)")
  
  // Call the match function at run time:
  resolucao(resolution);
  
  // Add the match function as a listener for state changes:
  resolution.addListener(resolucao);



