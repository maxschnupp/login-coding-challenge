## Project A - Coding Challenge Submission

### Running 
* go to base directory `cd login-app`
* install packages `yarn`
* run `yarn start`

### Testing
* run jest test suites `yarn test`

### Notes on tech
* I've opted to use emotion for all styling, that way I can avoid all kinds of inheritance and general shared state issues
* I opted to write my own password validation, unfortunately I had to use regex as I'm on a tight schedule and I couldn't find any packages I liked to do it for me
* I do not like using regex... :) it is difficult to read which is bad for maintenance, but at least in this case it is tested
* There are no classes, this is typical of my style, I try to write functionally and minimise side effects
* The jest tests only cover the logic around password acceptance criteria, this was all pure functions so it was easy enough to test given the schedule
* If I had more time I would probably use cypress for testing the UI stuff, some things already have `aria-labels` so it wouldn't be too hard to do
* I couldn't find a way to load the font used in the design through npm so I just left it for now

