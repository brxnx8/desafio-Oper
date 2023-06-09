import { styled } from "@stitches/react";

export const CommentContainer = styled("div", {
    display: "Flex",
    flexDirection: "column",
    padding: "0.5rem, 1rem",

    marginTop: "4rem",
});

export const Comment = styled("div", {
    display: "Flex",
    flexDirection: "column",

    width: "90%",
    margin: "0.8rem auto",

    textArea: {
        resize: "none",
        color: "black",
        padding: "1rem",
        height: "5rem",
    },

    footer: {
        display: "flex",
        justifyContent: "flex-start",
        gap: "1rem",

        paddingLeft: "0.5rem",

        span: {
            fontSize: "small",
            cursor: "pointer",

            "&:hover, &.liked": {
                color: "$greenOper",
            },

            "&.liked:hover": {
                opacity: "0.7",
            },
        },
    },
    "&.reply": {
        marginBottom: "0",
    },
});

export const CommentForm = styled("form", {
    width: "100%",
    marginTop: "1rem",
    paddingTop: "1.5rem",
    borderTop: "1px solid black",

    input: {
        marginTop: "1rem",
        marginLeft: "0.4rem",
        padding: "0.0525rem 0.2rem",
    },

    textArea: {
        resize: "none",
        color: "black",
        padding: "1rem",
        width: "95%",
        height: "6rem",
        marginTop: "0.5rem",
        marginBottom: "0.5rem",
    },

    button: {
        padding: "0.5rem 1rem",
        backgroundColor: "$greenOper",
        border: "none",
        borderRadius: "8px",
        color: "black",
        fontWeight: "bold",
        transition: "opacity 0.1s",

        "&:hover": {
            opacity: "0.9",
        },
    },
    "&.replying": {
        border: 0,
        width: "95%",
        marginLeft: "auto",
        marginTop: "0",
    },
});

export const ReplyContainer = styled("section", {
    width: "90%",
    marginLeft: "auto",
    display: "flex",
    flexDirection: "column",
});
