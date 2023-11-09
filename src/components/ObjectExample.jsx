// const Component = props => {
//     const Arthur = {
//       name: "Arthur Bernier",
//       age: "35",
//       email: "ceo@arthurbernierjr.com",
//     }
  
//     return Object.keys(Arthur).map((key, index) => {
//       return (
//         <h2>
//           {key}: {Arthur[key]}
//         </h2>
//       )
//     })
//   }


function ObjectExample (props) {
    const residence = {
        address: "123 S Main St",
        city: "Columbus, OH",
        owner: "John Smith",
        type: "house"
    }


//  This breaks down how that return statement accesses all of the key: value pairs for the object
//  first mapping over the object
    // const objectKeys = Object.keys(residence);
    // // console.log(objectKeys);
//  Then by using the array of keys that was returned by that mapping over the object
    // console.log("*** this is the key map")
    // objectKeys.map((key, index) => {
    //     console.log(key);
    //     console.log(index);
    //     console.log(residence[key]);
    // })


    return Object.keys(residence).map((key, index) => {
        return (
            <h2>
                {key}: {residence[key]}
            </h2>
        )
    })


 
}

export default ObjectExample;