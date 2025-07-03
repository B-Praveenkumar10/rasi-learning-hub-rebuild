
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
              <img
                src="/path-to-your-image/logo.png"
                alt="Rasi Logo"
                className="h-6 w-6"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">RASI INSTITUTIONS</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-gray-600 hover:text-blue-600 transition-colors ${
                location.pathname === '/' ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/dashboard" 
              className={`text-gray-600 hover:text-blue-600 transition-colors ${
                location.pathname === '/dashboard' ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              Dashboard
            </Link>
            <Link 
              to="/admin" 
              className={`text-gray-600 hover:text-blue-600 transition-colors ${
                location.pathname === '/admin' ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              Admin
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" size="sm">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                Register
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`text-gray-600 hover:text-blue-600 transition-colors ${
                  location.pathname === '/' ? 'text-blue-600 font-semibold' : ''
                }`}
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                to="/dashboard" 
                className={`text-gray-600 hover:text-blue-600 transition-colors ${
                  location.pathname === '/dashboard' ? 'text-blue-600 font-semibold' : ''
                }`}
                onClick={toggleMenu}
              >
                Dashboard
              </Link>
              <Link 
                to="/admin" 
                className={`text-gray-600 hover:text-blue-600 transition-colors ${
                  location.pathname === '/admin' ? 'text-blue-600 font-semibold' : ''
                }`}
                onClick={toggleMenu}
              >
                Admin
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Link to="/login" onClick={toggleMenu}>
                  <Button variant="outline" size="sm" className="w-full">
                    Login
                  </Button>
                </Link>
                <Link to="/register" onClick={toggleMenu}>
                  <Button size="sm" className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                    Register
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
