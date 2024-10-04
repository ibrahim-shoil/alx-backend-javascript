export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // The variables here are not needed as they do not affect the output
    // So, we can safely remove these lines.
    // let task = true;
    // let task2 = false;
  }

  return [task, task2];
}
