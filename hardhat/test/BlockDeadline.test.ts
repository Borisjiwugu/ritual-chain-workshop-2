import { expect } from "chai";

describe("Block deadline", function () {
  const blockTimeMs = 195;

  function secondsToBlocks(seconds: number) {
    return Math.floor(
      seconds * 1000 / blockTimeMs,
    );
  }

  it("converts one second", function () {
    expect(secondsToBlocks(1))
      .to.equal(5);
  });

  it("converts ten seconds", function () {
    expect(secondsToBlocks(10))
      .to.equal(51);
  });

  it("converts zero seconds", function () {
    expect(secondsToBlocks(0))
      .to.equal(0);
  });

  it("increases with duration", function () {
    expect(
      secondsToBlocks(20),
    ).to.be.greaterThan(
      secondsToBlocks(10),
    );
  });

  it("handles a longer duration", function () {
    expect(secondsToBlocks(60))
      .to.be.greaterThan(300);
  });
});
