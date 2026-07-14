import getColors from 'get-image-colors';

getColors('https://res.cloudinary.com/duibfmcw1/image/upload/v1783759312/colour_palatte_tjlyq3.jpg').then(colors => {
  console.log(colors.map(color => color.hex()));
}).catch(err => {
  console.error("Error extracting colors:", err);
});
