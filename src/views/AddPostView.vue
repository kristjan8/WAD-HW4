<template>
  <div class="add-post">
    <HeaderCompo class="header"></HeaderCompo>
    <div class="add-post-content">
      <!-- Left Sidebar -->
      <SidebarCompo class="left-sidebar"></SidebarCompo>

      <!-- Add Post Form -->
      <div class="add-post-form">
        <h2>Add Post</h2>
        <form @submit.prevent="submitPost">
          <div class="form-group">
            <label for="body">Body:</label>
            <input
              type="text"
              id="body"
              v-model="body"
              placeholder="Enter post content"
              required
            />
            <p v-if="bodyError" class="error">{{ bodyError }}</p>
          </div>

          <div class="form-actions">
            <button type="submit" class="add-button" :disabled="!isFormValid">Add</button>
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
  name: 'AddPostPage',
  components: {
    HeaderCompo,
    FooterCompo,
    SidebarCompo
  },
  data() {
    return {
      body: '',
      bodyError: ''
    };
  },
  computed: {
    // Ensure the form can only be submitted if the field is valid
    isFormValid() {
      return this.bodyError === '';
    }
  },
  methods: {
    // Handle form submission
    submitPost() {
      this.validateBody();

      if (this.isFormValid) {
        alert('Post added successfully!');
        // Call API to add the post here
        // Example:
        // axios.post('/api/posts', { body: this.body })
        //   .then(() => this.$router.push('/home'));
      } else {
        alert('Please correct the errors before adding the post.');
      }
    },
    // Validate the post body
    validateBody() {
      if (!this.body) {
        this.bodyError = 'Post body is required.';
      } else if (this.body.length < 5) {
        this.bodyError = 'Post body must be at least 5 characters long.';
      } else {
        this.bodyError = '';
      }
    }
  },
  watch: {
    body() {
      this.validateBody();
    }
  }
};
</script>

<style scoped>
.add-post {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.add-post-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.add-post-form {
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

.add-button {
  background-color: #4CAF50;
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

.footer, .left-sidebar, .right-sidebar {
  background: gray;
  margin: 10px;
  border-radius: 10px;
  padding: 20px;
}

.left-sidebar, .right-sidebar {
  flex: 1;
  height: 92%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

@media all and (min-width: 600px) {
  .left-sidebar, .right-sidebar {
    flex: 1 0 0;
  }
}

@media all and (min-width: 800px) {
  .signup-content {
    flex: 3 0px;
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
