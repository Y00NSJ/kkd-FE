const PreLoginScreen = ({onLogin}) => (
    <main className="relative flex flex-col items-center justify-center min-h-screen px-4">
    <h1 className="text-5xl font-bold text-white mb-12 text-center animate-pulse">
      Create Your Dream World
    </h1>
    <div className="flex flex-col gap-6 items-center">
      <button className="bg-black/50 hover:bg-custom text-white px-12 py-4 rounded-full text-xl font-bold transition-all transform hover:scale-105 hover:shadow-lg !rounded-button">
        <span>Sign Up
          <div className="aurora">
            <div className="aurora__item"></div>
            <div className="aurora__item"></div>
            <div className="aurora__item"></div>
            <div className="aurora__item"></div>
          </div>
        </span>
      </button>
    </div>
    <div className="flex flex-col gap-6 items-center">
      <button className="hover:shadow-lg px-12 py-4 hover:scale-105 transition-all login-button">
        <span>Login</span>
      </button>
    </div>
  </main>
);

export default PreLoginScreen;