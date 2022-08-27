function format(seconds) {
    let s = (seconds % 60).toString();
    let m = Math.floor(seconds / 60 % 60).toString();
    let h = Math.floor(seconds / 60 / 60 % 60).toString();
    return `${h.padStart(2,'0')}:${m.padStart(2,'0')}:${s.padStart(2,'0')}`;
  }
  
  console.log(format(3600));