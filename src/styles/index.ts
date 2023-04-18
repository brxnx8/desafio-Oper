import { createStitches } from "@stitches/react";

export const {
    config,
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
} = createStitches({
    theme: {
        colors: {
            greenOper: "#56B851",
            blueOper: "#283B4F",
            blackLight: "rgba(26, 26, 26, 0.8)",
        },
    },
});
