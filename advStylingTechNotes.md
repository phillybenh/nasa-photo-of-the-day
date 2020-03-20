**Advanced Styling Techniques**

* [Lecture Notes](https://www.notion.so/Advanced-Styling-v2-f349859aeb2043ca9d78b7d2c8a85f7f)

*Creating a React App*
* To create a new React App:
    * `npx create-react-app projectName --use-npm`
    * If the above doesn't work, you may need to install CRA globally and then run CRA

* After funning CRA
    * change directory into the project folder `cd projectName`
    * start the project `npm start`
        * the development server will probably show project at [http://localhost:3000](http://localhost:3000)

* Other commands
    * `npm test` will launch tests with the testing library jest
    * `npm run `build will launch the bundler and transcompiler to produce a minified bundle appropriate for deployment.
    * `npm run eject` will unhide all the configuration and dependencies that CRA-generated react apps use under the hood. No way back from this, so don’t do it unless you are sure you need to! Ejecting is usually NOT necessary for toy apps or small prototypes, but often inevitable when building real-world apps.

* *Project Dependancies*
    * We will need ot install additional packages if we want to use them
    * Example:
        * `npm install moment`
        * `npm uninstall moment` //to uninstall an unused package
    * *Dev dependencies* are packages you as a developer need for performing specific operations like spinning up the app in your laptop, creating a bundle, or running tests. Non-dev or “regular” dependencies are the packages imported and consumed directly by your application code. 
        * Example:
            * `npm install -D chai`
            * `npm uninstall chai`

*Styling React Apps*
* We can style with regular CSS or use theamed libraries like React Bootstrap 
* *Reactstrap* is the de-facto Bootstrap styling library for react components
* To use Reactstrap:
    *Install Reactstrap(the component library) and Bootstrap(what's under the hood)
        * `npm install reactstrap bootstrap`
    * Make the stylesheet available your project with a `<script>` tag or
        * `import 'bootstrap/dist/css/bootstrap.min.css';` in your index.js
    * Import reactstrap components into any of your components that you want to use it in
        * `import React from 'react';`
        * `import { Alert } from 'reactstrap';`
    * Use the imported Reactstrap components
        ```
        <Alert color="primary">
            This is a primary alert — check it out!
        </Alert>
        ```
*Using styled-components on our React Components*
* Use a library called * Styled Components* to write our CSS in JavaScript
    *Can still style in the CSS file too
    * Install styled-components
        * `npm install styled-components`
    * Import styled-components into your JS
        * `import styled from 'styled-components`

    * Example of styling (see buttons basic styling and )
        ```
        import React from 'react';
        import styled from 'styled-components';

        const Button = styled.button`
            padding: 6px 10px;
            margin: 5px;
            border: none;
            border-radius: 3px;
            color: white;

            ${props => (props.type === 'primary' ? `background: #2196f3;` : null)}
            ${props => (props.type === 'success' ? `background: #4caf50;` : null)}
            ${props => (props.type === 'danger' ? `background: #f44336;` : null)}
            ${props => (props.type === 'warning' ? `background: #fdd835;` : null)}
        `;

        function SomeComponent() {
        return (
            <div>
            <Button type="primary">Primary</Button>
            <Button type="success">Success</Button>
            <Button type="danger">Danger</Button>
            <Button type="warning">Warning</Button>
            </div>
        );
        }

        export default SomeComponent;
        ```
    * Example w/ a base style and a component that extends some style
        ```
        import React from 'react';
        import styled from 'styled-components';


        const Button = styled.button`
        color: palevioletred;
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid palevioletred;
        border-radius: 3px;
        `;

        // A new component based on Button, but with some override styles
        const TomatoButton = styled(Button)`
        color: tomato;
        border-color: tomato;
        `;

        function SomeComponent() {
        return (
        <div>
            <Button>Normal Button</Button>
            <TomatoButton>Tomato Button</TomatoButton>
        </div>
        );

        export default SomeComponent;
        ```




