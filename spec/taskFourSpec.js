describe("censorList", () => {
  it("should censor words from a given list", () => {
    let censorTheseWords = censorList(["Meow", "Woof"], "I have a cat named Meow and a dog name Woof. I love the dog a lot. He is larger than a small horse.");

    expect(censorTheseWords).toEqual("I have a cat named M##w and a dog name W##f. I love the dog a lot. He is larger than a small horse.");
    expect(censorTheseWords).not.toEqual("I have a cat named Meow and a dog name Woof. I love the dog a lot. He is larger than a small horse.");
  })
});
