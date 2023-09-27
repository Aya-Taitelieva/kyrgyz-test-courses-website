import React from "react";

import { Button } from "@mui/material";
import { yellow } from "@mui/material/colors";
import CoursesItem from "../components/CoursesItem";

const colorBtn = yellow[700];
// console.log(yellow[500]);

const HomePage = () => {
  return (
    <div>
      <div className="tn-atom"></div>
      <div className="container" style={{ margin: "3%", marginTop: "10%" }}>
        <div
          className="info-box"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <div className="title-box">
            <h2 style={{ marginBottom: "0px" }}>Кыргыз Тест</h2>
            <h1 style={{ fontSize: "50px" }}>
              Онлайн-курсы для любознательных взрослых
            </h1>
            <h3>
              А еще крупнейшая медиатека видеолекций на русском языке,
              увлекательные стримы и тематические школы.
            </h3>
            <Button
              className="yellowBtn"
              variant="contained"
              size="large"
              style={{ backgroundColor: colorBtn }}>
              Выбрать курс
            </Button>{" "}
          </div>
          <div className="video-box" style={{ width: "70%" }}>
            <video
              style={{ width: "90%", height: "60%", borderRadius: "5%" }}
              className="home-video"
              src="https://video-public.canva.com/VAFGWxITitg/v/a0407fd778.mp4"
              autoPlay
              loop
              muted
            />
          </div>
        </div>
        <div className="courses-box">
          <div>
            <h2 style={{ fontSize: "40px" }}>Курсы</h2>
            <h3>
              130+ бесплатных онлайн-курсов. От школьной математики и зоологии
              до латыни и экономики.s
            </h3>
          </div>
          <div
            className="courses-card"
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              gap: "5%",
            }}>
            <CoursesItem />
            <CoursesItem />
            <CoursesItem />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5%",
            }}>
            <Button
              className="yellowBtn"
              variant="contained"
              size="large"
              style={{
                backgroundColor: colorBtn,
              }}>
              Смотреть все курсы
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
