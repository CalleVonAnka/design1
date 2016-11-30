$(document).ready(function(){
  //gets the nav bar height
  var headerHeight = $('nav').outerHeight();
  $('.slide-section').click(function(e){
    //gets the clicked attribute
    var linkHref = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(linkHref).offset().top - headerHeight
    }, 1000);

    e.preventDefault();
  });
});

// scrolls the logo in nav bar
$(window).scroll(function() {
  var theta = $(window).scrollTop() / 500 % Math.PI;
  $('#logo').css({ transform: 'rotate(' + theta + 'rad)' });
});

// Chart page study
var canvas = document.getElementById('myChart');

var data = {
  labels: ["10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"],
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
