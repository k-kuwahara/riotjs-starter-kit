module.exports = (error) => {
  let taskName = '[task]';
  let title = '[task]' + taskName + ' ' + error.plugin;
  let errorMsg = 'error: ' + error.message;
  console.error(title + '\n' + errorMsg);
}