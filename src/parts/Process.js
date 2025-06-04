import React from "react";
import PropTypes from "prop-types";
import { Fade } from "react-awesome-reveal";

/**
 * Process component hiển thị quy trình theo dạng các bước.
 * @param {Object[]} steps - Mảng các bước quy trình, mỗi bước gồm: number, title, subtitle, desc.
 * @param {string} [title] - Tiêu đề lớn của quy trình.
 * @param {string} [subtitle] - Phụ đề nhỏ dưới tiêu đề.
 */
export default function Process({ steps, title, subtitle }) {
  return (
    <div className="bg-[#f8f6e9]">
      <div className="container mx-auto pt-20 pb-28 px-4 md:px-10 xl:px-20">
        {title && (
          <Fade direction="right" triggerOnce>
            <h1 className="text-4xl md:text-5xl text-[#e94d6a] text-center font-bold uppercase mb-2 tracking-wider">
              {title}
            </h1>
          </Fade>
        )}
        {subtitle && (
          <Fade direction="left" triggerOnce>
            <p className="font-semibold text-lg text-[#e94d6a] text-center mb-12 tracking-wider uppercase">
              {subtitle}
            </p>
          </Fade>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center">
          {steps.map((step, idx) => (
            <Fade direction="up" triggerOnce delay={150 * idx} key={step.number || idx}>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-b from-[#ffb6b9] to-[#ff3576] shadow-lg border-4 border-white text-white text-3xl font-bold mb-4">
                  {step.number}
                </div>
                <div className="bg-[#5b5b5b] bg-opacity-80 rounded-t-[40px] rounded-b-2xl shadow-xl pt-10 pb-6 px-4 w-full min-w-[180px] max-w-xs flex flex-col items-center text-center text-white">
                  <div className="font-bold text-base uppercase mb-1">{step.title}</div>
                  <div className="text-xs font-semibold text-[#ffe0e6] mb-2 uppercase">{step.subtitle}</div>
                  <div className="text-xs font-light">{step.desc}</div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
}

Process.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string,
      subtitle: PropTypes.string,
      desc: PropTypes.string,
    }),
  ).isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

Process.defaultProps = {
  title: "",
  subtitle: "",
};
