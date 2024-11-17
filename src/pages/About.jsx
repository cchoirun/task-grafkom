import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { histories } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  const [expanded, setExpanded] = useState(null); // State untuk elemen yang diperluas

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index); // Toggle state expand
  };

  return (
    <section className="max-container">
      <h1 className="head-text">
        History about{" "}
        <span className="font-semibold blue-gradient_text drop-shadow">
          Eiffel Tower
        </span>{" "}
        👋
      </h1>

      <div className="flex flex-col gap-3 mt-5 text-slate-500">
        <p>Berikut adalah sejarah pembuatan Menara Eiffel.</p>
      </div>

      <div className="py-16">
        <div className="flex mt-12">
          <VerticalTimeline>
            {histories.map((history, index) => (
              <VerticalTimelineElement
                key={history.company_name}
                date={history.date}
                iconStyle={{ background: history.iconBg }}
                icon={
                  <div className="flex items-center justify-center w-full h-full">
                    <img
                      src={history.icon}
                      alt={history.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: history.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  {/* Area Klik untuk Toggle */}
                  <button
                    className="w-full text-left"
                    onClick={() => toggleExpand(index)}
                  >
                    <h3 className="text-xl font-semibold text-black font-poppins">
                      {history.title}
                    </h3>
                    <p
                      className="text-base font-medium text-black-500"
                      style={{ margin: 0 }}
                    >
                      {history.company_name}
                    </p>
                  </button>
                </div>

                {/* Tampilkan Konten Hanya Jika Expanded */}
                {expanded === index && (
                  <ul className="my-5 ml-5 space-y-2 list-disc">
                    {history.points.map((point, idx) => (
                      <li
                        key={`history-point-${idx}`}
                        className="pl-1 text-sm font-normal text-black-500/50"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
