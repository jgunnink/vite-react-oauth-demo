import reactLogo from "./assets/react.svg";
import "./App.css";
import { auth, signInWithGoogle } from "./GoogleProvider";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <div className="card">
        {user && <h2>Welcome {user.displayName}</h2>}
        {error && <h2>Error: {String(error)}</h2>}
        {loading && <h2>Loading...</h2>}
        {!user && !loading && !error && (
          <>
            <h2>Login</h2>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
