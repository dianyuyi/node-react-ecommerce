import { BrowserRouter as Router, Route } from "react-router-dom";
import { Grid, CssBaseline } from "@material-ui/core";
import useStyles from "./styles/index";
import { Home, ProductDetail } from "./pages";
import { Header, Sidemenu, Footer } from "./components";

function App() {
  const classes = useStyles();

  // const openMenu = () => {
  //   document.querySelector(".sidebar").classList.add("open");
  // };
  // const closeMenu = () => {
  //   document.querySelector(".sidebar").classList.remove("open");
  // };

  return (
    <>
      <Router>
        <CssBaseline />
        <Header />
        {/* <Sidemenu /> */}
        <Grid container justify="center" style={{ paddingTop: 64 }}>
          <main className={classes.content}>
            <Route path="/" exact={true} component={Home} />
            <Route path="/product/:id" exact={true} component={ProductDetail} />
          </main>
        </Grid>
        <Footer />
      </Router>
    </>
  );
}

export default App;
