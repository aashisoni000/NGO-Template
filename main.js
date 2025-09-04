// navigation bar
// navigation bar
// navigation bar

const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{
       // Add show-menu class to nav menu
       nav.classList.toggle('show-menu')

       // Add show-icon to show and hide the menu icon
       toggle.classList.toggle('show-icon')
   })
}

showMenu('nav-toggle','nav-menu')

// impact section 
// impact section 
// impact section 

const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".counters");
let activated = false;

window.addEventListener("scroll", () => {
  const top = container.getBoundingClientRect().top;

  if (top < window.innerHeight && !activated) {
    counters.forEach(counter => {
      counter.innerText = "0";
      const target = parseInt(counter.dataset.count);

      let count = 0;
      let duration = 2000; 
      let step = target / (duration / 20); 

      function updateCount() {
        count += step;
        if (count < target) {
          counter.innerText = Math.ceil(count);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target; 
        }
      }

      updateCount();
    });

    activated = true;
  }
});

