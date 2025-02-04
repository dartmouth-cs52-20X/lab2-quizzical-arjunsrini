# README.md for Tik Tok Buzzfeed-style Quiz
### Arjun Srinivasan, July 2020

This is a Buzzfeed-style quiz that places you on the side of Tik Tok you are in. If you're unfamiliar with the language of 'sides of TikTok', look [here](https://stayhipp.com/news/the-sides-of-tiktok/).

## Notes about hosting

It should be hosted [here](https://dartmouth-cs52-20x.github.io/lab2-quizzical-arjunsrini/), and someone else on slack verified that they could see it, but some of the content that shows up locally may not show up there. I'm not sure why that error is happening, but I know the quiz works as expected when I look at it locally, so I think it's a GitHub issue and maybe would be easier to grade/view after cloning the repository and looking at it locally.

## Extra Credit: Why link JS at end of body?

JS is linked at the end because you don't want the user to interact with parts of the page that may trigger JS functions before the styling of the page has loaded.

## Citing sources

The popup when submit is clicked and all questions have not been answered and the logic behind that popup are adapted from [here](https://www.w3schools.com/howto/howto_js_popup.asp). The modal that shows your quiz and the logic behind it are adapted from [here](https://www.w3schools.com/howto/howto_css_modals.asp).

## Path Choice

I chose the fancy CSS path.

## Design Notes

While the requirements suggest picture answers and separately text answers, I did not like the aesthetic of just text; I still use CSS to center text within `<p>` tags over pictures, so hopefully that still meets the requirement.

## What worked well

Was easy to integrate tik tok videos as answer choices and to do fancy hovery and select animation/effects on buttons.

## What didn't

Coulnd't figure out fullscreen expanding div, took some time to figure out js behind result generation and display.
