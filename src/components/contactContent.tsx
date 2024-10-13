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
        username: "",
        email: "",
        message: "",
      });
    
      // Returns true if the patters match and false otherwise (ex: words@words.words is good, words.words@words is bad)
      const validateEmail = (email: string): boolean => {
        // Basic email validation regex
        const emailText = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailText.test(email);
      };
    
        // It updates the formData state based on the input field's name and value.
      const handleChange = (T: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = T.target;
        // This updates the formData state with the new value for the corresponding field and the (...) makes sure the other fields aren't affected.
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleCursor = (T: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = T.target
            // Validate username field
        if (name === "username" && value.trim() === "") {
                setErrors((error) => ({ ...error, username: "Username is required." }));
            } else if (name === "username") {
                setErrors((error) => ({ ...error, username: "" }));
        }
    
      // Validate email field
        if (name === "email" ) {
            if (value.trim() === "") {
            setErrors((error) => ({ ...error, email: "Email is required." }));
            } else if (!validateEmail(value)) {
            setErrors((error) => ({ ...error, email: "Please enter a valid email address." }));
            } else {
            setErrors((error) => ({ ...error, email: "" }));
            }
        }
  
      // Validate message field
        if (name === "message" && value.trim() === "") {
            setErrors((error) => ({ ...error, message: "Message is required." }));
            } else if (name === "message") {
                setErrors((error) => ({ ...error, message: "" }));
            }
        }

      // A function to handle form submission when the user clicks the "Submit" button.
      const handleSubmit = () => {

        // Validate the email field
         // If the email is invalid, an error message is set in the "errors" state.
        if (!validateEmail(formData.email)) {
          setErrors({ ...errors, email: "Invalid" });
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
                    onBlur={handleCursor}
                    required
                    />
                    {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
                </div>
            
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleCursor}
                    required
                    />
                    {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                </div>
            
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleCursor}
                    required
                    />
                    {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
                </div>
            
                <button type="submit">Submit</button>
            </form>
        </div>
      );
    };

export default ContactBod;