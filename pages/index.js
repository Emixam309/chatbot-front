import Head from 'next/head'
import { MessageBox, InputContainer, Message, MessagesContainer } from '../styles/message.style'
import { useState, useRef } from "react";

export default function Home() {
  const [messageToSend, setMessageToSend] = useState("")
  const [messageList, setMessageList] = useState([{id: 0, value: "Ouais c'est Greg", isYou: false}])
  const BottomMessageBox = useRef(null)

  const questions = [
    {
      id: 0,
      question: "Salut",
      response: "Salut"
    },
    {
      id: 1,
      question: "Comment vas-tu ?",
      response: "Je vais bien, merci."
    },
    {
      id: 2,
      question: "Quel est ton nom ?",
      response: "Ouais c'est Greg."
    }
  ]

  const addMessage = (e, value, isYou) => {
    e.preventDefault();
    if (!value) return
    const messageIndex = messageList.length
    const msgList = [...messageList, {id: messageIndex, value, isYou}]
    setMessageToSend("")
    setMessageList(msgList)
    const response = questions.find(({question}) => question === value)?.response
    let msgResponse = []
    if (!response) {
      msgResponse = [...msgList, {id: messageIndex + 1, value: "Je ne reconnais pas votre question", isYou: false}]
    } else {
      msgResponse = [...msgList, {id: messageIndex + 1, value: response, isYou: false}]
    }
    setTimeout(() => {
      setMessageList(msgResponse)
      BottomMessageBox.current.scrollIntoView({behavior: "auto"})
    }, 300);
  }

  return (
    <main>
      <Head>
        <title>Create Next App</title>
        <meta name="description"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <MessageBox>
        <MessagesContainer>
          {messageList?.map(({id, value, isYou}) => (
            <Message key={id} isYou={isYou}>
              {value}
            </Message>
          ))}
          <div ref={BottomMessageBox}></div>
        </MessagesContainer>
        <InputContainer onSubmit={(e) => addMessage(e, messageToSend, true)}>
          <input list="input-list" className="input" value={messageToSend}
                 onChange={(e) => setMessageToSend(e.target.value)} type="text"
                 placeholder="Posez votre question"></input>
          <datalist id="input-list">
            {questions.map(({question, id}) => <option key={id} value={question}></option>)}
          </datalist>
          <input className="button" type="submit" value="Envoyer"/>
        </InputContainer>
      </MessageBox>
    </main>
  )
}
