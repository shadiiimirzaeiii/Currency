import { PiCurrencyDollarSimpleFill } from "react-icons/pi";

const UserInfo = () => {
  return (
    <section className="leading-5 pb-4 flex justify-between ">
      <div>
        <div className="text-xs">خوش آمدید</div>
        <div>نام و نام خانوادگی</div>
        <div className="text-xs mt-8">موجودی</div>
        <span className="text-2xl">۹۰۰۰۰۰۰۰</span> <span>ریال</span>
      </div>

      <div className="text-8xl opacity-20">
        <PiCurrencyDollarSimpleFill />
      </div>
    </section>
  );
};

export default UserInfo;
