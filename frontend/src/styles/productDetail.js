import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
    padding: "1rem",
  },
  detailsImage: {
    flex: "2 1 60rem",
    "& img": {
      maxWidth: "60rem",
      width: "100%",
    },
  },
  detailsInfo: {
    flex: "1 1 30rem",
    "& ul": {
      listStyleType: "none",
      padding: 0,
    },
    "& li": {
      marginBottom: "1rem",
    },
  },
  detailsAction: {
    flex: "1 1 30rem",
    border: "0.1rem #808080 solid",
    borderRadius: "0.5rem",
    backgroundColor: "#f8f8f8",
    padding: "1rem",
    "& ul": {
      listStyleType: "none",
      padding: 0,
    },
    "& li": {
      marginBottom: "1rem",
      "&:last-child": {
        display: "flex",
        flexDirection: "column",
      },
    },
  },
  backResult: {
    padding: "1rem",
  },
}));
