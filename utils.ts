export function sum(arr: number[]): number {
  return arr.reduce((acc, curr) => acc + curr);
}

export function multiply(arr: number[]): number {
  return arr.reduce((acc, curr) => acc * curr);
}

export function gcd(a: number, b: number): number {
  return !b ? a : gcd(b, a % b);
}

export function lcm(a: number, b: number): number {
  return (a * b) / gcd(a, b);
}
