# Getting Started with Create React App

## Available Scripts

In the project directory, you can run:

### `npm install`

### [In case any error please run npm install --legacy-peer-deps]

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Data formatting web app

## The task

Given are two files - both contain the same content - one is a CSV file the other is a PRN file,
we want you write a simple web application that reads the CSV file and PRN file and, utilising
a simple UI:

- formats and displays the raw data appropriately.
- allows switching between an HTML table, and a formatted JSON display.
- that compares the generated outputs and reports a failure message if the outputs are not identical. The HTML generated from each input file should be identical, and the JSON generated from each file should be identical.

The content (i.e. the data in the file, minus the formatting characters) of the input files
differ, but you should produce identical output - irrespective of whether the input data format was CSV or PRN.
Non ASCII characters should be handled and rendered correctly.
No content should be lost in translation, but reformatting of content may be necessary
and all output should be readable when presented in the UI.

## How to proceed

Solutions that utilise web standards/apis (HTML, CSS, and JS) are preferred, but if you are not familiar
with these then use your main (work) language.

### Dependencies

Make sure you are ready to defend any and all dependencies you introduce into your solution.

- Any open source libraries which make life easier for you are of course allowed.
- Using frameworks like React/Preact, Vue, or Angular, Tailwind, Styled Components, StencilJs, Lit-Element, Bootstrap, etc. are an option but not required. Make sure they add value if you use them.
- Server-side solutions, client-side solutions, or a combination of the two are acceptable.

## How to deliver

Please include only the source code, any test code, and the build files. - no IDE files or build products.
Please include a README.md with instructions on how to build and run the solution.

Please return the solution as a git repository. Make regular commits and pushes, so that we can see the evolution of the solution. Tar.gz or zip files are fine for delivery

## Assumptions, implementation and delivered task

- I choose react library for this application.
- Created SPA with create react app library with regular css template
- Copied the csv and prn files into assets folder
- Added Upload section component where file selection input, table view and json view added along with toggle button
- I have parsed the uploaded csv with the `papaparse` npm package and displayed the the table view
- For the JSON view i took the npm package `react-json-view` for rendering the json text in the page
- I could not success in parcing the prn file, how ever i managed with work around, as I dont find any parcing library for prn files
- For comparing the files i made the basic comparision and displaying message
- In case npm install has any errors please use this flag `npm i --legacy-peer-deps`. This is due to one of the parser i am using.

#### [Note] I am happry to discuss more about my approch and implementation in the call.

# Thank you!
