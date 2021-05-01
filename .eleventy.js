module.exports = config => {
  
  config.addPassthroughCopy('src/images');
  config.addPassthroughCopy('src/css');
  config.addPassthroughCopy('src/js');
  
  return {
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      output: 'public'
    }
  }
}