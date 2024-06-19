## Create helpers:

- Progress bar
- Triangle (border)
- Animations for slide up/down left/right
- Gradients (?)

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
