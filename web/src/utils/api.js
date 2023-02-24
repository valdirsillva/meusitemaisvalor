import { toast } from 'react-toastify';

export const fetchApi = async (data) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/client/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  const { error } = await response.json()

  if (response.status === 201) {
    toast.success("Dados enviado com sucesso!")
  }

  if (response.status === 400) {
    toast.error(`${error}`)
  }
}