import React, { useState } from 'react';
import kb from '../resumeKB';
import { SendHorizonal, Bot, User } from 'lucide-react';

function cosineSim(a, b) {
  const set = new Set([...Object.keys(a), ...Object.keys(b)]);
  let dot = 0, na = 0, nb = 0;
  set.forEach((t) => {
    const x = a[t] || 0, y = b[t] || 0;
    dot += x * y; na += x * x; nb += y * y;
  });
  return dot / (Math.sqrt(na) * Math.sqrt(nb) || 1);
}

function tf(text) {
  return text.toLowerCase().split(/\s+/).filter(Boolean).reduce((m, w) => ((m[w] = (m[w] || 0) + 1), m), {});
}

export default function AIChat() {
  const [q, setQ] = useState('');
  const [answer, setAnswer] = useState('');

  function ask(e) {
    e.preventDefault();
    const qv = tf(q);
    let best = { score: -1, item: null };
    kb.forEach((item) => {
      const score = cosineSim(qv, item.vector);
      if (score > best.score) best = { score, item };
    });
    setAnswer(best.item ? best.item.answer : "🤖 I couldn't find that. Try asking about your name, skills, experience, or school.");
  }

  return (
    <section className="page-container">
      <div className="page-card ai-card">
        <h2 className="page-title">AI Resume Assistant 🤖</h2>
        <p className="ai-intro">
          Ask questions about your background, skills, or education — and the assistant will answer based on your resume.
        </p>

        <form onSubmit={ask} className="ai-form">
          <input
            className="ai-input"
            placeholder="e.g. What skills do I have?"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <button type="submit" className="ai-send-btn">
            <SendHorizonal size={20} />
          </button>
        </form>

        {answer && (
          <div className="ai-response">
            <div className="ai-message">
              <Bot className="ai-icon" />
              <p>{answer}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
