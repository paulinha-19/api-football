import { useState } from "react";
import { Box, Alert, Collapse, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

interface AlertAppProps {
  severity: "error" | "info" | "success" | "warning";
  variant?: "standard" | "filled" | "outlined";
  children: string;
  reOpenButton?: React.ReactNode;
}

const AlertApp = ({
  severity = "success",
  variant = "outlined",
  children,
  reOpenButton,
}: AlertAppProps) => {
  const [open, setOpen] = useState(true);

  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={open}>
        <Alert
          severity={severity}
          variant={variant}
          action={
            <Box>
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            </Box>
          }
          sx={{ mb: 2 }}
        >
          {children}
        </Alert>
      </Collapse>
      {reOpenButton && (
        <Button
          disabled={open}
          variant="contained"
          onClick={() => {
            setOpen(true);
          }}
        >
          {reOpenButton}
        </Button>
      )}
    </Box>
  );
};

export default AlertApp;
