// override a forms default behavior 
// fetch data based on the user types 
// display the data on page 

const init = () => { 
  const inputForm = document.querySelector("form");    // we are selecting the form because we want to prevent its default when something is submitted 
  inputForm.addEventListener("submit", (event) => {    // we are adding an event listener to form that we submitted. here we are listening for a submit, and then doing the event 
    event.preventDefault();                            // the event is prevent the default, so we are adding that attribute 
    const input = document.querySelector("input#searchByID");  // here i am selecing the text input where the text will be logged. i want to get there because this will allow me to access the value the the user inputs directly 
    console.log(event);                                // i am logging it to see that it worked 
    
    fetch(`http://localhost:3000/movies/${input.value}`)    // here we are fetching the data based on the input value that the user types 
                .then((response) => response.json())        // converting that response to json
                .then((data) => {
                    const title = document.querySelector("section#movieDetails h4");      // so now are editing the stuff we want to display on the page. we first grab the elements we want to change 
                    const summary = document.querySelector("section#movieDetails p");     // here we grab the title and summary from the HTML, becasue thats what we want to change 
                    
                    title.innerText = data.title;                                        // here we are changing the inner text of the selected elements based on the title and summary of the data 
                    summary.innerText = data.summary;                                    // the json server specifically gives us the title and summary 
                });

  });
};

document.addEventListener('DOMContentLoaded', init);   // here the dom content is being loaded 
