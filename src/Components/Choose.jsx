import React from "react";
import cashSvg from "../assets/images/icon-online.svg";
import budgetSvg from "../assets/images/icon-budgeting.svg";
import onboardSvg from "../assets/images/icon-onboarding.svg";
import apiSvg from "../assets/images/icon-api.svg";

const Choose = () => {
  const gridBox = [
    {
      "svg": cashSvg,
      "title": "Online Banking",
      "desc": "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
      "key" : "one"
    },
    {
      "svg": budgetSvg,
      "title": "Simple Budgeting",
      "desc": "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
      "key" : "two"
    },
    {
      "svg": onboardSvg,
      "title": "Fast Onboarding",
      "desc": "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
      "key" : "three"
    },
    {
      "svg": apiSvg,
      "title": "Open Api",
      "desc": "Manage your savings, investments,pension, and much more from one account. Tracking your money has never been easier.",
      "key" : "four"
    },
  ];
  return (
    <section className="choose-section">
      <div className="faq-choose">
        <div className="main-choose">
          <div className="ques-div">
            <h2>Why choose Easybank?</h2>
            <p>
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>
          <div className="grid-div">
            {gridBox.map((box) => (
              <span className="box" key={box.key}>
                <span><img src={box.svg} alt={box.title} /></span>
                <h2>{box.title}</h2>
                <p>{box.desc}</p>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
