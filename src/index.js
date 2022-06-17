const init = () => {
  document.querySelector('form').addEventListener('submit',(event)=>{
  event.preventDefault();
  const testInput=document.getElementById('searchByID').value
  fetch(`http://localhost:3000/movies/${testInput}`).then(response=>response.json()).then(data=>{
      document.querySelector('section#movieDetails h4').textContent = data.title;
      document.querySelector('section#movieDetails p').textContent = data.summary;  // Grabbing by css selectors

  }); //The restful conventions really saved a lof of writing

  })
}


document.addEventListener('DOMContentLoaded', init);