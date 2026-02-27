"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const progress = progressRef.current;
    if (!container || !progress) return;

    const nodes = gsap.utils.toArray<HTMLElement>(".timeline-node");
    const boxes = gsap.utils.toArray<HTMLElement>(".timeline-box");

    ScrollTrigger.create({
      trigger: container,
      start: "top 60%",
      end: "bottom 30%",
      scrub: 0.6,
      onUpdate: (self) => {
        const percent = self.progress;

        // پر شدن خط
        gsap.set(progress, { height: `${percent * 100}%` });

        nodes.forEach((node, i) => {
          const nodeTop = node.getBoundingClientRect().top + window.scrollY;
          const containerTop =
            container.getBoundingClientRect().top + window.scrollY;

          const relative = nodeTop - containerTop;
          const currentHeight = container.offsetHeight * percent;

          if (currentHeight >= relative) {
            node.classList.add("active");
            boxes[i].classList.add("active");
          } else {
            node.classList.remove("active");
            boxes[i].classList.remove("active");
          }
        });
      },
    });
  }, []);

  type TCards = {
    title: string;
    description: string;
    icon: any;
  };

  const Cards: TCards[] = [
    {
      title: "سئو و بهینه سازی موتور جست و جو",
      description:
        "بهینه‌سازی تخصصی سایت بر اساس اصول فنی و محتوایی برای افزایش رتبه در گوگل و جذب ترافیک هدفمند.",
      icon: (
        <svg
          width="15"
          height="15"
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
      title: "توسعه وبسایت",
      description:
        "طراحی و توسعه وبسایت‌های مدرن، سریع و سئو‌محور با تمرکز بر تجربه کاربری و افزایش نرخ تبدیل.",
      icon: (
        <svg
          width="15"
          height="15"
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
      title: "گوگل ادز",
      description:
        "طراحی و مدیریت کمپین‌های تبلیغاتی گوگل برای جذب سریع مخاطب، کاهش هزینه کلیک و افزایش بازدهی فروش.",
      icon: (
        <svg
          width="20"
          height="20"
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
  ];

  return (
    <section ref={containerRef} className="relative max-w-7xl mx-auto py-14">
      <div className="absolute right-8 top-0 h-full w-1 bg-gray-700 rounded-full">
        <div
          ref={progressRef}
          className="w-full bg-purple-500 rounded-full h-0"
        />
      </div>

      <div className="flex flex-col gap-20">
        {Cards.map((item, i) => (
          <div key={i} className="relative flex items-center">
            <div className="timeline-box w-8/10 md:w-2/3 lg:w-1/2 p-6 rounded-xl glass transition-all duration-500 text-white mr-10">
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm opacity-70">{item.description}</p>
            </div>

            <div className="timeline-node absolute right-3.25 p-3 text-[5px] rounded-full glass transition-all duration-300" >
              {item.icon}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .timeline-node.active {
          transform: scale(1.3);
        }

        .timeline-box.active {
          transform: translateX(-10px);
        }
      `}</style>
    </section>
  );
}
