import { enqueueSnackbar } from "notistack";

const snackbar = (message) => {
  enqueueSnackbar(message, {
    variant: "info",
    anchorOrigin: { horizontal: "right", vertical: "top" },
    autoHideDuration: 2000,
  });
};

export default snackbar;
