import Head from 'next/head'
import { MessageBox, InputContainer, Message, MessagesContainer } from '../styles/message.style'
import { useEffect, useState, useRef } from "react";
import { fetchApi } from "../utils/api";

export default function Home() {
  const [messageToSend, setMessageToSend] = useState("")
  const [messageList, setMessageList] = useState([{id: 0, value: "Ouais c'est Greg", isYou: false}])
  const [questionList, setQuestionList] = useState([])
  const BottomMessageBox = useRef(null)

  useEffect(() => {
    fetchApi("/dialogs/questions")
      .then((response) => {
        setQuestionList(response)
      })
  }, [])

  const addMessage = (e, value, isYou) => {
    e.preventDefault();
    if (!value) return
    const messageIndex = messageList.length
    const msgList = [...messageList, {id: messageIndex, value, isYou}]
    setMessageToSend("")
    setMessageList(msgList)
    const dialog = questionList.find(({question}) => question === value)
    let msgResponse = []
    if (!dialog) {
      msgResponse = [...msgList, {id: messageIndex + 1, value: "Je ne reconnais pas votre question", isYou: false}]
      setTimeout(() => {
        setMessageList(msgResponse)
        BottomMessageBox.current.scrollIntoView({behavior: "auto"})
      }, 300);
    } else {
      const d = fetchApi(`/dialog/${dialog.id}`)
        .then((response) => {
          msgResponse = [...msgList, {id: messageIndex + 1, value: response.response, isYou: false}]
            setMessageList(msgResponse)
          setTimeout(() => {
            BottomMessageBox.current.scrollIntoView({behavior: "auto"})
          }, 300);
        })
    }
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
            {questionList.map(({question, id}) => <option key={id} value={question}></option>)}
          </datalist>
          <input className="button" type="submit" value="Envoyer"/>
        </InputContainer>
      </MessageBox>
    </main>
  )
}
