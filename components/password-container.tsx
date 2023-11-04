import type { NextPage } from "next";

const PasswordContainer: NextPage = () => {
  return (
    <div className="absolute top-[627px] left-[50px] w-[348px] h-20 text-left text-base text-text font-nunito">
      <img
        className="absolute top-[30px] left-[0px] w-[348px] h-[50px]"
        alt=""
        src="/bg1.svg"
      />
      <img
        className="absolute h-[13.75%] w-[3.74%] top-[62.5%] right-[4.31%] bottom-[23.75%] left-[91.95%] max-w-full overflow-hidden max-h-full opacity-[0.5]"
        alt=""
        src="/hide.svg"
      />
      <img
        className="absolute top-[52px] left-[15px] w-[77px] h-[7px] opacity-[0.5]"
        alt=""
        src="/dot.svg"
      />
      <div className="absolute top-[0px] left-[0px] w-[71px] h-[22px]">
        <div className="absolute top-[0px] left-[0px]">Password</div>
      </div>
    </div>
  );
};

export default PasswordContainer;
