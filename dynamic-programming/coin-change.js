function getWays(n, coins) {
  // we have reached 0, therefore there is 1 solution
  if (n === 0) return 1;

  // there are no solutions if we get here, as the coin deducted previously didn't fit remaining value
  if (n < 0) return 0;

  // if there are no coins (and n is still greater than 0), then there are no solutions here
  if (coins.length === 0) return 0;

  const numberOfWaysWithRestOfCoins = getWays(n, coins.slice(1)); // 4, [2,3] = 2
  const numberOfWaysUsingThisCoin = getWays(n - coins[0], coins); // 2, [1,2,3] = 2
  return numberOfWaysWithRestOfCoins + numberOfWaysUsingThisCoin;
}

// function getWays(n, coins) {
//   let i, j, x, y;
//
//   let table = new Array(n + 1);
//   for (let i = 0; i < n + 1; i++) {
//     table[i] = new Array(coins.length);
//   }
//
//   for (let i = 0; i < coins.length; i++) {
//     table[0][i] = 1;
//   }
//
//   for (i = 1; i < n + 1; i++) {
//     for (j = 0; j < coins.length; j++) {
//       x = i - coins[j] >= 0 ? table[i - coins[j]][j] : 0;
//       y = j >= 1 ? table[i][j - 1] : 0;
//
//       table[i][j] = x + y;
//     }
//   }
//   console.log(table);
//
//   return table[n][coins.length - 1];
// }

// console.log(`n = 0 => `, getWays(0, coins));
// console.log(`coins = [] => `, getWays(n, []));
// console.log(`n = 1, coins = [1] =>`, getWays(1, [1]));
// console.log(`n = 2, coins = [1] =>`, getWays(2, [1]));
console.log(getWays(4, [1, 2, 3]));
