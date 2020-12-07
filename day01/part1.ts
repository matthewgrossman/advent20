import { NumberArrayIO, ArrayIO } from "../helpers/io";

function matchingEntries(io: number[]): [number, number] {
  const complements = new Set(io.map((val) => 2020 - val));
  for (const num of io) {
    if (complements.has(num)) return [num, 2020 - num];
  }
  return [-1, -1];
}

(async () => {
  const io = await NumberArrayIO();
  const product = matchingEntries(io).reduce((a, b) => a * b, 1);
  console.log(product);
})();
