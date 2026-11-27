
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ShoppingBag,
  UserRound,
  ArrowRight,
  CalendarDays,
  Truck,
  BadgePercent,
  ShieldCheck,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import "./Home.css";

const translations = {
  en: {
    men: "Men",
    women: "Women",
    kids: "Kids",
    pets: "Pets",
    offer: "SPECIAL OFFER",
    discount: "UP TO 50% OFF",
    title: "Step Into",
    subtitle: "Your Style.",
    description:
      "Discover footwear that brings together comfort, confidence, and personality. Find your perfect pair and make every step count.",
    shopNow: "Shop Now",
    explore: "Explore Events",
    pickLabel: "THE WEEKLY FAVOURITES",
    pickTitle: "Today's Pick",
    pickDescription:
      "Discover this week's most-loved sneakers. Fresh styles, iconic designs, and pairs worth talking about.",
    viewProduct: "Explore Pair",
    products: [
      {
        name: "Air Classic",
        brand: "Nike",
        category: "Lifestyle Sneakers",
        price: "€119.99",
        tag: "BESTSELLER",
        sales: "Top seller",
      },
      {
        name: "Street Runner",
        brand: "Adidas",
        category: "Running Sneakers",
        price: "€99.99",
        tag: "TRENDING",
        sales: "Customer favourite",
      },
      {
        name: "Urban Classic",
        brand: "New Balance",
        category: "Everyday Sneakers",
        price: "€109.99",
        tag: "POPULAR",
        sales: "Weekly favourite",
      },
      {
        name: "Speed Flex",
        brand: "Puma",
        category: "Sport Sneakers",
        price: "€89.99",
        tag: "HOT PICK",
        sales: "Trending now",
      },
    ],
    benefits: [
      { title: "Free Shipping", description: "On orders over €75" },
      { title: "Special Offers", description: "Exclusive deals for you" },
      { title: "Secure Payment", description: "Safe and secure checkout" },
      { title: "Premium Quality", description: "Quality you can trust" },
    ],
    collectionLabel: "FIND YOUR PERFECT PAIR",
    collectionTitle: "Discover Our Collection",
    collectionDescription:
      "From everyday essentials to standout sneakers, explore footwear designed to match your style.",
    eventsLabel: "STAY IN THE LOOP",
    eventsTitle: "Upcoming Events",
    eventsDescription:
      "Something exciting is coming to LaceLab. Stay connected for upcoming launches, exclusive offers, and special sneaker events.",
    eventsButton: "Stay Updated",
    partnersLabel: "THE BRANDS WE LOVE",
    partnersTitle: "Our Partners",
    partnersDescription:
      "Bringing together iconic brands and the latest sneaker culture.",
    footerDescription:
      "Step into your style. Discover footwear that brings together comfort, confidence, and personality.",
    quickLinks: "Quick Links",
    customerCare: "Customer Care",
    contact: "Get in Touch",
    home: "Home",
    collection: "Collection",
    events: "Events",
    about: "About Us",
    help: "Help Centre",
    shipping: "Shipping & Returns",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    email: "hello@lacelab.com",
    address: "Berlin, Germany",
    copyright: "© 2026 LaceLab. All rights reserved.",
    madeWith: "Made for sneaker lovers.",
  },

  de: {
    men: "Herren",
    women: "Damen",
    kids: "Kinder",
    pets: "Haustiere",
    offer: "SONDERANGEBOT",
    discount: "BIS ZU 50 % RABATT",
    title: "Finde",
    subtitle: "Deinen Style.",
    description:
      "Entdecke Schuhe, die Komfort, Selbstbewusstsein und Persönlichkeit verbinden. Finde dein perfektes Paar und mach jeden Schritt besonders.",
    shopNow: "Jetzt shoppen",
    explore: "Events entdecken",
    pickLabel: "DIE WOCHENFAVORITEN",
    pickTitle: "Unsere Highlights",
    pickDescription:
      "Entdecke die beliebtesten Sneaker dieser Woche. Neue Styles, ikonische Designs und besondere Lieblingsstücke.",
    viewProduct: "Paar entdecken",
    products: [
      {
        name: "Air Classic",
        brand: "Nike",
        category: "Lifestyle-Sneaker",
        price: "119,99 €",
        tag: "BESTSELLER",
        sales: "Top-Seller",
      },
      {
        name: "Street Runner",
        brand: "Adidas",
        category: "Lauf-Sneaker",
        price: "99,99 €",
        tag: "IM TREND",
        sales: "Kundenliebling",
      },
      {
        name: "Urban Classic",
        brand: "New Balance",
        category: "Alltags-Sneaker",
        price: "109,99 €",
        tag: "BELIEBT",
        sales: "Wochenfavorit",
      },
      {
        name: "Speed Flex",
        brand: "Puma",
        category: "Sport-Sneaker",
        price: "89,99 €",
        tag: "TOP-TIPP",
        sales: "Aktuell im Trend",
      },
    ],
    benefits: [
      {
        title: "Kostenloser Versand",
        description: "Ab einem Bestellwert von 75 €",
      },
      {
        title: "Sonderangebote",
        description: "Exklusive Angebote für dich",
      },
      {
        title: "Sichere Zahlung",
        description: "Sicherer Bezahlvorgang",
      },
      {
        title: "Premium Qualität",
        description: "Qualität, der du vertrauen kannst",
      },
    ],
    collectionLabel: "FINDE DEIN PERFEKTES PAAR",
    collectionTitle: "Entdecke unsere Kollektion",
    collectionDescription:
      "Von Alltagsschuhen bis zu besonderen Sneakern – entdecke Schuhe, die zu deinem Stil passen.",
    eventsLabel: "BLEIB AUF DEM LAUFENDEN",
    eventsTitle: "Kommende Events",
    eventsDescription:
      "Bei LaceLab kommt etwas Spannendes auf dich zu. Bleib informiert über neue Kollektionen, exklusive Angebote und besondere Sneaker-Events.",
    eventsButton: "Bleib informiert",
    partnersLabel: "UNSERE LIEBLINGSMARKEN",
    partnersTitle: "Unsere Partner",
    partnersDescription:
      "Ikonische Marken und die neueste Sneaker-Kultur vereint.",
    footerDescription:
      "Finde deinen Style. Entdecke Schuhe, die Komfort, Selbstbewusstsein und Persönlichkeit verbinden.",
    quickLinks: "Schnellzugriff",
    customerCare: "Kundenservice",
    contact: "Kontakt",
    home: "Startseite",
    collection: "Kollektion",
    events: "Events",
    about: "Über uns",
    help: "Hilfe-Center",
    shipping: "Versand & Rückgabe",
    privacy: "Datenschutz",
    terms: "Allgemeine Geschäftsbedingungen",
    email: "hello@lacelab.com",
    address: "Berlin, Deutschland",
    copyright: "© 2026 LaceLab. Alle Rechte vorbehalten.",
    madeWith: "Für Sneaker-Liebhaber gemacht.",
  },
};

