const SECONDS = 1;

// const outputScrollStandard = document.getElementById("outputScrollStandard");
// const outputScrollThrottling = document.getElementById("outputScrollThrottling");

// const eventScrollCounter = {
//   standard: 0,
//   throttled: 0
// };

// document.addEventListener('keydown', (e) => {
//   console.log(e);
//   eventScrollCounter.standard++;
//   outputScrollStandard.textContent = eventScrollCounter.standard;
// });

// document.addEventListener('keydown', _.throttle(() => {
//   eventScrollCounter.throttled++;
//   outputScrollThrottling.textContent = eventScrollCounter.throttled;
// }, SECONDS * 1000));


// --------------------------------------------------------------------------------


// const outputResizeStandard = document.getElementById("outputResizeStandard");
// const outputResizeThrottling = document.getElementById("outputResizeThrottling");
// const outputResizeDebouncing = document.getElementById("outputResizeDebouncing");

// const eventResizeCounter = {
//   standard: 0,
//   throttled: 0,
//   debounced: 0
// };

// window.addEventListener('resize', () => {
//   eventResizeCounter.standard++;
//   outputResizeStandard.textContent = eventResizeCounter.standard;
// });

// window.addEventListener('resize', _.throttle(() => {
//   eventResizeCounter.throttled++;
//   outputResizeThrottling.textContent = eventResizeCounter.throttled;
// }, SECONDS * 1000));

// window.addEventListener('resize', _.debounce(() => {
//   eventResizeCounter.debounced++;
//   outputResizeDebouncing.textContent = eventResizeCounter.debounced;
// }, SECONDS * 1000));


// --------------------------------------------------------------------------------


// const CORRECT_INPUT_LENGTH = {
//   min: 5,
//   max: 15
// };

// const CLASS_NAMES = {
//   wrong: 'wrong',
//   correct: 'correct'
// };

// const handleInputValidation = ({ target }) => {
//   const { value } = target;
//   const isValid = value.length >= CORRECT_INPUT_LENGTH.min && value.length <= CORRECT_INPUT_LENGTH.max;

//   if (isValid) {
//     target.classList.add(CLASS_NAMES.correct);
//     target.classList.remove(CLASS_NAMES.wrong);
//   } else {
//     target.classList.add(CLASS_NAMES.wrong);
//     target.classList.remove(CLASS_NAMES.correct);
//   }
// };

// const debounceMs = 800;
// const signInForm = document.getElementById("signInForm");
// signInForm.addEventListener('input', _.debounce(handleInputValidation, debounceMs));


// --------------------------------------------------------------------------------
