
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a78bfa' fill-opacity='0.15'%3E%3Ccircle cx='40' cy='40' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
      
      {/* Floating animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-yellow-400/15 to-orange-400/15 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Main Heading with improved animations */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 leading-tight">
            <span className="block bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-fade-in">
              URBAN
            </span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent animate-fade-in delay-200">
              NUSANTARA
            </span>
          </h1>
          
          {/* Modern badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-300/30 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm text-purple-200 font-medium">Indonesian Streetwear</span>
          </div>
        </div>

        {/* Enhanced Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 font-light tracking-wide max-w-3xl mx-auto animate-fade-in delay-300">
          Streetwear • Modern • Heritage
        </p>

        {/* Improved Description */}
        <p className="text-base sm:text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-400">
          Hadirkan gaya streetwear yang memadukan desain modern dengan kearifan budaya Nusantara. 
          Ekspresikan identitas urban Indonesia yang autentik.
        </p>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in delay-500">
          <button className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 shadow-xl hover:shadow-purple-500/30 hover:scale-105">
            <span className="relative z-10 flex items-center gap-2">
              Jelajahi Koleksi
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          
          <button className="group border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:border-white/50">
            <span className="group-hover:scale-105 transition-transform inline-block">Tentang Kami</span>
          </button>
        </div>

        {/* Enhanced stats section */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto animate-fade-in delay-600">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">1K+</div>
            <div className="text-xs sm:text-sm text-gray-400">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">50+</div>
            <div className="text-xs sm:text-sm text-gray-400">Unique Designs</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">24/7</div>
            <div className="text-xs sm:text-sm text-gray-400">Fast Support</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
