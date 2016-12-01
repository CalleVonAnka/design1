$(document).ready(function(){
  //gets the nav bar height
  var headerHeight = $('nav').outerHeight();
  $('.slide-section').click(function(e){
    //gets the clicked attribute
    var linkHref = $(this).attr('href');

    //nav scroll
    $('html, body').animate({
      scrollTop: $(linkHref).offset().top - headerHeight
    }, 1000);

    e.preventDefault();
  });

  //animations
  // hide our element on page load
  $('#a1').css('opacity', 0);
  $('.a2').css('opacity', 0);
  $('.a3').css('opacity', 0);
  $('.a4').css('opacity', 0);

  $('#a1').waypoint(function() {
      $('#a1').addClass('fadeInRight');
  }, { offset: '50%' });

  $('.a2').waypoint(function() {
      $('.a2').addClass('fadeInUp');
  }, { offset: '70%' });

  $('.a3').waypoint(function() {
      $('.a3').addClass('fadeInLeft');
  }, { offset: '50%' });

  $('.a4').waypoint(function() {
      $('.a4').addClass('fadeInRight');
  }, { offset: '50%' });

  //end of animations

  // Chart page study
  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21"],
      datasets: [{
        label: ' ',
        data: [0, 1, 3, 10, 8, 5, 1.5, 1, 2, 3, 4, 5, 0],
        backgroundColor: [
          'rgba(255, 255, 255, 0.2)',
          'rgba(255, 255, 255, 0.2)',
          'rgba(255, 255, 255, 0.2)',
          'rgba(255, 255, 255, 0.2)',
          'rgba(255, 255, 255, 0.2)',
          'rgba(255, 255, 255, 0.2)',
          'rgba(255, 255, 255, 0.2)',
          'rgba(255, 255, 255, 0.2)',
          'rgba(255, 255, 255, 0.2)',
          'rgba(255, 255, 255, 0.2)',
          'rgba(255, 255, 255, 0.2)',
          'rgba(255, 255, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255,255,255,1)',
          'rgba(255,255,255,1)',
          'rgba(255,255,255,1)',
          'rgba(255,255,255,1)',
          'rgba(255,255,255,1)',
          'rgba(255,255,255,1)',
          'rgba(255,255,255,1)',
          'rgba(255,255,255,1)',
          'rgba(255,255,255,1)',
          'rgba(255,255,255,1)',
          'rgba(255,255,255,1)',
          'rgba(255,255,255,1)',
          'rgba(255,255,255,1)',
        ],
        borderWidth: 1
      }]
    },
    options: {
      hover: {
        // Overrides the global setting
        mode: 'index',
        intersect: false
      },
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Background noise at different hours'
      },
      scales: {
        xAxes: [{
          display: true,
          barPercentage: 1.1
        }],
        yAxes: [{
          display: false,
          ticks: {beginAtZero:true}
        }]
      }
    }
  });

// end of doc ready
});

// scrolls the logo in nav bar
$(window).scroll(function() {
  var theta = $(window).scrollTop() / 500 % Math.PI;
  $('#logo').css({ transform: 'rotate(' + theta + 'rad)' });
});

// Chart page study
var canvas = document.getElementById("demo");

var data = {
  labels: ["09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21"],
  datasets: [
    {
      label: "Background noise at different hours",

      // The properties below allow an array to be specified to change the value of the item at the given index
      // String  or array - the bar color
      backgroundColor: "rgba(255,99,132,0.2)",

      // String or array - bar stroke color
      borderColor: "rgba(255,99,132,1)",

      // Number or array - bar border width
      borderWidth: 1,

      // String or array - fill color when hovered
      hoverBackgroundColor: "rgba(255,99,132,0.4)",

      // String or array - border color when hovered
      hoverBorderColor: "rgba(255,99,132,1)",

      // The actual data
      data: [1.5, 3, 10, 8, 5, 3, 1.5, 2, 3, 5, 5],

      // String - If specified, binds the dataset to a certain y-axis. If not specified, the first y-axis is used.
      yAxisID: "y-axis-0",
    }
  ]
};

var myBarChart = new Chart(canvas, {
  type: 'bar',
  data: data,
  options: {
    scales: {
        yAxes: [{
          display: false
        }]
      }
    }
});
