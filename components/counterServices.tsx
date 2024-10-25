"use client";

import { dataCounter } from "@/data";
import { calculateExperience } from "../data";
import CountUp from "react-countup";
import { useState } from "react";
import { useEffect } from "react";

const counterServices = () => {
  return (
    <div className="flex flex-wrap max-w-3xl mx-auto my-8 w-full justify-center">
      {dataCounter.map((item) => {
        const { years, months } = calculateExperience(item.startDate);
        const totalMonths = years * 12 + months;
        const [countComplete, setCountComplete] = useState(false);
        const [countValue, setCountValue] = useState("—"); // Estado para mostrar el guion

        useEffect(() => {
          // Iniciar el conteo después de un breve retraso
          const timer = setTimeout(() => {
            setCountValue(totalMonths.toString());
          }, 1000); // Cambia a "totalMonths" después de 1 segundo

          return () => clearTimeout(timer); // Limpiar el timer al desmontar
        }, [totalMonths]);

        return (
          <div
            key={item.id}
            className={`${
              item.lineRight &&
              "border-2 border-transparent md:border-e-gray-100 pr-4"
            } ${
              item.lineRight === false ? "border-2 border-transparent pr-4" : ""
            } flex flex-col items-center text-center w-full md:w-1/6 px-3`}
          >
            <h3 className="text-lg md:text-xl">
              Experiencia<span className="md:block">{item.text}</span>
            </h3>
            <p className="flex mb-1 text-xl md:text-2xl font-extrabold text-secondary flex-col">
              {countComplete ? (
                <span>
                  {years > 0 && months > 0 ? (
                    <span>
                      {years} año{years > 1 ? "s" : ""} y{" "}
                      {months === 1 ? `${months} mes` : `${months} meses`}
                    </span>
                  ) : years > 0 ? (
                    <span>
                      {years}
                      <br /> año{years > 1 ? "s" : ""}
                    </span>
                  ) : (
                    <span>
                      {months === 1 ? (
                        <>
                          {months}
                          <br /> mes
                        </>
                      ) : months === 0 ? (
                        ""
                      ) : (
                        <>
                          {months}
                          <br /> meses
                        </>
                      )}
                    </span>
                  )}
                </span>
              ) : (
                <>
                  {countValue === "—" ? ( // Mostrar el guion mientras espera
                    <span>{countValue}</span>
                  ) : (
                    <CountUp
                      end={totalMonths}
                      duration={20}
                      onEnd={() => setCountComplete(true)}
                    />
                  )}
                  <span className="mt-1">
                    {totalMonths === 1 ? "mes" : "meses"}
                  </span>
                </>
              )}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default counterServices;
