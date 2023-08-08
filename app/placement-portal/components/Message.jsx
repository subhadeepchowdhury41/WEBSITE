import React from "react";
import "./css/message.css";
import data from "./data";

const Message = () => {
  //   console.log(data[0].msg);
  return (
    <div className="placement-message">
      {data.map((index) => {
        return (
          <div key={index.id} style={{ marginBottom: "5vh" }}>
            <div className="why-head msg-head">
              <h2 style={{ textAlign: "center" }}>{index.head}</h2>
            </div>
            <div className="msg-card">
              <div className="msg-body">
                {index.msg.map((i) => {
                  return (
                    <div key={i.id} className="msg-para">
                      {i.para}
                    </div>
                  );
                })}
              </div>
              <div className="msg-side">
                <div className="sticky">
                  <div>
                    <img className="msg-img" src={index.url} alt="image" />
                  </div>
                  <div className="msg-name">{index.name}</div>
                  <div className="msg-title">{index.title}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Message;
