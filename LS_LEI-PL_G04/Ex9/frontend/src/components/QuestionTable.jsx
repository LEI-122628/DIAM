import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function QuestionTable() {
  const [questoes, setQuestoes] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/questoes/')
      .then(res => setQuestoes(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="container mt-4 d-flex flex-column align-items-center">
      <h2>Questões</h2>
      <button className="btn btn-primary mb-3" onClick={() => navigate('/questions/new')}>
        Nova Questão
      </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Questão</th>
            <th>Data</th>
            <th>Detalhe</th>
            <th>Apagar</th>
          </tr>
        </thead>
        <tbody>
          {questoes.map(q => (
            <tr key={q.id}>
              <td>{q.id}</td>
              <td>{q.questao_texto}</td>
              <td>{new Date(q.pub_data).toLocaleDateString()}</td>
              <td>
                <button className="btn btn-sm btn-info" onClick={() => navigate(`/questions/${q.id}`)}>
                  Ver
                </button>
              </td>
              <td>
                <button className="btn btn-sm btn-danger" onClick={() => {
                  axios.delete(`http://127.0.0.1:8000/api/questoes/${q.id}/`)
                    .then(() => setQuestoes(questoes.filter(q2 => q2.id !== q.id)))
                    .catch(err => console.error(err))
                }}>
                  Apagar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default QuestionTable