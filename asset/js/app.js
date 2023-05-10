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
  const input = document.getElementById("input")

  const question = document.createElement("div")
  question.innerHTML = input.value
  question.setAttribute("class","message fromYou");
  const response = document.createElement("div")
  response.setAttribute("class","message");
  response.innerHTML = questions.find((question) => question.question === input.value).response
  messagesContainer.appendChild(question)
  setTimeout(() => {
  messagesContainer.appendChild(response)
  }, 300)
  input.value = ""
})



const dataList = document.getElementById("input-list")

questions.forEach((question) => {
  const option = document.createElement("option")
  option.setAttribute("value", question.question);
  dataList.appendChild(option)
})