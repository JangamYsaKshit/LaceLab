import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ShoppingBag,
  UserRound,
  ArrowRight,
  SlidersHorizontal,
} from "lucide-react";

import "../Home.css";
import "./men-page.css";

const categories = [
  {
    name: "Lifestyle",
    description: "Everyday sneakers",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&auto=format&fit=crop&q=85",
  },
  {
    name: "Running",
    description: "Built for movement",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=700&auto=format&fit=crop&q=85",
  },
  {
    name: "Streetwear",
    description: "Make your statement",
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=700&auto=format&fit=crop&q=85",
  },
  {
    name: "Sport",
    description: "Performance meets style",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=700&auto=format&fit=crop&q=85",
  },
];

const products = [
  {
    id: 1,
    name: "Air Classic",
    brand: "Nike",
    category: "Lifestyle Sneakers",
    price: "€119.99",
    image:
      "https://images.unsplash.com/photo-1588062560800-8b9714951c05?w=700&auto=format&fit=crop&q=85",
    tag: "BESTSELLER",
    sales: "Top seller",
  },
  {
    id: 2,
    name: "Street Runner",
    brand: "Adidas",
    category: "Running Sneakers",
    price: "€99.99",
    image:
      "https://images.unsplash.com/photo-1715702725771-30cbfbb60913?w=700&auto=format&fit=crop&q=85",
    tag: "TRENDING",
    sales: "Customer favourite",
  },
  {
    id: 3,
    name: "Urban Classic",
    brand: "New Balance",
    category: "Everyday Sneakers",
    price: "€109.99",
    image:
      "https://images.unsplash.com/photo-1587100235647-c9cf2781f0ae?w=700&auto=format&fit=crop&q=85",
    tag: "POPULAR",
    sales: "Weekly favourite",
  },
  {
    id: 4,
    name: "Speed Flex",
    brand: "Puma",
    category: "Sport Sneakers",
    price: "€89.99",
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=700&auto=format&fit=crop&q=85",
    tag: "NEW ARRIVAL",
    sales: "Trending now",
  },
];

