
import { Zap, Palette, Globe } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Futuristic Design",
      description: "Desain yang menggabungkan elemen masa depan dengan sentuhan streetwear kontemporer"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Bold Graphics",
      description: "Grafis yang berani dan eye-catching yang mencerminkan budaya urban masa kini"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Culture",
      description: "Inspirasi dari berbagai budaya streetwear global dengan sentuhan lokal Indonesia"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                About UrbanUSA
              </span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              UrbanUSA lahir dari visi untuk menciptakan streetwear yang tidak hanya mengikuti tren, 
              tetapi menjadi pionir dalam menggabungkan elemen retro dan futuristik. Kami percaya bahwa 
              fashion adalah bentuk ekspresi diri yang paling autentik.
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Setiap produk kami dirancang dengan detail yang cermat, menggunakan material berkualitas tinggi 
              dan teknologi printing terdepan untuk menghadirkan desain yang bold dan tahan lama.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                <div className="text-2xl font-bold text-purple-400 mb-1">500+</div>
                <div className="text-sm text-gray-400">Happy Customers</div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                <div className="text-2xl font-bold text-cyan-400 mb-1">50+</div>
                <div className="text-sm text-gray-400">Unique Designs</div>
              </div>
            </div>

            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
              Learn Our Story
            </button>
          </div>

          {/* Right Content - Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
