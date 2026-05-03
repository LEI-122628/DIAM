import React, { useState } from 'react';
import axios from 'axios';

const NewOptionQuestion = ({ questionId, onOptionAdded }) => {
    const [choiceText, setChoiceText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!choiceText.trim()) return;

        try {
            await axios.post('http://localhost:8000/api/opcoes/', {
                opcao_texto: choiceText,
                questao: questionId,
                votos: 0
            });
            setChoiceText('');
            onOptionAdded();
        } catch (err) {
            console.error(err);
            alert("Não foi possível acrescentar a opção.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-3">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="Nova opção..."
                    value={choiceText}
                    onChange={(e) => setChoiceText(e.target.value)}
                />
                <button className="btn btn-success btn-sm" type="submit">
                    Acrescentar
                </button>
            </div>
        </form>
    );
};

export default NewOptionQuestion; 
