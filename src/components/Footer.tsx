import React from 'react'
import { Mail, Twitter, GitHub, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-4">Product</h4>
          <ul className="text-gray-400">
            <li><a href="#">Features</a></li>
            <li><a href="#">Integrations</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Changelog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="text-gray-400">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
          <p className="text-gray-400 mb-2">Subscribe to our newsletter for the latest news and updates.</p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-background border border-gray-700 rounded-md px-4 py-2 w-full focus:outline-none focus:border-primary"
            />
            <button className="bg-primary hover:bg-blue-700 px-4 py-2 rounded-md ml-2 transition-all duration-300">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="mt-8 flex items-center justify-between">
        <p className="text-gray-400">© 2024 AI Chat App. All rights reserved.</p>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-primary transition-all duration-300"><Mail className="h-5 w-5" /></a>
          <a href="#" className="text-gray-400 hover:text-primary transition-all duration-300"><Twitter className="h-5 w-5" /></a>
          <a href="#" className="text-gray-400 hover:text-primary transition-all duration-300"><GitHub className="h-5 w-5" /></a>
          <a href="#" className="text-gray-400 hover:text-primary transition-all duration-300"><Linkedin className="h-5 w-5" /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
