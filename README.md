# Vuture_tech_test


---
#### Part D - BONUS)

Come up with at least 3 different ways to provide the "censored words list" to the application. This task does not require coding, please send us  3 bullet points on how you would do this.

- Hide password input. Example: - ``` input type="password" id="password"``` ``` if (password.type == "password") {button.innerHTMl = "Hide";} ```

- Hide email input using a simple regex and using a replace method. Example: - ```(?<=^[A-Za-z0-9]{2}).*?(?=@)```

- Another example is to hide English phone numbers with a regex. Example: - ```/^(?:\W*\d){11}\W*$/```

---
