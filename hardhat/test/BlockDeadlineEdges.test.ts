import { expect } from "chai";

describe("Block deadline boundaries", function () {
  function isClosed(
    current: bigint,
    deadline: bigint,
  ) {
    return current >= deadline;
  }

  it("is open before deadline", function () {
    expect(
      isClosed(999n, 1000n),
    ).to.equal(false);
  });

  it("closes at deadline", function () {
    expect(
      isClosed(1000n, 1000n),
    ).to.equal(true);
  });

  it("stays closed afterwards", function () {
    expect(
      isClosed(1001n, 1000n),
    ).to.equal(true);
  });

  it("handles a distant deadline", function () {
    expect(
      isClosed(10n, 100000n),
    ).to.equal(false);
  });

  it("handles the same block", function () {
    expect(
      isClosed(5000n, 5000n),
    ).to.equal(true);
  });
});
