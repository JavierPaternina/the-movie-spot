import { useSubmit } from "@remix-run/react";
import { useState } from "react";

export const useFormAuth = () => {
    const iniData = {
        email: '',  
        password: '',
        repeatPassword: ''
    };
    const submit = useSubmit()
    // Initialize form data state to handle input values
    const [formData, setFormData] = useState(iniData);

    // Initialize errors state to handle form validation errors
    // This can be expanded based on the specific validation needs
    const [errors, setErrors] = useState(iniData);
   
    // Function to update form data and validate inputs
    // This function updates the form data state and performs basic validation
    const onUpdateFormData = (key: string, value: string) => {
        setFormData((prevData) => ({
            ...prevData,
            [key]: value
        }));
        if (key === 'email') {
            if (!validateEmail(value)) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    email: 'Please enter a valid email address'
                }));
            } else {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    email: ''
                }));
            }
        }

        if (key === 'password') {
            if (!value || value.length < 6) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    password: 'Password must be at least 6 characters long'
                }));
            } else {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    password: ''
                }));
            }
        }

        if (key === 'repeatPassword') {
            if (!value || value !== formData.password) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    repeatPassword: 'Passwords do not match'
                }));
            } else {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    repeatPassword: ''
                }));
            }
        }
    };

    // Function to handle form submission
    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        submit(formData, {
            method: 'post',
            action: formData.repeatPassword ? '/register' : '/login',
            encType: 'application/x-www-form-urlencoded'
        });
        // Here you can handle form submission logic, such as validation or API calls

    };
    // Return the form data, update function, errors, and submit function
    // This allows components to access and manipulate the form state
    return {
        formData,
        onUpdateFormData,
        errors,
        setErrors,
        onSubmit
    };
};

// Function to validate email format
// This function checks if the email is in a valid format using a regular expression
const validateEmail = (value: string): boolean => {
    if (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
       return false
    } else {
        return true;
    }
}
