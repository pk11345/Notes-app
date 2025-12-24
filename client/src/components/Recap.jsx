import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const GEMINI_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const Recap = () => {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const note = useSelector((state) => state.summarizeNote);

  const gemini = async () => {
    if (!note || loading) return;

    setLoading(true);
    setSummary("");

    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
        {
          contents: [
            {
              parts: [
                {
                  text: `Summarize the following note into EXACTLY 3 bullet points.
                      Use "-" at the start of each point.
                      Keep them concise.

                      NOTE:
                      ${note}`
                }
              ]
            }
          ]
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": GEMINI_KEY
          }
        }
      );

      setSummary(response.data.candidates[0].content.parts[0].text);
    } catch (err) {
      console.error(err.response?.data || err.message);
      setSummary("Failed to summarize.");
    } finally {
      setTimeout(() => setLoading(false), 60000); // 1 min cooldown
    }
  };

  return (
    <div className="w-[35%] border border-white rounded-lg p-4 overflow-auto scrollbar-hide">
      <div className="w-full flex flex-col items-center gap-5">
        <h1 className="text-white text-xl font-bold italic">
          Summarize note using AI
        </h1>

        {/* NOTE PREVIEW */}
        <div className="flex flex-col gap-3 border-2 border-white p-3 w-full">
          <p className="text-white text-sm font-semibold">{note}</p>

          <button
            onClick={gemini}
            disabled={loading || !note}
            className="bg-purple-600 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            {loading ? "Please wait..." : "Summarize"}
          </button>
        </div>

        {/* SUMMARY OUTPUT */}
        <div className="flex flex-col gap-3 border-2 border-white p-3 w-full">
          {loading && (
            <p className="text-white text-sm font-semibold">
              Summarizing...
            </p>
          )}

          {!loading && summary && (
            <ul className="list-disc list-inside text-white text-sm font-semibold space-y-2">
              {summary
                .split("\n")
                .filter(Boolean)
                .map((point, index) => (
                  <li key={index}>
                    {point.replace(/^[-•]/, "").trim()}
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recap;
