import React from 'react'

export default function About() {
    return (
        <div>
            <h1>About US</h1>
            <p>
                Github Finder is a simple project created with React.js. Using github finger you can type a username and finder will show you all the github profile names that
                matches your search. You can then view more detailed info of these profile by clicking on "view more". We used github's api to fetch the data of profiles. Also the state management is performed using Reactjs context.
            </p>
        </div>
    )
}
