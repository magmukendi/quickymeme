/* Nav bar for the meme generator */
import meme from "../../src/meme.png";

function Navbar() {
  return (
    <div className="nav-bar">
      <div className="nav-nav">
        <img alt="meme" src={meme} />
        <h2>Meme Generator</h2>
      </div>
    </div>
  );
}

export default Navbar;
