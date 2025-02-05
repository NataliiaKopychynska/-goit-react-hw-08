import logo from "../img/logoBoook.png";
function HomePage() {
  return (
    <div className="containerHome">
      <h1>
        Welcome to our app – where your contacts are always at your fingertips!
      </h1>
      <img className="logoHome" src={logo} alt="Logo" />
      <p className="homeParagraph">
        Managing your contacts has never been easier! With our app, you can
        effortlessly store, organize, and access your contacts anytime,
        anywhere. Say goodbye to lost numbers and scattered lists – keep
        everything in one secure and convenient place.
      </p>
    </div>
  );
}

export default HomePage;
