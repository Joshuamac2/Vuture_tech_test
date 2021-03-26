describe("countElement", () => {
  it("should return number of occurrences of a given letter in a string", () => {
    let ouccurancesInString = countElement("I have some cheese", "e");
    let ouccurancesInStringTwo = countElement("I have some cheese", "s");

    expect(ouccurancesInString).toEqual(5);
    expect(ouccurancesInStringTwo).toEqual(2);
  })
});
