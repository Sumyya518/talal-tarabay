import { Button } from "@/components/ui/button";
import { Heart, Phone, MapPin, Mail, Clock, Shield, Truck, Lock, Headphones, ChevronRight, Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const toggleFavorite = (id: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const featuredCars = [
    {
      id: 1,
      name: "2021 BENTLEY BENTAYGA",
      mileage: "29,000 KM",
      price: "QAR 745,000",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663673077023/3HDpx7kWg292sNSePJSRYV/featured-car-bentley-GvjzWV33Nr7dUQmLWwZ4bQ.webp",
    },
    {
      id: 2,
      name: "2022 LAMBORGHINI URUS",
      mileage: "19,500 KM",
      price: "QAR 920,000",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663673077023/3HDpx7kWg292sNSePJSRYV/featured-car-lamborghini-MdaxQ7VWLjtrHWNRdSp9pd.webp",
    },
    {
      id: 3,
      name: "2021 BENTLEY MULSANNE",
      mileage: "21,000 KM",
      price: "QAR 1,350,000",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663673077023/3HDpx7kWg292sNSePJSRYV/featured-car-bentley-GvjzWV33Nr7dUQmLWwZ4bQ.webp",
    },
    {
      id: 4,
      name: "2023 LAMBORGHINI HURACÁN",
      mileage: "8,300 KM",
      price: "QAR 1,100,000",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663673077023/3HDpx7kWg292sNSePJSRYV/featured-car-lamborghini-MdaxQ7VWLjtrHWNRdSp9pd.webp",
    },
    {
      id: 5,
      name: "2022 BUGATTI CHIRON",
      mileage: "12,800 KM",
      price: "QAR 18,500,000",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663673077023/3HDpx7kWg292sNSePJSRYV/featured-car-bugatti-CXhLNrPDYFUvCB68x7qWX9.webp",
    },
  ];

  const brands = [
    { name: "BENTLEY", logo: "🅱️" },
    { name: "LAMBORGHINI", logo: "🐂" },
    { name: "BUGATTI", logo: "🔴" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full border-2 border-accent flex items-center justify-center">
                <span className="text-accent font-bold text-sm">TT</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg gold-accent">TALAL TARABAY</span>
                <span className="text-xs text-muted-foreground">LUXURY PRE-OWNED CARS</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#home" className="hover:text-accent transition-colors">HOME</a>
              <a href="#inventory" className="hover:text-accent transition-colors">INVENTORY</a>
              <a href="#brands" className="hover:text-accent transition-colors">BRANDS</a>
              <a href="#story" className="hover:text-accent transition-colors">OUR STORY</a>
              <a href="#services" className="hover:text-accent transition-colors">SERVICES</a>
              <a href="#contact" className="hover:text-accent transition-colors">CONTACT</a>
            </nav>

            {/* CTA and Mobile Menu */}
            <div className="flex items-center gap-4">
              <Button className="hidden md:flex btn-luxury">GET IN TOUCH</Button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 hover:bg-card rounded-lg transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 flex flex-col gap-3 border-t border-border pt-4">
              <a href="#home" className="hover:text-accent transition-colors">HOME</a>
              <a href="#inventory" className="hover:text-accent transition-colors">INVENTORY</a>
              <a href="#brands" className="hover:text-accent transition-colors">BRANDS</a>
              <a href="#story" className="hover:text-accent transition-colors">OUR STORY</a>
              <a href="#services" className="hover:text-accent transition-colors">SERVICES</a>
              <a href="#contact" className="hover:text-accent transition-colors">CONTACT</a>
              <Button className="btn-luxury w-full mt-2">GET IN TOUCH</Button>
            </nav>
          )}
        </div>

        {/* Top Contact Bar */}
        <div className="hidden md:block bg-card border-b border-border py-2">
          <div className="container flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone size={16} className="gold-accent" />
                <span>+974 7049 9914</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="gold-accent" />
                <span>Bin Mahmoud at Al Mufrah Plaza / The Pearl at UDC Tower, Doha</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20v-7.21H5.5V9.25h2.79V7.16c0-2.76 1.693-4.26 4.15-4.26 1.18 0 2.2.088 2.495.127v2.89h-1.713c-1.344 0-1.605.638-1.605 1.573V9.25h3.21l-.418 3.54h-2.792V20"/></svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-background py-12 md:py-20 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight">
                  DRIVE<br />
                  <span className="gold-accent">EXCELLENCE</span><br />
                  OWN PRESTIGE
                </h1>
                <p className="text-base md:text-lg text-muted-foreground">
                  Premium pre-owned Bentley, Lamborghini & Bugatti vehicles, professionally inspected and certified for performance and luxury.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-luxury flex items-center gap-2">
                  BROWSE INVENTORY <ChevronRight size={18} />
                </Button>
                <Button className="btn-luxury-outline">CONTACT US</Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="flex flex-col gap-2">
                  <Shield size={24} className="gold-accent" />
                  <p className="text-xs font-semibold">CERTIFIED PRE-OWNED</p>
                  <p className="text-xs text-muted-foreground">100+ Point Inspection</p>
                </div>
                <div className="flex flex-col gap-2">
                  <Lock size={24} className="gold-accent" />
                  <p className="text-xs font-semibold">WARRANTY PROTECTION</p>
                  <p className="text-xs text-muted-foreground">Peace of Mind</p>
                </div>
                <div className="flex flex-col gap-2">
                  <Headphones size={24} className="gold-accent" />
                  <p className="text-xs font-semibold">EXPERT SUPPORT</p>
                  <p className="text-xs text-muted-foreground">24/7 Assistance</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-96 md:h-full">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663673077023/3HDpx7kWg292sNSePJSRYV/hero-luxury-cars-d4wctacbKF37EMvHRX5eoA.webp"
                alt="Luxury Cars Showroom"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-card border-y border-border py-8">
        <div className="container">
          <h3 className="text-xl font-display font-bold mb-6">FIND YOUR DREAM CAR</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            <select className="bg-background border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent">
              <option>All Brands</option>
              <option>Bentley</option>
              <option>Lamborghini</option>
              <option>Bugatti</option>
            </select>
            <select className="bg-background border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent">
              <option>All Models</option>
            </select>
            <select className="bg-background border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent">
              <option>Body Type</option>
            </select>
            <select className="bg-background border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent">
              <option>Price Range</option>
            </select>
            <select className="bg-background border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent">
              <option>Year</option>
            </select>
            <button className="md:col-span-5 bg-accent text-accent-foreground font-semibold py-3 rounded-sm hover:bg-opacity-90 transition-all flex items-center justify-center gap-2">
              <Search size={18} /> SEARCH CAR
            </button>
          </div>
        </div>
      </section>

      {/* Featured Inventory */}
      <section id="inventory" className="py-16 md:py-24">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold">FEATURED INVENTORY</h2>
            <a href="#" className="flex items-center gap-2 text-accent hover:gap-3 transition-all">
              VIEW ALL INVENTORY <ChevronRight size={20} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {featuredCars.map((car) => (
              <div key={car.id} className="card-luxury group">
                <div className="relative overflow-hidden h-48 md:h-56">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-accent text-accent-foreground px-3 py-1 rounded-sm text-xs font-bold">
                    FEATURED
                  </div>
                  <button
                    onClick={() => toggleFavorite(car.id)}
                    className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur rounded-full hover:bg-background transition-colors"
                  >
                    <Heart
                      size={18}
                      className={favorites.has(car.id) ? "fill-accent text-accent" : "text-muted-foreground"}
                    />
                  </button>
                </div>
                <div className="p-4 space-y-3">
                  <h3 className="font-display font-bold text-sm">{car.name}</h3>
                  <p className="text-xs text-muted-foreground">Mileage: {car.mileage}</p>
                  <p className="text-lg font-bold gold-accent">{car.price}</p>
                  <button className="w-full py-2 border border-accent text-accent rounded-sm text-xs font-semibold hover:bg-accent hover:text-accent-foreground transition-colors">
                    VIEW DETAILS
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-card py-16 md:py-24">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">WHY CHOOSE US</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <Truck size={32} className="gold-accent" />
              </div>
              <h3 className="font-display font-bold">TRADE-IN</h3>
              <p className="text-sm text-muted-foreground">We accept your car</p>
            </div>
            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <Lock size={32} className="gold-accent" />
              </div>
              <h3 className="font-display font-bold">EASY FINANCING</h3>
              <p className="text-sm text-muted-foreground">Flexible options</p>
            </div>
            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <Truck size={32} className="gold-accent" />
              </div>
              <h3 className="font-display font-bold">WORLDWIDE DELIVERY</h3>
              <p className="text-sm text-muted-foreground">Secure & reliable</p>
            </div>
            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <Shield size={32} className="gold-accent" />
              </div>
              <h3 className="font-display font-bold">SECURE PAYMENT</h3>
              <p className="text-sm text-muted-foreground">100% secure</p>
            </div>
            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <Headphones size={32} className="gold-accent" />
              </div>
              <h3 className="font-display font-bold">AFTER SALES SUPPORT</h3>
              <p className="text-sm text-muted-foreground">Ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands" className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-12">OUR PREMIUM BRANDS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "BENTLEY", desc: "British luxury and craftsmanship" },
              { name: "LAMBORGHINI", desc: "Italian performance and design" },
              { name: "BUGATTI", desc: "French engineering excellence" },
            ].map((brand) => (
              <div key={brand.name} className="card-luxury p-8 text-center space-y-4">
                <div className="text-6xl font-display font-bold gold-accent">{brand.name.charAt(0)}</div>
                <h3 className="text-2xl font-display font-bold">{brand.name}</h3>
                <p className="text-muted-foreground">{brand.desc}</p>
                <button className="w-full py-2 border border-accent text-accent rounded-sm text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition-colors">
                  EXPLORE
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="story" className="bg-card py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-display font-bold">ABOUT TALAL TARABAY</h2>
              <p className="text-muted-foreground">
                We specialize in premium pre-owned Bentley, Lamborghini & Bugatti vehicles. Our mission is to deliver excellence, transparency and trust in every deal.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Shield size={20} className="gold-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Certified Quality</p>
                    <p className="text-sm text-muted-foreground">Every vehicle undergoes rigorous inspection</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart size={20} className="gold-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Customer First</p>
                    <p className="text-sm text-muted-foreground">Your satisfaction is our priority</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-96 rounded-lg overflow-hidden">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663673077023/3HDpx7kWg292sNSePJSRYV/footer-about-section-NKCjeKR5CeLVBAwMD8Wt94.webp"
                alt="About Talal Tarabay"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-background border-t border-border py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            {/* About */}
            <div className="space-y-4">
              <h4 className="font-display font-bold">ABOUT TALAL TARABAY</h4>
              <p className="text-sm text-muted-foreground">
                We specialize in premium pre-owned Bentley, Lamborghini & Bugatti vehicles. Our mission is to deliver excellence, transparency and trust in every deal.
              </p>
              <p className="text-accent font-display font-bold text-lg">Talal Tarabay</p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-display font-bold">QUICK LINKS</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Home</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Inventory</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Brands</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Our Story</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Services</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="font-display font-bold">OUR SERVICES</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Car Sourcing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Vehicle Inspection</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Trade-In</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Financing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Warranty Protection</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">After Sales Support</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-display font-bold">CONTACT INFO</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <Phone size={16} className="gold-accent mt-1 flex-shrink-0" />
                  <span>+974 7049 9914</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="gold-accent mt-1 flex-shrink-0" />
                  <span>Bin Mahmoud at Al Mufrah Plaza / The Pearl at UDC Tower, Doha</span>
                </div>
                <div className="flex items-start gap-2">
                  <Mail size={16} className="gold-accent mt-1 flex-shrink-0" />
                  <span>talal.tarabay@alwabarmotors.qa</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock size={16} className="gold-accent mt-1 flex-shrink-0" />
                  <span>Sat - Thu : 9:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="font-display font-bold">STAY UPDATED</h4>
              <p className="text-sm text-muted-foreground">Subscribe to get the latest inventory and exclusive offers.</p>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-card border border-border rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button className="w-full bg-accent text-accent-foreground font-semibold py-2 rounded-sm hover:bg-opacity-90 transition-all">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2025 Talal Tarabay. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
