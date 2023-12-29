import './header.css';

const Header = () => {
    return (
        <div className='container'>
            <nav className="header">
                <div className="header_logo">
                    <h1>Task Manager</h1>
                </div>
                <div className="header_button">
                    <button>Login</button>
                    <button>SignUp</button>
                </div>
            </nav>
        </div>
    );
};

export default Header;