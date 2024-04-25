export const getPriceChangeColor = (priceChangePercent: number): string => {
  if (priceChangePercent > 0) {
    return "text-green-700";
  } else if (priceChangePercent < 0) {
    return "text-red-500";
  } else {
    return "text-gray-500"; // Gray color for zero change
  }
}