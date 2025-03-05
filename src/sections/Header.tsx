export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="#">Juan Miguel</a>
      </div>
      <nav className="nav-bar">
        <li>
          <a href="#home" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#aboutMe">About Me</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
      </nav>
    </header>
  );
};
