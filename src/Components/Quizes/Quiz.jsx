import React, { useState, useRef } from "react";
import quizzes from "./Data";
import jsPDF from "jspdf";
import MainLayout from "../Layout/MainLayout";
import logo from "../../assets/images/logo.png";
import { BookOpen, Award } from "lucide-react";

const Quiz = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [userName, setUserName] = useState("");
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [showCertificate, setShowCertificate] = useState(false);
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false);
  const certificateRef = useRef(null);

  const quizData = selectedQuiz !== null ? quizzes[selectedQuiz].questions : [];

  const handleSelectQuiz = (index) => {
    setSelectedQuiz(index);
    setUserAnswers(Array(quizzes[index].questions.length).fill(null));
  };

  const handleStartQuiz = () => {
    if (userName.trim() === "") {
      alert("Please enter your name to begin.");
      return;
    }
    setQuizStarted(true);
  };

  const handleAnswer = (questionIndex, optionIndex) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[questionIndex] = optionIndex;
    setUserAnswers(updatedAnswers);
  };

  const calculateScore = () => {
    const calculatedScore = userAnswers.filter(
      (answer, index) => answer === quizData[index].correctOption
    ).length;
    setScore(calculatedScore);
    setShowWhatsAppPopup(true);
  };

const downloadCertificate = () => {
  try {
    // Create PDF document
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4"
    });
    
    // Get page dimensions
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    
    // Add background
    pdf.setFillColor(255, 255, 255);
    pdf.rect(0, 0, pageWidth, pageHeight, "F");
    
    // Add decorative border
    pdf.setDrawColor(192, 163, 78); // #C0A34E
    pdf.setLineWidth(2);
    pdf.rect(10, 10, pageWidth - 20, pageHeight - 20);
    
    // Add inner border
    pdf.setDrawColor(247, 247, 247);
    pdf.setLineWidth(1);
    pdf.rect(15, 15, pageWidth - 30, pageHeight - 30);
    
    // Add title with better styling
    pdf.setFont("times", "bold");
    pdf.setFontSize(42);
    pdf.setTextColor(24, 47, 81); // #182F51
    pdf.text("CERTIFICATE", pageWidth / 2, 35, { align: "center" });
    
    pdf.setFontSize(18);
    pdf.setFont("times", "normal");
    pdf.setTextColor(192, 163, 78); // #C0A34E
    pdf.text("OF ACHIEVEMENT", pageWidth / 2, 48, { align: "center" });
    
    // Add decorative line under title
    pdf.setDrawColor(192, 163, 78); // #C0A34E
    pdf.setLineWidth(1);
    pdf.line(pageWidth / 2 - 40, 52, pageWidth / 2 + 40, 52);
    
    // Add recipient name section with better spacing
    pdf.setFontSize(16);
    pdf.setTextColor(75, 85, 99); // #4b5563
    pdf.setFont("times", "normal");
    pdf.text("THIS CERTIFICATE IS PROUDLY PRESENTED TO", pageWidth / 2, 70, { align: "center" });
    
    // Add recipient name with elegant styling
    pdf.setFontSize(36);
    pdf.setTextColor(184, 134, 11); // #B8860B
    pdf.setFont("times", "italic");
    pdf.text(userName, pageWidth / 2, 85, { align: "center" });
    
    // Add decorative elements around name
    pdf.setDrawColor(192, 163, 78); // #C0A34E
    pdf.setLineWidth(0.5);
    pdf.line(pageWidth / 2 - 60, 88, pageWidth / 2 - 20, 88);
    pdf.line(pageWidth / 2 + 20, 88, pageWidth / 2 + 60, 88);
    
    // Add description with better formatting
    pdf.setFontSize(14);
    pdf.setTextColor(55, 65, 81); // #374151
    pdf.setFont("times", "normal");
    const descriptionLines = pdf.splitTextToSize(
      `for successfully completing the assessment on "${quizzes[selectedQuiz].title}", demonstrating commendable knowledge and dedication to learning.`,
      130
    );
    pdf.text(descriptionLines, pageWidth / 2, 105, { align: "center" });
    
    // Add score with professional styling
    pdf.setFontSize(16);
    pdf.setTextColor(24, 47, 81); // #182F51
    pdf.setFont("times", "bold");
    pdf.text(`Score Achieved: ${score} / ${quizData.length}`, pageWidth / 2, 125, { align: "center" });
    
    // Add completion date
    pdf.setFontSize(12);
    pdf.setTextColor(107, 114, 128); // #6b7280
    pdf.setFont("times", "normal");
    pdf.text(`Completed on ${new Date().toLocaleDateString("en-GB", { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })}`, pageWidth / 2, 140, { align: "center" });
    
    // Add signature sections with better alignment
    const signatureY = 170;
    
    // Left signature - Date
    pdf.setFontSize(12);
    pdf.setTextColor(55, 65, 81); // #374151
    pdf.setFont("times", "normal");
    pdf.text(new Date().toLocaleDateString("en-GB"), 50, signatureY, { align: "center" });
    pdf.setLineWidth(0.5);
    pdf.line(30, signatureY + 2, 70, signatureY + 2);
    pdf.setFontSize(10);
    pdf.setTextColor(107, 114, 128); // #6b7280
    pdf.text("Date", 50, signatureY + 8, { align: "center" });
    
    // Center - Organization
    pdf.setFontSize(14);
    pdf.setTextColor(192, 163, 78); // #C0A34E
    pdf.setFont("times", "bold");
    pdf.text("Deeniverse Academy", pageWidth / 2, signatureY, { align: "center" });
    pdf.setFontSize(10);
    pdf.setTextColor(107, 114, 128); // #6b7280
    pdf.text("Islamic Education Platform", pageWidth / 2, signatureY + 8, { align: "center" });
    
    // Right signature - Authorized
    pdf.setFontSize(12);
    pdf.setTextColor(55, 65, 81); // #374151
    pdf.setFont("times", "italic");
    pdf.text("Authorized Signature", pageWidth - 50, signatureY, { align: "center" });
    pdf.line(pageWidth - 70, signatureY + 2, pageWidth - 30, signatureY + 2);
    pdf.setFontSize(10);
    pdf.setFont("times", "normal");
    pdf.setTextColor(107, 114, 128); // #6b7280
    pdf.text("Director", pageWidth - 50, signatureY + 8, { align: "center" });
    
    // Add decorative corner elements
    pdf.setFillColor(192, 163, 78); // #C0A34E
    // Top-left corner
    pdf.circle(20, 20, 3, "F");
    // Top-right corner
    pdf.circle(pageWidth - 20, 20, 3, "F");
    // Bottom-left corner
    pdf.circle(20, pageHeight - 20, 3, "F");
    // Bottom-right corner
    pdf.circle(pageWidth - 20, pageHeight - 20, 3, "F");
    
    // Add decorative gold seal
    // pdf.setFillColor(251, 191, 36); // #fbbf24
    // pdf.circle(pageWidth - 40, pageHeight / 2, 18, "F");
    // pdf.setFillColor(217, 119, 6); // #d97706
    // pdf.circle(pageWidth - 40, pageHeight / 2, 15, "F");
    // pdf.setFillColor(251, 191, 36); // #fbbf24
    // pdf.circle(pageWidth - 40, pageHeight / 2, 12, "F");
    
    // Save the PDF
    pdf.save(`${userName.replace(/\s+/g, '_')}_Deeniverse_Certificate.pdf`);
  } catch (err) {
    console.error("Error generating PDF:", err);
    alert("Failed to generate certificate. Please try again.");
  }
};
  // Screen 1: Quiz Selection
  if (selectedQuiz === null) {
    return (
      <MainLayout>
        <div className="min-h-screen bg-gradient-to-b from-[#182F51] to-[#0f1f3a] py-16 px-4 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <img src={logo} alt="Deeniverse Academy" className="h-16 sm:h-20 mx-auto mb-4" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#C0A34E] mb-4">
              Knowledge Assessment Center
            </h1>
            <p className="text-base sm:text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              Welcome. Select a quiz to test your knowledge and embark on a journey of learning.
              Upon completion, you will be awarded a certificate of achievement.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {quizzes.map((quiz, index) => (
                <div
                  key={index}
                  className="bg-[#1a3258]/80 border border-[#366AB7]/30 rounded-xl p-4 sm:p-6 text-left flex flex-col justify-between transition-all duration-300"
                >
                  <div>
                    <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-[#C0A34E] mb-3" />
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">{quiz.title}</h2>
                    <p className="text-sm sm:text-base text-gray-400 mb-4">{quiz.description}</p>
                  </div>
                  <button
                    onClick={() => handleSelectQuiz(index)}
                    className="mt-4 w-full px-4 py-2 rounded-lg bg-gradient-to-r from-[#C0A34E] to-[#D8B75A] text-[#182F51] font-bold shadow-md hover:scale-105 transition-transform text-sm sm:text-base"
                  >
                    Start Quiz
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }

  // Screen 2: Name Input
  if (!quizStarted) {
    return (
      <MainLayout>
        <div className="min-h-screen bg-gradient-to-b from-[#182F51] to-[#0f1f3a] flex items-center justify-center py-16 px-4">
          <div className="relative z-10 w-full max-w-md mx-auto bg-[#1a3258]/80 border border-[#366AB7]/30 rounded-2xl shadow-2xl p-6 sm:p-8 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">{quizzes[selectedQuiz].title}</h1>
            <p className="text-sm sm:text-base text-gray-300 mb-6">Enter your full name as you would like it to appear on your certificate.</p>
            <input
              type="text"
              placeholder="Your Full Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full border border-[#366AB7]/40 bg-[#182F51]/20 text-white px-4 py-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#C0A34E] transition text-sm sm:text-base"
            />
            <button
              onClick={handleStartQuiz}
              className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[#C0A34E] to-[#D8B75A] text-[#182F51] font-bold shadow-lg hover:scale-105 transition-transform text-sm sm:text-base"
            >
              Begin Quiz
            </button>
          </div>
        </div>
      </MainLayout>
    );
  }

  // Screen 3: WhatsApp Channel Popup
  if (showWhatsAppPopup) {
    return (
      <MainLayout>
        <div className="min-h-screen bg-gradient-to-b from-[#182F51] to-[#0f1f3a] flex items-center justify-center py-10 px-4">
          <div className="relative z-10 w-full max-w-md mx-auto bg-[#1a3258]/95 border border-[#366AB7]/30 rounded-2xl shadow-2xl p-6 md:p-8 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Congratulations! 🎉</h2>
              <p className="text-gray-300 mb-4 text-sm md:text-base">
                You've completed the quiz! Stay connected with Deeniverse Academy for more Islamic knowledge and updates.
              </p>
              <p className="text-[#C0A34E] font-semibold mb-6 text-sm md:text-base">
                Follow our WhatsApp channel for daily reminders, Islamic content, and exclusive updates!
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="https://whatsapp.com/channel/0029VauRk7a7T8bThW4CnA0A"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setShowWhatsAppPopup(false);
                  setShowCertificate(true);
                }}
                className="block w-full px-6 py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white font-bold shadow-lg transition-colors text-center"
              >
                📱 Follow WhatsApp Channel
              </a>
              <button
                onClick={() => {
                  setShowWhatsAppPopup(false);
                  setShowCertificate(true);
                }}
                className="block w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[#C0A34E] to-[#D8B75A] text-[#182F51] font-bold shadow-lg hover:scale-105 transition-transform"
              >
                Continue to Certificate
              </button>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  } else if (showCertificate) {
    return (
      <MainLayout>
        <div className="min-h-screen bg-gradient-to-b from-[#182F51] to-[#0f1f3a] py-10 px-4 flex flex-col items-center justify-center">
          {/* Simple Certificate Component with basic HTML and inline styles */}
          <div className="w-full max-w-4xl mx-auto">
            <div
              ref={certificateRef}
              style={{
                width: '100%',
                maxWidth: '842px',
                height: 'auto',
                minHeight: '595px',
                backgroundColor: 'white',
                padding: '32px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
                position: 'relative',
                overflow: 'hidden',
                fontFamily: 'Times New Roman, Times, serif',
                color: '#1f2937',
                border: '10px solid #F7F7F7',
                margin: '0 auto'
              }}
            >
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <p style={{ fontSize: '48px', fontWeight: 'bold', letterSpacing: '0.1em', color: '#374151', margin: 0 }}>
                CERTIFICATE
              </p>
              <p style={{ fontSize: '20px', letterSpacing: '0.05em', color: '#6b7280', margin: '4px 0 0 0' }}>
                OF ACHIEVEMENT
              </p>
            </div>

            {/* Content */}
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: '1' }}>
              <p style={{ fontSize: '18px', color: '#4b5563', marginBottom: '8px' }}>
                THIS CERTIFICATE IS PROUDLY PRESENTED TO
              </p>
              <p style={{ 
                fontSize: '48px', 
                color: '#B8860B', 
                marginBottom: '16px',
                fontFamily: 'Brush Script MT, cursive'
              }}>
                {userName}
              </p>
              <p style={{ fontSize: '16px', color: '#4b5563', maxWidth: '450px', margin: '0 auto' }}>
                for successfully completing the assessment on <span style={{ fontWeight: 'bold' }}>{quizzes[selectedQuiz].title}</span>, 
                demonstrating commendable knowledge and dedication to learning.
              </p>
              <p style={{ fontSize: '18px', color: '#374151', marginTop: '16px' }}>
                Score Achieved: <span style={{ fontWeight: 'bold', color: '#B8860B' }}>{score} / {quizData.length}</span>
              </p>
            </div>

            {/* Footer */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: '16px', paddingLeft: '32px', paddingRight: '32px' }}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ 
                  fontSize: '16px', 
                  fontWeight: 'bold', 
                  color: '#374151',
                  borderBottom: '2px solid #9ca3af', 
                  paddingBottom: '4px', 
                  width: '160px', 
                  margin: '0 auto' 
                }}>
                  {new Date().toLocaleDateString("en-GB")}
                </p>
                <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '4px' }}>Date</p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <img src={logo} alt="Logo" style={{ height: '64px', margin: '0 auto' }} />
                <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '4px' }}>Deeniverse Academy</p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <p style={{ 
                  fontSize: '16px', 
                  fontWeight: 'bold', 
                  color: '#374151', 
                  borderBottom: '2px solid #9ca3af', 
                  paddingBottom: '4px', 
                  width: '160px', 
                  margin: '0 auto',
                  fontFamily: 'Brush Script MT, cursive'
                }}>
                  Authorized Signature
                </p>
                <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '4px' }}>Signature</p>
              </div>
            </div>

            {/* Gold Seal */}
            <div style={{ 
              position: 'absolute',
              top: '50%',
              right: '32px',
              transform: 'translateY(-50%)',
              width: '112px',
              height: '112px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: '0'
            }}>
              <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}></div>
              <Award style={{ width: '64px', height: '64px', color: 'white', position: 'relative', zIndex: '10' }} strokeWidth={1.5} />
            </div>
          </div>
          </div>

          {/* Download Button */}
          <button
            onClick={downloadCertificate}
            className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 rounded-lg bg-gradient-to-r from-[#C0A34E] to-[#D8B75A] text-[#182F51] font-bold shadow-lg hover:scale-105 transition-transform text-sm sm:text-base"
          >
            Download Certificate (PDF)
          </button>
        </div>
      </MainLayout>
    );
  }

  // Screen 4: Quiz UI
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-b from-[#182F51] to-[#0f1f3a] flex flex-col items-center justify-center py-10 px-2 sm:px-4">
        <div className="w-full max-w-2xl bg-[#1a3258]/90 rounded-2xl shadow-2xl border border-[#366AB7]/30 p-4 sm:p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">{quizzes[selectedQuiz].title}</h2>
            <span className="bg-[#C0A34E] text-[#182F51] text-sm font-semibold px-4 py-1 rounded-full">
              {currentQuestion + 1} / {quizData.length}
            </span>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-white mb-4">
              {quizData[currentQuestion].question}
            </h3>
          </div>

          <div className="space-y-3 mb-8">
            {quizData[currentQuestion].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(currentQuestion, idx)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                  userAnswers[currentQuestion] === idx
                    ? "bg-[#C0A34E] border-[#D8B75A] text-[#182F51] font-bold"
                    : "bg-[#182F51]/50 border-transparent hover:border-[#C0A34E] text-white"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
            <button
              onClick={() => setCurrentQuestion((prev) => Math.max(prev - 1, 0))}
              disabled={currentQuestion === 0}
              className="w-full sm:w-auto px-4 sm:px-6 py-2 rounded-lg bg-gray-600 text-white font-semibold disabled:opacity-50 text-sm sm:text-base"
            >
              Previous
            </button>
            {currentQuestion < quizData.length - 1 ? (
              <button
                onClick={() => setCurrentQuestion((prev) => prev + 1)}
                className="w-full sm:w-auto px-4 sm:px-6 py-2 rounded-lg bg-gradient-to-r from-[#C0A34E] to-[#D8B75A] text-[#182F51] font-semibold text-sm sm:text-base"
              >
                Next
              </button>
            ) : (
              <button
                onClick={calculateScore}
                className="w-full sm:w-auto px-4 sm:px-6 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold text-sm sm:text-base"
              >
                Finish & See Results
              </button>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Quiz;


