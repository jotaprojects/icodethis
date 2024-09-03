# iCodeThis Solutions

- Movie card
- Login card
- Birthday list
- Toasts
- Basics
- 404 Error page
- Christmas promo
- Subscribe
- Pricing Table
- Signup 2
- Project card
- Apps card
- Collections list
- Social Login
- Cart item
- Password field
- Profile header
- Blog Cards 4
- Friend request
- Mobile menu
- Article page
- Steps (WIP)
- Website Comps
- Analytics dashboard (WIP)
- Big Menu 2
- Blog Comps
- boardme sign up (Future iteration adjustments to small screens, change font)
- Charts
- Contraction Timer (Future iteration - Add functionallity to log time and calculations on contractions (https://www.thebump.com/calculators/contraction))
- Dark Theme Comps
- Simple Cards 2
- Timer (WIP)
- Blog Cards 2
- Feedback Form
- Chatbox (WIP)
- Skewed Pricing
- Search Comps 2
- FAQ
- Poll
- Table (WIP)
- Pagination
- Signup Form 1
- Agency Search
- Social Profile 2
- Member Invite
- Edit Account (Future iteration would be adding a success state, validation.)
- Background pattern
- Top Charts (Future iteration would be adding skeleton loading)
- Analytics Chart
- Big Menu (Iteration thoughts: adding icons as in mockup, fix better dropdown on large screen, fixat the back button.)
- Expenses Graph (Iteration thoughts: Readup on accessibility for canvas and maybe use the same data object as chartjs)
- Search UI (Iteration thoughts: Add search, hide filter on smaller screens, add map popup)
- Links Section 2 (Iteration thoughts: improve on the responsive design, small animations, might be too flashy on card hover)
- Domain Landing Page (WIP)
- Repositories List (Iteration thoughts: Add search, clean up code)
- Search Comps (WIP)
- Big Footer (TODO: Add purrson icon)
- Tabbed Ui (Iteration thoughts: Transition animation between tabs)
- Countdown
- UI Design Daily

## Resource

- https://coolors.co/palettes/
- https://colormix.app/palettes
- https://dribbble.com/
- https://uigradients.com/
- https://colorgradient.dev/gradient-generator/
- https://www.svgbackgrounds.com/tools/svg-to-css/
- https://getwaves.io/
- https://animista.net/
- https://picsum.photos/
- https://heroicons.com/
- https://neumorphism.io/

## Purrson

- https://github.com/madrobby/purrson-icon

<svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            fill="currentColor"
          >
<path
              id="XMLID_25_"
              d="M182.6,224.5c-2.2-0.3-4.4-0.5-6.6-0.5c-25,0-45.5,19.1-47.8,43.6c-0.1,1.5-0.2,2.9-0.2,4.4
	c0,26.5,21.5,48,48,48s48-21.5,48-48C224,247.7,206,227.7,182.6,224.5z M176,288c-8.8,0-16-7.2-16-16s7.2-16,16-16s16,7.2,16,16
	S184.8,288,176,288z"
            />
<path
              id="XMLID_28_"
              d="M512,352v-32h-64.8c0.5-5.3,0.8-10.6,0.8-16c0-23.5-5-45.9-14.2-66.4l45-165.1c3.7-13.6-1.9-28.1-13.9-35.5
	c-5.2-3.3-11.1-4.9-17-4.9c-7.6,0-15.1,2.7-21.1,7.9l-110.8,96.9c-18.9-5.7-39.2-8.8-60.2-8.8s-41.2,3.1-60.2,8.8L85.1,39.9
	C79.1,34.7,71.6,32,64,32c-5.9,0-11.7,1.6-17,4.9c-12,7.5-17.6,21.9-13.9,35.5l45,165.1C69,258.1,64,280.5,64,304
	c0,5.7,0.3,11.4,0.9,17H0v32h71.5c3,9.5,6.9,18.8,11.5,27.6L8.8,417.7l14.3,28.6l77.6-38.8C135.6,451.4,192.2,480,256,480
	c66.3,0,124.8-30.8,159.3-77.7l72.4,43.5l16.5-27.4l-72.4-43.5c3.5-7.4,6.5-15,9-22.8H512z M411.4,269.9c3,10.9,4.6,22.4,4.6,34.1
	c0,79.4-71.8,144-160,144S96,383.4,96,304c0-11.8,1.6-23.2,4.6-34.1c2.9-10.8,6-20.2,11.4-29.9l0,0l-10.9-40L64,64l98.6,86.2
	l26.4,23.1c10.3-4.3,21.2-7.6,32.5-9.9c11.1-2.2,22.7-3.4,34.6-3.4s23.4,1.2,34.6,3.4c11.3,2.3,22.2,5.6,32.5,9.9l26.4-23.1L448,64
	l-37.1,136L400,240l0,0C405.5,249.7,408.5,259.1,411.4,269.9z"
            />
<path
              id="XMLID_31_"
              d="M336,224c-2.3,0-4.5,0.2-6.6,0.5C306,227.7,288,247.7,288,272c0,26.5,21.5,48,48,48s48-21.5,48-48
	c0-1.5-0.1-3-0.2-4.4C381.5,243.1,361,224,336,224z M336,288c-8.8,0-16-7.2-16-16s7.2-16,16-16s16,7.2,16,16S344.8,288,336,288z"
            />
</svg>

## Calculations related to Time

- Note in this we are using 30 days for each months.

* Division by 1000: Converts milliseconds to seconds.
* Division by 60: Converts seconds to minutes, and minutes to hours.
* Division by 24: Converts hours to days.
* Division by 30: Approximates days to months (assuming each month has 30 days).
* Modulo (%): Extracts the remainder after dividing by 60 for seconds/minutes/hours and by 24/30 for days/months, effectively isolating the specific time component.

- 1000: The number of milliseconds in a second.
- 60000: The number of milliseconds in a minute (60 seconds).
- 3600000: The number of milliseconds in an hour (60 minutes).
- 86400000: The number of milliseconds in a day (24 hours).

## Author

- Website - [jotaprojects](https://jotaprojects.se)
- iCodeThis - [iCodeThis](https://icodethis.com)
