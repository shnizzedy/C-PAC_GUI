import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';

export default createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: { main: teal[200] },
    secondary: { main: teal[600] }
  },
  props: {
    MuiGrid: {
      spacing: 8
    }
  },
  overrides: {
    MuiFormGroup: {
      root: {
        border: "1px solid rgba(0, 0, 0, 0.23)",
        borderRadius: 4,
        padding: 14,
        marginTop: 16,
        marginBottom: 8,
        '&$row': {
          border: 0,
          borderRadius: 0,
          margin: 0,
          padding: 0,
        }
      }
    }
  }
});