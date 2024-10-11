"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

// Quiz data stored in a JSON array with the new structure
const quizData = [
  {
    question:
      "When was the last time you dreamt of a Domino's delivery driver?",
    answers: [
      { name: "At least once in my life", value: "sympathizer" },
      { name: "Every night", value: "sympathizer" },
      { name: "What the hell is a domino?", value: "neutral" },
      { name: "I would never", value: "ally" },
    ],
  },
  {
    question:
      "What's your reaction when you see a commercial from a major pizza chain?",
    answers: [
      { name: "Placing my order rn", value: "sympathizer" },
      {
        name: "Say: 'Nice try, but I'm not falling for corporate brainwashing propaganda'",
        value: "ally",
      },
      {
        name: "Big pizza can't buy my love... unless there's a coupon",
        value: "neutral",
      },
      { name: "Throw a closed fist at the TV screen", value: "ally" },
    ],
  },
  {
    question: "You have an hour to live, what do you order for your last meal?",
    answers: [
      {
        name: "A large pepperoni pizza from Papa John's (I'm a coward)",
        value: "sympathizer",
      },
      { name: "Anything as long as it has pineapple on it.", value: "neutral" },
      {
        name: "Homemade, artisan pizza with ingredients I grew myself",
        value: "ally",
      },
      {
        name: "Find my local pizza joint and cry with the owner",
        value: "ally",
      },
    ],
  },
  {
    question:
      "If someone said you could never eat at Domino's again, you would:",
    answers: [
      {
        name: "Cry a river of garlic butter sauce and sweat mayonaisse",
        value: "sympathizer",
      },
      { name: "Calmly order from Pizza Hut", value: "sympathizer" },
      {
        name: "Go to Jersey Mike's (I like sub sandwiches, sue me)",
        value: "neutral",
      },
      {
        name: "Donate your inheritance to charity and start rolling your own pizza dough",
        value: "ally",
      },
    ],
  },
  {
    question:
      "How would you describe your relationship with Pizza Hut's stuffed crust?",
    answers: [
      { name: "Purely platonic", value: "neutral" },
      { name: "We're basically engaged.", value: "sympathizer" },
      {
        name: "It's a guilty pleasure I only tell my closest friends about.",
        value: "neutral",
      },
      {
        name: "I'd rather give Jabba the Hut a fat juicy kiss on the lops",
        value: "ally",
      },
    ],
  },
  {
    question: "When you hear 'hand-tossed,' you think of:",
    answers: [
      {
        name: "A Domino's commercial. (I have no imagination and people think I'm boring",
        value: "sympathizer",
      },
      {
        name: "An artist in a small kitchen, kneading with love",
        value: "ally",
      },
      {
        name: "A back massage given from Papa John himself (sicko)",
        value: "sympathizer",
      },
      { name: "I need to speak to an attorney", value: "neutral" },
    ],
  },
  {
    question: "Which phrase best describes your pizza philosophy?",
    answers: [
      {
        name: "Pizza is life, especially if it's from a chain.",
        value: "sympathizer",
      },
      {
        name: "Support local, unless there's a two-for-one deal.",
        value: "neutral",
      },
      {
        name: "If it's not baked in a wood-fired brick oven by Luigi, it's not pizza.",
        value: "ally",
      },
      {
        name: "I am a literal animal and will eat anything with marinara sauce",
        value: "neutral",
      },
    ],
  },
  {
    question:
      "You get a coupon for a free pizza from Papa John's. What do you do?",
    answers: [
      {
        name: "Leave it on your doorstep as bait for Big Pizza operatives.",
        value: "ally",
      },
      { name: "Let it expire, become ungovernable", value: "ally" },
      { name: "Use that thing. It's free.", value: "neutral" },
      {
        name: "Cry out of joy because you love Papa John",
        value: "sympathizer",
      },
    ],
  },
  {
    question:
      "How do you react when you see a new pizza flavor at a big chain?",
    answers: [
      { name: "Think: 'We got shrimp pizza before GTA 6", value: "neutral" },
      {
        name: "I must try it, I'm a sheep for big corporations and their lousy cardboard excuse for pizza",
        value: "sympathizer",
      },
      {
        name: "Flip off the establishment, yell 'I'm not a robot!' and head to your local favorite",
        value: "ally",
      },
      {
        name: "Only eat there if it's getting good reviews (understandable)",
        value: "neutral",
      },
    ],
  },
  {
    question: "Finish this sentence: 'No Friday night is complete without...'",
    answers: [
      { name: "A large pepperoni from Domino's", value: "sympathizer" },
      {
        name: "A political battle between the pizza bourgeoisie and the pizza proletariat resulting in complete revolution",
        value: "ally",
      },
      {
        name: "A pizza from Pizza Hut, but only the ones from the 90s that had the salad bars and funny roofs",
        value: "neutral",
      },
      {
        name: "A deep dive into 1800s literature about the ethics of pizza delivery monopolies",
        value: "ally",
      },
    ],
  },
  {
    question:
      "What would you do if your friend opened a pizza box and it was from Little Caesars?",
    answers: [
      {
        name: "High-five them (twice) for their budget-friendly choice",
        value: "neutral",
      },
      {
        name: "Schedule an intervention with their family and friends",
        value: "ally",
      },
      {
        name: "Start singing 'I'm lovin' it' at the top of my lungs",
        value: "sympathizer",
      },
      {
        name: "Gently tell them that there's help for them and encourage them to seek treatment",
        value: "ally",
      },
    ],
  },
  {
    question: "What pizza topping do you think represents your soul?",
    answers: [
      { name: "Marinara sauce", value: "neutral" },
      { name: "Pineapple", value: "sympathizer" },
      {
        name: "Truffle oil, because I'm pretentious about my pizza and so should you be.",
        value: "ally",
      },
      { name: "String cheese", value: "neutral" },
    ],
  },
  {
    question: "What would you rather have on your tombstone?",
    answers: [
      { name: "Here lies a Big Pizza Sympathizer.", value: "sympathizer" },
      { name: "Death by Deep Dish", value: "ally" },
      {
        name: "We forge the chains we wear in life, and I chose Domino's",
        value: "sympathizer",
      },
      { name: "I was vegan", value: "neutral" },
    ],
  },
  {
    question:
      "If you had a child that chose Domino's pizza over the local favorite, what would you do?",
    answers: [
      { name: "'Son, you're adopted'", value: "ally" },
      { name: "I'd be devastated, but I'd get over it", value: "neutral" },
      { name: "Send them to pizza camp", value: "ally" },
      { name: "Encourage them", value: "sympathizer" },
    ],
  },
  {
    question:
      "If you had a chance to meet the kingpin of Big Pizza, what would you do?",
    answers: [
      { name: "Immediate crotch shot", value: "ally" },
      { name: "Buy stock", value: "sympathizer" },
      { name: "Keep walking", value: "neutral" },
      {
        name: "Join the elite and highly immoral business of Big Pizza",
        value: "sympathizer",
      },
    ],
  },
];

