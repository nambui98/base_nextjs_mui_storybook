import { Button as MuiButton } from '@mui/material';

export interface ButtonProps {
  label: string;
}

export const Button = ({ label, ...rest }: ButtonProps) => {
  return <MuiButton {...rest}>{label}</MuiButton>;
};

Button.defaultProps = { variant: 'outlined' };

// export default Button;
