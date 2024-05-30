import TestimonialCard from "../cards/TestimonialCard";
export default function Testimonials() {
  const testimonailItems = [
    {
      id: 1,
      name: "Micheal Caldwell",
      description: "This is the best Mediterranean food that I've ever had!",
    },
    {
      id: 2,
      name: "Alan Chen",
      description:
        "My Shiba Inu, Mugi, really loved the cozy vibes and delicious food here.",
    },
    {
      id: 3,
      name: "Casey Lau",
      description:
        "I've had some great Mediterranean food before, but none of them beats Little Lemon in flavor and texture.",
    },
    {
      id: 4,
      name: "Jim Reynor",
      description:
        "The food here really refreshed me after a late night shift at the local supply depot.",
    },
    {
      id: 5,
      name: "Micheal Caldwell",
      description: "This is the best Mediterranean food that I've ever had!",
    },
    {
      id: 6,
      name: "Alan Chen",
      description:
        "My Shiba Inu, Mugi, really loved the cozy vibes and delicious food here.",
    },
    {
      id: 7,
      name: "Casey Lau",
      description:
        "I've had some great Mediterranean food before, but none of them beats Little Lemon in flavor and texture.",
    },
    {
      id: 8,
      name: "Jim Reynor",
      description:
        "The food here really refreshed me after a late night shift at the local supply depot.",
    },
  ];
  return (
    <section className="testimonials">
      <article className="testimonials-topbar">
        <h1>Testimonials</h1>
      </article>

      <section className="testimonials-cards">
        {testimonailItems.map((item) => (
          <TestimonialCard
            key={item.id}
            name={item.name}
            description={item.description}
          />
        ))}
      </section>
    </section>
  );
}
