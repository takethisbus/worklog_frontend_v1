import { TextField } from "@mui/material";
import { ComponentProps } from "react";

export const TodoInput = (props: ComponentProps<typeof TextField>) => {
  return (
    <TextField
      variant="standard"
      name="title"
      placeholder="오늘의 할일을 입력하세요"
      required
      InputProps={{
        disableUnderline: true
      }}
      {...props}
    />
  );
};