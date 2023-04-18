import { globalCss } from ".";

export const globalStyles = globalCss({
    "*": {
        margin: 0,
        padding: 0,
    },
    body: {
        backgroundColor: "$blueOper",
    },
    "body, input, textarea, button": {
        fontFamily: "Poppins",
    },
});
