import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
  authContainer: {
    marginTop: '6%'
  },
  authPaperWrapper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  authPaper: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#558b2f'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: '#558b2f',
    '&:hover': {
      background: '#33691e'
    }
  }
}))
export default useStyles
