// Function for Order buttons on menu.html
function orderCoffee(coffeeName) {
  window.alert("Your order for " + coffeeName + " has been confirmed!");
  console.log("Order confirmed: " + coffeeName);
}

// Function for Contact Form on contact.html
function submitForm(event) {
  event.preventDefault(); // Prevents the page from refreshing

  const userName = document.getElementById("name").value;
  const userEmail = document.getElementById("email").value;
  const userMessage = document.getElementById("message").value;

  window.alert("Thank you, " + userName + "! Your message has been sent to Vibe & Vanilla.");
  console.log("Contact form submitted:", {
    name: userName,
    email: userEmail,
    message: userMessage
  });

  event.target.reset(); // Clears the form fields after submission
}