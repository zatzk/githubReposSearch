const ul = document.querySelector('ul')


function checkForm() {
  getAPI(document.getElementById('searchTerm').value)
}

function getAPI(user) {

  fetch(`https://api.github.com/users/${user}/repos`)
    .then(async res => {
      if(!res.ok) {
        throw new Error(res.status)
      }

      const data = await res.json()

      data.map(item => {
        let li = document.createElement('li')
        li.innerHTML = `
          <strong>${item.name.toUpperCase()} </strong>
          <span>URL: ${item.url} </span>
          <span>Data de Criação:
              ${Intl.DateTimeFormat('pt-BR')
                  .format(new Date(item.created_at))}
          </span>
        `
      })

    }).catch(e => console.log(e))
}

