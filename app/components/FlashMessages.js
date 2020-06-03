import React, { useEffect } from "react";

import DispatchContext from "../../context/DispatchContext";
import StateContext from "../../context/StateContext";

import { useImmerReducer, useImmer } from "use-immer";

import {
  Container,
  ContainerNarrower,
  TitleContainer,
  ContainerRow,
} from "../../global-styles/global.styles";

import { GlobalButton, BackBtn } from "../../global-styles/GlobalButton.styles";

import {
  FormContainer,
  FormInputContainer,
  ButtonWrapper,
  FormInputSpan,
  GroupContainer,
} from "../../components/Form/form-input/form-input.styles";

import {
  RadioInput,
  IconsWrapper,
} from "../../components/Form/radio-button/radio-button-styles";

// import RadioBlockComponent from "../../components/Form/";
import { JobType } from "../../components/Form/job-type/radioBtnContainer";
// import { RadioContainer } from "../../components/Form/tabs-component/RadioInputBlock.styles";

import RadioIcons from "../../components/Form/radio-button/radio-button.component";
import {
  RadioContainer,
  IconContainer,
  IconRow,
} from "../../components/Form/radio-button/radio-button-styles";

function FlashMessages(props) {
  return (
    <div className="floating-alerts">
      {props.messages.map((msg, index) => {
        return (
          <div
            key={index}
            className="alert alert-success text-center floating-alert shadow-sm"
          >
            {msg}
          </div>
        );
      })}
    </div>
  );
}

export default FlashMessages;
