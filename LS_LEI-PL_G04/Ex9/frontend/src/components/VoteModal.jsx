import VoteForm from './VoteForm'

function VoteModal({ questao, onClose, onVoteSuccess }) {
  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999 }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Votar - {questao.questao_texto}</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <VoteForm
              questao={questao}
              onClose={onClose}
              onVoteSuccess={onVoteSuccess}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VoteModal