import Navbar from './Navbar.jsx';

const Layout = ({ children }) => {
    return (
        <div className="w-full min-h-screen flex flex-col">
            <Navbar />
            <div className="w-full">
                {children}
            </div>
        </div>
    );
}

export default Layout;