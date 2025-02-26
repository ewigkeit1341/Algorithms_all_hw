function minTurnsToUnlockLock(current, target) {
    let totalTurns = 0;
  
    for (let i = 0; i < current.length; i++) {
      const curDigit = parseInt(current[i], 10);
      const targetDigit = parseInt(target[i], 10);
  
     
      const clockwise = (targetDigit - curDigit + 10) % 10;
  
    
      const counterClockwise = (curDigit - targetDigit + 10) % 10;
  

      totalTurns += Math.min(clockwise, counterClockwise);
    }
  
    return totalTurns;
  }
  

  const currentCode = "1234"; 
  const targetCode = "5678"; 
  
  const result = minTurnsToUnlockLock(currentCode, targetCode);
  console.log(`Минимальное количество оборотов: ${result}`);
  