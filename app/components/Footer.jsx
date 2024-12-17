import { FaEnvelope, FaPhone, FaInstagram, FaTwitter, FaWhatsapp, FaFacebook } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white flex h-64 flex-col items-center justify-center p-8">
      <div className="flex space-x-6 mb-4">
        <a href="#" className="hover:text-gray-300">
          <FaEnvelope size={20} />
        </a>
        <a href="tel:+1234567890" className="hover:text-gray-300">
          <FaPhone size={20} />
        </a>
        <a href="#" className="hover:text-gray-300">
          <FaInstagram size={20} />
        </a>
        <a href="#" className="hover:text-gray-300">
          <FaTwitter size={20} />
        </a>
        <a href="https://wa.me/+255717801745" className="hover:text-gray-300">
          <FaWhatsapp size={20} />
        </a>
        <a href="#" className="hover:text-gray-300">
          <FaFacebook size={20} />
        </a>
      </div>
      <p className="text-sm">© {currentYear} Areno Technologies. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
