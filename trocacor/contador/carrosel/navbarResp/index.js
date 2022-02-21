
function myFunction(boolean) {
    const navBar = document.querySelector('.container-nav')
    const reoder = document.querySelector('.reoder')
    console.log(reoder)
    if (boolean.matches) {
        navBar.classList.add('invisible')
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


