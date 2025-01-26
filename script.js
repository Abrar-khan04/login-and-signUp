const signUpForm = document.getElementById('signupForm');
const signInForm = document.getElementById('signinForm');

const API_BASE_URL = 'http://localhost:5000/auth'; // Update with your backend URL if different

// Handle Google OAuth Login
async function handleLogin() {
  try {
    account.createOAuth2Session(
      'google',
      'http://localhost:5500',
      'http://localhost:5500/fail'
    );
  } catch (error) {
    console.error('Error during Google OAuth login:', error);
    alert('Something went wrong with Google Login. Please try again.');
  }
}

// Handle Sign-Up
signUpForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(signUpForm);
  const data = {
    name: formData.get('txt'),
    email: formData.get('email'),
    phoneNumber: formData.get('number'),
    password: formData.get('psw'),
  };

  try {
    const response = await fetch(`${API_BASE_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (response.ok) {
      alert('Registration successful! You can now log in.');
    } else {
      alert(`Error: ${result.message}`);
    }
  } catch (err) {
    console.error('Error during sign-up:', err);
    alert('Something went wrong during sign-up. Please try again.');
  }
});

// Handle Sign-In
signInForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(signInForm);
  const data = {
    email: formData.get('email'),
    password: formData.get('psw'),
  };

  try {
    const response = await fetch(`${API_BASE_URL}/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (response.ok) {
      alert('Login successful!');
      console.log('User:', result.user);
      console.log('Token:', result.token);
    } else {
      alert(`Error: ${result.message}`);
    }
  } catch (err) {
    console.error('Error during sign-in:', err);
    alert('Something went wrong during sign-in. Please try again.');
  }
});
const sdk = new Appwrite();
sdk
  .setEndpoint('http://localhost:5500') // Replace with your Appwrite endpoint
  .setProject('http://6307337585005g59bugs2b8eitcau34tithpeovu3gb0.apps.googleusercontent.com');    // Replace with your project ID

const account = new sdk.Account();
