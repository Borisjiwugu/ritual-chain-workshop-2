export function secondsToBlocks(
  seconds: number,
  blockTimeMs: number,
): number {
  if (seconds < 0) {
    throw new Error(
      "seconds cannot be negative",
    );
  }

  if (blockTimeMs <= 0) {
    throw new Error(
      "block time must be positive",
    );
  }

  return Math.floor(
    seconds * 1000 / blockTimeMs,
  );
}

export function deadlineFrom(
  currentBlock: bigint,
  seconds: number,
  blockTimeMs: number,
): bigint {
  return currentBlock +
    BigInt(
      secondsToBlocks(
        seconds,
        blockTimeMs,
      ),
    );
}

export function isPastDeadline(
  currentBlock: bigint,
  deadline: bigint,
): boolean {
  return currentBlock >= deadline;
}