function MenPage() {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("lacelab-language");
    return savedLanguage === "de" ? "de" : "en";
  });

  const [selectedCategory, setSelectedCategory] = useState("All");

  const isGerman = language === "de";

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem("lacelab-language", newLanguage);
    document.documentElement.lang = newLanguage;
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) =>
          product.category
            .toLowerCase()
            .includes(selectedCategory.toLowerCase())
        );

  const categoriesFilter = [
    { en: "All", de: "Alle", value: "All" },
    { en: "Lifestyle", de: "Lifestyle", value: "Lifestyle" },
    { en: "Running", de: "Laufen", value: "Running" },
    { en: "Sport", de: "Sport", value: "Sport" },
  ];

  return (
    <main className="home-page men-page">
      {/* HEADER */}
      <header className="home-header">
        <div className="header-left">
          <nav className="header-navigation">
            <Link to="/" className="men-home-link">
              {isGerman ? "Startseite" : "Home"}
            </Link>

            <Link to="/men" className="men-nav-active">
              {isGerman ? "Herren" : "Men"}
            </Link>

            <Link to="/women">{isGerman ? "Damen" : "Women"}</Link>
            <Link to="/kids">{isGerman ? "Kinder" : "Kids"}</Link>
            <Link to="/pets">{isGerman ? "Haustiere" : "Pets"}</Link>
          </nav>
        </div>

        <Link to="/" className="header-logo">
          LaceLab.
        </Link>

        <div className="header-right">
          <div className="home-language-switcher">
            <button
              type="button"
              className={language === "en" ? "active" : ""}
              onClick={() => changeLanguage("en")}
              aria-label="English"
              aria-pressed={language === "en"}
              title="English"
            >
              <img src="/flags/uk.png" alt="English" />
            </button>

            <button
              type="button"
              className={language === "de" ? "active" : ""}
              onClick={() => changeLanguage("de")}
              aria-label="Deutsch"
              aria-pressed={language === "de"}
              title="Deutsch"
            >
              <img src="/flags/germany.png" alt="Deutsch" />
            </button>
          </div>

          <button type="button" className="header-icon" aria-label="Search">
            <Search size={21} strokeWidth={1.8} />
          </button>

          <button
            type="button"
            className="header-icon"
            aria-label="Shopping bag"
          >
            <ShoppingBag size={21} strokeWidth={1.8} />
            <span className="cart-count">0</span>
          </button>

          <Link to="/login" className="header-icon" aria-label="Account">
            <UserRound size={21} strokeWidth={1.8} />
          </Link>
        </div>
      </header>

      {/* MEN HERO */}
      <section className="men-hero">
        <div className="men-hero-content">
          <span className="men-eyebrow">
            {isGerman ? "DIE HERRENKOLLEKTION" : "THE MEN'S COLLECTION"}
          </span>

          <h1>
            {isGerman ? "Dein Style." : "Own Your"}
            <br />
            <span>{isGerman ? "Dein Schritt." : "Every Step."}</span>
          </h1>

          <p>
            {isGerman
              ? "Entdecke Sneaker, die Komfort, Charakter und Style verbinden. Finde deinen nächsten Lieblingsschuh."
              : "Discover sneakers that combine comfort, character and style. Find your next favourite pair."}
          </p>

          <a href="#men-products" className="men-hero-button">
            {isGerman ? "Jetzt entdecken" : "Explore Collection"}
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="men-hero-image">
          <img
            src="https://images.unsplash.com/photo-1587100235647-c9cf2781f0ae?w=1200&auto=format&fit=crop&q=90"
            alt="Men's sneaker collection"
          />
        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section className="men-category-section">
        <div className="men-section-heading">
          <div>
            <span className="men-section-label">
              {isGerman ? "FINDE DEINEN STYLE" : "FIND YOUR STYLE"}
            </span>
            <h2>{isGerman ? "Shop nach Kategorie" : "Shop By Category"}</h2>
          </div>

          <p>
            {isGerman
              ? "Der richtige Sneaker für jeden Moment."
              : "The right sneakers for every moment."}
          </p>
        </div>

        <div className="men-category-grid">
          {categories.map((category) => (
            <a
              href="#men-products"
              className="men-category-card"
              key={category.name}
            >
              <img src={category.image} alt={category.name} loading="lazy" />

              <div className="men-category-overlay">
                <div>
                  <h3>
                    {isGerman
                      ? category.name === "Lifestyle"
                        ? "Lifestyle"
                        : category.name === "Running"
                          ? "Laufen"
                          : category.name === "Streetwear"
                            ? "Streetwear"
                            : "Sport"
                      : category.name}
                  </h3>
                  <p>
                    {isGerman
                      ? "Kollektion entdecken"
                      : category.description}
                  </p>
                </div>

                <span className="men-category-arrow">
                  <ArrowRight size={19} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FEATURED SNEAKERS */}
      <section className="men-products-section" id="men-products">
        <div className="men-section-heading">
          <div>
            <span className="men-section-label">
              {isGerman ? "AUSGEWÄHLT FÜR DICH" : "PICKED FOR YOU"}
            </span>
            <h2>{isGerman ? "Beliebte Sneaker" : "Featured Sneakers"}</h2>
          </div>

          <span className="men-product-count">
            {filteredProducts.length} {isGerman ? "Produkte" : "Products"}
          </span>
        </div>

        <div className="men-product-toolbar">
          <div className="men-filter-list">
            {categoriesFilter.map((category) => (
              <button
                type="button"
                key={category.value}
                className={
                  selectedCategory === category.value ? "selected" : ""
                }
                onClick={() => setSelectedCategory(category.value)}
              >
                {isGerman ? category.de : category.en}
              </button>
            ))}
          </div>

          <button type="button" className="men-filter-button">
            <SlidersHorizontal size={17} />
            {isGerman ? "Filter" : "Filters"}
          </button>
        </div>

        <div className="men-product-grid">
          {filteredProducts.map((product) => (
            <article className="men-product-card" key={product.id}>
              <div className="men-product-image">
                <span className="men-product-tag">{product.tag}</span>

                <img
                  src={product.image}
                  alt={`${product.brand} ${product.name} sneakers`}
                  loading="lazy"
                />

                <button
                  type="button"
                  className="men-product-action"
                  aria-label={`Explore ${product.name}`}
                >
                  <ArrowRight size={19} />
                </button>
              </div>

              <div className="men-product-info">
                <span className="men-product-brand">{product.brand}</span>
                <h3>{product.name}</h3>
                <p>{product.category}</p>
                <div className="men-product-bottom">
                  <strong>{product.price}</strong>
                  <span>{isGerman ? "Beliebt" : product.sales}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BOTTOM BANNER */}
      <section className="men-bottom-banner">
        <div>
          <span className="men-section-label">
            {isGerman ? "DEIN NÄCHSTER SCHRITT" : "YOUR NEXT STEP"}
          </span>
          <h2>
            {isGerman
              ? "Finde deinen neuen Lieblingsschuh."
              : "Find Your Next Favourite Pair."}
          </h2>
          <p>
            {isGerman
              ? "Entdecke Styles, die zu dir passen."
              : "Discover styles made to match your personality."}
          </p>
        </div>

        <a href="#men-products">
          {isGerman ? "Jetzt shoppen" : "Shop Now"}
          <ArrowRight size={18} />
        </a>
      </section>
    </main>
  );
}

export default MenPage;