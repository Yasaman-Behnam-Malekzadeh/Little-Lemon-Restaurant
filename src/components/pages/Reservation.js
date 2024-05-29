import ReservationForm from "../sections/ReservationForm";
import { useReducer } from "react";
import { fetchAPI } from "../api/reservationApi";
export default function Reservation() {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <ReservationForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  );
}
