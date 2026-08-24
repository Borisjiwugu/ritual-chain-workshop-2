const blockTimeMs = 195;

function toBlocks(seconds: number): number {
  return Math.floor(
    seconds * 1000 / blockTimeMs,
  );
}

const durations = [
  1,
  5,
  10,
  30,
  60,
];

console.log("Duration / block explorer");
console.log("========================");

for (const seconds of durations) {
  const blocks = toBlocks(seconds);

  console.log(
    `${seconds}s -> ${blocks} blocks`,
  );
}

console.log("");
console.log("done");
