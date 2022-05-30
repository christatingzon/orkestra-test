export default {
  methods: {
    NumToTime(num) { 
      const hours = Math.floor(num / 60);  
      let minutes = num % 60;
      if (minutes + ''.length < 2) {
        minutes = '0' + minutes; 
      }
      return hours + ':' + minutes;
    }
  }
};