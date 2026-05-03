import { useState, useEffect } from 'react'
import axios from 'axios'

function DetailData({ questao }) {
  const [comentarios, setComentarios] = useState([])

useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/questoes/${questao.id}/comentarios/`)
      .then(res => setComentarios(res.data))
      .catch(err => console.error(err))
  }, [questao])


  return (
    <div>
      <h6>Opções:</h6>
      <table className="table">
        <thead>
          <tr>
            <th>Opção</th>
            <th>Votos</th>
          </tr>
        </thead>
        <tbody>
          {questao.opcao_set.map(opcao => (
            <tr key={opcao.id}>
              <td>{opcao.opcao_texto}</td>
              <td>{opcao.votos}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h6>Comentários:</h6>
      {comentarios.length === 0 ? (
        <p>Sem comentários.</p>
      ) : (
        comentarios.map(c => (
          <div key={c.id} style={{ borderBottom: '1px solid #ddd', padding: '8px 0' }}>
            <strong>{c.autor}</strong>: {c.texto}
          </div>
        ))
      )}
    </div>
  )
}

export default DetailData