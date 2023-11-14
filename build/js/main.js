//create an arrow function

const initApp = () => {
    // select hamburger button and mobile menu, refer to HTML document, create the constant using camel case
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')

//create a toggle menu function
    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden') 
        mobileMenu.classList.toggle('flex') 
        //gets the full list of classes. This is a Dom token list. toggle the "hidden" and "flex" class
        //we could also use replace with two functions, one replace hidden with flex and the other vice versa
        //or if statement
        hamburgerBtn.classList.toggle('toggle-btn')
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
    // hamburgerBtn is already selected. When click the button, we will call the toggleMenu function
}


//call the initApp function written above after the DOM is loaded, otherwise the buttons we are listening for and trying to select will cause errors because they are not available to select yet
//DOMContentLoaded tells me the full document the HTML DOM has loaded
document.addEventListener('DOMContentLoaded', initApp)

// we also need to link the js to html
// go to index.html to add <script> line in <head> section

//Anytime you are working with JS and Tailwind CSS, go to config file(tailwind.config.js), add .js path in content.
//content: ["./build/*.html"], told Tailwind to look at our html files in the build folder to look at all the classes we are using and then generate the CSS
//We should also tell Tailwind to look at our JS files in case there's a class that we reference in JS that isnt appled in html until we need it and JS applies it.  content: ["./build/*.html","./build/js/*.js"],