import React from "react";

// Example Testimonial Data
const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, alias perferendis voluptatibus vitae id distinctio hic debitis nam, consequuntur reprehenderit rem est vero ut? Architecto reprehenderit non ducimus quidem corporis!",
    image: "assets/img/testimonial/1.jpg",
    name: "John Lock",
    title: "Criminal Attorney",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, alias perferendis voluptatibus vitae id distinctio hic debitis nam.",
    image: "assets/img/testimonial/2.jpg",
    name: "Thomson Jack",
    title: "Children Attorney",
  },
];

function TestimonialArea() {
  return (
    <div className="testimonial-area pt-100">
      <div className="container">
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-sm-6 col-lg-4">
              <div className="testimonial-item">
                <div className="testimonial-wrap">
                  <p>{testimonial.text}</p>
                  <img src={testimonial.image} alt="Testimonial" />
                  <div className="testimonial-right">
                    <h3>{testimonial.name}</h3>
                    <span>{testimonial.title}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="testimonial-more">
          <a className="cmn-btn" href="#">
            See More
          </a>
        </div>
      </div>
    </div>
  );
}

export default TestimonialArea;
