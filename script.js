async function listarComentarios() {

  const dados_tabela = document.getElementById("dados_tabela")
  apiUrl = 'http://127.0.0.1:5000/getall'
  const response = await fetch(apiUrl)

  const data = await response.json()
  for (const item of data) {

    const linha = document.createElement("tr")
    const nome = document.createElement("td")
    const comentario = document.createElement("td")

    nome.textContent = item.nome
    comentario.innerHTML = `<button onclick='verComentario(${item.id})' class="rounded bg-white text-color-green">Ver comentário</button>`

    linha.appendChild(nome)
    linha.appendChild(comentario)

    dados_tabela.appendChild(linha)
  }
}

async function verComentario(id) {
  const apiUrl = `http://127.0.0.1:5000/comentario/${id}`
  const response = await fetch(apiUrl, { method: 'GET' })

  if (!response.ok) {
    alert('Erro ao carregar o comentário!')
  } else {
    const data = await response.json()
    alert('Comentário: ' + data.comentario)
  }
}

function verMais(vermais) {
  let ongDiv = document.getElementById(vermais)
  if (ongDiv.style.display === 'block') {
    ongDiv.style.display = 'none'
  } else {
    ongDiv.style.display = 'block'
  }

}

async function enviarDados(event) {
  event.preventDefault()
  const formData = new FormData(document.getElementById('formulario'))
  const response = await fetch('http://127.0.0.1:5000/novo', {
    method: 'POST',
    body: formData
  })

  if (response.status == 201) {
    alert('Comentário feito com sucesso!')
    location.reload()
    return true
  } else {
    alert('Falha ao comentar!')
    return false
  }
}