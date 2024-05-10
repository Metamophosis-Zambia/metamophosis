import React, { useState } from "react";
import "./Lesson.css";
import rec1 from "../../../assets/audios/Piggerymanagement1.m4a";
import rec2 from "../../../assets/audios/Piggerymanagement2.m4a";
import rec3 from "../../../assets/audios/Piggerymanagement3.m4a";
import rec4 from "../../../assets/audios/Piggerymanagement4.m4a";
import rec5 from "../../../assets/audios/Piggerymanagement5.m4a";
import rec6 from "../../../assets/audios/Piggerymanagement6.m4a";

const Lessonn = ({ lesson, lessons, completeModule }) => {
   if (lesson === 1) {
  return (
    <div className="lesson">
      <div className="lesn">
        <h3>Piggery Management Module {lesson} </h3>
        <h2>{lessons[0].title}</h2>
      </div>
      <audio controls>
        <source src={lessons[0].recording} type="audio/ogg" />
        <source src={lessons[0].recording} type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
      <button onClick={() => completeModule()}>Next Lesson</button>
    </div>
  );} else if (lesson === 2 ) {
    return (
      <div className="lesson">
        <div className="lesn">
          <h3>Piggery Management Module {lesson} </h3>
          <h2>{lessons[1].title}</h2>
        </div>
        <audio controls>
          <source src={lessons[1].recording} type="audio/ogg" />
          <source src={lessons[1].recording} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
        <button onClick={() => completeModule()}>Next Lesson</button>
      </div>
    );
  } else if (lesson === 3 ) {
    return (
      <div className="lesson">
        <div className="lesn">
          <h3>Piggery Management Module {lesson} </h3>
          <h2>{lessons[2].title}</h2>
        </div>
        <audio controls>
          <source src={lessons[2].recording} type="audio/ogg" />
          <source src={lessons[2].recording} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
        <button onClick={() => completeModule()}>Next Lesson</button>
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
          <source src={lessons[3].recording} type="audio/ogg" />
          <source src={lessons[3].recording} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
        <button onClick={() => completeModule()}>Next Lesson</button>
      </div>
    );
  } else if (lesson === 5 ) {
    return (
      <div className="lesson">
        <div className="lesn">
          <h3>Piggery Management Module {lesson} </h3>
          <h2>{lessons[4].title}</h2>
        </div>
        <audio controls>
          <source src={lessons[4].recording} type="audio/ogg" />
          <source src={lessons[4].recording} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
        <button onClick={() => completeModule()}>Next Lesson</button>
      </div>
    );
  } else if (lesson === 6 ) {
    return (
      <div className="lesson">
        <div className="lesn">
          <h3>Piggery Management Module {lesson} </h3>
          <h2>{lessons[5].title}</h2>
        </div>
        <audio controls>
          <source src={lessons[5].recording} type="audio/ogg" />
          <source src={lessons[5].recording} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
        <button onClick={() => completeModule()}>Next Lesson</button>
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

  const completeModule = () => {
    setLesson(lesson + 1);
  };
  return (
    <Lessonn lesson={lesson} lessons={lessons} completeModule={completeModule} />
  );
};

export default Lesson;
