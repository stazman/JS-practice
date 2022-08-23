// Filter

const cityArr = ["Kalamazoo", "Saginaw", "Freeland", "Detroit"];

const filteredArr = cityArr.filter(function(e){
  return e.includes("a");
})

console.log(filteredArr)


const capitals = {Missouri: "Jefferson City", Kansas: "Topeka", Alabama: "Montgomery"};

const entries = Object.entries(capitals);

console.log(entries)

for (let entry of entries){
  if (entry[0] === "Alabama"){
    entry[0] = "Georgia";
    entry[1] = "Atlanta";
  }
}

console.log(entries);

for (let key in entries){
  console.log(entries[key][0]);
  console.log(entries[key][1]);
}

console.log(capitals);


// Map

const mappedArr = cityArr.map(function(e){

  return e.toUpperCase();

})

console.log(mappedArr);


const addFlorida = Object.assign({}, capitals, { Florida: "Jacksonville" })

console.log(addFlorida);