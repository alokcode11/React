 // const heading = document.createElement("h1");
        // heading.innerHTML = "Hey Everyone...";
        
        // const root = document.getElementById("root");

        // root.appendChild(heading);

        const heading = React.createElement("h1", {}, "Hey Everyone...");

        //this is not a user friendly way to create Element that's why jsx come into picture....

        const heading1 = React.createElement(
            "h1", 
            {
                id: "title",
            }, 
            "Heading 1"
        );

        const heading2 = React.createElement(
            "h2",
            {
                id: "title",   
            },
            "Heading 2"
        );

        const container = React.createElement(
            "div",
            // in ract we call this as PROPS and it can hold any properties and value 
            {
                id: "container",
                hellow: "world",  
            },
            [heading1, heading2] //react element ie. object
        );
         // Define the root for 'root1' as a React root element
    const root1 = ReactDOM.createRoot(document.getElementById('root1'));
    
    // Render the container inside 'root1'
    root1.render(container);




        // console.log(heading); --object of type h1

        const root = ReactDOM.createRoot(document.getElementById('root'));
        
        // passing a react element inside root element (Modify our DOM)
        root.render(heading);


        // this is not a production ready app
        // required:
        //           -Minify
        //           -bundle things up 
        //           -we need servers to runs up
        //           -remove console
        //           -lots of optimization 
        //           -that's why we need to ignite our app

        // --so use bundlers (webpack is one of bundlers)
                        //  vite, parcel,webpack
                        // bundlers are responsible for ignite our code 
                        // in orignial create react app Webpack is used.

        // other frameworks enforce alots of things but react doesn't
         