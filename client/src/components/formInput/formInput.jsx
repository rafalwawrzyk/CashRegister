import React from 'react';
import {Input,Label,StyledWrapper} from './styles';

const FormInput = ({handleChange,label, ...otherProps}) => {
	return (
		<StyledWrapper>
			<Input onChange={handleChange} {...otherProps}/>
            {
                label ? <Label>{label}</Label> : null
            }
		</StyledWrapper>
	);
};

export default FormInput;
