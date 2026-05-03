import { useLocation, Link } from "react-router-dom";

function SurveyResults() {
  const location = useLocation();
  const answer = location.state?.answer;
  const results = JSON.parse(localStorage.getItem("surveyResults") || "{}");

  const options = ["EDP", "Galp", "Meo", "Vodafone"];

  return (
    <div className="survey-container">
      <h3>Survey Results</h3>
      {answer && (
        <p>
          You selected: <strong>{answer}</strong>
        </p>
      )}
      <h4>Results: </h4>
      <ul className="survey-results-list">
        {options.map((option) => {
          return (
            <li key={option}>
              {option}: {results[option] || 0} vote
              {(results[option] || 0) !== 1 ? "s" : ""}
            </li>
          );
        })}
      </ul>
      <Link to="/survey" className="link">
        Back to Survey
      </Link>
    </div>
  );
}

export default SurveyResults;
