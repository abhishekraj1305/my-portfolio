import { useEffect, useState } from "react";

const HOSTED_CHATBOT_URL = "https://darknightcoder-abhishek-ai-bot.hf.space?v=vectorless-fast";
const LOCAL_CHATBOT_URL = "http://127.0.0.1:7860";
const CHATBOT_URL = import.meta.env.VITE_CHATBOT_URL || (import.meta.env.DEV ? LOCAL_CHATBOT_URL : HOSTED_CHATBOT_URL);

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFrameLoaded, setIsFrameLoaded] = useState(false);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsFrameLoaded(false);
    }
  }, [isOpen]);

  return (
    <div className={`chatbot-widget ${isOpen ? "chatbot-widget-open" : ""}`}>
      {isOpen && (
        <section className="chatbot-panel" aria-label="Abhishek's AI chatbot">
          <header className="chatbot-panel-header">
            <div>
              <p className="chatbot-panel-kicker">Abhishek's AI</p>
              <h2>Ask me anything</h2>
            </div>
            <button
              className="chatbot-panel-close"
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close Abhishek's AI Bot"
            >
              <span aria-hidden>×</span>
            </button>
          </header>
          {!isFrameLoaded && (
            <div className="chatbot-loading" role="status" aria-live="polite">
              <span className="chatbot-loading-dot" aria-hidden />
              <span>Starting Abhishek's AI...</span>
            </div>
          )}
          <iframe
            className="chatbot-frame"
            src={CHATBOT_URL}
            title="Abhishek's AI Bot"
            loading="eager"
            allow="clipboard-read; clipboard-write"
            onLoad={() => setIsFrameLoaded(true)}
          />
        </section>
      )}

      <button
        className="chatbot-launcher"
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Hide Abhishek's AI Bot" : "Open Abhishek's AI Bot"}
      >
        <span className="chatbot-launcher-dot" aria-hidden />
        <span>Ask Abhishek's AI about pipelines, projects, or booking a call</span>
      </button>
    </div>
  );
}
