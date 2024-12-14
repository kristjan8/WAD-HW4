<template>
  <div class="login">
    <HeaderCompo class="header"></HeaderCompo>
    <div class="login-content">
    <!-- Left Sidebar -->
      <SidebarCompo class="left-sidebar"></SidebarCompo>

      <!-- Login Form -->
      <div class="login-form">
        <h2>Login</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="Enter your email"
              required
            />
            <p v-if="emailError" class="error">{{ emailError }}</p>
          </div>
          
          <div class="form-group">
            <label for="password">Password:</label>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Enter your password"
              required
            />
            <p v-if="passwordError" class="error">{{ passwordError }}</p>
          </div>

          <div class="form-actions">
            <button type="submit" class="login-button" :disabled="!isFormValid">Login</button>
            <span>Or</span>
            <button type="button" class="signup-button" @click="goToSignup">Signup</button>
          </div>
        </form>
      </div>
        <!-- Right Sidebar -->
      <SidebarCompo class="right-sidebar"></SidebarCompo>
    </div>
    <FooterCompo class="footer"></FooterCompo>
  </div>
</template>
<script>
import HeaderCompo from '@/components/HeaderCompo.vue';
import FooterCompo from '@/components/FooterCompo.vue';
import SidebarCompo from '@/components/SidebarCompo.vue';

export default {
  name: 'LoginPage',
  components: {
    HeaderCompo,
    FooterCompo,
    SidebarCompo
  },
  data() {
    return {
      email: '',
      password: '',
      emailError: '',
      passwordError: ''
    };
  },
  computed: {
    // Ensure the form can only be submitted if both fields are valid
    isFormValid() {
      return this.emailError === '' && this.passwordError === '';
    }
  },
  methods: {
    // Handle form submission
    submitForm() {
      this.validateEmail();
      this.validatePassword();

      if (this.isFormValid) {
        alert('Login successful!');
        // Handle login logic, e.g., call API for authentication.
      } else {
        alert('Please correct the errors before logging in.');
      }
    },
    // Validate the email
    validateEmail() {
      const email = this.email;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email) {
        this.emailError = 'Email is required.';
      } else if (!emailRegex.test(email)) {
        this.emailError = 'Please enter a valid email address.';
      } else {
        this.emailError = '';
      }
    },
    // Validate the password
    validatePassword() {
      if (!this.password) {
        this.passwordError = 'Password is required.';
      } else {
        this.passwordError = '';
      }
    },
    // Redirect to the Signup page
    goToSignup() {
      this.$router.push('/signup'); // Change '/signup' to the actual route of your signup page.
    }
  },
  watch: {
    email() {
      this.validateEmail();
    },
    password() {
      this.validatePassword();
    }
  }
};
</script>
<style scoped>
.login {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.login-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.login-form {
  padding: 20px;
  background-color: #f0f4f8;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  text-align: center;
}

h2 {
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

label {
  font-weight: bold;
  display: block;
}

input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  font-size: 14px;
  margin: 10px 5px;
}

.login-button {
  background-color: #4CAF50;
}

.signup-button {
  background-color: #2196F3;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.error {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}

.form-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
/* Styling for footer and sidebars */
.footer, .left-sidebar, .right-sidebar {
  background: gray;
  margin: 10px;
  border-radius: 10px;
  padding: 20px;
}

/* Adjust layout for sidebars to fill the entire height */
.left-sidebar, .right-sidebar {
  flex: 1; /* Makes both sidebars take equal width */
  height: 92%; /* Ensures they take the full height of the viewport */
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Align children to the top */
}
/* Adjust the layout for small screens */
@media all and (min-width: 600px) {
  .left-sidebar, .right-sidebar {
    flex: 1 0 0; /* These will take up equal width on larger screens */
  }
}

/* Adjust layout for medium screens and up */
@media all and (min-width: 800px) {
  .signup-content {
    flex: 3 0px; /* The content area will take up more space */
  }

  .left-sidebar {
    order: 0;
  }

  .signup-content {
    order: 2;
  }

  .right-sidebar {
    order: 3;
  }

  .footer {
    order: 4;
  }
}
</style>
