// //....first creating an element
// const heading = React.createElement("h3", { id: "tag_heading" }, "Welcome to React World and learn The Beauty of React")
// // after this creation we have to create root inside react..that mean first of all React needs to have a root where it 
// //will do all the DOM manupulation

// // second, creating a root.....
// //the root is the place whwre all the react code will run
// const root = ReactDOM.createRoot(document.getElementById("root"))

// //render element inside the root..
// root.render(heading);

// //render methods is bessically will be responsible to take an--
// // object(convserting intoe elements) and put it up on the dom....


{/* <div id="parent">
    <div id="child">
        <div>
            <h1>I am h1 tag</h1>
            <h2>I am h1 tag</h2>..this is the sibling.then how i create? see line no 36

        </div>
    </div>

     <div id="child2">
        <div>
            <h1>I am h3 tag</h1>
            <h2>I am h4 tag</h2>..this is the sibling.then how i create? see line no 36

        </div>
    </div>
</div>
 */}
 
// ReactElements(is an object becomes html) ==> HTML( thatbrowser undderstand)/--
//so the ReactElemnt is an object that becomes html that browser undderstand

//create this nested structure in react see bellow

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", { id: "heading" }, "I am h1 Tag Also"),
        React.createElement("h2", { id: "heading" }, "I am sibling of h1 Tag......")

        ]


    ),
    React.createElement("div", { id: "child" },
        [React.createElement("h3", { id: "heading" }, "I am h3 Tag Also"),
        React.createElement("h4", { id: "heading" }, "I am sibling of h3 Tag......")

        ]


    )
)

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)



