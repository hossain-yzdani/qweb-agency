type TCards = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const ServicesPreview = () => {
  const Cards: TCards[] = [
    {
      title: "SEO & Search Optimization",
      description:
        "Dominate search rankings with data-driven SEO strategies that bring qualified traffic and increase visibility.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a78bfa"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      ),
    },
    {
      title: "Web Development",
      description:
        "Modern, blazing-fast websites built with Next.js and cutting-edge technologies that convert visitors into customers.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a78bfa"
          strokeWidth="2"
        >
          <polyline points="16 18 22 12 16 6" />{" "}
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      title: "Performance Optimization",
      description:
        "Lightning-fast load times and Core Web Vitals optimization that improve rankings and user experience.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a78bfa"
          strokeWidth="2"
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
    },
    {
      title: "Digital Strategy",
      description:
        "Comprehensive digital roadmaps that align your online presence with business objectives for maximum ROI.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a78bfa"
          strokeWidth="2"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />{" "}
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />{" "}
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
    },
    {
      title: "Growth Marketing",
      description:
        "Data-driven campaigns that scale your business through proven acquisition and retention strategies.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a78bfa"
          strokeWidth="2"
        >
          <line x1="12" y1="20" x2="12" y2="10" />{" "}
          <line x1="18" y1="20" x2="18" y2="4" />{" "}
          <line x1="6" y1="20" x2="6" y2="16" />
        </svg>
      ),
    },
    {
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces that delight users and drive engagement through thoughtful design.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a78bfa"
          strokeWidth="2"
        >
          <path d="M12 19l7-7 3 3-7 7-3-3z" />{" "}
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />{" "}
          <path d="M2 2l7.586 7.586" /> <circle cx="11" cy="11" r="2" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-4 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 md:mb-16 fade-in-section">
          <span className="text-purple-400 text-lg mb-4 block">
            ما چیکار می کنیم؟
          </span>
          <h2
            id="servicesTitle"
            className="text-2xl md:text-4xl font-bold mb-2 lg:mb-6"
          >
            خدمات ما
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            راهکارهای جامع دیجیتال که برای ارتقای برند شما و تسریع رشد طراحی
            شده‌اند.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Cards.map((card, index) => (
            <div
              dir="ltr"
              key={index}
              className="fade-in-section glass p-8 rounded-2xl"
            >
              <div className="w-14 h-14 flex justify-center items-center rounded-xl shadowTheme mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
