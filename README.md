# React Coloring SVG

## Scripts
Build components from .svg files (run with @svgr/cli):
```
yarn build-components
```
Run project:
```
yarn dev
```
Build project:
```
yarn build
```
## How it works
I have a .svg painting file downloaded from the internet. For example:
```xml
<?xml version="1.0" encoding="iso-8859-1"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve">
  <rect fill="#995C0D" width="411.823" height="512" />
  <rect x="60.194" y="10.105" fill="#B27214" width="391.613" height="491.789"/>
</svg>
```
`#885C0D` and `#B27214` are the colors I want to color in the painting. I need set the attribute `fill` with `white (#ffff)` as default and set color with state when clicking to color a element in the painting.

I also need to specify which element need to color in the painting. I use the attribute `id` like the below:
```xml
<?xml version="1.0" encoding="iso-8859-1"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve">
  <rect id="path1" fill="#995C0D" width="411.823" height="512" />
  <rect id="path2" x="60.194" y="10.105" fill="#B27214" width="391.613" height="491.789"/>
</svg>
```
With setting default color as `white`, the painting becomes a whole white paper. So, I add style `"stroke-width:1; stroke:black;"` to keep the line around each element.
```xml
<?xml version="1.0" encoding="iso-8859-1"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve">
  <rect id="path1" style="stroke-width:1; stroke:black;" fill="#995C0D" width="411.823" height="512" />
  <rect id="path2" style="stroke-width:1; stroke:black;" x="60.194" y="10.105" fill="#B27214" width="391.613" height="491.789"/>
</svg>
```
I use `@svgr/cli` to transform from .svg files to React Components with a custom template. In the custom template, I replace all specified colors into `white` and, set onClick event to update colors for each element.

That's all.
