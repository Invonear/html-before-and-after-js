# Can a crawler read the article?

Two pages, one short guide to printmaking. They look identical after JavaScript runs. Turn it off and one article disappears.

**[Try the side-by-side demo](https://invonear.github.io/html-before-and-after-js/)** · **[See a VisibleScan sample report](https://visiblescan.com/sample-report)**

## A 30-second experiment

1. Open the demo in **HTML only** mode. The HTML page has a headline and two section links. The JavaScript page is empty.
2. Choose **Run JavaScript**. The article appears in the second preview, down to the same two links.
3. Open the [HTML page](https://invonear.github.io/html-before-and-after-js/initial.html) and the [JavaScript page](https://invonear.github.io/html-before-and-after-js/rendered.html) on their own. Use **View Page Source** and search for “Print the lighter ink first.” You’ll find it in just one response.

## Follow the evidence

| What to check | HTML page, as sent | JavaScript page, as sent | Both, after scripts run |
| --- | --- | --- | --- |
| Browser tab title | A two-color print run | Print notes | A two-color print run |
| Main heading | A two-color print run | Missing | A two-color print run |
| Links inside the article | 2 | 0 | 2 |

The difference fits in one line. The server sends the second page with an empty article container:

```html
<main id="article"></main>
```

Compare [the full HTML article](initial.html) with [the empty page](rendered.html). The [short script](article.js) supplies its title, paragraphs and links. In your browser’s **Inspect → Elements** panel, you can see what the script added.

## Apply it to your own site

On a shop page, look for the product name and description. On a documentation page, look for the answer and the link to the next step. If those arrive only after a script runs, a crawler that reads just the initial HTML will miss them.

[Check a URL with VisibleScan](https://visiblescan.com/) to compare the source with the rendered page. If something important is missing from the source, the [JavaScript readability guide](https://visiblescan.com/guides/javascript-and-ai-readability) explains what to check next. This experiment shows when content becomes available. Search indexing is a separate question.

## Run it locally

Download the repository as a ZIP, extract it and open `index.html`. Keep the files together. The comparison runs in the browser and needs no build step.
