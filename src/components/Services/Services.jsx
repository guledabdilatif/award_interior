import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Services.css";

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const serviceItems = [
    {
      title: "Custom Wardrobe Design & Installation",
      description:
        "Tailored wardrobes designed for your unique space, with expert installation for a perfect fit.",
    },
    {
      title: "Kitchen Cabinet Design & Fabrication",
      description:
        "Modern, classic & functional kitchen storage solutions crafted with durable materials.",
    },
    {
      title: "Countertops & Worktops",
      description:
        "Granite, quartz, marble, and laminate surfaces expertly cut and installed.",
    },
    {
      title: "CNC Cutting & Engraving Service",
      description:
        "Precision cutting for panels, patterns, and custom shapes with advanced CNC technology.",
    },
    {
      title: "Edge Banding & Finishing",
      description:
        "Professional panel finishing for a polished, high-quality look.",
    },
    {
      title: "PVC Foil Wrapping & Laminating",
      description:
        "Decorative and protective surface treatments to extend durability and style.",
    },
    {
      title: "Interior Fit-outs & Renovations",
      description:
        "Full service design, build, and installation for homes and offices, including cut-to-size solutions.",
    },
  ];

  return (
    <section id="services" className="services-section" data-aos="fade-up">
      <div className="services-container">
        <h2 className="services-title">
          Our <span>Services</span>
        </h2>
        <div className="services-grid">
          {serviceItems.map((service, index) => (
            <div className="service-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
