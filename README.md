# DXP Cloud Exercise
The purpose of this project is to implement two acceptance level tests to validate the Forms application. 
### Project Setup
This project was developed using TestCafe and following Page Object Model pattern. To execute it, just import it on VS Code or your choice's editor and execute:
```
npm rebuild
```
in order to generate *node_modules*, which was included on the .gitignore file to reduce repository space and avoid possible dependencies conflicts.

### Tests Execution
Two test scripts were defined to allow the execution of the acceptance tests on Google Chrome browser (more on this decision is discussed on the [Test Plan](https://drive.google.com/file/d/1RIDyF6WW36nO869ertEtSFlv8k4VmVZL/view?usp=sharing)), and can be found on the *package.json* file. To execute the tests on Google Chrome use:
```
npm run test:acceptance
```
To execute the tests using a headless google chrome use:
```
npm run test:chrome:headless
```

Detailed information regarding Automation Project can be found on the [Test Plan](https://drive.google.com/file/d/1RIDyF6WW36nO869ertEtSFlv8k4VmVZL/view?usp=sharing).

For anything, please, feel free to reach me

Emanuel Silva - Senior QA Engineer (emanuel.silva@liferay.com)
