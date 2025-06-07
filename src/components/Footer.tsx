import { Instagram, Twitter, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Instagram size={20} />, href: '#', name: 'Instagram' },
    { icon: <Twitter size={20} />, href: '#', name: 'Twitter' },
    { icon: <Facebook size={20} />, href: '#', name: 'Facebook' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'Collection', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Size Guide', href: '#' },
    { name: 'Shipping', href: '#' },
    { name: 'Returns', href: '#' },
  ];

  const categories = [
    { name: 'Hoodies', href: '#' },
    { name: 'T-Shirts', href: '#' },
    { name: 'Jackets', href: '#' },
    { name: 'Sweatshirts', href: '#' },
    { name: 'Accessories', href: '#' },
    { name: 'New Arrivals', href: '#' },
  ];

  return (
    <footer id="contact" className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              URBANUSA
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Streetwear brand yang menggabungkan tren modern dengan kearifan budaya Nusantara 
              untuk menciptakan fashion statement yang autentik dan bermakna.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Categories</h4>
            <ul className="space-y-3">
              {categories.map((category, index) => (
                <li key={index}>
                  <a
                    href={category.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  Jl. Streetwear No. 123<br />
                  Jakarta Selatan, 12345<br />
                  Indonesia
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-purple-400 flex-shrink-0" />
                <p className="text-gray-400 text-sm">+62 812-3456-7890</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-purple-400 flex-shrink-0" />
                <p className="text-gray-400 text-sm">hello@urbanusa.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-xl font-semibold text-white mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-6">
              Dapatkan info terbaru tentang koleksi dan promo eksklusif UrbanUSA
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
              />
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 UrbanUSA (Urban Nusantara). All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
