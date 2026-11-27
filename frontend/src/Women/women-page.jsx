
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ShoppingBag,
  UserRound,
  ArrowRight,
  SlidersHorizontal,
  Heart,
  Truck,
  ShieldCheck,
} from "lucide-react";

import "../Home.css";
import "./women-page.css";

const translations = {
  en: {
    men: "Men",
    women: "Women",
    kids: "Kids",
    pets: "Pets",
    heroLabel: "THE WOMEN'S COLLECTION",
    heroTitle: "Style That",
    heroSubtitle: "Moves With You.",
    heroDescription:
      "Discover sneakers designed for every moment. From everyday comfort to standout streetwear, find your next favourite pair.",
    shopNow: "Shop Collection",
    explore: "Explore Styles",
    categoryLabel: "FIND YOUR STYLE",
    categoryTitle: "Shop By Category",
    categoryDescription:
      "Find the perfect pair for your everyday look, workout, or weekend plans.",
    featuredLabel: "CURATED FOR YOU",
    featuredTitle: "Women's Favourites",
    featuredDescription:
      "Explore fresh styles and everyday essentials selected for your collection.",
    all: "All",
    lifestyle: "Lifestyle",
    running: "Running",
    sport: "Sport",
    addToBag: "Explore Pair",
    new: "NEW",
    popular: "POPULAR",
    bestseller: "BESTSELLER",
    trending: "TRENDING",
    bannerLabel: "MAKE EVERY STEP YOURS",
    bannerTitle: "Your Style. Your Rules.",
    bannerDescription:
      "Find sneakers that fit your personality and make every outfit feel complete.",
    bannerButton: "Discover More",
    benefits: [
      ["Free Shipping", "On orders over €75"],
      ["Easy Returns", "Simple return process"],
      ["Secure Payment", "Safe checkout experience"],
    ],
    footerDescription:
      "Find your style with footwear that brings together comfort, confidence, and personality.",
    quickLinks: "Quick Links",
    customerCare: "Customer Care",
    contact: "Get in Touch",
    home: "Home",
    collection: "Collection",
    help: "Help Centre",
    shipping: "Shipping & Returns",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    email: "hello@lacelab.com",
    address: "Berlin, Germany",
    copyright: "© 2026 LaceLab. All rights reserved.",
    madeWith: "Made for sneaker lovers.",
    noProducts: "No products found in this category.",
  },

  de: {
    men: "Herren",
    women: "Damen",
    kids: "Kinder",
    pets: "Haustiere",
    heroLabel: "DIE DAMENKOLLEKTION",
    heroTitle: "Style, der",
    heroSubtitle: "dich bewegt.",
    heroDescription:
      "Entdecke Sneaker für jeden Moment. Von bequemem Alltag bis zu auffälligem Streetwear-Style – finde dein neues Lieblingspaar.",
    shopNow: "Kollektion entdecken",
    explore: "Styles entdecken",
    categoryLabel: "FINDE DEINEN STYLE",
    categoryTitle: "Nach Kategorie shoppen",
    categoryDescription:
      "Finde das perfekte Paar für deinen Alltag, dein Training oder dein Wochenende.",
    featuredLabel: "FÜR DICH AUSGEWÄHLT",
    featuredTitle: "Unsere Damen-Favoriten",
    featuredDescription:
      "Entdecke neue Styles und beliebte Essentials für deine Kollektion.",
    all: "Alle",
    lifestyle: "Lifestyle",
    running: "Laufen",
    sport: "Sport",
    addToBag: "Paar entdecken",
    new: "NEU",
    popular: "BELIEBT",
    bestseller: "BESTSELLER",
    trending: "IM TREND",
    bannerLabel: "MACH JEDEN SCHRITT ZU DEINEM",
    bannerTitle: "Dein Style. Deine Regeln.",
    bannerDescription:
      "Finde Sneaker, die zu deiner Persönlichkeit passen und jedes Outfit vervollständigen.",
    bannerButton: "Mehr entdecken",
    benefits: [
      ["Kostenloser Versand", "Ab einem Bestellwert von 75 €"],
      ["Einfache Rückgabe", "Unkomplizierter Rückgabeprozess"],
      ["Sichere Zahlung", "Sicherer Bezahlvorgang"],
    ],
    footerDescription:
      "Finde deinen Style mit Schuhen, die Komfort, Selbstbewusstsein und Persönlichkeit verbinden.",
    quickLinks: "Schnellzugriff",
    customerCare: "Kundenservice",
    contact: "Kontakt",
    home: "Startseite",
    collection: "Kollektion",
    help: "Hilfe-Center",
    shipping: "Versand & Rückgabe",
    privacy: "Datenschutz",
    terms: "Allgemeine Geschäftsbedingungen",
    email: "hello@lacelab.com",
    address: "Berlin, Deutschland",
    copyright: "© 2026 LaceLab. Alle Rechte vorbehalten.",
    madeWith: "Für Sneaker-Liebhaber gemacht.",
    noProducts: "Keine Produkte in dieser Kategorie gefunden.",
  },
};

