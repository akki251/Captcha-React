Captcha Component
=================

This component is a React component that renders a captcha to verify if the user is a human or a robot.

Usage
-----

To use this component, you can import it as follows:



`import Captcha from './path/to/Captcha';`

You can then use the component in your JSX code as follows:


`<Captcha isSubmit={isSubmit} onChangeStatus={handleChangeStatus} />`

Where `isSubmit` is a boolean prop that determines whether the form has been submitted and `onChangeStatus` is a function that updates the status of the captcha verification.

Props
-----

This component accepts the following props:

### `isSubmit`

A boolean value that determines whether the form has been submitted.

### `onChangeStatus`

A function that updates the status of the captcha verification.

Customization
-------------

This component renders a canvas element that displays the captcha. You can customize the styles of the captcha by modifying the CSS classes applied to the canvas and input elements.

Dependencies
------------

This component depends on the following modules:

-   `react`
-   `react-hot-toast`
-   `./CustomInput` (a custom component that renders an input element with a label)
