import type { NextPage } from "next";

const EmailForm: NextPage = () => {
  return (
    <div className="absolute top-[527px] left-[50px] w-[348px] h-20 text-left text-sm text-text font-nunito">
      <img
        className="absolute top-[30px] left-[0px] w-[348px] h-[50px]"
        alt=""
        src="/bg1.svg"
      />
      <div className="absolute top-[46px] left-[15px] w-[132px] h-[19px]">
        <div className="absolute top-[0px] left-[0px] opacity-[0.7]">
          example@gmail.com
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] w-[104px] h-[22px] text-base">
        <div className="absolute top-[0px] left-[0px]">Email Address</div>
      </div>
    </div>
  );
};

export default EmailForm;
