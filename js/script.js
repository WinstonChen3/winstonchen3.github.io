$(document).ready(function() {
  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },
    events: [
      {
        title: 'Coding Class',
        start: '2024-01-05',
      },
      {
        title: 'Woodworks',
        start: '2024-01-08',
      },
      {
        title: '3D Basics',
        start: '2024-01-15',
      },
      {
        title: 'Electronic Wiring',
        start: '2024-01-21',
      },
      {
        title: 'RC Building',
        start: '2024-01-31',
      },
      {
        title: 'Automobile Analysis',
        start: '2024-02-7',
      },
      {
        title: 'Battle Bots',
        start: '2024-01-18',
      },
      {
        title: '3D Intermediate',
        start: '2024-01-25',
      },
      {
        title: 'AR and VR, Whats the difference?',
        start: '2024-01-13',
      },
      // Add more events as needed
    ]
  });
});
