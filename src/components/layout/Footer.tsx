const Footer = () => {
  return (
    <footer className="dark:bg-gray-900 bg-white transition-colors duration-300 p-4 rounded text-center">
      <p className="dark:text-white text-gray-700 transition-colors duration-300">
        &copy; {new Date().getFullYear()} Real-Time Control Panel App.
      </p>
    </footer>
  );
};

export default Footer;
