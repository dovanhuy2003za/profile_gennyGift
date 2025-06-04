import React from "react";
import perfumeImg from "../assets/images/nuochoa.png";
import lipstickImg from "../assets/images/son.png";

export default function CertificateSection() {
  return (
    <section className="w-full flex flex-col items-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center my-8">
        Giấy kiểm định chất lượng sản phẩm
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-start gap-10 w-full">
        <div className="flex flex-col items-center flex-1">
          <img
            src={perfumeImg}
            alt="Giấy kiểm định chất lượng nước hoa"
            className="w-full max-w-md rounded-lg shadow-lg border"
          />
          <p className="text-center font-semibold mt-4 text-lg">
            Giấy kiểm định chất lượng nước hoa
          </p>
        </div>
        <div className="flex flex-col items-center flex-1">
          <img
            src={lipstickImg}
            alt="Giấy kiểm định chất lượng son"
            className="w-full max-w-md rounded-lg shadow-lg border"
          />
          <p className="text-center font-semibold mt-4 text-lg">
            Giấy kiểm định chất lượng son
          </p>
        </div>
      </div>
    </section>
  );
}
