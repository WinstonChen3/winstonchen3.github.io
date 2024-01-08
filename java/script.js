$(document).ready(function() {
  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },
    events: [
      {
        title: 'Event 1',
        start: '2024-01-01',
        end: '2024-01-02'
      },
      {
        title: 'Event 2',
        start: '2024-01-05',
        end: '2024-01-07'
      },
      {
        title: 'Event 3',
        start: '2024-01-09',
        end: '2024-01-10'
      }
      // Add more events as needed
    ]
  });
});