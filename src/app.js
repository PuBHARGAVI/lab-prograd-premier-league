//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName,managerAge,currentTeam,trophiesWon){
  var managerData=[managerName,managerAge,currentTeam,trophiesWon];
  return managerData;
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here

function createFormation(formationData){
  if(formationData.length==0){
    return null;
  }
  let object={
    "defender":formationData[0],
    "midfield":formationData[1],
    "forward":formationData[2]
  };
  return object;
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  if(year==null){
    return null;
  }
  return players.filter(player=>player.debut==year);
  
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){

  return players.filter(player=>player.position==position);
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName){
  var arr=players.filter(function(player){
    for(each of player.awards){
      if(each.name===awardName){
        return player;
      }
    }
  })
  return arr;
}

//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(awardName,noOfTimes){
  var arr=players.filter(function(player){
    var count=0;
    for(each of player.awards) {
      if (each.name==awardName)
      count+=1;
    }
      if (count==noOfTimes)
      return player;
  })
  if(arr.length!=0){
  return arr;
  }
  return [];
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, Country){
  var arr=players.filter(function(player){
    if(player.country===Country){
      for(each of player.awards){
        if(each.name===awardName)
        return player;
      }
    }
  })
  if(arr.length!=0){
    return arr;
  }
  else{
    return [];
  }
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  var arr=players.filter(function(player){
  if(player.awards.length>=noOfAwards && player.team == team && player.age < age){
    return player;
  } 
})
if(arr.length!=0){
  return arr;
}
else{
  return [];
}
}
//Progression 9 - Sort players in descending order of their age
function sortByAge(){
  return players.sort((a,b)=>(b.age-a.age));
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

function FilterByTeamxSortByNoOfAwards(Team){
  var arr=players.filter(function(player){
    if(player.team===Team)return player;
  });
  return arr.sort((a,b)=>(b.awards.lengths-a.awards.length));
  }

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function FilterByAwardxnooftimesxcountryxalphabetical(award,noOfTimes,country){
  var arr=players.filter(function(player){
    var count=0;
    for(each of player.awards){
      if(each==award){
        count+=1;
      }
    }
    if(count==noOfTimes && player.country==country){
      return player;
    }
  });
  return arr.sort(function(a,b){
      return a.localeCompare(b);
  });
  }

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order