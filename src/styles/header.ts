import { styled } from ".";

export const Header = styled("header", {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "$blackLight",

    padding: "1rem",

    p: {
        fontSize: "3rem",
        color: "white",
    },

    span: {
        color: "$greenOper",
    },
});
