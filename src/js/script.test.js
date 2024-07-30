// Import the necessary modules for testing
const { JSDOM } = require("jsdom");

// Define the function to be tested
function copyEmail() {
  const email = "scotte@reagan.com";
  navigator.clipboard.writeText(email);
  alert("Email address copied!");
}

// Define the unit tests
describe("copyEmail function", () => {
  test("Copies the email address to the clipboard", async () => {
    // Create a new JSDOM instance
    const { window } = new JSDOM();

    // Replace the global 'navigator' object with a mock object
    const mockNavigator = {
      clipboard: {
        writeText: jest.fn(),
      },
    };
    global.navigator = mockNavigator;

    // Call the function to be tested
    copyEmail();

    // Wait for the asynchronous operation to complete
    await new Promise((resolve) => setTimeout(resolve, 0));

    // Check if the 'writeText' method of the 'clipboard' object was called with the correct email address
    expect(mockNavigator.clipboard.writeText).toHaveBeenCalledWith("scotte@reagan.com");
  });

  test("Displays an alert message", () => {
    // Create a new JSDOM instance
    const { window } = new JSDOM();

    // Replace the global 'alert' function with a mock function
    const mockAlert = jest.fn();
    global.alert = mockAlert;

    // Call the function to be tested
    copyEmail();

    // Check if the 'alert' function was called with the correct message
    expect(mockAlert).toHaveBeenCalledWith("Email address copied!");
  });

  test("Does not throw an error if 'navigator.clipboard' is not available", () => {
    // Create a new JSDOM instance
    const { window } = new JSDOM();

    // Remove the 'navigator.clipboard' object
    delete global.navigator.clipboard;

    // Call the function to be tested
    expect(() => copyEmail()).not.toThrow();
  });

  test("Does not throw an error if 'navigator' is not available", () => {
    // Create a new JSDOM instance
    const { window } = new JSDOM();

    // Remove the 'navigator' object
    delete global.navigator;

    // Call the function to be tested
    expect(() => copyEmail()).not.toThrow();
  });

  test("Does not throw an error if 'alert' is not available", () => {
    // Create a new JSDOM instance
    const { window } = new JSDOM();

    // Remove the 'alert' function
    delete global.alert;

    // Call the function to be tested
    expect(() => copyEmail()).not.toThrow();
  });
});