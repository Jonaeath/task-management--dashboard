import { useState } from "react";


const SignIn = () => {

    const [formData, setFormData] = useState({
        email: '',   
        password: '',
    });

    const handleSubmit = () => { }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div>
            <div>
            <div className="signup-form">
                <form onSubmit={handleSubmit}>
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
        </div>
    );
};

export default SignIn;