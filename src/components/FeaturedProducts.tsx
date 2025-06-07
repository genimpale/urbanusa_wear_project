
import { ShoppingBag, Heart, Eye } from 'lucide-react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Heritage Hoodie",
      price: "Rp 589.000",
      originalPrice: "Rp 699.000",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop",
      category: "Hoodie",
      isNew: true,
      discount: "15%"
    },
    {
      id: 2,
      name: "Nusantara Bomber",
      price: "Rp 799.000",
      originalPrice: "Rp 999.000",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop",
      category: "Jacket",
      isNew: false,
      discount: "20%"
    },
    {
      id: 3,
      name: "Urban Culture Tee",
      price: "Rp 299.000",
      originalPrice: "Rp 349.000",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop",
      category: "T-Shirt",
      isNew: true,
      discount: "14%"
    },
    {
      id: 4,
      name: "Modern Heritage Sweat",
      price: "Rp 459.000",
      originalPrice: "Rp 529.000",
      image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=600&fit=crop",
      category: "Sweatshirt",
      isNew: false,
      discount: "13%"
    }
  ];

  return (
    <section id="products" className="py-16 sm:py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <span className="text-sm text-purple-300 font-medium">Koleksi Terbaru</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Featured Collection
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Temukan koleksi streetwear terbaik yang memadukan gaya modern dengan heritage Nusantara
          </p>
        </div>

        {/* Enhanced Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-gray-800/30 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              {/* Enhanced Product Image */}
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Enhanced Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Enhanced Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                  <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 hover:scale-110">
                    <Heart size={16} />
                  </button>
                  <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 hover:scale-110">
                    <Eye size={16} />
                  </button>
                </div>

                {/* Enhanced Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      NEW
                    </span>
                  )}
                  {product.discount && (
                    <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      -{product.discount}
                    </span>
                  )}
                </div>

                {/* Quick Add Button */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg font-medium hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2">
                    <ShoppingBag size={16} />
                    Quick Add
                  </button>
                </div>
              </div>

              {/* Enhanced Product Info */}
              <div className="p-4 sm:p-6">
                <div className="text-sm text-purple-400 font-medium mb-2">
                  {product.category}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                  <button className="text-gray-400 hover:text-purple-400 transition-colors p-2 hover:scale-110 transition-transform">
                    <ShoppingBag size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced View All Button */}
        <div className="text-center mt-12 sm:mt-16">
          <button className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-purple-500/30">
            <span className="relative z-10">Lihat Semua Produk</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
