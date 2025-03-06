"use client";

import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

const testimonials = [
  {
    text: "I love knowing my children's teachers know them well because the class sizes are small. The 15 student per room capacity is reassuring.",
    date: "April 16th, 2021",
  },
  {
    text: "We are so happy for our three children. Faith is taught throughout each subject matter and in regular daily life. The teachers are veterans who devote themselves to educating our children and helping form their character.",
    date: "October 13th, 2019",
  },
  {
    text: "Our children excel academically and learn God's Word to apply to their life every day.",
    date: "January 9th, 2021",
  },
  {
    text: "What a blessing this school has been to so many our daughter. I thank God for this school!  At CCA we are blessed to receive a great education and to get to know Jesus.  The staff is amazing.",
    date: "July 26, 2022",
  },
  {
    text: "What a blessing this school has been to so many students and to our daughter. I praise God for a school that encourages us to know Christ and his word and to hear His great love for us!  What good is a marvelous education if we don't also learn about Christ and receive his innumerable gifts?  At CCA we are blessed to receive both a great education in  the matters of this world and the one to come!  The staff are all well trained and gifted in music and all the areas of classical education.   Amazing and gifted people!",
    date: "March 26th, 2021",
  },
  {
    text: "A school to grow closer to Christ and share Him with others.",
    date: "February 2nd, 2018",
  },
];

const truncateText = (text: string, maxLength: number = 200) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
};

export function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-16 bg-primary/5">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-medium text-primary mb-3 font-serif">
            What Our Families Say
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light tracking-wide">
            Testimonials from the CCA Community
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              containScroll: "trimSnaps",
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3">
                  <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 min-h-[400px] md:min-h-[500px] flex flex-col">
                    <Quote className="h-8 w-8 text-primary mb-4 flex-shrink-0" />
                    <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 flex-grow">
                      {truncateText(testimonial.text)}
                    </blockquote>
                    <p className="text-sm text-gray-500 italic flex-shrink-0">
                      {testimonial.date}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
