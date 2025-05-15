
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/lovable-uploads/be53b96c-d1b9-4ed5-a7be-5d199f4121ea.png",
    title: "Installation d'antennes",
    description: "Installation professionnelle d'équipements de communication pour une connectivité optimale"
  },
  {
    id: 2,
    image: "/lovable-uploads/19887adc-8c7e-4b36-b05f-d501304ac9cc.png",
    title: "Maintenance de serveurs",
    description: "Service de maintenance de serveurs par des techniciens qualifiés"
  },
  {
    id: 3,
    image: "/lovable-uploads/434a0c38-050c-43c5-a8ac-86a8be9605ec.png",
    title: "Solutions informatiques complètes",
    description: "Matériel informatique et maintenance pour particuliers et entreprises"
  },
  {
    id: 4,
    image: "/lovable-uploads/5dad7fa3-d81c-456d-9d45-798adf8c986e.png",
    title: "Réparation de composants",
    description: "Réparation minutieuse et professionnelle de tous vos composants électroniques"
  },
  {
    id: 5,
    image: "/lovable-uploads/801d5b44-8f1f-479d-9c54-5e6bc1e518aa.png",
    title: "Dépannage informatique",
    description: "Service de dépannage et réparation d'ordinateurs par nos experts"
  }
];

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>
          <div className="absolute inset-0 bg-black/60"></div>
          
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl text-white">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl opacity-90 animate-fade-in animation-delay-300">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Diapositive précédente"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Diapositive suivante"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-colors",
              index === currentSlide ? "bg-white" : "bg-white/50 hover:bg-white/70"
            )}
            aria-label={`Aller à la diapositive ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
