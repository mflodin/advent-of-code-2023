export {}; // this is just to make it a module to be able to use top level await

const [_, __, day, part] = process.argv;
const module = await import(`./${day}/${part}`);

console.time("Time");
console.log(module.default());
console.timeEnd("Time");