const productImages = [
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&auto=format&fit=crop&q=85",
  "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=700&auto=format&fit=crop&q=85",
  "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=700&auto=format&fit=crop&q=85",
  "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=700&auto=format&fit=crop&q=85",
];

const partners = [
  {
    name: "Nike",
    logo: "https://cdn.simpleicons.org/nike/80608f",
  },
  {
    name: "Adidas",
    logo: "https://cdn.simpleicons.org/adidas/80608f",
  },
  {
    name: "Puma",
    logo: "https://cdn.simpleicons.org/puma/80608f",
  },
  {
    name: "New Balance",
    logo: "https://cdn.simpleicons.org/newbalance/80608f",
  },
  {
    name: "Reebok",
    logo: "https://cdn.simpleicons.org/reebok/80608f",
  },
];

function Home() {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("lacelab-language");
    return savedLanguage === "de" ? "de" : "en";
  });

  const t = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const changeLanguage = (newLanguage) => {
    if (!translations[newLanguage]) return;

    setLanguage(newLanguage);
    localStorage.setItem("lacelab-language", newLanguage);
  };

  const benefits = [
    { icon: <Truck size={34} strokeWidth={1.6} />, ...t.benefits[0] },
    {
      icon: <BadgePercent size={34} strokeWidth={1.6} />,
      ...t.benefits[1],
    },
    {
      icon: <ShieldCheck size={34} strokeWidth={1.6} />,
      ...t.benefits[2],
    },
    {
      icon: <ShoppingBag size={34} strokeWidth={1.6} />,
      ...t.benefits[3],
    },
  ];

  return (
    <main className="home-page">
      {/* NAVBAR */}
      <header className="home-header">
        <div className="header-left">
          <nav className="header-navigation">
            <Link to="/men">{t.men}</Link>
            <a href="#collection">{t.women}</a>
            <a href="#collection">{t.kids}</a>
            <a href="#collection">{t.pets}</a>
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
              title="English"
            >
              <img src="/flags/uk.png" alt="English" />
            </button>

            <button
              type="button"
              className={language === "de" ? "active" : ""}
              onClick={() => changeLanguage("de")}
              aria-label="Deutsch"
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

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="offer-label">
            <span className="offer-star">✦</span>
            <span>{t.offer}</span>
            <span className="offer-divider"></span>
            <strong>{t.discount}</strong>
          </div>

          <h1>{t.title}</h1>
          <h2>{t.subtitle}</h2>
          <p className="hero-description">{t.description}</p>

          <div className="hero-buttons">
            <a href="#today-pick" className="shop-button">
              {t.shopNow}
              <ArrowRight size={18} />
            </a>

            <a href="#events" className="events-button">
              {t.explore}
              <CalendarDays size={18} />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="/lacelab-hero.jpg"
            alt="LaceLab premium sneaker collection"
          />
        </div>
      </section>

      {/* TODAY'S PICK */}
      <section className="today-pick-section" id="today-pick">
        <div className="today-pick-heading">
          <span className="section-label">{t.pickLabel}</span>
          <h2>{t.pickTitle}</h2>
          <p>{t.pickDescription}</p>
        </div>

        <div className="product-grid">
          {t.products.map((product, index) => (
            <article className="product-card" key={product.name}>
              <div className="product-image-wrap">
                <span className="product-tag">{product.tag}</span>

                <img
                  src={productImages[index]}
                  alt={`${product.brand} ${product.name} sneakers`}
                  loading="lazy"
                />

                <button
                  type="button"
                  className="product-quick-button"
                  aria-label={`Explore ${product.name}`}
                >
                  <ArrowRight size={19} />
                </button>
              </div>

              <div className="product-info">
                <span className="product-brand">{product.brand}</span>
                <h3>{product.name}</h3>
                <p>{product.category}</p>

                <div className="product-bottom">
                  <strong>{product.price}</strong>
                  <span>{product.sales}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="benefits-section">
        {benefits.map((benefit, index) => (
          <div className="benefit-item" key={index}>
            {benefit.icon}

            <div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* COLLECTION SECTION */}
      <section className="content-section" id="collection">
        <span className="section-label">{t.collectionLabel}</span>
        <h2>{t.collectionTitle}</h2>
        <p>{t.collectionDescription}</p>
      </section>

      {/* EVENTS SECTION */}
      <section className="events-section" id="events">
        <div>
          <span className="section-label">{t.eventsLabel}</span>
          <h2>{t.eventsTitle}</h2>
          <p>{t.eventsDescription}</p>

          <a className="events-cta" href="mailto:hello@lacelab.com">
            {t.eventsButton}
            <ArrowRight size={18} />
          </a>
        </div>

        <CalendarDays size={65} strokeWidth={1.3} />
      </section>

      {/* OUR PARTNERS */}
      <section className="partners-section">
        <div className="partners-heading">
          <span className="section-label">{t.partnersLabel}</span>
          <h2>{t.partnersTitle}</h2>
          <p>{t.partnersDescription}</p>
        </div>

        <div className="partners-list">
          {partners.map((partner) => (
            <div className="partner-logo" key={partner.name}>
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="home-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              LaceLab.
            </Link>

            <p>{t.footerDescription}</p>

            <div className="footer-socials">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="instagram-social-link"
              >
                <span aria-hidden="true" className="instagram-letter">
                  ◎
                </span>
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="facebook-social-link"
              >
                <span aria-hidden="true" className="facebook-letter">
                  f
                </span>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3>{t.quickLinks}</h3>
            <Link to="/">{t.home}</Link>
            <a href="#collection">{t.collection}</a>
            <a href="#today-pick">{t.pickTitle}</a>
            <a href="#events">{t.events}</a>
            <a href="#collection">{t.about}</a>
          </div>

          <div className="footer-column">
            <h3>{t.customerCare}</h3>
            <a href="mailto:hello@lacelab.com">{t.help}</a>
            <a href="mailto:hello@lacelab.com">{t.shipping}</a>
            <a href="mailto:hello@lacelab.com">{t.privacy}</a>
            <a href="mailto:hello@lacelab.com">{t.terms}</a>
          </div>

          <div className="footer-column footer-contact">
            <h3>{t.contact}</h3>

            <a href="mailto:hello@lacelab.com">
              <Mail size={17} />
              {t.email}
            </a>

            <span>
              <MapPin size={17} />
              {t.address}
            </span>

            <a href="tel:+493000000000">
              <Phone size={17} />
              +49 30 00000000
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t.copyright}</p>
          <span>{t.madeWith} ♡</span>
        </div>
      </footer>
    </main>
  );
}

export default Home;
