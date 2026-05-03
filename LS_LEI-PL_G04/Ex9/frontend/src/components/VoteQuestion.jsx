import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function VoteQuestion() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [questao, setQuestao] = useState(null);
    const [opcao, setOpcao] = useState(null);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/questoes/${id}/`)
            .then(res => setQuestao(res.data))
            .catch(err => console.error(err));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!opcao) return;
        axios.put(`http://127.0.0.1:8000/api/opcoes/${opcao.id}/`, { ...opcao, votos: opcao.votos + 1 })
            .then(() => {
                alert('Voto registrado!');
                navigate(`/questions/${id}`)
            })
            .catch(err => console.error(err));
    };
  return (
    <div className="container mt-4">
        {!questao ? <p>A carregar...</p> : (
            <>
                <h2>{questao.questao_texto}</h2>
                <form onSubmit={handleSubmit}>
                    {questao.opcao_set.map(o => (
                        <div key={o.id}>
                            <input type="radio" name="opcao" onChange={() => setOpcao(o)} />
                            <label> {o.opcao_texto}</label>
                        </div>
                    ))}
                    <button type="submit" className="btn btn-primary mt-3">Votar</button>
                </form>
            </>
        )}
    </div>
  );
}


  export default VoteQuestion;