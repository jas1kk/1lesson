function timeStr(t){
    t=t.split(',').map(i=>!i?'00':i);
    return t.join(':');
  }
  alert(timeStr('24,,23'));