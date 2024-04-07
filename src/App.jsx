import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();
  return (
    <div className="w-2/3 mx-auto space-y-10 text-black mt-10">
      {!isAuthenticated && (
        <button
          className="px-5 py-3 bg-blue-700 text-white mt-10"
          onClick={() => loginWithRedirect()}
        >
          Login
        </button>
      )}
      {isAuthenticated && (
        <div>
          <div className="w-32 h-32 relative rounded-full">
            <img
              src={user.picture}
              alt=""
              className="w-full h-full object-cover absolute rounded-full"
            />
          </div>
          <h3>{user.email}</h3>
          <h3>{user.name}</h3>
          <h3>{user.family_name}</h3>

          <button
            className="px-5 py-3 bg-red-700 text-white mt-10"
            onClick={() => logout()}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
