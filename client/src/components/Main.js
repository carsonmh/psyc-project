import "../App.css";
import React from "react";
import BarChart from "./BarChart";
import Navbar from "./Navbar";
import DarkModeButton from "./DarkModeButton";
import { Link } from "react-router-dom";

function Main() {
  const [bgColor, setBgColor] = React.useState("white");
  const [txtColor, setTxtColor] = React.useState("black");

  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: "center", marginBottom: 0 }}>
        Does this look fair?
      </h1>
      <div class="chart-wrapper">
        <div class="chart">
          <BarChart bgColor={bgColor} txtColor={txtColor} />
        </div>
      </div>

      <div class="main-content">
        <h1 style={{ margin: 0 }}>
          People of different ethnicities and genders are not enjoying equal pay
        </h1>
        <p>
          The graph above shows just the ethnic pay gap. While this is gap is
          important, there is so much more to the story, including a pay gap
          between the genders
        </p>
        <img
          width="500"
          src="https://www.mindspringpartners.com/wp-content/uploads/2019/05/bigstock-Gender-Wage-Gap-Vector-Illustr-272361868.jpg"
        />
        <h1 style={{ margin: 0 }}>
          Donate below to help make change for the better
        </h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a
            target="_blank"
            href="https://www.gofundme.com/c/cause/justice-and-equality"
          >
            <div class="donate-button">
              <p>Ethnic pay equality</p>
            </div>
          </a>
          <a target="_blank" href="https://ladiesgetpaid.com/">
            <div class="donate-button">
              <p>Gender pay equality</p>
            </div>
          </a>
        </div>
        <h1 style={{ textAlign: "center", marginBottom: 0 }}>Read More</h1>
        <p class="read-more">
          The pay gap between genders and ethnicities is scary and needs to be
          changed. Here are some more facts about the issue.
        </p>
        <ul class="facts">
          <li>
            Although Chinese and Indian people make similar money to white
            people, they work much harder to do so and fail to reach the highest
            paying positions{" "}
            <span class="citation">
              <Link to="/bibliography">(Brynin, 2012)</Link>
            </span>
          </li>
          <li>
            Women tend to earn on average 426 Euros less per month than men.
            They are also found in occupations that are less favorable then men
            (less impact, more tedious job){" "}
            <span class="citation">
              <Link to="/bibliography">(Schneider et al, 2022)</Link>
            </span>
          </li>
          <li>
            One reason why women/non-white people could be getting paid less is
            because they expect it. One study in article found that women
            actually expect to be paid less than men and thus they actually do{" "}
            <span class="citation">
              <Link to="/bibliography">(Litman et al, 2020)</Link>
            </span>
          </li>
          <li>
            It's not just a problem in the US: a recent study in Germany found
            that women consistently make less day by day than their male
            counterparts.{" "}
            <span class="citation">
              <Link to="/bibliography">(Toczek et al, 2021)</Link>
            </span>
          </li>
          <li>
            A study recently found that in the HealthCare industry, when all
            else is equal, a Hispanic person makes less than a white person.{" "}
            <span class="citation">
              <Link to="/bibliography">(Frogner, 2021)</Link>
            </span>
          </li>
        </ul>
        <h1>Conclusion</h1>
        <p>
          As you can see, the problem extends far beyond just the wage gap
          between white and black people. People of all races, as well as women
          are consistently paid less than their white male counterparts. This is
          a problem that I believe can be changed with consistent effort from
          America and various policy changes that would help bridge the unfair
          gap that we see today{" "}
        </p>
      </div>
      <DarkModeButton setBgColor={setBgColor} setTxtColor={setTxtColor} />
    </>
  );
}

export default Main;
