document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      // Configuration options
    });
    calendar.render();
  });
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth', // Set the initial view of the calendar (e.g., month, week, day)
    events: '/events', // Fetch events from a URL or provide an array of event objects
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    eventClick: function(info) {
      // Handle event click
    },
    // More configuration options...
  });  
  var calendar = new FullCalendar.Calendar(calendarEl, {
    events: [
      {
        title: 'Event 1',
        start: '2024-01-01',
        end: '2024-01-03'
      },
      {
        title: 'Event 2',
        start: '2024-01-05',
        end: '2024-01-07'
      },
      // More event objects...
    ]
  });
  