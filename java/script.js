$(document).ready(function() {
  // Initialize FullCalendar
  var calendar = $('#calendar').fullCalendar({
    // Your options here
    header: {
      left: '',
      center: 'title',
      right: ''
    },
    events: [
      // January
      {
        title: 'New Year\'s Day',
        start: '2024-01-01',
        rendering: 'background',
        color: '#FFD700' // Highlight as a holiday
      },
      {
        title: 'Open House',
        start: '2024-01-06T10:00:00',
        end: '2024-01-06T16:00:00'
      },
      {
        title: '3D Printing Workshop',
        start: '2024-01-15T14:00:00',
        end: '2024-01-15T16:00:00'
      },
      {
        title: 'Arduino Basics Class',
        start: '2024-01-24T18:00:00',
        end: '2024-01-24T20:00:00'
      },
      // ... Continue adding events for each month
      // February
      {
        title: 'Virtual Reality Demo',
        start: '2024-02-05T15:00:00',
        end: '2024-02-05T17:00:00'
      },
      {
        title: 'Circuit Design Workshop',
        start: '2024-02-13T19:00:00',
        end: '2024-02-13T21:00:00'
      },
      {
        title: 'Robotics Club Meeting',
        start: '2024-02-21T17:30:00',
        end: '2024-02-21T19:00:00'
      },
      {
        title: 'Makerspace Tour',
        start: '2024-02-28T11:00:00',
        end: '2024-02-28T12:30:00'
      },
      // March
      {
        title: '3D Printer Maintenance Class',
        start: '2024-03-05T18:30:00',
        end: '2024-03-05T20:30:00'
      },
      {
        title: 'Laser Cutting Workshop',
        start: '2024-03-12T14:00:00',
        end: '2024-03-12T16:00:00'
      },
      {
        title: 'Robotics Challenge Day',
        start: '2024-03-20T10:00:00',
        end: '2024-03-20T16:00:00'
      },
      {
        title: 'Closed - Staff Training',
        start: '2024-03-27',
        end: '2024-03-27'
      },
      // April
      {
        title: 'Easter Break',
        start: '2024-04-01',
        end: '2024-04-05'
      },
      {
        title: 'DIY Electronics Workshop',
        start: '2024-04-10T19:00:00',
        end: '2024-04-10T21:00:00'
      },
      {
        title: 'Makerspace Social Night',
        start: '2024-04-18T18:00:00',
        end: '2024-04-18T20:00:00'
      },
      {
        title: 'CNC Milling Demo',
        start: '2024-04-25T15:00:00',
        end: '2024-04-25T17:00:00'
      },
       // May
       {
        title: 'May Day Celebration',
        start: '2024-05-01T12:00:00',
        end: '2024-05-01T16:00:00'
      },
      {
        title: 'Soldering Workshop',
        start: '2024-05-10T18:30:00',
        end: '2024-05-10T20:30:00'
      },
      {
        title: 'Makerspace Social Night',
        start: '2024-05-20T19:00:00',
        end: '2024-05-20T21:00:00'
      },
      {
        title: 'DIY Robotics Class',
        start: '2024-05-28T15:00:00',
        end: '2024-05-28T17:00:00'
      },
      // June
      {
        title: '3D Printing Showcase',
        start: '2024-06-05T14:00:00',
        end: '2024-06-05T16:00:00'
      },
      {
        title: 'Laser Engraving Workshop',
        start: '2024-06-15T18:00:00',
        end: '2024-06-15T20:00:00'
      },
      {
        title: 'Makerspace Tour',
        start: '2024-06-25T11:00:00',
        end: '2024-06-25T12:30:00'
      },
      // July
      {
        title: 'Independence Day Celebration',
        start: '2024-07-04',
        rendering: 'background',
        color: '#FFD700'
      },
      {
        title: 'Robotics Challenge Day',
        start: '2024-07-15T10:00:00',
        end: '2024-07-15T16:00:00'
      },
      {
        title: 'CNC Machining Demo',
        start: '2024-07-23T15:30:00',
        end: '2024-07-23T17:30:00'
      },
      // August
      {
        title: 'Augmented Reality Workshop',
        start: '2024-08-07T16:00:00',
        end: '2024-08-07T18:00:00'
      },
      {
        title: 'Sustainable Materials Seminar',
        start: '2024-08-18T19:00:00',
        end: '2024-08-18T21:00:00'
      },
      {
        title: '3D Printer Maintenance Class',
        start: '2024-08-28T18:30:00',
        end: '2024-08-28T20:30:00'
      },
      {
        title: 'Labor Day - Closed',
        start: '2024-09-02',
        rendering: 'background',
        color: '#FFD700'
      },
      {
        title: 'Makerspace Social Night',
        start: '2024-09-12T19:00:00',
        end: '2024-09-12T21:00:00'
      },
      {
        title: '3D Printer Workshop',
        start: '2024-09-20T15:00:00',
        end: '2024-09-20T17:00:00'
      },
      {
        title: 'Robotics Club Meeting',
        start: '2024-09-28T17:30:00',
        end: '2024-09-28T19:00:00'
      },
      // October
      {
        title: 'Arduino Basics Class',
        start: '2024-10-08T18:00:00',
        end: '2024-10-08T20:00:00'
      },
      {
        title: 'Virtual Reality Demo',
        start: '2024-10-15T15:00:00',
        end: '2024-10-15T17:00:00'
      },
      {
        title: 'CNC Machining Workshop',
        start: '2024-10-23T14:00:00',
        end: '2024-10-23T16:00:00'
      },
      {
        title: 'Halloween Costume Party',
        start: '2024-10-31T19:30:00',
        end: '2024-10-31T22:00:00'
      },
      // November
      {
        title: 'Election Day - Open House',
        start: '2024-11-05T10:00:00',
        end: '2024-11-05T16:00:00'
      },
      {
        title: 'Soldering Workshop',
        start: '2024-11-14T18:30:00',
        end: '2024-11-14T20:30:00'
      },
      {
        title: 'Makerspace Tour',
        start: '2024-11-22T11:00:00',
        end: '2024-11-22T12:30:00'
      },
      {
        title: 'Thanksgiving Day - Closed',
        start: '2024-11-28',
        rendering: 'background',
        color: '#FFD700'
      },
      // December
      {
        title: 'Holiday Lights Decoration',
        start: '2024-12-07T16:30:00',
        end: '2024-12-07T18:30:00'
      },
      {
        title: 'DIY Electronics Workshop',
        start: '2024-12-15T19:00:00',
        end: '2024-12-15T21:00:00'
      },
      {
        title: 'Christmas Day - Closed',
        start: '2024-12-25',
        rendering: 'background',
        color: '#FFD700'
      }
    ]
  });


  // Add event listeners for view buttons
  $('#monthBtn').click(function() {
    calendar.fullCalendar('changeView', 'month');
  });

  $('#weekBtn').click(function() {
    calendar.fullCalendar('changeView', 'agendaWeek');
  });

  $('#dayBtn').click(function() {
    calendar.fullCalendar('changeView', 'agendaDay');
  });

  // Add event listeners for prev and next buttons
  $('#prevBtn').click(function() {
    calendar.fullCalendar('prev');
  });

  $('#nextBtn').click(function() {
    calendar.fullCalendar('next');
  });
});