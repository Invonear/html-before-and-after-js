# Can a crawler read the article?

Open these two pages in a browser and you’ll see the same guide to making a two-color print. The difference is how the words get there. One page sends the article in its HTML. The other sends an empty space and uses JavaScript to fill it.

**[Try the two versions](https://invonear.github.io/html-before-and-after-js/)** · **[See VisibleScan’s sample SEO and GEO report](https://visiblescan.com/sample-report)**

## Try it in your browser

1. Open the demo. With **HTML only** selected, you can read the first article. The second preview is blank.
2. Choose **Run JavaScript**. The second article appears. Both versions now have the same headline, paragraphs and two links.
3. To see what the server sent, open the [HTML version](https://invonear.github.io/html-before-and-after-js/initial.html) and the [JavaScript version](https://invonear.github.io/html-before-and-after-js/rendered.html) in separate tabs. Choose **View Page Source** and search for “Print the lighter ink first.” Only the HTML version contains that sentence.

## What’s in the original HTML?

| | HTML version | JavaScript version | After JavaScript runs on either page |
| --- | --- | --- | --- |
| Browser tab title | A two-color print run | Print notes | A two-color print run |
| Article heading | A two-color print run | Missing | A two-color print run |
| Links inside the article | 2 | 0 | 2 |

In [the first file](initial.html), you can read the article right in the markup. In [the second](rendered.html), the whole body of the page contains just this element:

```html
<main id="article"></main>
```

[The script](article.js) fills that element with the article and updates the tab title. Open the **Elements** panel in your browser’s developer tools after the page loads and you’ll see the paragraphs the script added.

## Where SEO and GEO come in

For technical SEO (search engine optimization), try following the two section links in the original HTML. You can do that on the first page. On the second, a crawler has to run the script to discover them.

For GEO (generative engine optimization), try a question instead. Which ink goes on first? The first page gives the answer in plain HTML. A system that fetches only the second page’s HTML gets no answer from that page. Whether an AI service cites either page is a separate question.

## Check a page of your own

Take a product page. Search its source for the product name and price. A crawler that only reads HTML can pick up whatever is already there. If the price comes from a script, that crawler will miss it. This tells you how the page loads. To find out whether Google has indexed a specific URL, check that URL in Search Console.

[Check your page with VisibleScan](https://visiblescan.com/) to compare the initial HTML with the page a browser renders. The [guide to JavaScript and crawler access](https://visiblescan.com/guides/javascript-and-ai-readability) covers what to do if important text appears only after a script runs.

## Run the demo offline

Download the repository as a ZIP, extract it and open `index.html` in your browser. Keep the files in the same folder.
