import React from 'react';
import { MapPin, Phone, Instagram, Clock, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import panCake1 from '../asserts/images/panCake/panCake1.jpeg';
import panCake2 from '../asserts/images/panCake/panCake2.jpeg';
import panCake3 from '../asserts/images/panCake/panCake3.jpeg';
import panCake4 from '../asserts/images/panCake/panCake4.jpeg';
import panCake5 from '../asserts/images/panCake/panCake5.jpeg';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-pink via-primary-blue to-primary-pink bg-clip-text text-transparent">
                The American Pancakes
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 mb-8 font-display italic">
              Flippin' Delicious!
            </p>
            <div className="flex justify-center items-center space-x-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-gray-600 ml-2">Loved by pancake enthusiasts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pancake Gallery */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-center text-gray-800 mb-12">
            Mouthwatering Creations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Pancake Images */}
            <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={panCake1}
                alt="Double chocolate pancakes"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-gray-800 mb-2">Berry Bliss Stack</h3>
                <p className="text-gray-600">Fluffy pancakes topped with fresh berries and maple syrup</p>
              </div>
            </div>

            <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={panCake2} 
                alt="Chocolate chip pancakes"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-gray-800 mb-2">Double Chocolate Heaven</h3>
                <p className="text-gray-600">Rich chocolate pancakes with chocolate chips and cream</p>
              </div>
            </div>

            <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Mini pancakes with toppings"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-gray-800 mb-2">Chocolate Brocolates</h3>
                <p className="text-gray-600">Crushed brownies with dark chocolates</p>
              </div>
            </div>

            <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={panCake3}
                alt="Pancakes with fruit toppings"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-gray-800 mb-2">Dark Chocolate</h3>
                <p className="text-gray-600">Dark chocolate pancakes with tropical flavors</p>
              </div>
            </div>

            <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={panCake4}
                alt="Gourmet pancakes with syrup"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-gray-800 mb-2">Signature Special</h3>
                <p className="text-gray-600">Our chef's special creation with premium toppings</p>
              </div>
            </div>

            <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={panCake5}
                alt="Pancakes with whipped cream"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-gray-800 mb-2">Creamy Dream</h3>
                <p className="text-gray-600">Light and fluffy pancakes with whipped cream and berries(Kitkat, Oreo)</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/menu"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-pink to-primary-blue text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-pink-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              <span>View Full Menu</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-800 mb-6">
                Welcome to Pancake Paradise
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Indulge in our signature American-style pancakes, crafted with love and served with a smile. 
                From fluffy mini pancakes to decadent signature creations, we bring you the finest pancake 
                experience in Kanchipuram.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-primary-pink to-primary-blue p-4 rounded-lg text-white">
                  <h3 className="font-bold text-lg mb-2">Mini Pancakes</h3>
                  <p className="text-sm opacity-90">Perfect bite-sized treats</p>
                </div>
                <div className="bg-gradient-to-r from-primary-blue to-primary-pink p-4 rounded-lg text-white">
                  <h3 className="font-bold text-lg mb-2">Signature Pancakes</h3>
                  <p className="text-sm opacity-90">Our chef's special creations</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-secondary-lightPink to-secondary-lightBlue p-8 rounded-2xl">
              <h3 className="text-2xl font-display font-bold text-gray-800 mb-6 text-center">
                Why Choose Us?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary-pink rounded-full"></div>
                  <span className="text-gray-700">Fresh ingredients daily</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary-blue rounded-full"></div>
                  <span className="text-gray-700">Made-to-order perfection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary-pink rounded-full"></div>
                  <span className="text-gray-700">Cozy family atmosphere</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary-blue rounded-full"></div>
                  <span className="text-gray-700">Instagram-worthy presentations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-center text-gray-800 mb-12">
            Visit Us Today
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Location Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-pink to-primary-blue rounded-full mb-4 mx-auto">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold text-center text-gray-800 mb-3">
                Our Location
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Opposite to Karthikeyan Theatre<br />
                Kanchipuram - 631502<br />
                Tamil Nadu, India
              </p>
            </div>

            {/* Contact Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-blue to-primary-pink rounded-full mb-4 mx-auto">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold text-center text-gray-800 mb-3">
                Contact Us
              </h3>
              <div className="text-center">
                <p className="text-gray-600 mb-2">Speak with Vijay</p>
                <a 
                  href="tel:9944680618" 
                  className="text-primary-blue hover:text-primary-pink font-semibold text-lg transition-colors duration-200"
                >
                  9944680618
                </a>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-pink to-primary-blue rounded-full mb-4 mx-auto">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold text-center text-gray-800 mb-3">
                Opening Hours
              </h3>
              <div className="text-center text-gray-600 space-y-1">
                <p>Monday - Sunday</p>
                <p className="font-semibold text-primary-blue">5:00 PM - 10:30 PM</p>
                <p className="text-sm text-gray-500">Always fresh, always delicious!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-pink to-primary-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Instagram className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Follow Our Pancake Journey
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get inspired by our latest creations and behind-the-scenes moments
          </p>
          <a 
            href="https://www.instagram.com/_the_american_pancakes_?igsh=em9jZzExZHlxeDRr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white text-primary-pink hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200"
          >
            <Instagram size={24} />
            <span>@_the_american_pancakes_</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;