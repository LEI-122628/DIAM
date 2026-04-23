import { useState } from "react";
import { Link } from "react-router-dom";

const badWords = ["bad", "awful", "terrible"];

const reviews = [
  { title: "Amazing event!", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { title: "Amazing event!", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { title: "Amazing event!", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { title: "Amazing event!", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { title: "Amazing event!", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { title: "Amazing event!", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
];

function Form() {
  const [comment, setComment] = useState("");
  const [warning, setWarning] = useState("");

  const checkBadWords = (value) => {
    setComment(value);
    const found = badWords.some((word) => value.toLowerCase().includes(word));
    setWarning(found ? "Please avoid using inappropriate language." : "");
  };

  return (
    <div className="form-content">
      <div className="form-left">
        <form className="form-fields">
          <div className="form-group">
            <label className="form-label">Name</label>
            <input type="text" className="form-input" />
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" className="form-input" />
          </div>

          <div className="form-group">
            <label className="form-label">Phone number</label>
            <input type="text" className="form-input" />
          </div>

          <div className="form-group">
            <label className="form-label">Volunteer Comment</label>
            <textarea
              className="form-input"
              style={{ height: "80px" }}
              value={comment}
              onChange={(e) => checkBadWords(e.target.value)}
            />
            {warning && (
              <p style={{ color: "red", fontWeight: "bold", margin: 0 }}>{warning}</p>
            )}
          </div>
        </form>

        <div className="form-bottom" style={{ marginTop: "60px" }}>
          <div>
            <div className="form-label">Event dates:</div>
            <div className="dates-list">
              <div className="date-row">
                <label className="date-label">01/01/2025</label>
                <input type="checkbox" name="dates" value="01/01/2025" />
              </div>
              <div className="date-row">
                <label className="date-label">01/01/2026</label>
                <input type="checkbox" name="dates" value="01/01/2026" />
              </div>
              <div className="date-row">
                <label className="date-label">01/01/2027</label>
                <input type="checkbox" name="dates" value="01/01/2027" />
              </div>
            </div>
          </div>
          <Link to="/">
            <button className="btn">Submit</button>
          </Link>
        </div>
      </div>

      <div className="divider"></div>

      <div className="reviews-panel">
        <div className="reviews-title">Past reviews</div>
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="review-card-title">{review.title}</div>
            <div className="review-card-text">{review.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Form;
