document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('user-input');
    const checkBtn = document.getElementById('check-btn');
    const clearBtn = document.getElementById('clear-btn');
    const resultsDiv = document.getElementById('results-div');

    // Function to validate US phone number
    function validatePhoneNumber(number) {
        // Remove all whitespace from the number
        const cleanNumber = number.replace(/\s+/g, '');
        
        // Regular expression for valid US phone numbers
        const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
        
        // Test if the number matches the pattern
        if (!phoneRegex.test(number)) {
            return false;
        }

        // If country code is present, ensure it's 1
        if (number.startsWith('1') || number.startsWith('1 ') || number.startsWith('1(')) {
            return true;
        } else if (number.match(/^\d/) && number[0] !== '1') {
            // If number starts with a digit that's not 1, it should not have a country code
            return true;
        }

        return true;
    }

    // Event listener for check button
    checkBtn.addEventListener('click', () => {
        const number = userInput.value.trim();
        
        if (!number) {
            alert('Please provide a phone number');
            return;
        }

        const isValid = validatePhoneNumber(number);
        resultsDiv.textContent = `${isValid ? 'Valid' : 'Invalid'} US number: ${number}`;
        resultsDiv.style.color = isValid ? '#28a745' : '#dc3545';
    });

    // Event listener for clear button
    clearBtn.addEventListener('click', () => {
        resultsDiv.textContent = '';
        userInput.value = '';
    });

    // Event listener for Enter key
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkBtn.click();
        }
    });
}); 