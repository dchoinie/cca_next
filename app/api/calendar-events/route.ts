import { NextRequest, NextResponse } from 'next/server';

interface GoogleCalendarEvent {
  id: string;
  summary: string;
  description?: string;
  start: {
    dateTime?: string;
    date?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
  };
  location?: string;
  htmlLink: string;
}

interface CalendarResponse {
  items: GoogleCalendarEvent[];
}

export async function GET(request: NextRequest) {
  try {
    const calendarId = process.env.GOOGLE_CALENDAR_ID;
    const apiKey = process.env.GOOGLE_CALENDAR_API_KEY;

    // Debug logging
    console.log('Calendar ID:', calendarId ? 'Set' : 'Missing');
    console.log('API Key:', apiKey ? 'Set' : 'Missing');

    if (!calendarId || !apiKey) {
      return NextResponse.json(
        { 
          error: 'Calendar configuration missing',
          details: {
            calendarId: !!calendarId,
            apiKey: !!apiKey
          }
        },
        { status: 500 }
      );
    }

    // Get current date in ISO format
    const now = new Date().toISOString();
    
    // Get events from now until 3 months from now
    const threeMonthsFromNow = new Date();
    threeMonthsFromNow.setMonth(threeMonthsFromNow.getMonth() + 3);
    const timeMax = threeMonthsFromNow.toISOString();

    const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?key=${apiKey}&timeMin=${now}&timeMax=${timeMax}&singleEvents=true&orderBy=startTime&maxResults=10`;

    console.log('Requesting URL:', url.replace(apiKey, 'API_KEY_HIDDEN'));

    const response = await fetch(url);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Google Calendar API Error Details:', {
        status: response.status,
        statusText: response.statusText,
        errorText: errorText
      });
      throw new Error(`Google Calendar API error: ${response.status} - ${errorText}`);
    }

    const data: CalendarResponse = await response.json();
    
    // Filter and format events
    const upcomingEvents = data.items
      .filter(event => {
        // Filter out all-day events that are in the past
        if (event.start.date) {
          const eventDate = new Date(event.start.date);
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          return eventDate >= today;
        }
        return true;
      })
      .slice(0, 3) // Get only the first 3 events
      .map(event => ({
        id: event.id,
        title: event.summary,
        description: event.description || '',
        startDate: event.start.dateTime || event.start.date,
        endDate: event.end.dateTime || event.end.date,
        location: event.location || '',
        link: event.htmlLink,
        isAllDay: !event.start.dateTime,
      }));

    return NextResponse.json({ events: upcomingEvents });
  } catch (error) {
    console.error('Error fetching calendar events:', error);
    return NextResponse.json(
      { error: 'Failed to fetch calendar events' },
      { status: 500 }
    );
  }
} 