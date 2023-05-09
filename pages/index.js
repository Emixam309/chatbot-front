import Head from 'next/head'
import { MessageBox, InputContainer, Message, MessagesContainer } from '../styles/message.style'
import { useState, useRef } from "react";

export default function Home() {
  const [messageToSend, setMessageToSend] = useState("")
  const [messageList, setMessageList] = useState([{id: 0, value: "Ouais c'est Greg", isYou: false}])
  const BottomMessageBox = useRef(null)
  const addMessage = (e, value, isYou) => {
    e.preventDefault();
    if (!value) return
    const messageIndex = messageList.length
    setMessageList([...messageList, {id: messageIndex, value, isYou}])
    setMessageToSend("")
    setTimeout(function() {
    BottomMessageBox.current.scrollIntoView({behavior: "auto"})
    }, 100);
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
          <input className="input" value={messageToSend}  onChange={(e) => setMessageToSend(e.target.value)} type="text" placeholder="Posez votre question"></input>
          <input className="button" type="submit" value="Envoyer" />
        </InputContainer>
      </MessageBox>
    </main>
  )
}
