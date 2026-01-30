"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      q: "Will I get a recording of the masterclass?",
      a: "Yes, the recording will be shared with all registered participants.",
    },
    {
      q: "Who should attend the masterclass?",
      a: "Anyone looking to heal emotionally, manifest goals, and improve mindset can attend.",
    },
    {
      q: "I made the payment but didn’t receive any email.",
      a: "Please check your spam folder. If still not received, contact our support team.",
    },
    {
      q: "How will I join the masterclass?",
      a: "You will receive a Zoom/Meet link via email before the session.",
    },
    {
      q: "When will I get the bonuses?",
      a: "All bonuses will be shared after the masterclass is completed.",
    },
  ];

  const [open, setOpen] = useState(null);

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#0C1F3F] mb-4">
          Frequently Asked <span className="text-[#A52B45]">Questions</span>
        </h2>
        <div className="mx-auto mb-10 h-1 w-20 rounded-full bg-[#A52B45]" />

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center p-4 font-medium text-left"
              >
                {item.q}
                <span className="text-xl">{open === i ? "−" : "+"}</span>
              </button>

              {open === i && (
                <div className="p-4 text-sm text-gray-700 border-t">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 md:mt-12 text-center">
          <button className="w-full sm:w-auto bg-gradient-to-r from-[#A52B45] to-[#C73A5B] text-white px-12 py-4 rounded-full font-semibold shadow-lg">
            Register For Mayavisai Masterclass At <span className="line-through opacity-70">₹1299</span> ₹699
          </button>
          <p className="mt-2 text-sm font-medium">
          Early bird offer till Jan 31, 2026!!!
          </p>
        </div>
      </div>
    </section>
  );
}
