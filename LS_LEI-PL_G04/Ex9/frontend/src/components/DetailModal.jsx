import DetailData from './DetailData'
import VoteModal from './VoteModal'
import { useState } from 'react'

function DetailModal({ questao, onClose, onVoteSuccess }) {
  const [showVote, setShowVote] = useState(false)

  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999 }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{questao.questao_texto}</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <DetailData questao={questao} />
          </div>
          <div className="modal-footer">
            <button className="btn btn-sm" onClick={() => setShowVote(true)}>Votar</button>
            <button className="btn btn-sm" onClick={onClose}>Fechar</button>
          </div>
        </div>
      </div>

      {showVote && (
        <VoteModal
          questao={questao}
          onClose={() => setShowVote(false)}
          onVoteSuccess={onVoteSuccess}
        />
      )}
    </div>
  )
}

export default DetailModal