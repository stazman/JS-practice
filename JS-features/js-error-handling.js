// Using try-catch blocks/throw for error handling can be expensive in terms of performance but in the end they can prevent a lot of wasted time trying to discover the source of an error that should have been anticipated for the specific situation and could have been caught

// Some common use cases of try-catch blocks: the unavailability of an external service, invalid log-in credentials and invalid user input. Error scenarios tend to fall into a few predictable categories that involve other resources that may not be available, such as database, cloud assets, or anything that requires access to external resources.


function enterNumber(x){

  try {
    if (typeof(x) != "number"){

      // throw "Invalid Input"

      // Note: both of these throw statements work, but creating a new instance of Error is better; it prints more information about the error to the console

      throw new Error("Invalid Input")
    } else {
      console.log(x + " is a great choice!");
    }
  } catch(error) {
      console.error(error); // without .error after console, the error message won't show in red
  } finally {
    console.log("Hope you're enjoying your day!")
  }
}

enterNumber(2);

enterNumber("hello");



// Without console.error(error), the error message is not printed at all. Without

function enterNumber(x){

  try {
    if (typeof(x) != "number"){
      throw "Invalid Input"
    } else {
      console.log(x + " is a great choice!");
    }
  } catch(error) {
    // Note: You can also include your own text in this error message this way:
    // console.log("An issue has come up: ", error)
  } finally {
    console.log("Hope you're enjoying your day!")
  }
}

enterNumber(2);

enterNumber("hello");