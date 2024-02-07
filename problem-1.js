function calculateMoney(ticket ) {
    let gurdBill = 500;
   let perPersonLunch = 50;
   let eightPersonLunchBill = perPersonLunch*8
   let perDayTotalCost = gurdBill+eightPersonLunchBill;
   let ticketPrice = 120;
   let perDayIncome = (ticketPrice*ticket)-perDayTotalCost
   return perDayIncome
}

let ticketSell = calculateMoney( 10)
console.log(ticketSell)