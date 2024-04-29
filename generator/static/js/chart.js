function initializeChart() {
    const genders = ['Male', 'Female'];
    const counts = [{{ male_count }}, {{ female_count }}];

    const ctx1 = document.getElementById('chart1').getContext('2d');
    new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: genders,
            datasets: [{
                label: 'Number of Cases',
                data: counts,
                backgroundColor: ['#89feff', '#ff89cf']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Call the initializeChart function when the document is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeChart();
});