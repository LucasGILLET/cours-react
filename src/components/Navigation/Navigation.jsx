export default function Navigation() {
    return (
      <header>
        <nav>
          <ol>
            <li>
              <a style={{ color: "red"}} href="/">Home</a>
            </li>
            <li>
              <a href="/details" style={{ color: "red"}}>Détails non fonctionnel</a>
            </li>
            <li>
              <a href="/details/1" style={{ color: "red"}}>Détails fonctionnel</a>
            </li>
            <li>
              <a href="/mentionslegales" style={{ color: "red"}}>Mentions Légales</a>
            </li>
          </ol>
        </nav>
      </header>
    );
  }