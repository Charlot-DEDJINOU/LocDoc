// src/components/Header.tsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { User, Bell, Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png';

type NavItem = {
  name: string;
  to: string;
};

const navItemsLoggedOut: NavItem[] = [
  { name: 'Accueil', to: '/' },
  { name: 'Trouver un médecin', to: '/find' },
  { name: 'Contactez-nous', to: '/contact' },
];

const navItemsLoggedIn: NavItem[] = [
  ...navItemsLoggedOut,
  { name: 'Ajouter mon compte médecin', to: '/add-account' },
];

const Header: React.FC = () => {
  // simulate login state
  const [isLoggedIn] = useState<boolean>(false);
  const notificationsCount = 3; // statique pour la démo
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const navItems = isLoggedIn ? navItemsLoggedIn : navItemsLoggedOut;

  return (
    <header className="bg-primary shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="LocDoc" className="h-8 w-auto" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex bg-white rounded-full px-5 py-2 shadow-sm space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              end
              className={({ isActive }) =>
                `text-sm px-2 ${
                  isActive
                    ? 'font-semibold text-gray-900'
                    : 'text-gray-500 hover:text-gray-700'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* User / Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-1 text-gray-700">
            <User className="w-5 h-5" />
            {isLoggedIn ? (
              <span className="text-sm font-medium">Jean S.</span>
            ) : (
              <NavLink to="/login" className="text-sm font-medium hover:underline">
                Se connecter
              </NavLink>
            )}
          </div>

          {isLoggedIn && (
            <button className="relative p-2">
              <Bell className="w-5 h-5 text-gray-700 hover:text-gray-900" />
              <span
                className="
                  absolute -top-1 -right-1 h-4 w-4
                  bg-yellow-400 text-gray-800
                  border-2 border-white
                  rounded-full
                  text-xs flex items-center justify-center
                "
              >
                {notificationsCount}
              </span>
            </button>
          )}

          <NavLink
            to={isLoggedIn ? '/' : '/register'}
            className="
              bg-gradient-to-r from-purple-500 to-blue-400
              text-white text-sm font-medium
              px-4 py-2 rounded-full
              hover:opacity-90 transition
            "
          >
            {isLoggedIn ? 'Se déconnecter' : "S'inscrire"}
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col space-y-1 px-4 py-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.to}
                  end
                  className={({ isActive }) =>
                    `block text-base py-2 px-3 rounded-md ${
                      isActive
                        ? 'bg-gray-100 font-semibold text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                    }`
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

            <li className="border-t border-gray-100 mt-2 pt-2">
              <NavLink
                to={isLoggedIn ? '/logout' : '/signup'}
                className="block text-base py-2 px-3 rounded-md text-white bg-gradient-to-r from-purple-500 to-blue-400 text-center"
                onClick={() => setMobileOpen(false)}
              >
                {isLoggedIn ? 'Se déconnecter' : "S'inscrire"}
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;