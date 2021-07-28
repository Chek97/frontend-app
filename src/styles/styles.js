import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        background: 'linear-gradient(270deg, #00E6E3 2.73%, #00FF68 100%)',
    },
    lists: {
        width: '100%',
        maxWidth: 360,
        marginTop: '20px'
        
    },
    icon: {
        color: '#00E6E3',
        width: '100%',
        height: '100%'
    },
    formContainer: {
        marginTop: theme.spacing(15),
        marginBottom: theme.spacing(20)
    },
    primaryText: {
        fontSize: '32px',
        fontWeight: '700',
    },
}));