describe("palindromic", () => {
  it("should return true if the string is a Palindrome", () => {
    let palindromicString = "God saved Eva’s dog";
    let notPalindromicString = "I have some cheese";

    let isPalindromic = palindromic(palindromicString);
    let isNotPalindromic = palindromic(notPalindromicString);


    expect(isPalindromic).toEqual(true);
    expect(isNotPalindromic).toEqual(false);
  });
});
