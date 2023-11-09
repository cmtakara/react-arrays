function ArrayExample() {
    // this is an example of map but using an array with number elements
    const nums = [2, 5, 8, 2, 9];
    const numsMap = nums.map(num => console.log(num));
    // an array of dogs

    const lessonArray = [
        {
            date: '09Nov2023',
            subject: 'math',
            topic: 'measurement',
            completed: true
        },
        {
            date: '02Nov2023',
            subject: 'math',
            topic: 'ratios',
            completed: false
        },
        {
            date: '02Nov2023',
            subject: 'science',
            topic: 'genotypes and phenotypes',
            completed: true
        }
    ]

    // map over the dogs array and create an array of JSX for each dog
    // like having a for loop for the lenght of dogs
    // but instead of using dogs[i] we named a dog variable and that's what we're using instead
    // const dogJSX = dogs.map(dog => {
    // we return JSX for each dog in the array which we store in the dog variable, essentially we are looping over dog of dogs
    //   return (
    //     <div>
    //       <h1>{dog.name}</h1>
    //       <h2>{dog.age}</h2>
    //     </div>
    //   )
    // })
    //     // the component returns JSX that uses the dogJSX array
    //     return <div>{dogJSX}</div>
    //   }
    return (
        <div>
            <div>Hello</div>
            <ul>
                {lessonArray.map(
                    lesson => {
                        return (
                        <li>
                            <h2>Lesson</h2>
                            <h3>date: {lesson.date}</h3>
                            <h3>subject: {lesson.subject}</h3>
                            <h3>topic: {lesson.topic}</h3>
                            <h3>completed: {lesson.completed ? 'is complete' : 'is not complete'}</h3>
                        </li>
                    )
                    }
                ) }
            </ul>
        </div>

    )
}

export default ArrayExample;