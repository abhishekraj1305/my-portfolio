import { useEffect, useState } from "react";

const CHATBOT_URL = "https://darknightcoder-abhishek-ai-bot.hf.space?v=admin-bookings-visible";

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className={`chatbot-widget ${isOpen ? "chatbot-widget-open" : ""}`}>
      {isOpen && (
        <section className="chatbot-panel" aria-label="Abhishek's AI chatbot">
          <header className="chatbot-panel-header">
            <div>
              <p className="chatbot-panel-kicker">Abhishek's AI</p>
              <h2>Ask me anything</h2>
            </div>
            <div className="chatbot-panel-actions">
              <a
                className="chatbot-open-link"
                href={CHATBOT_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Open chatbot in a new tab"
              >
                Open
              </a>
              <button
                className="chatbot-close"
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close chatbot"
              >
                x
              </button>
            </div>
          </header>
          <iframe
            className="chatbot-frame"
            src={CHATBOT_URL}
            title="Abhishek's AI Bot"
            loading="lazy"
            allow="clipboard-read; clipboard-write"
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
        <span>👋 Hi! I am Abhishek's AI, How can I help you?</span>
      </button>
    </div>
  );
}
