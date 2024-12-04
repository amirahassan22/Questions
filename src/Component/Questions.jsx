import React from "react";
import questions from "../data";
import Question from "./Question";

export default function Questions() {
  return (
    <section className="rounded-xl py-6 px-7 bg-purple-400">
      <h2 className="text-5xl text-white my-5">Questions</h2>
      <div className="question-list mt-4">
        <ul>
          {questions.map(question=><Question key={question.id} id={question.id} title={question.title} info={question.info}/>)}
        </ul>
      </div>
    </section>
  );
}
