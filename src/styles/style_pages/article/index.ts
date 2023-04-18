import { styled } from "@stitches/react";

export const ArticleContainer = styled("main", {
    backgroundColor: "#fff",
    color: "Black",

    

    width: "90%",
    minHeight: "100vh",
    margin: "auto",
    padding: "1rem",

    border: 0,

    section: {
        display: "grid", 
        gridTemplateColumns: "300px 1fr",
        columnGap: "1rem",
        rowGap: "0.5rem",
        justifyItems: "start",
        alignItems: "flex-start",

        aside: {
            img: {
            width: "100%",
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
        },
    },
 

})