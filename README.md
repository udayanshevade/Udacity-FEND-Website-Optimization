## Website Performance Optimization portfolio project

This online portfolio was optimized for speed! In particular, the critical rendering path was optimized and the page was made to render as quickly as possible by applying the techniques learned in the [Critical Rendering Path](https://www.udacity.com/course/ud884) and [Web Performance Optimization](https://www.udacity.com/course/ud860) courses.

To get started, check out the repository and inspect the code.

#### Part 1: PageSpeed Insights score for ./dist/index.html ~ 95 mobile, 96 desktop.

How to see the result:

1. Download the files
2. Run a local server (through the command line) in the /dist/ folder:

  ```bash
  $> cd /path/to/root-project-folder/dist
  $> python -m SimpleHTTPServer 8080
  ```

3. Open a browser and visit localhost:8080
4. Download and install [ngrok](https://ngrok.com/) in the root of the project to make the local server accessible remotely.

  ``` bash
  $> cd /path/to/root-project-folder/dist
  $> ngrok 8080
  ```

5. Copy the forwarded public URL ngrok provides and run it through PageSpeed Insights.


HOW THE RESULT WAS ACHIEVED:

- Defered inessential scripts using async loading outside the head
- Added print media attribute to defer print styles until necessary
- Inlined font import stylesheet
- Pruned unnecessary styles, using semantically suitable tags
- Inlined all styles and removed the main stylesheet
- Compressed code
- Compressed and resized images


#### Part 2: Optimize Frames per Second in pizza.html
~ Time to generate pizzas on load: 0.64ms
~ Average time to generate last 10 frames: (first 2.5ms then) 0.241ms
~ Time to resize pizzas: ~ 1ms +/- 0.4ms

How to see the result:

1. Not using a running server, open ./dist/views/pizza.html in a browser.
2. Open [Chrome Dev Tools](https://developer.chrome.com/devtools) (Ctrl-Shift-I or Cmd-Opt-I) and go to the [Timeline](https://developer.chrome.com/devtools/docs/timeline) tab.
3. Begin recording a timeline and scroll the page.
4. Change the slider to resize the pizzas.
5. Stop recording and see the resulting timeline.
6. See the time/frames values in the console.

HOW THE RESULT WAS ACHIEVED:

- Cached all possible reused DOM references outside of functions and for loops
- Applied static styles through CSS rather than JS
- Simplified resizePizzas and combined functions for changing labels/sizes
- Batched style calculations rather than force layout thrashing
- Used window.requestAnimationFrame for visual changes like appending elements
- Promoted background pizzas to prevent bulk painting


Further optimizations made with Grunt. See Gruntfile.js for configuration.


### Optional References
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