const categories = [
  {
    name: "Lifestyle",
    description: "Everyday sneakers",
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=900&auto=format&fit=crop&q=85",
  },
  {
    name: "Running",
    description: "Built for movement",
    image:
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=900&auto=format&fit=crop&q=85",
  },
  {
    name: "Sport",
    description: "Performance meets style",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=900&auto=format&fit=crop&q=85",
  },
];

const products = [
  {
    id: 1,
    name: "Cloud Street",
    brand: "Nike",
    category: "Lifestyle",
    price: 119.99,
    tag: "BESTSELLER",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=85",
  },
  {
    id: 2,
    name: "Urban Motion",
    brand: "Adidas",
    category: "Running",
    price: 104.99,
    tag: "NEW",
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&auto=format&fit=crop&q=85",
  },
  {
    id: 3,
    name: "Rose Runner",
    brand: "Puma",
    category: "Sport",
    price: 94.99,
    tag: "TRENDING",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&auto=format&fit=crop&q=85",
  },
  {
    id: 4,
    name: "Everyday Flex",
    brand: "New Balance",
    category: "Lifestyle",
    price: 109.99,
    tag: "POPULAR",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=85",
  },
  {
    id: 5,
    name: "Active Flow",
    brand: "Asics",
    category: "Running",
    price: 99.99,
    tag: "NEW",
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&auto=format&fit=crop&q=85",
  },
  {
    id: 6,
    name: "Street Bloom",
    brand: "Reebok",
    category: "Sport",
    price: 89.99,
    tag: "POPULAR",
    image:
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&auto=format&fit=crop&q=85",
  },
];

