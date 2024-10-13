import React, {useState}  from "react";

// Create properites for the forum to use
interface FormData {
    username: string;
    email: string;
    message: string;
  }

const ContactBod: React.FC = () => {
    
    // Setting all the forms data to empty 
    const [formData, setFormData] = useState<FormData>({
        username: "",
        email: "",
        message: "",
      });
    
      // Setting the error to empty 
      const [errors, setErrors] = useState({
        email: "",
      });
    
      // Returns true if the patters match and false otherwise (ex: words@words.words is good, words.words@words is bad)
      const validateEmail = (email: string): boolean => {
        // Basic email validation regex
        const emailText = /^[words]+@[words]+\.[words]+$/;
        return emailText.test(email);
      };
    
        // It updates the formData state based on the input field's name and value.
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
    
        // Clear previous email error when typing
        if (name === "email") {
          setErrors({ ...errors, email: "" });
        }
    
        // This updates the formData state with the new value for the corresponding field and the (...) makes sure the other fields aren't affected.
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      // A function to handle form submission when the user clicks the "Submit" button.
      const handleSubmit = (e: React.FormEvent) => {

        // Validate the email field
         // If the email is invalid, an error message is set in the "errors" state.
        if (!validateEmail(formData.email)) {
          setErrors({ ...errors, email: "Please enter a valid email address." });
          return;
        }
    // Handle form submission logic 
        console.log("Form Submitted:", formData);

      };
    
      return (
        <div className="container" style={{paddingBottom: "6%", paddingTop:"5%"}}>
            <form onSubmit={handleSubmit} style={{textAlign:"center"}}>
                <div>
                    <label htmlFor="username">Name:</label>
                    <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    />
                </div>
            
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                </div>
            
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    />
                </div>
            
                <button type="submit">Submit</button>
            </form>
        </div>
      );
    };

export default ContactBod;