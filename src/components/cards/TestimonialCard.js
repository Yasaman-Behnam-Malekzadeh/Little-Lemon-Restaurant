import { Stars } from "react-bootstrap-icons";
export default function TestimonialCard(props) {
  return (
    <article className="testimonial-card">
      <Stars />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </article>
  );
}
