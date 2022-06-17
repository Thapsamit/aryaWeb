const menuIcon = document.querySelector(".menu-icon")
const mobileMenu = document.querySelector(".mobile-menu")
const dropDownMenu = document.querySelector(".dropdown-menu")
const dropDownMenuItems =  document.querySelector(".dropdown-menu-items")
const header = document.querySelector("header")


dropDownMenu.addEventListener("click",(e)=>{
   
    if(dropDownMenuItems.style.display == "block"){
        dropDownMenuItems.style.display = "none"
    }
    else{
        dropDownMenuItems.style.display = "block"
    }
    
})

menuIcon.addEventListener("click",()=>{
      if(!mobileMenu.classList.contains("active")){
          mobileMenu.classList.add("active")
          menuIcon.classList.remove("fa-bars")
         
          menuIcon.classList.add("fa-xmark")
        
      }
      else{
          mobileMenu.classList.remove("active")
          
          menuIcon.classList.remove("fa-xmark")
          menuIcon.classList.add("fa-bars")
       
      }
})
document.addEventListener("scroll",()=>{
    
    header.classList.toggle("sticky",window.scrollY>0);
})

// counter 
const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + inc;
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});
