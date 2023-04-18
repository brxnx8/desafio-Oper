import { styled } from ".";

export const Header = styled("header", {
    backgroundColor: "$blackLight",
    
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    padding: "1rem",

    p: {
        fontSize: "3rem",
        color: "white",
    },

    span: {
        backgroundColor: "$greenOper",
        borderRadius: "5px",
        padding: "0.2rem",
        color: "black",
        fontWeight: "700",
        marginLeft: "0.2rem",
    },
});
