import create from 'zustand';

const validateEmail = (email) => {
  // Simple email validation regex
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailPattern.test(email);
};

const validatePassword = (password) => {
  // Password must be at least 6 characters long
  return password.length >= 6;
};

const validateUsername = (username) => {
  // Username should not be empty
  return username.trim() !== '';
};

export const useFormStore = create((set) => ({
  formData: {
    email: '',
    password: '',
    username: '',
  },
  errors: {
    email: '',
    password: '',
    username: '',
  },
  setFormData: (data) => set((state) => {
    const newFormData = { ...state.formData, ...data };
    const newErrors = { ...state.errors };

    // Validation logic
    if (data.email !== undefined) {
      newErrors.email = validateEmail(data.email) ? '' : 'Please enter a valid email address.';
    }
    if (data.password !== undefined) {
      newErrors.password = validatePassword(data.password) ? '' : 'Password must be at least 6 characters long.';
    }
    if (data.username !== undefined) {
      newErrors.username = validateUsername(data.username) ? '' : 'Username cannot be empty.';
    }

    return {
      formData: newFormData,
      errors: newErrors,
    };
  }),
  resetForm: () => set(() => ({
    formData: {
      email: '',
      password: '',
      username: '',
    },
    errors: {
      email: '',
      password: '',
      username: '',
    },
  })),
}));

