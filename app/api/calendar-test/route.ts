import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const calendarId = process.env.GOOGLE_CALENDAR_ID;
    const apiKey = process.env.GOOGLE_CALENDAR_API_KEY;

    // Check if environment variables are set
    const envCheck = {
      calendarId: !!calendarId,
      apiKey: !!apiKey,
      calendarIdValue: calendarId ? `${calendarId.substring(0, 10)}...` : 'Not set',
      apiKeyValue: apiKey ? `${apiKey.substring(0, 10)}...` : 'Not set'
    };

    if (!calendarId || !apiKey) {
      return NextResponse.json({
        status: 'error',
        message: 'Environment variables not configured',
        details: envCheck
      });
    }

    // Test with a simple calendar info request first
    const testUrl = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}?key=${apiKey}`;
    
    console.log('Testing calendar access with URL:', testUrl.replace(apiKey, 'API_KEY_HIDDEN'));
    
    const response = await fetch(testUrl);
    
    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json({
        status: 'error',
        message: `Calendar access failed: ${response.status}`,
        details: {
          status: response.status,
          statusText: response.statusText,
          error: errorText,
          envCheck
        }
      });
    }

    const calendarInfo = await response.json();
    
    return NextResponse.json({
      status: 'success',
      message: 'Calendar access successful',
      calendarInfo: {
        id: calendarInfo.id,
        summary: calendarInfo.summary,
        accessRole: calendarInfo.accessRole,
        primary: calendarInfo.primary
      },
      envCheck
    });

  } catch (error) {
    console.error('Calendar test error:', error);
    return NextResponse.json({
      status: 'error',
      message: 'Test failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
} 