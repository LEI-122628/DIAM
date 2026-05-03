import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function NewQuestion() {
  const [questao, setQuestao] = useState('')
  const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/api/questoes/', { questao_texto: questao, pub_data: new Date().toISOString() })
            .then(() => navigate('/questions/'))
            .catch(err => console.error(err))
    }

  return (
    <div className="container mt-4 d-flex flex-column align-items-center">
      <h2>Nova Questão</h2>
      <form onSubmit={handleSubmit} className="w-50">
        <div className="form-group">
          <label>Questão</label>
          <input type="text" className="form-control" value={questao} onChange={e => setQuestao(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Salvar</button>
      </form>
    </div>
  )
}

export default NewQuestion