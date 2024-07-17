import React, { useState, useEffect, useRef } from "react";
import "./Lesson.css";
import rec1 from "../../../assets/audios/Piggerymanagement1.m4a";
import rec2 from "../../../assets/audios/Piggerymanagement2.m4a";
import rec3 from "../../../assets/audios/Piggerymanagement3.m4a";
import rec4 from "../../../assets/audios/Piggerymanagement4.m4a";
import rec5 from "../../../assets/audios/Piggerymanagement5.m4a";
import rec6 from "../../../assets/audios/Piggerymanagement6.m4a";
import { NavLink } from "react-router-dom";

const lessonsData = [
  {
    title: "Introduction to piggery farming and types of breeds",
    recording: rec1,
    notes: [
      "Piggery farming involves the breeding and raising of pigs for meat production.",
      "Different types of pig breeds include:",
      "- Yorkshire",
      "- Landrace",
      "- Duroc",
      "- Hampshire"
    ],
  },
  {
    title: "Choosing breeding stock",
    recording: rec2,
    notes: [
      "Important factors to consider:",
      "- Health and vigor of the stock",
      "- Genetic background",
      "- Performance records"
    ],
  },
  {
    title: "Preparations before farrowing up to weaning",
    recording: rec3,
    notes: [
      "Ensure the farrowing pen is clean and disinfected.",
      "Provide adequate warmth and bedding for the piglets.",
      "Monitor the sow for signs of farrowing."
    ],
  },
  {
    title: "Complications that come with farrowing",
    recording: rec4,
    notes: [
      "Common complications include:",
      "- Dystocia (difficulty in giving birth)",
      "- Retained placenta",
      "- Mastitis (inflammation of the mammary gland)"
    ],
  },
  {
    title: "Diseases in pig farming",
    recording: rec5,
    notes: [
      "Common diseases include:",
      "- Swine flu",
      "- Foot and mouth disease",
      "- Porcine reproductive and respiratory syndrome (PRRS)"
    ],
  },
  {
    title: "Classes of feed",
    recording: rec6,
    notes: [
      "Different classes of feed include:",
      "- Energy feeds",
      "- Protein feeds",
      "- Vitamins and minerals"
    ],
  },
];

const LessonContent = ({ lesson, completeModule, redoModule }) => {
  const currentLesson = lessonsData[lesson - 1];
  const audioRef = useRef(null);

  useEffect(() => {
    
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
    }
  }, [lesson]);

  return (
    <div className="lesson">
      <div className="lesn">
        <h3>Piggery Management Module {lesson}</h3>
        <h2>{currentLesson.title}</h2>
      </div>
      <audio controls ref={audioRef}>
        <source src={currentLesson.recording} type="audio/ogg" />
        <source src={currentLesson.recording} type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
      <div className="btnss">
        {lesson > 1 && <button className="prev" onClick={redoModule}>Previous Lesson</button>}
        {lesson < lessonsData.length ? (
          <button className="next" onClick={completeModule}>Next Lesson</button>
        ) : (
          <NavLink to="/dashboard" className="next done">Done</NavLink>
        )}
      </div>
      <div className="notes">
        <h3>Extra Notes</h3>
        <ul>
          {currentLesson.notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Lesson = () => {
  const [lesson, setLesson] = useState(1);

  const redoModule = () => {
    if (lesson > 1) setLesson(lesson - 1);
  };

  const completeModule = () => {
    if (lesson < lessonsData.length) setLesson(lesson + 1);
  };

  return (
    <LessonContent
      lesson={lesson}
      completeModule={completeModule}
      redoModule={redoModule}
    />
  );
};

export default Lesson;
