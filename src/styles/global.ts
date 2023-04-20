import { globalCss } from ".";

export const globalStyles = globalCss({
    "*": {
        margin: 0,
        padding: 0,
    },
    body: {
        backgroundColor: "$blueOper",
    },
    "body img" :{
        width: 0,
    },
    "body, input, textarea, button": {
        fontFamily: "Poppins",
    },
    a: {
        textDecoration: "none",
    }
});
