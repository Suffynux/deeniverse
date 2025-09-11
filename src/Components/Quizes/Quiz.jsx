import React from "react";
import quizData from "./Data";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import FullWidth from "../Layout/FullWidth";
import MainLayout from "../Layout/MainLayout";
import logo from "../../assets/images/logo.png"; // adjust if needed

const Quiz = () => {
  const [userName, setUserName] = React.useState("");
  const [quizStarted, setQuizStarted] = React.useState(false);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [userAnswers, setUserAnswers] = React.useState(
    Array(quizData.length).fill(null)
  );
  const [score, setScore] = React.useState(0);
  const [certificate, setCertificate] = React.useState(false);

  const handleAnswer = (answerIndex, optionIndex) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[answerIndex] = optionIndex;
    setUserAnswers(updatedAnswers);
  };

  const downloadCertificate = () => {
    const certElement = document.getElementById("certificate");
    html2canvas(certElement).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("landscape", "pt", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${userName}_certificate.pdf`);
    });
  };

  // Name input before quiz starts
  if (!quizStarted && !certificate) {
    return (
      <MainLayout>
        <div className="relative min-h-screen bg-gradient-to-b from-[#182F51] to-[#0f1f3a] flex items-center justify-center py-16 px-4">
          {/* Decorative background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#366AB7]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-[#C0A34E]/20 rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 w-full max-w-2xl mx-auto bg-[#1a3258]/80 border border-[#366AB7]/30 rounded-2xl shadow-2xl p-10 flex flex-col items-center">
            {/* Logo */}
            <img
              src={logo}
              alt="Deeniverse Logo"
              className="h-16 mb-6 drop-shadow-lg"
              style={{ filter: "drop-shadow(0 2px 8px #182F51aa)" }}
            />
            {/* Bismillah */}
            <div className="text-3xl text-[#C0A34E] font-arabic mb-2" style={{ fontFamily: "Amiri, serif" }}>
              ﷽
            </div>
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
              Islamic Knowledge Quiz
            </h1>
            {/* Description */}
            <p className="text-lg text-gray-300 mb-6 text-center max-w-xl">
              Test your Islamic knowledge and challenge yourself! Answer all questions to the best of your ability. At the end, you’ll receive a beautiful certificate if you complete the quiz.
            </p>
            <div className="w-24 h-1 bg-[#C0A34E] mx-auto mb-8"></div>
            {/* Name input */}
            <div className="w-full max-w-sm mx-auto">
              <label className="block text-[#C0A34E] font-semibold mb-2 text-lg text-center">
                Enter Your Name to Begin
              </label>
              <input
                type="text"
                placeholder="Your Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full border border-[#366AB7]/40 bg-[#182F51]/20 text-white px-4 py-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#C0A34E] transition"
              />
              <button
                onClick={() => {
                  if (userName.trim() === "") {
                    alert("Please enter your name");
                    return;
                  }
                  setQuizStarted(true);
                }}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[#C0A34E] to-[#D8B75A] text-[#182F51] font-bold shadow hover:from-[#D8B75A] hover:to-[#C0A34E] transition"
              >
                Start Quiz
              </button>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }

  // Certificate screen
  if (certificate) {
    return (
      <MainLayout>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#182F51] to-[#0f1f3a] py-12">
          <div
            id="certificate"
            className="relative w-[800px] h-[600px] bg-white border-4 border-[#182F51] rounded-3xl shadow-2xl flex flex-col items-center justify-center overflow-hidden"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, #f3f4f6 0 10px, transparent 10px 20px)",
            }}
          >
            {/* Decorative Top Border */}
            <div className="absolute top-0 left-0 w-full flex justify-center">
              <svg
                height="40"
                width="100%"
                viewBox="0 0 800 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="800" height="40" fill="#182F51" />
                <path d="M0,40 Q400,0 800,40" fill="#C0A34E" />
              </svg>
            </div>
            {/* Logo */}
            <div className="flex justify-center items-center mt-10 mb-8">
              <img
                src={logo}
                alt="Deeniverse Logo"
                className="h-20 object-contain"
                style={{ filter: "drop-shadow(0 2px 8px #182F51aa)" }}
              />
            </div>
            {/* Bismillah */}
            <div className="mb-2">
              <span
                className="block text-[#C0A34E] text-3xl font-arabic text-center"
                style={{ fontFamily: "Amiri, serif" }}
              >
                ﷽
              </span>
            </div>
            {/* Title */}
            <h1 className="text-4xl font-bold text-[#182F51] mb-2 tracking-wide text-center">
              شهادة إتمام
            </h1>
            <h2 className="text-2xl font-semibold text-[#C0A34E] mb-6 tracking-wide text-center">
              Certificate of Completion
            </h2>
            {/* Body */}
            <p className="text-lg text-[#182F51] mb-2 text-center">This is to certify that</p>
            <h2 className="text-3xl font-bold text-[#C0A34E] mb-2 text-center">{userName}</h2>
            <p className="text-lg text-[#182F51] mb-2 text-center">
              has completed the quiz
            </p>
            <p className="text-lg font-medium text-[#182F51] mb-2 text-center">
              Score: <span className="text-[#C0A34E]">{score} / {quizData.length}</span>
            </p>
            <p className="text-base text-gray-500 mb-8 text-center">
              {new Date().toLocaleDateString()}
            </p>
            {/* Decorative Bottom Border */}
            <div className="absolute bottom-0 left-0 w-full flex justify-center">
              <svg
                height="40"
                width="100%"
                viewBox="0 0 800 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="800" height="40" fill="#182F51" />
                <path d="M0,0 Q400,40 800,0" fill="#C0A34E" />
              </svg>
            </div>
            {/* Islamic Geometric Corners */}
            <div className="absolute top-0 left-0">
              <svg width="60" height="60" viewBox="0 0 60 60">
                <polygon points="0,0 60,0 0,60" fill="#C0A34E" opacity="0.15" />
              </svg>
            </div>
            <div className="absolute top-0 right-0">
              <svg width="60" height="60" viewBox="0 0 60 60">
                <polygon points="60,0 60,60 0,0" fill="#C0A34E" opacity="0.15" />
              </svg>
            </div>
            <div className="absolute bottom-0 left-0">
              <svg width="60" height="60" viewBox="0 0 60 60">
                <polygon points="0,60 60,60 0,0" fill="#C0A34E" opacity="0.15" />
              </svg>
            </div>
            <div className="absolute bottom-0 right-0">
              <svg width="60" height="60" viewBox="0 0 60 60">
                <polygon points="60,60 60,0 0,60" fill="#C0A34E" opacity="0.15" />
              </svg>
            </div>
          </div>
          <button
            onClick={downloadCertificate}
            className="mt-6 px-6 py-2 rounded-lg bg-gradient-to-r from-[#182F51] to-[#366AB7] text-white font-semibold shadow hover:from-[#366AB7] hover:to-[#182F51] transition"
          >
            Download Certificate
          </button>
        </div>
      </MainLayout>
    );
  }

  // Quiz UI
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-b from-[#182F51] to-[#0f1f3a] flex flex-col items-center py-10 px-2">
        <div className="w-full max-w-xl bg-[#1a3258]/90 rounded-2xl shadow-2xl border border-[#366AB7]/30 p-8">
          {/* Quiz Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">Quiz</h2>
            <span className="bg-[#C0A34E] text-[#182F51] text-xs font-semibold px-4 py-1 rounded-full shadow">
              {currentQuestion + 1} / {quizData.length}
            </span>
          </div>

          {/* Question */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-[#C0A34E] mb-2">
              {quizData[currentQuestion].question}
            </h3>
            <p className="text-sm text-gray-300">Choose the correct answer below:</p>
          </div>

          {/* Options */}
          <div className="space-y-4 mb-8">
            {quizData[currentQuestion].options.map((option, idx) => (
              <button
                key={option}
                onClick={() => handleAnswer(currentQuestion, idx)}
                className={`w-full flex items-center gap-3 px-5 py-3 rounded-lg border bg-[#182F51]/30 text-white font-medium text-base shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 ${
                  userAnswers[currentQuestion] === idx
                    ? "border-[#C0A34E] ring-[#C0A34E] bg-[#C0A34E]/30 text-[#182F51]"
                    : "border-[#366AB7]/30 hover:bg-[#C0A34E]/80 hover:text-[#182F51] hover:border-[#C0A34E]"
                }`}
              >
                <span className="w-5 h-5 flex items-center justify-center border-2 rounded-full bg-white">
                  {userAnswers[currentQuestion] === idx && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 text-[#C0A34E]"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4"
                      />
                    </svg>
                  )}
                </span>
                {option}
              </button>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            <button
              onClick={() => setCurrentQuestion((prev) => Math.max(prev - 1, 0))}
              className="px-6 py-2 rounded-lg bg-[#182F51] text-white font-semibold shadow hover:bg-[#0f1d36] transition"
              disabled={currentQuestion === 0}
            >
              Previous
            </button>
            <button
              onClick={() => {
                if (currentQuestion === quizData.length - 1) {
                  const calculatedScore = userAnswers.filter(
                    (answer, index) => answer === quizData[index].correctOption
                  ).length;
                  setScore(calculatedScore);
                  setCertificate(true);
                } else {
                  setCurrentQuestion((prev) =>
                    Math.min(prev + 1, quizData.length - 1)
                  );
                }
              }}
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#C0A34E] to-[#D8B75A] text-[#182F51] font-semibold shadow hover:from-[#D8B75A] hover:to-[#C0A34E] transition"
            >
              {currentQuestion === quizData.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Quiz;
