import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import NewOptionQuestion from './NewOptionQuestion';

const DetailQuestion = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [question, setQuestion] = useState(null);
    const [loading, setLoading] = useState(true);

    const API_URL = `http://localhost:8000/api/questoes/${id}/`;

    const fetchQuestion = async () => {
        try {
            const response = await axios.get(API_URL);
            setQuestion(response.data);
            setLoading(false);
        } catch (err) {
            console.error(err);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchQuestion();
    }, [id]);

    const handleDeleteQuestion = async () => {
        if (window.confirm("Apagar esta questão permanentemente?")) {
            try {
                await axios.delete(API_URL);
                navigate('/');
            } catch (err) {
                alert("Erro ao apagar questão.");
            }
        }
    };

    const handleDeleteOption = async (optionId) => {
        try {
            await axios.delete(`http://localhost:8000/api/opcoes/${optionId}/`);
            fetchQuestion();
        } catch (err) {
            alert("Erro ao apagar opção.");
        }
    };

    if (loading) return <p>A carregar...</p>;
    if (!question) return <p>Questão não encontrada.</p>;

    return (
        <div className="container mt-4">
            <div className="card shadow">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h2>{question.questao_texto}</h2>
                    <button className="btn btn-danger" onClick={handleDeleteQuestion}>
                        Apagar Questão
                    </button>
                </div>
                
                <div className="card-body">
                    <h5>Opções:</h5>
                    <ul className="list-group mb-4">
                        {question.opcao_set && question.opcao_set.map((choice) => (
                            <li key={choice.id} className="list-group-item d-flex justify-content-between align-items-center">
                                {choice.opcao_texto} ({choice.votos} votos)
                                <button 
                                    className="btn btn-sm btn-outline-danger"
                                    onClick={() => handleDeleteOption(choice.id)}
                                >
                                    Apagar Opção
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className="p-3 bg-light border rounded shadow-sm">
                        <strong>Acrescentar Opção:</strong>
                        <NewOptionQuestion questionId={id} onOptionAdded={fetchQuestion} />
                    </div>
                </div>

                <div className="card-footer">
                    <button className="btn btn-secondary" onClick={() => navigate('/questions')}>
                        Voltar
                    </button>
                    <button className="btn btn-primary" onClick={() => navigate(`/questions/${id}/vote`)}>
                        Votar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DetailQuestion;