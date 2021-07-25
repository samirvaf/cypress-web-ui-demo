# cypress-web-ui-demo
Project to demonstrate Cypress usage for Web UI test automation

:computer: Application used in this project: [Swag Labs Demo](https://www.saucedemo.com/)

:stop_sign: To build the project you must have [Node.js](https://nodejs.org/en/) installed.

#### :arrow_right: To install dependencies:
> npm install

#### :arrow_right: To open cypress runner:
> npx cypress open

This project have the following structure:
| Folder | Description |
| ------ | ----------- |
| fixtures | Should contain general test data, i'm not using it in this project so it can be ignored |
| integration | Contains test specs, after you open the cypress runner you should be able to run them |
| plugins | Cypress plugins configuration, i'm not using it in this project so it can be ignored |
| support | Contains the cypress custom commands implementation and pages locators for better reusability |
