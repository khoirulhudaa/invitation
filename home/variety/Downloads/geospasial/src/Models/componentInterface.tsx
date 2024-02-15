export interface inputProps {
    value?: string | number;
    label?: string;
    name?: string;
    onChange?: any;
    id?: string;
    placeholder?: string;
    onError?: any;
    onTouched?: any;
    onBlur?: any;
    large?: boolean;
    type?: string;
    options?: any[];
    iconLabel?: any;
}

export interface popUpProps {
    onClick? : () => | any;
    handleAlert?: any;
    close?: any;
    handleSubdistrict?: any;
    dinasID?: string;
    handleStatus?: any;
    titleID?: string;
    handleDone?: any;
    dataSubdistrict?: any;
    onDeleteSubdistrict?: any;
    update?: any;
    searchSubdistrict?: string;
    onChange?: any;
    data?: any;
}

export interface mapProps {
    handleAddKoordinat: any;
    line: boolean;
    ref: any;
    data: any[];
    handleWidth?: any;
    handleHeight?: any,
    height: boolean;
    width: boolean;
    search?: string;
    handleShowAll?: any;
    showAll?: boolean;
    dataSubdistrict?: any;
}

export interface formProps {
    type?: string;
    handleAlert?: any;
    handleStatus?: any;
    close?: any;
    onClick?: any;
    handleSign?: any;
    titleID?: string;
    handleDone?: any;
    data?: any;
    dataSubdistrict?: any[];
}