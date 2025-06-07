
import { ShoppingBag, Heart } from 'lucide-react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Retro Future Hoodie",
      price: "Rp 589.000",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop",
      category: "Hoodie",
      isNew: true
    },
    {
      id: 2,
      name: "Cyber Street Jacket",
      price: "Rp 799.000",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop",
      category: "Jacket",
      isNew: false
    },
    {
      id: 3,
      name: "Urban Graphic Tee",
      price: "Rp 299.000",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop",
      category: "T-Shirt",
      isNew: true
    },
    {
      id: 4,
      name: "Neon Oversized Sweat",
      price: "Rp 459.000",
      image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=600&fit=crop",
      category: "Sweatshirt",
      isNew: false
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Featured Collection
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Koleksi terbaru yang menggabungkan gaya streetwear dengan teknologi masa depan
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                    <Heart size={18} />
                  </button>
                  <button className="w-10 h-10 bg-purple-600/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-purple-600 transition-colors">
                    <ShoppingBag size={18} />
                  </button>
                </div>

                {/* New Badge */}
                {product.isNew && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    NEW
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="text-sm text-purple-400 font-medium mb-2">
                  {product.category}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    {product.price}
                  </span>
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <ShoppingBag size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
