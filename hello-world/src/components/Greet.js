import React from 'react'

// function Greet() {
//     return <h1>Hello Vishwas</h1>
// }

// Functional Component
// const Greet = ({name, heroName}) => {
//     return (
//         <div>
//             <h1>
//                 Hello {name} a.k.a {heroName}
//             </h1>
//         </div>

//     )
// }

// Destructuring props and state
const Greet = props => {
    const {name, heroName} = props
    return (
        <div>
            <h1>
                Hello {name} a.k.a {heroName}
            </h1>
        </div>

    )
}

export default Greet;