import { NumberArrayIO } from "../helpers/io";

function numbersAddToSum(io: number[], sum: number): [number, number] {
  const complements = new Set(io.map((val) => sum - val));
  for (const num of io) {
    if (complements.has(num)) return [num, sum - num];
  }
  throw new Error("no matching entries found")
}

(async () => {
  const io = await NumberArrayIO()
  const [a, b] = numbersAddToSum(io, 2020)
  console.log(a * b);
})();
