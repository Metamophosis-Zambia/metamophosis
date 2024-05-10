import React, { useState } from "react";
import "./Lesson.css";
import rec1 from "../../../assets/audios/Piggerymanagement1.m4a";
import rec2 from "../../../assets/audios/Piggerymanagement2.m4a";
import rec3 from "../../../assets/audios/Piggerymanagement3.m4a";
import rec4 from "../../../assets/audios/Piggerymanagement4.m4a";
import rec5 from "../../../assets/audios/Piggerymanagement5.m4a";
import rec6 from "../../../assets/audios/Piggerymanagement6.m4a";
import { NavLink } from "react-router-dom";

const Lessonn = ({ lesson, lessons, completeModule, redoModule }) => {
  if (lesson === 1) {
    return (
      <div className="lesson">
        <div className="lesn">
          <h3>Piggery Management Module {lesson} </h3>
          <h2>{lessons[0].title}</h2>
        </div>
        <audio controls>
          <source src={rec1} type="audio/ogg" />
          <source src={rec1} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
        <div className="btnss">
          <button className="prev" onClick={() => redoModule()}>Previous Lesson</button>
          <button className="next" onClick={() => completeModule()}>Next Lesson</button>
        </div>
      </div>
    );
  } else if (lesson === 2) {
    return (
      <div className="lesson">
        <div className="lesn">
          <h3>Piggery Management Module {lesson} </h3>
          <h2>{lessons[1].title}</h2>
        </div>
        <audio controls>
          <source src={rec1} type="audio/ogg" />
          <source src={rec2} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
        <div className="btnss">
        <button className="prev" onClick={() => redoModule()}>Previous Lesson</button>
        <button className="next" onClick={() => completeModule()}>Next Lesson</button>
      </div>
      </div>
    );
  } else if (lesson === 3) {
    return (
      <div className="lesson">
        <div className="lesn">
          <h3>Piggery Management Module {lesson} </h3>
          <h2>{lessons[2].title}</h2>
        </div>
        <audio controls>
          <source src={rec3} type="audio/ogg" />
          <source src={rec3} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
        <div className="btnss">
          <button className="prev" onClick={() => redoModule()}>Previous Lesson</button>
          <button className="next" onClick={() => completeModule()}>Next Lesson</button>
        </div>
      </div>
    );
  } else if (lesson === 4) {
    return (
      <div className="lesson">
        <div className="lesn">
          <h3>Piggery Management Module {lesson} </h3>
          <h2>{lessons[3].title}</h2>
        </div>
        <audio controls>
          <source src={rec4} type="audio/ogg" />
          <source src={rec4} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
        <div className="btnss">
          <button className="prev" onClick={() => redoModule()}>Previous Lesson</button>
          <button className="next" onClick={() => completeModule()}>Next Lesson</button>
        </div>
      </div>
    );
  } else if (lesson === 5) {
    return (
      <div className="lesson">
        <div className="lesn">
          <h3>Piggery Management Module {lesson} </h3>
          <h2>{lessons[4].title}</h2>
        </div>
        <audio controls>
          <source src={rec5} type="audio/ogg" />
          <source src={rec5} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
        <div className="btnss">
          <button className="prev" onClick={() => redoModule()}>Previous Lesson</button>
          <button className="next" onClick={() => completeModule()}>Next Lesson</button>
        </div>
      </div>
    );
  } else if (lesson === 6) {
    return (
      <div className="lesson">
        <div className="lesn">
          <h3>Piggery Management Module {lesson} </h3>
          <h2>{lessons[5].title}</h2>
        </div>
        <audio controls>
          <source src={rec6} type="audio/ogg" />
          <source src={rec6} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>


        <div className="btnss">
          <button className="prev" onClick={() => redoModule()}>Previous Lesson</button>
          <NavLink to="/dashboard" className="next">Done</NavLink>
        </div>
        
       
      </div>
    );
  }
};

const Lesson = () => {
  const [lesson, setLesson] = useState(1);

  const lessons = [
    {
      title: "Introduction to piggery farming and types of breeds",
      recording: rec1,
    },
    {
      title: "Choosing breeding stock",
      recording: rec2,
    },
    {
      title: "Preparations before farrowing upto weaning",
      recording: rec3,
    },
    {
      title: "Complications that come with farrowing",
      recording: rec4,
    },
    {
      title: "Diseases in pig farming",
      recording: rec5,
    },
    {
      title: "Classes of feed",
      recording: rec6,
    },
  ];

  const redoModule = () => {
    setLesson(lesson - 1);
  };

  const completeModule = () => {
    setLesson(lesson + 1);
  };
  return (
    <Lessonn
      lesson={lesson}
      lessons={lessons}
      completeModule={completeModule}
      redoModule={redoModule}
    />
  );
};

export default Lesson;
