import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Grid, CssBaseline } from "@material-ui/core";
import useStyles from "./styles/index";
import Home from "./pages/Home";
import { Header, Sidemenu, Footer } from "./components";

function App() {
  const classes = useStyles();

  // const openMenu = () => {
  //   document.querySelector(".sidebar").classList.add("open");
  // };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <>
      <Router>
        <CssBaseline />
        <Header />
        {/* <Sidemenu /> */}
        <Grid container justify="center" spacing={0}>
          <main className={classes.content}>
            test
            <Route path="/" exact={true} component={Home} />
          </main>
        </Grid>
        <Footer />
      </Router>
    </>
  );
}

export default App;
