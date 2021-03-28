describe("listedOccurrence", () => {
  it("should return number of occurences of a given list of words and its total", () => {
    let oouccurancesTotal = listedOccurrence(["dog", "cat", "large"], "I have a cat named Meow and a dog name Woof. I love the dog a lot. He is larger than a small horse.");
    let oouccurancesTotalFalse = listedOccurrence(["Woof", "Meow"], "I have a cat named Meow and a dog name Woof. I love the dog a lot. He is larger than a small horse.");

    expect(oouccurancesTotal).toEqual({cat: 1, dog: 2, large: 1, total: 4});
    expect(oouccurancesTotalFalse).not.toEqual({cat: 1, dog: 2, large: 1, total: 4});
  })
});
