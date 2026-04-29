import React from "react";
import "./whyUs.css";

import Icon1 from "../../assets/images/personalize.png";
import Icon2 from "../../assets/images/trusted.png";
import Icon3 from "../../assets/images/wellness.png";

const WhyUs = () => {
  const data = [
    {
      img: Icon1,
      title: "Personalize Excellence",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, error. Corporis, accusantium doloribus nihil repellendus debitis eveniet, a delectus architecto consequatur veritatis provident officiis soluta aut!"
    },
    {
      img: Icon2,
      title: "Trusted Care",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, error. Corporis, accusantium doloribus nihil repellendus debitis eveniet, a delectus architecto consequatur veritatis provident officiis soluta aut!"
    },
    {
      img: Icon3,
      title: "Empowring Wellness Journey",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, error. Corporis, accusantium doloribus nihil repellendus debitis eveniet, a delectus architecto consequatur veritatis provident officiis soluta aut!"
    }
  ];

  return (
    <section className="whyus">
      <div className="whyus-container">
        {data.map((item, index) => (
          <div className="whyus-card" key={index}>
            <img src={item.img} alt={item.title} className="whyus-icon" />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;