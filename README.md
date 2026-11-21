# One article, two ways to load it

[Open the comparison](https://invonear.github.io/html-before-and-after-js/), or jump straight to the [HTML page](https://invonear.github.io/html-before-and-after-js/initial.html) or the [JavaScript page](https://invonear.github.io/html-before-and-after-js/rendered.html).

Both look the same in a browser with JavaScript enabled. Here’s what each sends before the browser runs any scripts.

| In the original response | HTML page | JavaScript page |
| --- | --- | --- |
| Document title | A two-color print run | Print notes |
| Article heading and body | Present | Empty main element |
| Links to the two sections | Present | Added by the script |

Use **View Page Source** and search for “Print the lighter ink first.” Then open **Inspect → Elements** and search again. The sentence appears in both rendered pages, but only one original response. Disable JavaScript and reload to see the difference on screen.

To try it offline, download the repository as a ZIP, extract it, and open either HTML page. Keep the stylesheet and script in the same folder.

This example shows what’s available at each stage. Which version a particular crawler reads depends on whether it runs the script. For more, see the [VisibleScan sample report](https://visiblescan.com/sample-report) and the [guide to JavaScript and AI readability](https://visiblescan.com/guides/javascript-and-ai-readability).
