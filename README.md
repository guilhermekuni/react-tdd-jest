<h1 align="center">⚛️ React TDD with Jest :microscope:</h1>

<div align="center">
  <p align="center">
    <img alt="Repository languages count" src="https://img.shields.io/github/languages/top/guilhermekuni/react-tdd-jest?color=%23BC4749">
    <img alt="Repository top language" src="https://img.shields.io/github/languages/count/guilhermekuni/react-tdd-jest?color=%23BC4749">
    <img alt="Repository size" src="https://img.shields.io/github/repo-size/guilhermekuni/react-tdd-jest?color=%23BC4749">
    <img alt="Repository last commit" src="https://img.shields.io/github/last-commit/guilhermekuni/react-tdd-jest?color=%23BC4749" />
  </p>
  <h3>React TDD simple examples</h3>
  <p align="center">
    <a href="#about-information_source">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#libraries-books">Libraries</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#implemented-examples-pencil">Implemented Examples</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#getting-started-rocket">Getting Started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#license-page_with_curl">License</a>
  </p>
</div>

## About :information_source:

This project have some simple examples of TDD/BDD implementations using ReactJS and Jest. The intention is to keep updating this repository according to my studies.

## Libraries :books:

- **ReactJS** - A JavaScript library for building user interfaces.
- **Jest** - A JavaScript library for unit/integration testing implementation.
- **React Testing Library** - Builds on top of DOM Testing Library by adding APIs for working with React components.

## Implemented Examples :pencil:

- Counter: a simple counter component that implements `useState` hook.
- TodoList: a simple todo list component that implements `useState` hook.
- Input: a simple todo input component that implements `useState` hook.

## Getting Started :rocket:

### Run Tests :microscope:

1. Run `yarn` to install project dependecies.
2. Run `yarn test` to run all the implemented tests.
   - You can also run `yarn test {FileName}` to run a specific test and see all the steps.
   - Ex: `yarn test TodoList`.

### Run Application :computer:

1. Run `yarn` to install project dependecies.
2. Run `yarn start` to run the application in the development mode.
3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
   - The project won't show any of the components by default because the focus is the test implementations. If you want to see them in the browser, you just have to import and put the component in App.js.

## License :page_with_curl:

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.
