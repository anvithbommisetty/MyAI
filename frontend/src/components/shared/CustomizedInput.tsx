import TextField from "@mui/material/TextField";

type Props = {
  name: string;
  type: string;
  label: string;
  autocomplete?: string; // optional autocomplete prop
};

const CustomizedInput = (props: Props) => {
  return (
    <TextField
      margin="normal"
      InputLabelProps={{ style: { color: "white" } }}
      name={props.name}
      label={props.label}
      type={props.type}
      InputProps={{
        style: {
          width: "400px",
          borderRadius: 10,
          fontSize: 20,
          color: "white",
        },
        autoComplete: props.autocomplete || "off", // default to "off" if not provided
      }}
    />
  );
};

export default CustomizedInput;
