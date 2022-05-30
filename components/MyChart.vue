

<script>
import { Line } from 'vue-chartjs';
export default {
  name: 'MyChart',
  extends: Line,
  data () {
    return {
      showLine: false,
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#102D4C',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  mounted () {
    this.showLine = true;
    this.renderChart(this.data, this.options);
  }
};
</script>