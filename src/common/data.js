export const headingContent = [
  { title: "Heading1", info: "content for heading1" },
  { title: "Heading1", info: "content for heading1" },
  { title: "Heading1", info: "content for heading1" }
];

// data for bar data
export const barData = {
  labels: ['Con 1', 'Con 2', 'Con 3', 'Con 4', 'Con 5', 'Con 6'],
  datasets: [
    {
      label: 'Blue color code',
      data: [300, 250, 400, 700, 800, 1000],
      backgroundColor: 'rgb(54, 162, 235)',
    },
    {
      label: 'Orange color code',
      data: [200, 300, 150, 700, 800, 1000],
      backgroundColor: 'rgb(255, 159, 64)',
    },
  ],
};

export const barOptions = {
  indexAxis: 'y',
  plugins: {
    datalabels: {
      display: false,  // Disable datalabels for bar chart
    },
    tooltip: {
      enabled: true,  // Tooltip will still show on hover if needed
    },
  },
};

// Data for Line Chart
export const lineData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Blue color code',
      data: [200, 300, 500, 700, 600, 800, 600, 700, 500, 600, 800, 900],
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      fill: true,
      tension: 0.4, // Smooth curve for the line
    },
    {
      label: 'Orange color code',
      data: [100, 400, 300, 500, 400, 600, 500, 600, 400, 500, 700, 800],
      borderColor: 'rgba(255, 159, 64, 1)',
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
      fill: true,
      tension: 0.4, // Smooth curve for the line
    },
  ],
};

export const lineOptions = {
  plugins: {
    datalabels: {
      display: false,  // Disable datalabels for line chart
    },
    tooltip: {
      enabled: true,  // Tooltip will still show on hover if needed
    },
  },
};

// Data for Donut Chart
export const donutData = {
  labels: ['orange', 'Blue'],
  datasets: [
    {
      data: [35, 65],  // Example data
      backgroundColor: ['#0979BB', ' #EE8728'],  // Segment colors
    },
  ],
};


// Donut chart options
export const donutOptions = {
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      display: false,
      color: 'black',
      formatter: (value, context) => {
        const data = context.chart.data.datasets[0].data;
        const total = data.reduce((acc, curr) => acc + curr, 0);
        const percentage = ((value / total) * 100).toFixed(2) + '%';
        return percentage;  // Display percentage for each slice
      },
      anchor: 'center',  // Center the label
      align: 'center',
      font: {
        size: 16,  // Adjust font size for percentage labels
        weight: 'bold',
      },
    },
  },
  cutout: '70%',  // Create the doughnut effect
  responsive: true,  // Enable responsiveness
  maintainAspectRatio: false,  // Allow custom sizing
  // Use beforeDraw to draw total percentage in the center
 
};
