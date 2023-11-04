import type { NextPage } from "next";
import PasswordContainer from "../components/password-container";
import EmailForm from "../components/email-form";

const Login: NextPage = () => {
  return (
    <div className="relative bg-gray w-full h-[1112px] overflow-hidden text-left text-base text-text font-nunito">
      <div className="absolute top-[0px] left-[0px] w-[448px] h-[1112px]">
        <div className="absolute top-[0px] left-[0px] bg-white w-[448px] h-[1112px]" />
      </div>
      <img
        className="absolute h-[54.14%] w-[44.93%] top-[22.93%] right-[10.9%] bottom-[22.93%] left-[44.17%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/illustration.svg"
      />
      <div className="absolute top-[871px] left-[86px] w-[275px] h-[22px]">
        <div className="absolute top-[0px] left-[0px]">
          <span>Don’t have account yet?</span>
          <span className="text-black">{`  `}</span>
          <span className="text-primary">New Account</span>
        </div>
      </div>
      <div className="absolute top-[791px] left-[50px] w-[348px] h-[50px] text-white">
        <img
          className="absolute top-[0px] left-[0px] w-[348px] h-[50px]"
          alt=""
          src="/bg.svg"
        />
        <div className="absolute top-[14px] left-[151px] w-[45px] h-[22px]">
          <div className="absolute top-[0px] left-[0px] font-semibold">
            Log in
          </div>
        </div>
      </div>
      <div className="absolute top-[732px] left-[290px] w-[108px] h-[19px] text-sm text-primary">
        <div className="absolute top-[0px] left-[0px]">Reset Password?</div>
      </div>
      <div className="absolute top-[732px] left-[50px] w-[117px] h-[19px] text-sm">
        <div className="absolute top-[2px] left-[0px] w-[15px] h-[15px]">
          <div className="absolute top-[0px] left-[0px] rounded-sm box-border w-[15px] h-[15px] opacity-[0.5] border-[1px] border-solid border-text" />
        </div>
        <div className="absolute top-[0px] left-[25px] w-[92px] h-[19px]">
          <div className="absolute top-[0px] left-[0px]">Remember me</div>
        </div>
      </div>
      <PasswordContainer />
      <EmailForm />
      <div className="absolute top-[475px] left-[50px] w-[348px] h-[22px]">
        <img
          className="absolute top-[9px] left-[0px] w-[348px] h-px"
          alt=""
          src="/line.svg"
        />
        <div className="absolute top-[0px] left-[165px] w-[19px] h-[22px]">
          <div className="absolute top-[0px] left-[0px] font-semibold">Or</div>
        </div>
      </div>
      <div className="absolute top-[400px] left-[236px] w-[162px] h-[50px]">
        <img
          className="absolute top-[0px] left-[0px] w-[162px] h-[50px]"
          alt=""
          src="/bg2.svg"
        />
        <div className="absolute top-[15px] left-[56px] w-[68px] h-[22px]">
          <div className="absolute top-[0px] left-[0px]">Facebook</div>
        </div>
        <img
          className="absolute h-[36%] w-[5.56%] top-[32%] right-[71.6%] bottom-[32%] left-[22.84%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/logo.svg"
        />
      </div>
      <div className="absolute top-[400px] left-[50px] w-[164px] h-[50px]">
        <img
          className="absolute top-[0px] left-[0px] w-[164px] h-[50px]"
          alt=""
          src="/bg3.svg"
        />
        <div className="absolute top-[15px] left-[70px] w-[52px] h-[22px]">
          <div className="absolute top-[0px] left-[0px]">Google</div>
        </div>
        <img
          className="absolute h-[36%] w-[10.98%] top-[32%] right-[63.41%] bottom-[32%] left-[25.61%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/logo1.svg"
        />
      </div>
      <div className="absolute top-[200px] left-[178px] w-[92px] h-40 text-[25px] text-black">
        <div className="absolute top-[132px] left-[11px] w-[70px] h-7">
          <div className="absolute top-[0px] left-[0px] font-semibold inline-block w-[70px] h-7">
            Log in
          </div>
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-[92px] h-[92px]"
          alt=""
          src="/logo2.svg"
        />
      </div>
    </div>
  );
};

export default Login;
