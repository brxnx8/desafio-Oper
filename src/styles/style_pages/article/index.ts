import { styled } from "@stitches/react";

export const ArticleContainer = styled("main", {
    backgroundColor: "#fff",
    color: "Black",

    display: "grid", 
    gridTemplateColumns: "1fr 2fr",
    gridTemplateRows: "2fr 1fr",
    columnGap: "1rem",
    rowGap: "0.5rem",

    width: "90%",
    minHeight: "100vh",
    margin: "auto",
    padding: "1rem",

    border: 0,

    img: {
        width: "100%",
        height: "100%",
    },

    div: {
        p: {
            color: "grey",
            fontSize: "small",
        },

        ":first-child": {
            marginBottom: "1rem",
        }
    },

    

})