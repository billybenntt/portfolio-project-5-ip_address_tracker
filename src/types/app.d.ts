import React from "react";

type SubmitFormEvent = React.MouseEvent<HTMLButtonElement, MouseEvent> | React.FormEvent<HTMLFormElement>;
type ChangeFormEvent = React.ChangeEvent<HTMLInputElement>;


interface GeolocationState {
    isLoading: boolean,
    query: string,
    search: {
        ip: string,
        isp: string,
        city: string,
        country: string,
        timezone: string
        latitude: number,
        longitude: number,

    }
}


export {SubmitFormEvent, ChangeFormEvent, GeolocationState};