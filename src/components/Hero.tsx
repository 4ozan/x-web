export function Hero ()  {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[70vh] text-white overflow-hidden pt-12">
      <h1 className="font-twitter-chirp text-5xl md:text-6xl font-bold text-center mb-4">Where Millisecond<br/>Means Revenue</h1>
      <p className="font-twitter-chirp text-base max-w-xl mb-8 opacity-80 text-center font-normal">
        DELIVER FAST DIGITAL EXPERIENCES BY OPTIMIZING HOW YOUR DATA MOVES ACROSS THE WEB.
      </p>
      {/* Glowing vertical light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-16 h-72 bg-violet-400 opacity-60 blur-2xl rounded-full z-0"></div>
      <div className="relative z-10 flex flex-row gap-24 mt-8">
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold">99%</span>
          <span className="text-xs mt-2 opacity-70">LOWER LATENCY</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold">12T+</span>
          <span className="text-xs mt-2 opacity-70">REQUESTS ROUTED</span>
        </div>
      </div>
    </div>
  )
}


