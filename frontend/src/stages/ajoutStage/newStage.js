import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../../shared/FormElements/Input';
import Button from '../../shared/FormElements/Button';
import ErrorModal from "../../shared/UIElements/ErrorModal"
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';

const newStage = () => {
    const { error, sendRequest, clearError } = useHttpClient();
    const [formState, inputHandler] = useForm(
        {
            nomPersonneContact: {
                value: '',
                isValid: false
            },
            courrielPersonneContact: {
                value: '',
                isValid: false
            },
            numeroPersonneContact: {
                value: '',
                isValid: false
            },
            adresseEntreprise: {
                value: '',
                isValid: false
            },
            typeDeStage: {
                value: '',
                isValid: false
            }
            ,nbPostesDispo: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            },
            remuneration: {
                value: '',
                isValid: false
            },
        },
        false
    );
}

export default newStage;