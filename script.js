// GET https://icanhazdadjoke.com/

const jokes = document.querySelector("#joke");
const jokesBTN = document.querySelector("#jokeBtn");

const generateJokes = () => {

const setHeader= {
    headers:{
        Accept: "application/json"
    }
}

  fetch("https://icanhazdadjoke.com", setHeader)
    .then((res) => (res.json()) )
.then ((data)=>{
    jokes.innerHTML = data.joke
}).catch((error) => {
      console.log(error);
    })
}

jokesBTN.addEventListener("click", generateJokes);
generateJokes();
