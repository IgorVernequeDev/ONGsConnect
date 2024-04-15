async function listarComentarios() {

  const dados_tabela = document.getElementById("dados_tabela")
  apiUrl = 'https://2aa436e1-942f-4c87-90e4-aa38d8a14f19-00-1imrxo01gv40a.kirk.replit.dev/getall'
  const response = await fetch(apiUrl)

  if (!response.ok) {
    alert('Nenhum comentário feito!')
  }
  else {
    const data = await response.json()
    for (const item of data) {

      const linha = document.createElement("tr") //cria uma nova linha
      const id = document.createElement("td") //cria uma nova coluna
      const nome = document.createElement("td")
      const comentario = document.createElement("td")
      const excluir = document.createElement("td")

      id.textContent = item.id
      nome.textContent = item.nome
      // onclick='verComentario(${item.id})'
      // <a href="vercomentario.html">
      comentario.innerHTML = `<button onclick='verComentario(${item.id})'>Ver comentário</button>`
      excluir.innerHTML = `<button onclick='excluir(${item.id})'>Excluir</button>`

      linha.appendChild(id) //adiciona a coluna id como filha do elemento de linha
      linha.appendChild(nome)
      linha.appendChild(comentario)
      linha.appendChild(excluir)

      dados_tabela.appendChild(linha) //adiciona a linha como filha do elemento dados_tabela
    }
  }
}

async function verComentario(id) {
  const apiUrl = `https://2aa436e1-942f-4c87-90e4-aa38d8a14f19-00-1imrxo01gv40a.kirk.replit.dev/comentario/${id}`
  const response = await fetch(apiUrl, { method: 'GET' })

  if (!response.ok) {
    alert('Erro ao carregar o comentário!')
  } else {
    const data = await response.json()
    alert('Comentário: ' + data.comentario)
  }
}

function vermais1() {
  document.getElementById('img1')
  const vermais1 = document.getElementById('vermais1')
  if (vermais1.style.display === "none") {
    vermais1.style.display = "block"
    img1.hidden = false
  }
  else {
    vermais1.style.display = "none"
    img1.hidden = true
  }

}

function vermais2() {
  document.getElementById('img2')
  const vermais2 = document.getElementById('vermais2')
  if (vermais2.style.display === "none") {
    vermais2.style.display = "block"
    img2.hidden = false
  }
  else {
    vermais2.style.display = "none"
    img2.hidden = true
  }

}

function vermais3() {
  document.getElementById('img3')
  const vermais3 = document.getElementById('vermais3')
  if (vermais3.style.display === "none") {
    vermais3.style.display = "block"
    img3.hidden = false
  }
  else {
    vermais3.style.display = "none"
    img3.hidden = true
  }

}

function vermais4() {
  document.getElementById('img4')
  const vermais4 = document.getElementById('vermais4')
  if (vermais4.style.display === "none") {
    vermais4.style.display = "block"
    img4.hidden = false
  }
  else {
    vermais4.style.display = "none"
    img4.hidden = true
  }

}

async function enviarDados(event) {
  event.preventDefault()
  const formData = new FormData(document.getElementById('formulario'))
  const response = await fetch('https://2aa436e1-942f-4c87-90e4-aa38d8a14f19-00-1imrxo01gv40a.kirk.replit.dev/novo', {
    method: 'POST',
    body: formData
  })

  if (response.status == 201) {
    alert('Comentário feito com sucesso!')
    return true
  } else if (response.status == 409) {
    alert('Comentário já feito!')
    return false
  } else {
    alert('Falha ao comentar!')
    return false
  }
}

async function excluir(id) {
  const apiUrl = 'https://2aa436e1-942f-4c87-90e4-aa38d8a14f19-00-1imrxo01gv40a.kirk.replit.dev/deletar/' + id
  const response = await fetch(apiUrl, { method: 'DELETE' })

  if (response.status == 200) {
    alert('Comentário deletado com sucesso!')
    return true
  } else {
    alert('Falha ao excluir!')
    return false
  }
}