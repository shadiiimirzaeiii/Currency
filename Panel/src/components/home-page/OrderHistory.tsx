import { MdCheckCircle } from "react-icons/md";
import { GrShop } from "react-icons/gr";
import { PiMoneyLight } from "react-icons/pi";

const OrderHistory = () => {
  return (
    <section className="mt-14 px-4">
      <h1>تراکنش های اخیر</h1>

      <div className="flex items-center justify-between my-4">
        <div className="flex items-center">
          <div className="bg-blue-400 p-2 text-white text-lg rounded-lg ml-2">
            <PiMoneyLight />
          </div>
          <div className="text-blue-900">برداشت وجه نقد</div>
        </div>

        <div>
          <span>1200000</span>
          <span>ریال</span>
        </div>
      </div>

      <div className="flex items-center justify-between my-4">
        <div className="flex items-center">
          <div className="bg-blue-400 p-2 text-white text-lg rounded-lg ml-2">
            <MdCheckCircle />
          </div>
          <div className="text-blue-900">پرداخت قسط</div>
        </div>

        <div>
          <span>1200000</span>
          <span>ریال</span>
        </div>
      </div>

      <div className="flex items-center justify-between my-4">
        <div className="flex items-center">
          <div className="bg-blue-400 p-2 text-white text-lg rounded-lg ml-2">
            <GrShop />
          </div>
          <div className="text-blue-900"> خرید خوراکی</div>
        </div>

        <div>
          <span>1200000</span>
          <span>ریال</span>
        </div>
      </div>

      <div className="flex items-center justify-between my-4">
        <div className="flex items-center">
          <div className="bg-blue-400 p-2 text-white text-lg rounded-lg ml-2">
            <GrShop />
          </div>
          <div className="text-blue-900"> پرداخت شارژ ماهانه</div>
        </div>

        <div>
          <span>1200000</span>
          <span>ریال</span>
        </div>
      </div>
    </section>
  );
};

export default OrderHistory;
