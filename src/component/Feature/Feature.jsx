import React from "react";
import Footer from "../Footer/Footer";
import './feature.css'
const Feature = () => {
  const data = [
    {
      img: "https://cdn.discordapp.com/attachments/830720118157475881/1051246343429034105/Oryza_sativa_Ear_rice_Stugaru_roman_rice_IMG_3971.jpg",
      Name: "Oryza_sativa",
    },
    {
      img: "https://cdn.discordapp.com/attachments/830720118157475881/1051247043034755072/depositphotos_413849604-stock-photo-green-tall-jute-plants-jute.jpg",
      Name: " Jut",
    },
    {
      img: "https://cdn.discordapp.com/attachments/833940846909849661/1051247112710529155/potato.JPG",
      Name: "Potato",
    },
    {
      img: "https://cdn.discordapp.com/attachments/830720118157475881/1051247043290595479/153872116863729687.webp",
      Name: "Asian Oryza_sativa ",
    },
  ];
  return (
    <div className="features">
        {
            data.map((item)=>(
                <div className="card" style={{ width: "18rem" }}>
                <img
                  src={item.img}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{item.Name}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                  Learn More
                  </a>
                </div>
              </div>
            ))
        }
        
    </div>
  );
};

export default Feature;
