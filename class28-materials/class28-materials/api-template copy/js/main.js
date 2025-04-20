//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `http://openlibrary.org/api/books?bibkeys=ISBN:${choice}&jscmd=data&format=json`
  const ISBN = `ISBN:${choice}`


  fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data[ISBN])
        const p = document.createElement('p')
        p.textContent = data[ISBN].title
        document.querySelector('h2').appendChild(p)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
