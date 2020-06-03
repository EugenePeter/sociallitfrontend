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

import Education from "../../assets/icons/education-cashified";
import { ReactComponent as Emergencies } from "../../assets/icons/emergencies.svg";
import { ReactComponent as HomeImprovements } from "../../assets/icons/home-improvements-cashified.svg";
import { ReactComponent as Leisure } from "../../assets/icons/leisure-cashified.svg";
import { ReactComponent as LifeEvents } from "../../assets/icons/life-events-cashified.svg";
import { ReactComponent as Purchases } from "../../assets/icons/purchases-cashified.svg";
import { ReactComponent as Travel } from "../../assets/icons/travel-cashified.svg";
import { ReactComponent as Utilities } from "../../assets/icons/utilities-and-bills-cashified.svg";
import { ReactComponent as VehicleRepairs } from "../../assets/icons/vehicle-repairs.svg";
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
