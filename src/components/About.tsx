
import { Zap, Palette, Globe, Users, Award, Truck } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Modern Streetwear",
      description: "Desain kontemporer yang menggabungkan tren global dengan sentuhan lokal Nusantara"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Bold Graphics", 
      description: "Grafis yang berani dengan motif dan pattern yang terinspirasi dari budaya Indonesia"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Heritage Value",
      description: "Setiap produk menceritakan kekayaan budaya Nusantara dalam kemasan modern"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Driven",
      description: "Dibangun bersama komunitas streetwear Indonesia yang passionate dan kreatif"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Premium Quality",
      description: "Material berkualitas tinggi untuk kenyamanan dan durabilitas yang maksimal"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Fast Delivery",
      description: "Pengiriman cepat ke seluruh Indonesia dengan packaging yang aman dan menarik"
    }
  ];

  const stats = [
    { number: "1000+", label: "Happy Customers", color: "from-purple-400 to-pink-400" },
    { number: "50+", label: "Unique Designs", color: "from-blue-400 to-cyan-400" },
    { number: "15+", label: "Cities Reached", color: "from-green-400 to-emerald-400" },
    { number: "99%", label: "Satisfaction Rate", color: "from-yellow-400 to-orange-400" }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <span className="text-sm text-purple-300 font-medium">Tentang Kami</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Urban Nusantara Story
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Enhanced Left Content */}
          <div className="order-2 lg:order-1">
            <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
              UrbanUSA (Urban Nusantara) lahir dari visi untuk menciptakan streetwear yang tidak hanya 
              mengikuti tren global, tetapi juga merayakan kekayaan budaya Nusantara.
            </p>

            <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
              Kami percaya bahwa fashion adalah jembatan antara tradisi dan modernitas, 
              menghubungkan generasi muda dengan warisan budaya yang berharga.
            </p>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-800/30 rounded-xl p-4 sm:p-6 border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300 group">
                  <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform`}>
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <button className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-purple-500/30">
              <span className="relative z-10">Pelajari Lebih Lanjut</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>

          {/* Enhanced Features Grid */}
          <div className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-800/20 rounded-xl p-4 sm:p-6 border border-gray-700/30 hover:border-purple-500/30 transition-all duration-500 hover:scale-105 group backdrop-blur-sm"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-8 sm:p-12 border border-purple-500/20 backdrop-blur-sm">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Bergabunglah dengan Komunitas UrbanUSA
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Dapatkan akses ekslusif ke koleksi terbaru, discount member, dan konten behind-the-scenes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
              Join Community
            </button>
            <button className="border border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
              Follow Instagram
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
