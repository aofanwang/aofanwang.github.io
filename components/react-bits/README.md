# React Bits components

Vendored from DavidHDev/react-bits, `src/ts-default/Animations`, for the
Truck Mission homepage preview. See LICENSE.md for the upstream license.

- https://reactbits.dev/animations/pixel-transition
- https://reactbits.dev/animations/magnet
- https://reactbits.dev/animations/animated-content

PixelTransition's controlled mode omits tabIndex; the preview's two real
links remain the keyboard targets. The portfolio wrapper handles live
reduced-motion and pointer media changes. AnimatedContent uses GSAP, leaves
server-rendered content visible without JavaScript, and reveals content on
keyboard focus or when reduced motion is enabled. Its scroll reveal runs once.
