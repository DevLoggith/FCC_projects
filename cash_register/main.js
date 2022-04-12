// Design a cash register drawer function checkCashRegister() that accepts
// purchase price as the first argument (price), payment as the second argument
// (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a
// status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less
// than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value
// for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in
// coins and bills, sorted in highest to lowest order, as the value of the
// change key.

// ---------------------------------------------------------------------------

const LOOKUP = {
  PENNY: 1,
  NICKLE: 5,
  DIME: 10,
  QUARTER: 25,
  ONE: 100,
  FIVE: 500,
  TEN: 1000,
  TWENTY: 2000,
  'ONE HUNDRED': 10000
}

function checkCashRegister(price, cash, cid) {
  // store variable with amount of change due
  const changeDue = cash - price;
  // store change due in cents
  let changeDueCents = changeDue * 100;
  // sum up all money in cash drawer
  const availInCents = cid.reduce((acc, billType) => {
    return acc + billType[1] * 100;
  }, 0)
  // if cash in drawer === change due, return
  // {status: "CLOSED", change: cid} with cid being the change key value
  if (availInCents === changeDueCents) {
    return {status: "CLOSED", change: cid};
  }
  // reverse cid array, loop through with map, add up money needed for each bill
  // type
  const change = cid.reverse().map(([name, amount]) => {
    let total = 0;
    const nameValue = LOOKUP[name];
    let amountCents = amount * 100;
    // loop while change due is more than bill value, and amount of money for
    // bill is enough
    while(nameValue <= changeDueCents && amountCents > 0) {
      // add one bills value to total
      total += nameValue;
      // subtract that nameValue from from change due
      changeDueCents -= nameValue;
      // subtract that nameValue from how much money of that billType is
      // available
      amountCents -= nameValue;
    }
    return [name, total / 100];
  // filter out denominations === 0
  }).filter(([, amt]) => amt > 0);
  const changeTotal = change.reduce((acc, [, amt]) => {
    return acc + amt;
  }, 0.00);
  if (changeTotal < changeDue) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  return {status: "OPEN", change: change}
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05],
["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20],
["TWENTY", 60], ["ONE HUNDRED", 100]]);