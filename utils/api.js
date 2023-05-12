const API_URL = 'https://chatbot-back-h3lf.onrender.com/api/v1'

export const fetchApi = async (url, method, body) => {
  const response = await fetch(API_URL + url, {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: body
  })
  return response.json()
}