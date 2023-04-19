import { styled } from "@stitches/react";

export const PostCard = styled("div", {
    backgroundColor: "#fff",
    color: "black",
    
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",

    padding: "1.1rem 0.8rem",
    width: "250px",
    height: "350px",

    borderRadius: "5px",
    boxShadow: "2px 2px 10px black",

    cursor: "pointer",

    "&:hover": {
        transform: "scale(1.03)",
    },

    img: {
        objectFit: "fill",
        width: "100%",
    },

    p: {
        flex: "1",
        textDecoration: "underline",
    },

    span: {
        color: "grey",
        fontSize: "small",
    }

})

export const PostContainer = styled("section", {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: "1.5rem 0.5rem",


    width: "95%",
    margin: "auto",
    padding: "1rem"

})