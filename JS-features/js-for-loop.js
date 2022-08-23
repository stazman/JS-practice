let myHand = [ 2, 4, 6, 3 ]

let result = 0;

function findHighestCard1(){
  for (let i = 0; i < myHand.length; i+=2){
    if (myHand[i] > myHand[i+1]){
      result = myHand[i]
    }
  }
  return result;
}

findHighestCard1()

// This results in 6


function findHighestCard2(){
  for (let i = 0; i < myHand.length; i+=2){
    if (myHand[i] > myHand[i+1]){
      result = myHand[i]
    }
  }
  return result;
}

findHighestCard2()

// This still results in 6 because 6 is at index 2



function findHighestCard3(){
  for (let i = 0; i < myHand.length; i+=3){
    if (myHand[i] > myHand[i+1]){
      result = myHand[i]
    }
  }
  return result;
}

findHighestCard3()

//This results in 0 because there's nothing to compare after index 3
