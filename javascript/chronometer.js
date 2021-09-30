class Chronometer {
  constructor() {
    this.currentTime = 58;
    this.intervalId = null;
  }

  start(callback) {
   this.intervalId = setInterval(()=>{
      this.currentTime++;
      if (typeof callback === "function") callback();
    },1000) 
  }

  getMinutes() {
   let minutes = Math.trunc(this.currentTime/60);
   return minutes; 
    
  }

  getSeconds() {
    let seconds = this.currentTime %  60;
    return seconds;

  }

  computeTwoDigitNumber(value) {
    if(value < 10){
      return  "0"+value; 
    }else {
      return value.toString();
    }
  }

  stop() {
    clearInterval(this.intervalId);
    }

  reset() {
   this.currentTime = 0;
  }

  split() {
  const seconds = this.computeTwoDigitNumber(this.getSeconds());
  const minutes = this.computeTwoDigitNumber(this.getMinutes());
  return `${minutes}:${seconds}`;  

  }
}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
