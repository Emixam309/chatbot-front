import styled from 'styled-components';

export const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  
  width: 500px;
  height: 600px;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  @media (prefers-color-scheme: dark) {
    background: #171717;
  }
`

export const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0;
  overflow-y: auto;
  padding: 0 1rem;
`

export const Message = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  max-width: 90%;
  text-align: left;
  background: ${({isYou}) => (isYou ? "#2294fb" : "#b4b4bc")};
  align-self: ${({isYou}) => (isYou ? "flex-end" : "flex-start")};
  transform-origin: ${({isYou}) => (isYou ? "100% 100%" : "0 100%")};
  transform: scale(0);
  animation-delay: 2s;
  overflow: hidden;
  animation: message 0.2s ease-out 0s forwards;

  @keyframes message {
    0% {
    }
    80% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
      overflow: visible;
    }
  }
`

export const InputContainer = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  border: none;
  padding: 0.5rem 0;
  
  .input {
    padding: 10px 1rem;
    border-radius: 20px 0 0 20px;
    border: none;
    max-width: 90%;
    text-align: left;
    outline: none;
    flex: 1;
  }

  .button {
    -webkit-appearance: none;
    padding: 10px 1rem;
    border-radius: 0 20px 20px 0;
    text-align: center;
    background: #2294fb;
    border: none;
    cursor: pointer;
  }
`
