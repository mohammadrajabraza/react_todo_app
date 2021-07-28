import {
  AppBar,
  Button,
  Toolbar,
  Typography,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useHistory, Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    header: {
        background: "#558b2f",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }))

const Header = () => {
    const classes = useStyles()
    const history = useHistory()
  return (
    <div>
      <AppBar position="static" className={classes.header}>
            <Toolbar>
            <Typography variant="h4" className={classes.title}>
                <Link to="/">
                  Todo List
                </Link>
            </Typography>
            <Button variant="outlined" color="inherit" 
            onClick={() => history.push('/login')}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
