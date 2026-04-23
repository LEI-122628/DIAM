import { useState } from 'react'
import axios from 'axios'

function VoteForm({ questao, onClose, onVoteSuccess }) {
  const [selectedOpcao, setSelectedOpcao] = useState(null)
  const [autor, setAutor] = useState('')
  const [comentario, setComentario] = useState('')

  const handleVote = () => {
    if (!selectedOpcao) return alert('Escolhe uma opção!')

    const opcao = questao.opcao_set.find(o => o.id === selectedOpcao)
    const updatedOpcao = { ...opcao, votos: opcao.votos + 1 }

    axios.put(`http://127.0.0.1:8000/api/opcoes/${selectedOpcao}/`, updatedOpcao)
      .then(() => {
        if (autor && comentario) {
          axios.post(`http://127.0.0.1:8000/api/questoes/${questao.id}/comentarios/`, {
            questao: questao.id,
            autor: autor,
            texto: comentario
          })
        }
        return axios.get(`http://127.0.0.1:8000/api/questoes/${questao.id}/`)
      })
      .then(res => {
        onVoteSuccess(res.data)
        onClose()
      })
      .catch(err => console.error(err))
  }

  return (
    <div>
      {questao.opcao_set.map(opcao => (
        <div key={opcao.id} className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="opcao"
            id={`opcao-${opcao.id}`}
            value={opcao.id}
            onChange={() => setSelectedOpcao(opcao.id)}
          />
          <label className="form-check-label" htmlFor={`opcao-${opcao.id}`} style={{ marginLeft: '-27px' }}>
            {opcao.opcao_texto}
          </label>
        </div>
      ))}

      <div className="mt-3 w-100">
        <label>Nome:</label>
        <input
          type="text"
          className="form-control"
          value={autor}
          onChange={e => setAutor(e.target.value)}
        />
      </div>

      <div className="mt-2 w-100">
        <label>Comentário:</label>
        <textarea
          className="form-control"
          value={comentario}
          onChange={e => setComentario(e.target.value)}
        />
      </div>

      <button className="btn mt-3" onClick={handleVote}>Votar</button>
    </div>
  )
}

export default VoteForm