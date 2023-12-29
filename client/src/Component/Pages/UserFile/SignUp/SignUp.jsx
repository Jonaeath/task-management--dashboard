import { useState } from "react";
import './style.css';

const SignUp = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        city: '',
        password: '',
    });

    const handleSubmit = () => { }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div>
            <div className="signup-form">
                <form onSubmit={handleSubmit}>
                    <div className="step">
                        <h2>Name</h2>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            placeholder="Name"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="step">
                    <h2>Email</h2>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            placeholder="Email"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="step">
                    <h2>City</h2>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            placeholder="City"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="step">
                    <h2>Password</h2>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            placeholder="Password"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="button-div">
                    <button type="submit">
                            Submit                    
                    </button>
                    </div>
                </form>
            </div >
        </div >
    );
};

export default SignUp;