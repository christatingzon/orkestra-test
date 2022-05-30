<script>
import { Line } from 'vue-chartjs';
export default {
  name: 'MyChart',
  extends: Line,
  props: {
    labels: {
      type: Array,
      default: () => ([])
    },
    dataValue: {
      type: Array,
      default: () => ([])
    },
  },
  data () {
    return {
      showLine: false,
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'Dataset',
            color: '#102D4C',
            borderColor: '#102D4C',
            backgroundColor: 'transparent',
            data: this.dataValue
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales:
        {
          xAxes: [{
            gridLines : {
              display : false
            },
            ticks: {
              autoSkip: true,
              maxTicksLimit: 10,
              maxRotation: 0,
              minRotation: 0
            }
          }],
          yAxes: [
            {
              ticks: {
                callback(label, index, labels) {
                  return label/1000+'k';
                }
              }
            }
          ]
        },
        elements: {
          point:{
            radius: 0
          }
        }
      }
    };
  },
  mounted () {
    this.showLine = true;
    this.renderChart(this.data, this.options);
  }
};
</script>