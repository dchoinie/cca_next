"use client";

import { format, parseISO } from "date-fns";
import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  event: {
    id: string;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    location: string;
    link: string;
    isAllDay: boolean;
  };
}

export function EventCard({ event }: EventCardProps) {
  const formatEventDate = (dateString: string, isAllDay: boolean) => {
    try {
      const date = parseISO(dateString);
      if (isAllDay) {
        return format(date, "EEEE, MMMM d, yyyy");
      } else {
        return format(date, "EEEE, MMMM d, yyyy 'at' h:mm a");
      }
    } catch (error) {
      return "Date unavailable";
    }
  };

  const formatEventTime = (startDate: string, endDate: string, isAllDay: boolean) => {
    if (isAllDay) return "All Day";
    
    try {
      const start = parseISO(startDate);
      const end = parseISO(endDate);
      
      const startTime = format(start, "h:mm a");
      const endTime = format(end, "h:mm a");
      
      return `${startTime} - ${endTime}`;
    } catch (error) {
      return "Time unavailable";
    }
  };

  const isToday = () => {
    try {
      const eventDate = parseISO(event.startDate);
      const today = new Date();
      return (
        eventDate.getDate() === today.getDate() &&
        eventDate.getMonth() === today.getMonth() &&
        eventDate.getFullYear() === today.getFullYear()
      );
    } catch (error) {
      return false;
    }
  };

  const isTomorrow = () => {
    try {
      const eventDate = parseISO(event.startDate);
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return (
        eventDate.getDate() === tomorrow.getDate() &&
        eventDate.getMonth() === tomorrow.getMonth() &&
        eventDate.getFullYear() === tomorrow.getFullYear()
      );
    } catch (error) {
      return false;
    }
  };

  return (
    <Card className="h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-semibold text-primary line-clamp-2">
            {event.title}
          </CardTitle>
          <div className="flex gap-1">
            {isToday() && (
              <Badge variant="destructive" className="text-xs">
                Today
              </Badge>
            )}
            {isTomorrow() && (
              <Badge variant="secondary" className="text-xs">
                Tomorrow
              </Badge>
            )}
            {event.isAllDay && (
              <Badge variant="outline" className="text-xs">
                All Day
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <div className="flex items-center text-sm text-slate-600">
          <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
          <span>{formatEventDate(event.startDate, event.isAllDay)}</span>
        </div>
        
        {!event.isAllDay && (
          <div className="flex items-center text-sm text-slate-600">
            <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>{formatEventTime(event.startDate, event.endDate, event.isAllDay)}</span>
          </div>
        )}
        
        {event.location && (
          <div className="flex items-start text-sm text-slate-600">
            <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
            <span className="line-clamp-2">{event.location}</span>
          </div>
        )}
        
        {event.description && (
          <p className="text-sm text-slate-600 line-clamp-3">
            {event.description}
          </p>
        )}
        
        <div className="pt-2">
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            onClick={() => window.open(event.link, '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View Event
          </Button>
        </div>
      </CardContent>
    </Card>
  );
} 