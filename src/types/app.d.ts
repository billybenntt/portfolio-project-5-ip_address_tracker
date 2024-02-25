import React from "react";

type SubmitFormEvent = React.MouseEvent<HTMLButtonElement, MouseEvent> | React.FormEvent<HTMLFormElement>;
type ChangeFormEvent = React.ChangeEvent<HTMLInputElement>;

export {SubmitFormEvent, ChangeFormEvent};