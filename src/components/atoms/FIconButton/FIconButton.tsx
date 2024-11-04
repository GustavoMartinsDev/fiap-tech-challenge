import { IconButton, IconButtonProps, Box } from "@mui/material";
import React from "react";

interface FIconButtonProps {
  variant: 'plain' | 'fancy';
  options?: IconButtonProps;
  onClick?: () => void;
  children: React.ReactNode;
}

export default function FIconButton({variant, options, onClick, children}: FIconButtonProps) {
  return (
    <IconButton 
    {...options}
    style={{ padding: 0 }}
    onClick={onClick}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          ...(variant === 'fancy' && {
            backgroundColor: 'var(--mui-palette-primary-main)',
            color: 'var(--mui-palette-primary-contrastText)',
            width: 40,
            height: 40,
            borderRadius: '50%',
          }),
        }}>
        { children }
      </Box>
    </IconButton>
  );
}
