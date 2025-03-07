import { PageHero } from "@/components/custom/page-hero";
import { SEO } from "@/components/custom/seo";

export default function CalendarPage() {
  return (
    <div className="bg-white">
      <SEO
        title="School Calendar"
        description="Stay informed about Concordia Classical Academy's upcoming events, holidays, and important dates. Access our comprehensive school calendar for chapel services, special events, and academic schedules."
        keywords={[
          "school calendar",
          "school events",
          "academic calendar",
          "school schedule",
          "school holidays",
          "chapel services",
          "school activities",
          "event calendar",
          "school dates",
          "academic schedule",
        ]}
        canonicalUrl="/events/calendar"
      />
      <PageHero
        title="School Calendar"
        subtitle="Stay up to date with school events and activities"
        backgroundImage="/ss_25.png"
      />

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="prose prose-slate max-w-3xl mx-auto text-center mb-16">
          <p className="text-slate-600 leading-relaxed">
            Our school calendar keeps you informed about upcoming events,
            holidays, and important dates. From chapel services to special
            events, you&apos;ll find everything you need to know to stay
            connected with our school community.
          </p>
        </div>

        {/* Calendar Container */}
        <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=04d1jv6i9db6of4cq4kag6487s%40group.calendar.google.com&ctz=America%2FChicago"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              frameBorder="0"
              scrolling="no"
            />
          </div>
        </div>

        {/* Note Section */}
        <div className="bg-primary/5 rounded-lg p-8 max-w-3xl mx-auto text-center mt-16">
          <p className="text-slate-600">
            The calendar is regularly updated with new events and any schedule
            changes. For the most current information, please check back
            regularly or subscribe to the calendar using the button in the
            bottom right corner of the calendar.
          </p>
        </div>
      </div>
    </div>
  );
}
