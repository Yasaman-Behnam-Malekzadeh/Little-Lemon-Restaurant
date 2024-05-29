import { Alert } from "bootstrap";
import { useState } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function ReservationForm(props) {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [people, setPeople] = useState(1);
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");
  const [preferences, setPreferences] = useState("");
  const [comments, setComments] = useState("");

  const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times) => <option>{times}</option>)
  );

  function handleDateChange(e) {
    setDate(e.target.value);

    var stringify = e.target.value;
    const date = new Date(stringify);

    props.updateTimes(date);
    console.log(props);
    setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
  }

  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

    if (
      !fName ||
      !lName ||
      !email ||
      !tel ||
      !date ||
      !occasion ||
      !preferences ||
      !comments
    ) {
      Alert("Please fill out all fields.");
      return;
    } else {
      navigate("/confirmation");
    }
  }

  return (
    <div className="reservation-form">
      <br />
      <h1 className="container ">Reservation</h1>

      <form className="" onSubmit={handleSubmit}>
        <div className="container inputs">
          <div className="input-item col-md-3 col-sm-6 col-xs-12">
            <label htmlFor="fName">First Name</label> <br></br>
            <input
              type="text"
              id="fName"
              placeholder="First Name"
              required
              minLength={2}
              maxLength={50}
              value={fName}
              onChange={(e) => setFName(e.target.value)}
            ></input>
          </div>

          <div className="input-item col-md-3 col-sm-6  col-xs-12">
            <label htmlFor="lName">Last Name</label> <br></br>
            <input
              type="text"
              id="lName"
              placeholder="Last Name"
              required
              minLength={2}
              maxLength={50}
              value={lName}
              onChange={(e) => setLName(e.target.value)}
            ></input>
          </div>

          <div className="input-item col-md-3 col-sm-6  col-xs-12">
            <label htmlFor="email">Email</label> <br></br>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              required
              minLength={4}
              maxLength={200}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>

          <div className="input-item col-md-3 col-sm-6  col-xs-12">
            <label htmlFor="phonenum">Phone Number</label> <br></br>
            <input
              type="tel"
              id="phonenum"
              placeholder="(xxx)-xxx-xxxx"
              value={tel}
              required
              minLength={10}
              maxLength={25}
              onChange={(e) => setTel(e.target.value)}
            ></input>
          </div>

          <div className="input-item col-md-3 col-sm-6  col-xs-12">
            <label htmlFor="people">Number of People</label> <br></br>
            <input
              type="number"
              id="people"
              placeholder="Number of People"
              value={people}
              required
              min={1}
              max={100}
              onChange={(e) => setPeople(e.target.value)}
            ></input>
          </div>

          <div className="input-item col-md-3 col-sm-6  col-xs-12">
            <label htmlFor="date">Select Date</label> <br></br>
            <input
              type="date"
              id="date"
              required
              value={date}
              onChange={handleDateChange}
            ></input>
          </div>

          <div className="input-item col-md-3 col-sm-6  col-xs-12">
            <label htmlFor="time">Select Time</label> <br></br>
            <select id="time" required>
              {finalTime}
            </select>
          </div>

          <div className="input-item col-md-3 col-sm-6  col-xs-12">
            <label htmlFor="occasion">Occasion</label> <br></br>
            <select
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              required
            >
              <option>None</option>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Engagement</option>
              <option>Other</option>
            </select>
          </div>

          <div className="input-item col-md-3 col-sm-6  col-xs-12">
            <label htmlFor="preferences">Seating preferences</label> <br></br>
            <select
              id="preferences"
              value={preferences}
              onChange={(e) => setPreferences(e.target.value)}
              required
            >
              <option>None</option>
              <option>Indoors</option>
              <option>Outdoor (Patio)</option>
              <option>Outdoor (Sidewalk)</option>
            </select>
          </div>
        </div>

        <div className="container">
          <div>
            <label htmlFor="comments">Additional Comments</label> <br></br>
            <textarea
              id="comments"
              rows={8}
              className="comments"
              placeholder="Additional Comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              required
            ></textarea>
          </div>

          <div>
            <br></br>
            <small>
              <p>
                Note: You cannot edit your reservation after submission. Please
                double-check your answer before submitting your reservation
                request.
              </p>
            </small>
            <button className="action-button" type="submit">
              reservation
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
