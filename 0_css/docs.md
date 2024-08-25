## Create helpers:

- Progress bar
- Triangle (border)
- Animations for slide up/down left/right
- Gradients (?)

## SVG as background image

chevron down

```
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24' data-testid='KeyboardArrowDownRoundedIcon'%3E%3Cpath d='M8.12 9.29 12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7a.9959.9959 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0'%3E%3C/path%3E%3C/svg%3E");
background-position: center center;
```

## Buttons (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)

Note the aria-hidden and focusable attributes on the svg.

```
<button aria-label="Close" onclick="myDialog.close()">
  <svg
    aria-hidden="true"
    focusable="false"
    width="17"
    height="17"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="m.967 14.217 5.8-5.906-5.765-5.89L3.094.26l5.783 5.888L14.66.26l2.092 2.162-5.766 5.889 5.801 5.906-2.092 2.162-5.818-5.924-5.818 5.924-2.092-2.162Z"
      fill="#000" />
  </svg>
</button>
```
