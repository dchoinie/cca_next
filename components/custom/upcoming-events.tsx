"use client";

import { useEffect, useState } from "react";
import { EventCard } from "./event-card";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Container from "@/components/custom/container";

interface Event {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  link: string;
  isAllDay: boolean;
}

interface UpcomingEventsProps {
  maxEvents?: number;
  showTitle?: boolean;
  className?: string;
}

export function UpcomingEvents({ 
  maxEvents = 3, 
  showTitle = true,
  className = "" 
}: UpcomingEventsProps) {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const response = await fetch('/api/calendar-events');
        
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        
        const data = await response.json();
        
        if (data.error) {
          throw new Error(data.error);
        }
        
        setEvents(data.events.slice(0, maxEvents));
      } catch (err) {
        console.error('Error fetching events:', err);
        setError(err instanceof Error ? err.message : 'Failed to load events');
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, [maxEvents]);

  if (isLoading) {
    return (
      <div className={`space-y-4 ${className}`}>
        {showTitle && (
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl font-semibold text-primary mb-2">
              Upcoming Events
            </h2>
            <p className="text-slate-600">
              Stay informed about our latest school events and activities
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: maxEvents }).map((_, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <div className="space-y-3">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-4 w-2/3" />
                  <Skeleton className="h-4 w-1/3" />
                  <Skeleton className="h-8 w-full mt-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`space-y-4 ${className}`}>
        {showTitle && (
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl font-semibold text-primary mb-2">
              Upcoming Events
            </h2>
            <p className="text-slate-600">
              Stay informed about our latest school events and activities
            </p>
          </div>
        )}
        
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Unable to load upcoming events. Please check back later or visit our full calendar.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className={`space-y-4 ${className}`}>
        {showTitle && (
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl font-semibold text-primary mb-2">
              Upcoming Events
            </h2>
            <p className="text-slate-600">
              Stay informed about our latest school events and activities
            </p>
          </div>
        )}
        
        <div className="text-center py-12">
          <p className="text-slate-600 mb-4">
            No upcoming events scheduled at this time.
          </p>
          <p className="text-sm text-slate-500">
            Check our full calendar for more information about school activities.
          </p>
        </div>
      </div>
    );
  }

  return (
    <Container className="py-16">
      <div className={`space-y-4 ${className}`}>
        {showTitle && (
        <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-medium text-primary mb-3 font-serif">
          Upcoming Events
        </h2>
        <p className="text-lg md:text-xl text-gray-600 font-light tracking-wide">
          Stay informed about our latest school events and activities
        </p>
      </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        
        <div className="text-center pt-6">
          <a
            href="/events/calendar"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-sm font-medium"
          >
            View Full Calendar
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </Container>
  );
} 