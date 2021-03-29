describe("censorPalindrome", () => {
  it("should censor words that are palindromic from a string", () => {
    let censorPalindromicWords = censorPalindrome("Anna went to vote in the election to fulfil her civic duty");

    expect(censorPalindromicWords).toEqual("A$$a went to vote in the election to fulfil her c$$$c duty");
    expect(censorPalindromicWords).not.toEqual("Anna went to vote in the election to fulfil her civic duty");

  })
});
