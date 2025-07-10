const Logo = ({ ...props }) => (
  <img
    src="/meleoy-logo.svg" // or '/meleoy-logo.jpeg' if it's a JPEG
    alt="Meleoy Logo"
    width="100%"
    height="auto"
    style={{ maxWidth: '48px', height: 'auto' }} // Optional: controls size
    {...props}
  />
);

export default Logo;
