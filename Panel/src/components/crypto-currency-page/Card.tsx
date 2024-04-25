import { FC, memo } from "react";
import { getPriceChangeColor } from "src/utility/getPriceChangeColor";

interface CardProps {
  symbol: string; // Symbol
  price: string; // Last price
  priceChange: number; // Price change percent
}

const Card: FC<CardProps> = ({ symbol, price, priceChange }) => {
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 w-full max-w-6xl">
        <div className="flex items-center p-2 bg-gray-900 hover:bg-gray-800 text-white">
          <div className="flex-grow flex flex-col ml-4">
            <div className="flex items-center justify-between">
              <span>{symbol}</span>
              <span className="text-sm font-bold">{price}</span>
            </div>

            <span
              className={`${getPriceChangeColor(
                priceChange
              )} text-sm font-semibold ml-2`}
            >
              {priceChange}
              <span>%</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Card);
