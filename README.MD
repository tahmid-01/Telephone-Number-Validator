# US Telephone Number Validator

A simple tool to validate US telephone numbers using HTML, CSS, and JavaScript.

## 🚀 Features
- Validates US phone numbers in various formats.
- Provides instant feedback on validity.
- Supports formats such as:
  - (555) 555-5555
  - 555-555-5555
  - 555 555 5555
  - 5555555555
  - +1 (555) 555-5555

## 🏗️ Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/tahmid-01/Telephone-Number-Validator.git
   ```
2. Open the `index.html` file in your browser.

## ⚙️ Usage
1. Enter a phone number in the input field.
2. Click the "Validate" button.
3. The validator will display whether the number is valid or not.

## 📖 Example
```html
<input type="text" id="phoneNumber" placeholder="Enter US phone number">
<button onclick="validatePhoneNumber()">Validate</button>
<div id="result"></div>
```
```javascript
function validatePhoneNumber() {
  const number = document.getElementById('phoneNumber').value;
  const isValid = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(number);
  document.getElementById('result').textContent = isValid ? 'Valid' : 'Invalid';
}
```

## 📋 Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

## 📄 License
This project is licensed under the MIT License.

## 📬 Contact
- GitHub: [tahmid-01](https://github.com/tahmid-01)
- Email: [tahmidhossain548@gmail.com](mailto:tahmidhossain548@gmail.com)

---
Made with ❤️ by Tahmid

