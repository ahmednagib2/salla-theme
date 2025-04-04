const mix = require('laravel-mix');

mix.js('src/assets/js/app.js', 'dist/js')
   .sass('src/assets/styles/app.scss', 'dist/css')
   .options({
       processCssUrls: false,
       postCss: [
           require('tailwindcss'),
           require('autoprefixer'),
       ],
   })
   .copyDirectory('src/assets/images', 'dist/images')
   .version();
