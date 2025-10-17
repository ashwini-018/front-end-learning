// Here’s the logic for reversing a number in Java using the modulus operator:

// Extract the last digit: Use the modulus operator (%) to get the last digit of the number.
// Build the reversed number: Multiply the reversed number by 10 and add the extracted digit.
// Remove the last digit: Use integer division (/) to remove the last digit from the original number.
// Repeat: Continue the process until the original number becomes 0.

// Here’s the implementation:

class ReverseNumber {
    public static void main(String[] args) {
        int number = 12345; // Example number
        int reversed = 0;

        while (number != 0) {
            int digit = number % 10; // Extract the last digit
            reversed = reversed * 10 + digit; // Build the reversed number
            number = number / 10; // Remove the last digit
        }

        System.out.println("Reversed Number: " + reversed);
    }
}

// Explanation:
// Step 1: For number = 12345, digit = 12345 % 10 = 5.
// Step 2: reversed = 0 * 10 + 5 = 5.
// Step 3: number = 12345 / 10 = 1234.
// Repeat until number = 0.

// This logic works for both positive and negative integers. If the input is negative, the reversed number will also be negative.