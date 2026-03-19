import {useState} from 'react';

function Survey() {
  const [answer, setAnswer] = useState('');

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
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
        <button onClick={() => alert(`You selected: ${answer}`)}>
            Submit
        </button>
    </div>
  );
}

export default Survey;