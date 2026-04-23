import { useState, useEffect } from 'react'
import axios from 'axios'
import DetailModal from './DetailModal'

function QuestionTable() {
  const [questoes, setQuestoes] = useState([])
  const [selectedQuestao, setSelectedQuestao] = useState(null)

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/questoes/')
      .then(res => setQuestoes(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="container mt-4 d-flex flex-column align-items-center">
      <h2>Questões</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Questão</th>
            <th>Data</th>
            <th>Detalhe</th>
          </tr>
        </thead>
        <tbody>
          {questoes.map(q => (
            <tr key={q.id}>
              <td>{q.id}</td>
              <td>{q.questao_texto}</td>
              <td>{new Date(q.pub_data).toLocaleDateString()}</td>
              <td>
                <button
                  className="btn btn-sm"
                  onClick={() => setSelectedQuestao(q)}
                >
                  Ver
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedQuestao && (
        <DetailModal
          questao={selectedQuestao}
          onClose={() => setSelectedQuestao(null)}
          onVoteSuccess={(updated) => {
            setQuestoes(questoes.map(q => q.id === updated.id ? updated : q))
            setSelectedQuestao(updated)
          }}
        />
      )}
    </div>
  )
}

export default QuestionTable