function WomenPage() {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("lacelab-language");
    return savedLanguage === "de" ? "de" : "en";
  });

  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [likedProducts, setLikedProducts] = useState([]);

  const t = translations[language];
  const isGerman = language === "de";

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem("lacelab-language", language);
  }, [language]);

  const filterOptions = [
    { value: "All", label: t.all },
    { value: "Lifestyle", label: t.lifestyle },
    { value: "Running", label: t.running },
    { value: "Sport", label: t.sport },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeFilter === "All" || product.category === activeFilter;

      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchTerm]);

  const toggleLike = (productId) => {
    setLikedProducts((previous) =>
      previous.includes(productId)
        ? previous.filter((id) => id !== productId)
        : [...previous, productId]
    );
  };

  const benefits = [
    { icon: <Truck size={30} />, text: t.benefits[0] },
    { icon: <ArrowRight size={30} />, text: t.benefits[1] },
    { icon: <ShieldCheck size={30} />, text: t.benefits[2] },
  ];

  return (
    <main className="home-page women-page">
      {/* HEADER */}
      <header className="home-header">
        <div className="header-left">
          <nav className="header-navigation">
            <Link to="/">{t.home}</Link>
            <Link to="/men">{t.men}</Link>
            <Link to="/women" className="women-nav-active">
              {t.women}
            </Link>
            <a href="#women-categories">{t.kids}</a>
            <a href="#women-categories">{t.pets}</a>
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
              onClick={() => setLanguage("en")}
              aria-label="English"
              title="English"
            >
              <img src="/flags/uk.png" alt="English" />
            </button>

            <button
              type="button"
              className={language === "de" ? "active" : ""}
              onClick={() => setLanguage("de")}
              aria-label="Deutsch"
              title="Deutsch"
            >
              <img src="/flags/germany.png" alt="Deutsch" />
            </button>
          </div>

          <button
            type="button"
            className="header-icon"
            aria-label="Search products"
            onClick={() =>
              document
                .getElementById("women-products")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <Search size={21} />
          </button>

          <button
            type="button"
            className="header-icon"
            aria-label="Shopping bag"
          >
            <ShoppingBag size={21} />
            <span className="cart-count">0</span>
          </button>

          <Link to="/login" className="header-icon" aria-label="Account">
            <UserRound size={21} />
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="women-hero">
        <div className="women-hero-content">
          <span className="women-eyebrow">{t.heroLabel}</span>

          <h1>{t.heroTitle}</h1>
          <h2>{t.heroSubtitle}</h2>

          <p>{t.heroDescription}</p>

          <div className="women-hero-buttons">
            <a href="#women-products" className="women-primary-button">
              {t.shopNow}
              <ArrowRight size={18} />
            </a>

            <a href="#women-categories" className="women-secondary-button">
              {t.explore}
            </a>
          </div>
        </div>

        <div className="women-hero-image">
          <img
            src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=1200&auto=format&fit=crop&q=90"
            alt="Women's sneaker collection"
          />
          <div className="women-hero-image-label">
            <span>NEW SEASON</span>
            <strong>Find Your Everyday Style</strong>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="women-categories-section" id="women-categories">
        <div className="men-section-heading">
          <div>
            <span className="men-section-label">{t.categoryLabel}</span>
            <h2>{t.categoryTitle}</h2>
          </div>
          <p>{t.categoryDescription}</p>
        </div>

        <div className="women-category-grid">
          {categories.map((category) => (
            <button
              type="button"
              className="women-category-card"
              key={category.name}
              onClick={() => {
                setActiveFilter(category.name);
                document
                  .getElementById("women-products")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <img src={category.image} alt={`${category.name} sneakers`} />

              <div className="women-category-overlay">
                <div>
                  <h3>
                    {category.name === "Lifestyle"
                      ? t.lifestyle
                      : category.name === "Running"
                        ? t.running
                        : t.sport}
                  </h3>
                  <p>{isGerman ? "Kollektion entdecken" : category.description}</p>
                </div>

                <span className="women-category-arrow">
                  <ArrowRight size={19} />
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="women-benefits">
        {benefits.map((benefit, index) => (
          <div className="women-benefit-item" key={index}>
            {benefit.icon}
            <div>
              <h3>{benefit.text[0]}</h3>
              <p>{benefit.text[1]}</p>
            </div>
          </div>
        ))}
      </section>

      {/* PRODUCTS */}
      <section className="women-products-section" id="women-products">
        <div className="men-section-heading">
          <div>
            <span className="men-section-label">{t.featuredLabel}</span>
            <h2>{t.featuredTitle}</h2>
            <p>{t.featuredDescription}</p>
          </div>

          <span className="men-product-count">
            {filteredProducts.length} {isGerman ? "Produkte" : "Products"}
          </span>
        </div>

        <div className="women-products-toolbar">
          <div className="women-filter-list">
            <SlidersHorizontal size={19} />

            {filterOptions.map((filter) => (
              <button
                type="button"
                key={filter.value}
                className={
                  activeFilter === filter.value ? "women-filter-active" : ""
                }
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <label className="women-search-box">
            <Search size={18} />
            <input
              type="search"
              placeholder={isGerman ? "Produkte suchen" : "Search products"}
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </label>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="women-product-grid">
            {filteredProducts.map((product) => (
              <article className="women-product-card" key={product.id}>
                <div className="women-product-image-wrap">
                  <span className="women-product-tag">
                    {product.tag === "BESTSELLER"
                      ? t.bestseller
                      : product.tag === "TRENDING"
                        ? t.trending
                        : product.tag === "POPULAR"
                          ? t.popular
                          : t.new}
                  </span>

                  <img
                    src={product.image}
                    alt={`${product.brand} ${product.name} sneakers`}
                    loading="lazy"
                  />

                  <button
                    type="button"
                    className={`women-wishlist-button ${
                      likedProducts.includes(product.id) ? "liked" : ""
                    }`}
                    onClick={() => toggleLike(product.id)}
                    aria-label={
                      likedProducts.includes(product.id)
                        ? "Remove from favourites"
                        : "Add to favourites"
                    }
                  >
                    <Heart
                      size={19}
                      fill={
                        likedProducts.includes(product.id)
                          ? "currentColor"
                          : "none"
                      }
                    />
                  </button>
                </div>

                <div className="women-product-info">
                  <span className="women-product-brand">{product.brand}</span>
                  <h3>{product.name}</h3>
                  <p>{product.category}</p>

                  <div className="women-product-bottom">
                    <strong>
                      {new Intl.NumberFormat(
                        isGerman ? "de-DE" : "en-IE",
                        {
                          style: "currency",
                          currency: "EUR",
                        }
                      ).format(product.price)}
                    </strong>

                    <button
                      type="button"
                      aria-label={`${t.addToBag}: ${product.name}`}
                    >
                      <ArrowRight size={19} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="women-no-products">{t.noProducts}</p>
        )}
      </section>

      {/* PROMOTIONAL BANNER */}
      <section className="women-promo-banner">
        <div className="women-promo-content">
          <span className="women-section-label">{t.bannerLabel}</span>
          <h2>{t.bannerTitle}</h2>
          <p>{t.bannerDescription}</p>

          <a href="#women-products" className="women-primary-button">
            {t.bannerButton}
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="women-footer">
        <div className="women-footer-main">
          <div className="women-footer-brand">
            <Link to="/" className="women-footer-logo">
              LaceLab.
            </Link>

            <p>{t.footerDescription}</p>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="women-social-link"
            >
              <span aria-hidden="true">◎</span>
            </a>
          </div>

          <div className="women-footer-column">
            <h3>{t.quickLinks}</h3>
            <Link to="/">{t.home}</Link>
            <Link to="/men">{t.men}</Link>
            <Link to="/women">{t.women}</Link>
            <a href="#women-categories">{t.collection}</a>
          </div>

          <div className="women-footer-column">
            <h3>{t.customerCare}</h3>
            <a href="mailto:hello@lacelab.com">{t.help}</a>
            <a href="mailto:hello@lacelab.com">{t.shipping}</a>
            <a href="mailto:hello@lacelab.com">{t.privacy}</a>
            <a href="mailto:hello@lacelab.com">{t.terms}</a>
          </div>

          <div className="women-footer-column women-footer-contact">
            <h3>{t.contact}</h3>
            <a href="mailto:hello@lacelab.com">{t.email}</a>
            <span>{t.address}</span>
            <a href="tel:+493000000000">+49 30 00000000</a>
          </div>
        </div>

        <div className="women-footer-bottom">
          <p>{t.copyright}</p>
          <span>{t.madeWith} ♡</span>
        </div>
      </footer>
    </main>
  );
}

export default WomenPage;