type Answer = {
  name: string;
  value: string;
};

export function Quiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Answer[]>(
    new Array(quizData.length).fill(null)
  );
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (answer: Answer) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentStep] = answer;
    setSelectedAnswers(newAnswers);
    if (currentStep < quizData.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < quizData.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const getQuizResult = () => {
    const sympathizerCount = selectedAnswers.filter(
      (answer) => answer.value === "sympathizer"
    ).length;
    const allyCount = selectedAnswers.filter(
      (answer) => answer.value === "ally"
    ).length;
    const neutralCount = selectedAnswers.filter(
      (answer) => answer.value === "neutral"
    ).length;

    const maxCount = Math.max(sympathizerCount, allyCount, neutralCount);

    if (maxCount === sympathizerCount) {
      return "You're a Big Pizza Sympathizer and a major loser. You better get off this site in the next 30 seconds or we'll beat the hell out of you.";
    } else if (maxCount === allyCount) {
      return "Congrats! You're an Anti-Big Pizza Ally! Join the movement and fight the good fight.";
    } else {
      return "You're neutral. We get it, you don't like getting political. That's fine, but you'll never have our respect you wet noodle.";
    }
  };

  return (
    <div className="w-full max-w-lg bg-[#c0c0c0] border-t-2 border-l-2 border-[#ffffff] border-r-2 border-b-2 border-r-[#808080] border-b-[#808080] p-1">
      <div className="bg-[#000080] text-white p-1 mb-2 flex justify-between items-center">
        <span className="font-bold">Pizza Political-stance Quiz</span>
        <button className="w-5 h-5 bg-[#c0c0c0] border border-[#ffffff] border-r-[#808080] border-b-[#808080] flex items-center justify-center text-black font-bold">
          X
        </button>
      </div>
      <div className="p-4">
        {!quizCompleted ? (
          <>
            <div className="w-full bg-[#808080] h-4 mb-4 border border-[#ffffff] border-r-[#000000] border-b-[#000000]">
              <div
                className="h-full bg-[#000080]"
                style={{
                  width: `${((currentStep + 1) / quizData.length) * 100}%`,
                }}
              ></div>
            </div>
            <p className="text-sm mb-4 text-center">
              Step {currentStep + 1} of {quizData.length}
            </p>
            <h2 className="text-xl font-bold mb-4">
              {quizData[currentStep].question}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {quizData[currentStep].answers.map((answer, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(answer)}
                  className={`w-full p-2 text-left border-2 ${
                    selectedAnswers[currentStep]?.value === answer.value
                      ? "bg-[#000080] text-white border-[#ffffff] border-r-[#808080] border-b-[#808080]"
                      : "bg-[#c0c0c0] border-[#ffffff] border-r-[#808080] border-b-[#808080] active:border-[#808080] active:border-r-[#ffffff] active:border-b-[#ffffff]"
                  }`}
                >
                  {answer.name}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
            <p className="text-lg mb-4">{getQuizResult()}</p>
            <button
              onClick={() => {
                setCurrentStep(0);
                setSelectedAnswers(new Array(quizData.length).fill(null));
                setQuizCompleted(false);
              }}
              className="px-4 py-2 bg-[#c0c0c0] border-2 border-[#ffffff] border-r-[#808080] border-b-[#808080] active:border-[#808080] active:border-r-[#ffffff] active:border-b-[#ffffff]"
            >
              Retake Quiz
            </button>
          </div>
        )}
      </div>
      {!quizCompleted && (
        <button
          onClick={() => {
            setCurrentStep(0);
            setSelectedAnswers(new Array(quizData.length).fill(null));
          }}
          disabled={currentStep === 0}
          className={`px-4 py-2`}
        >
          Restart
        </button>
      )}
    </div>
  );
}
