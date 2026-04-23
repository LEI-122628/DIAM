import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function Survey() {
  const [answer, setAnswer] = useState('');
  const navigate = useNavigate();

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = () => {
    if (!answer) return;

    const stored = JSON.parse(localStorage.getItem('surveyResults') || '{}');
    stored[answer] = (stored[answer] || 0) + 1;
    localStorage.setItem('surveyResults', JSON.stringify(stored));

    navigate('/survey-results', { state: { answer } });
  };

  return (
    <div className="survey-container">
        <h3>What presentation are you most interested in?</h3>
        <div className="survey-options">
            <label>
                <input type="radio" name="survey" value="EDP" onChange={handleAnswerChange} />
                EDP
            </label>
            <label>
                <input type="radio" name="survey" value="Galp" onChange={handleAnswerChange} />
                Galp
            </label>
            <label>
                <input type="radio" name="survey" value="Meo" onChange={handleAnswerChange} />
                Meo
            </label>
            <label>
                <input type="radio" name="survey" value="Vodafone" onChange={handleAnswerChange} />
                Vodafone
            </label>
        </div>
        <button onClick={handleSubmit}>
            Submit
        </button>
    </div>
  );
}

export default Survey;