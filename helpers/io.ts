import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

const identity = <T>(input: T): T => input;

async function asyncIterToArray<A, B>(
  gen: AsyncGenerator<A>,
  func: (arg: A) => B
): Promise<B[]> {
  const arr: B[] = [];
  for await (const val of gen) {
    arr.push(func(val));
  }
  return arr;
}

export async function* GeneratorIO(): AsyncGenerator<string> {
  for await (const line of rl) {
    yield line;
  }
}

export async function ArrayIO(): Promise<string[]> {
  return asyncIterToArray(GeneratorIO(), identity);
}

export async function NumberArrayIO(): Promise<number[]> {
  return asyncIterToArray(GeneratorIO(), parseInt);
}
