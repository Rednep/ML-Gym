//Fetch the html for the component
fetch("/html/components/nav.html")
    //This line gets the document text out of the response
    .then(response => response.text())
    .then((component_html) => {
        //Find the empty elements on the page
        let list_of_elements = document.getElementsByClassName("nav-component");
        //Fill the empty elements with the contents of the fetched html
        for (let element of list_of_elements) {
            element.innerHTML = component_html;
        }
        const menuItemsElement = document.getElementById("menu-items");
        const menuToggleElement = document.getElementById("menu-toggle");
        menuToggleElement.addEventListener("click", (e) => {
            menuItemsElement.classList.toggle("show-menu-items");
        });
    });



//Fetch the html for the component
fetch("/html/components/footer.html")
    //This line gets the document text out of the response
    .then(response => response.text())
    .then((component_html) => {
        //Find the empty elements on the page
        let list_of_elements = document.getElementsByClassName("footer-component");
        //Fill the empty elements with the contents of the fetched html
        for (let element of list_of_elements) {
            element.innerHTML = component_html;
        }
    });