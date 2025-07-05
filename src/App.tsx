function App() {
  return (
    <div className="bg-[url('src/images/pattern-background-mobile.svg')] lg:bg-[url('src/images/pattern-background-desktop.svg')] bg-no-repeat bg-top bg-contain min-h-screen w-full bg-[#e0e8ff] font-RedHatDisplay flex items-center justify-center py-10 lg:py-0">
      <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-2xl overflow-hidden w-[90%] max-w-md gap-6">
        {/* Hero Image */}
        <img
          src="src/images/illustration-hero.svg"
          alt="illustration-hero"
          className="w-full"
        />

        {/* Card Content */}
        <div className="flex flex-col items-center justify-center gap-6 px-6 pb-8 text-center">
          <h2 className="font-[900] text-2xl text-[hsl(223,47%,23%)]">
            Order Summary
          </h2>
          <p className="text-[hsl(224,23%,55%)] text-sm leading-relaxed">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>

          {/* Plan Row */}
          <div className="flex flex-row items-center justify-between bg-[hsl(225,100%,98%)] py-4 px-5 rounded-xl w-full">
            <div className="flex items-center gap-4">
              <img
                src="src/images/icon-music.svg"
                alt="icon-music"
                className="h-10 w-10"
              />
              <div className="text-left">
                <h3 className="font-[800] text-sm text-[hsl(223,47%,23%)]">
                  Annual Plan
                </h3>
                <h3 className="font-[500] text-sm text-[hsl(224,23%,55%)]">
                  $59.99/year
                </h3>
              </div>
            </div>
            <a
              href="#"
              className="text-[hsl(245,75%,52%)] font-[700] text-sm underline hover:text-[hsl(245,83%,68%)]"
            >
              Change
            </a>
          </div>

          {/* Buttons */}
          <button className="bg-[hsl(245,75%,52%)] hover:bg-[hsl(245,83%,68%)] text-white font-[700] w-full py-3 rounded-xl shadow-lg transition">
            Proceed to Payment
          </button>
          <button className="text-[hsl(224,23%,55%)] font-[700] hover:text-black transition">
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
