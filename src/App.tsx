import { Button } from "./components/ui/button";
import TweaqLogo from "./imports/TweaqLogo";

export default function App() {
  return (
    <div className="dark min-h-screen bg-black relative overflow-hidden">
      {/* Advanced Background System */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950"></div>
        
        {/* Animated radial highlights with breathing effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-gradient-radial from-orange-950/40 via-transparent to-transparent blur-3xl" style={{animation: 'pulse-glow 8s ease-in-out infinite'}}></div>
        <div className="absolute bottom-0 right-1/3 w-[600px] h-[600px] bg-gradient-radial from-amber-950/30 via-transparent to-transparent blur-3xl" style={{animation: 'pulse-glow 10s ease-in-out infinite 2s'}}></div>
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-radial from-orange-900/20 via-orange-950/10 to-transparent rounded-full blur-2xl" style={{animation: 'float 20s ease-in-out infinite'}}></div>
        <div className="absolute top-2/3 right-1/4 w-48 h-48 bg-gradient-radial from-amber-900/20 via-amber-950/10 to-transparent rounded-full blur-2xl" style={{animation: 'float-delayed 25s ease-in-out infinite'}}></div>
        <div className="absolute top-1/2 left-2/3 w-56 h-56 bg-gradient-radial from-orange-900/15 via-orange-950/5 to-transparent rounded-full blur-2xl" style={{animation: 'float 30s ease-in-out infinite 5s'}}></div>
        
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIG9wYWNpdHk9IjAuNSI+CjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEiIGZpbGw9IndoaXRlIi8+CjxjaXJjbGUgY3g9IjE1MCIgY3k9IjMwIiByPSIxIiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIGN4PSIxMDAiIGN5PSIxNzAiIHI9IjEiIGZpbGw9IndoaXRlIi8+CjxjaXJjbGUgY3g9IjIwIiBjeT0iMTMwIiByPSIxIiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIGN4PSIxODAiIGN5PSI5MCIgcj0iMSIgZmlsbD0id2hpdGUiLz4KPGNpcmNsZSBjeD0iNzAiIGN5PSIxMTAiIHI9IjEiIGZpbGw9IndoaXRlIi8+CjxjaXJjbGUgY3g9IjEzMCIgY3k9IjE0MCIgcj0iMSIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L3N2Zz4K')] bg-repeat"></div>
        
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="pt-8 pb-8 flex justify-center">
          <div className="relative group">
            {/* Logo glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-600/20 to-amber-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Logo container */}
            <div className="relative w-14 h-14 shadow-2xl">
              <TweaqLogo />
              
              {/* Subtle inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-amber-400/10 rounded-2xl blur-sm"></div>
            </div>
          </div>
        </header>

        {/* Main Content Container */}
        <main className="flex-1 flex items-center justify-center px-8">
          <div className="max-w-xl mx-auto space-y-12">
            
            {/* Featured Quote */}
            <div className="relative group">
              {/* Background glow */}
              <div className="absolute -inset-8 bg-gradient-to-r from-orange-600/5 via-amber-600/5 to-orange-600/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              {/* Quote container */}
              <div className="relative">
                {/* Border gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-800/50 via-zinc-700/30 to-zinc-800/50 rounded-2xl"></div>
                <div className="absolute inset-[1px] bg-gradient-to-b from-zinc-900/90 to-black/90 rounded-2xl"></div>
                
                {/* Content */}
                <blockquote className="relative p-8 backdrop-blur-xl">
                  {/* Quote mark */}
                  <div className="absolute top-6 left-6">
                    <div className="w-8 h-8 text-zinc-500/40">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Quote text */}
                  <p className="text-zinc-100 mb-6 pl-4 pr-2 leading-relaxed">
                    "Does anybody else find that the design QA process is extremely time consuming or is it just me?"
                  </p>
                  
                  {/* Attribution */}
                  <cite className="text-zinc-400 not-italic pl-4">
                    – reddit user on r/UXDesign
                  </cite>
                </blockquote>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="space-y-10">
              <div className="relative">
                <p className="text-zinc-300 leading-loose tracking-wide">
                  We're building a new way for teams to collaborate. With instant in-browser QA and automated code updates, you make edits and push code without ever leaving your site.
                </p>
                <p className="text-zinc-300 mt-4 leading-loose tracking-wide">
                  No more creating tickets to change the font weights, border radius or button colours; just Tweaq.
                </p>
                <p className="text-zinc-400 mt-4 leading-loose">
                  While we're busy building, stay tuned - something exciting is coming soon.
                </p>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center">
                <div className="relative group">
                  {/* Button glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  
                  {/* Button */}
                  <Button 
                    asChild
                    className="relative bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white border-0 px-8 py-6 rounded-xl shadow-2xl shadow-orange-600/25 transition-all duration-300 group-hover:shadow-orange-600/40 group-hover:-translate-y-0.5 backdrop-blur-sm"
                  >
                    <a href="mailto:sam@tweaq.ai?subject=Early%20Access%20Request&body=Hey!%0A%0AI'd%20like%20to%20request%20early%20access%20to%20Tweaq!%0A%0AIf%20you%20have%20a%20moment%2C%20it%20would%20be%20great%20to%20learn%20a%20bit%20about%20you%20(but%20feel%20free%20to%20skip%20anything%20you%20prefer%20not%20to%20share)%3A%0A%0AName%3A%20%0ACompany%2FTeam%3A%20%0ARole%3A%20%0ACurrent%20design%20QA%20challenges%3A%20%0A%0AThanks!">
                      <span className="relative z-10">Request early access</span>
                      
                      {/* Inner highlight */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-xl"></div>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="pb-8">
        </footer>
      </div>
    </div>
  );
}