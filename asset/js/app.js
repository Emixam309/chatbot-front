const questions = [
  {
    question: "Salut",
    response: "Salut"
  },
  {
    question: "Comment vas-tu ?",
    response: "Je vais bien, merci."
  },
  {
    question: "Quel est ton nom ?",
    response: "Ouais c'est Greg."
  }
  ]

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault()
  const messagesContainer = document.getElementById("messagesContainer")

  const question = document.createElement("div")
  question.innerHTML = document.getElementById("input").value
  question.setAttribute("class","message fromYou");
  const response = document.createElement("div")
  response.setAttribute("class","message");
  response.innerHTML = "hello"
  messagesContainer.appendChild(question)
  messagesContainer.appendChild(response)
})