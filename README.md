# stopwatch_ewelina_nori

## Objectives
- stopwatch (start,stop,reset,laps)
- update DOM in real time
- follow the TDD approach during the development circle

### Our journey

#### Wednesday
- ping-pong pair programming,test with Jasmine
- result: stopwatch(start,stop,reset)
- problems encountered: we chose to add methods with prototype and figured out is not the best practice.

##### Discoveries
- we had to introduce a Boolean to prevent our user from clicking on the buttons straigth after each other e.g. we click on start,then click on reset before the function triggered by our start button returns.

#### Thursday
- adding lapses to the stopwatch
- switch to QUnit
- CSS styling
- refactor our code

#### Advice to future ourselves

- Don't use prototypes.
- Try to follow the modular approach next time.


