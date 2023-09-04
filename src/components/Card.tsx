import React, { useLayoutEffect, useState } from "react";
import { CardProps } from "utils/types";
import { AiOutlineFall, AiOutlineRise } from "react-icons/ai";

const Card = (props: CardProps) => {
  const { label, value, previous } = props;

  const [increase, setIncrease] = useState<boolean>(false);
  const [percentage, setPercentage] = useState<number | null>(null);

  useLayoutEffect(() => {
    const getStatus = () => {
      value > previous ? setIncrease(true) : setIncrease(false);
    };

    const getPercent = () => {
      if (value === 0 || previous === 0) {
        setPercentage(null);
      } else {
        const calculatedPercentage: number =
          ((value - previous) / previous) * 100;
        setPercentage(calculatedPercentage);
      }
    };
    getPercent();
    getStatus();
  }, [previous, value]);

  return (
    <div className="shadow-md  p-3 w-1/3 rounded-md my-3">
      <p className="font-[500] text-[0.8rem]">{label}</p>
      <p className="font-[700] text-[1.5rem]">
        ₦
        {value?.toLocaleString(undefined, {
          maximumFractionDigits: 2,
        })}
      </p>
      <div className="flex justify-between items-center mt-[2rem]">
        <div className="flex items-center gap-1">
          <>
            {increase ? (
              <AiOutlineRise color="green" />
            ) : (
              <AiOutlineFall color="tomato" />
            )}
            <p className={increase ? "text-[green]" : "text-[tomato]"}>
              {percentage?.toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
              %
            </p>
          </>
        </div>
        <p className="text-[#666666] text-[0.8rem] font-[600]">
          last month: ₦
          {previous?.toLocaleString(undefined, {
            maximumFractionDigits: 2,
          })}
        </p>
      </div>
    </div>
  );
};

export default Card;
