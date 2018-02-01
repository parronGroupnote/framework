import React, { Component } from 'react';
import { ButtonRounded, ButtonRoundedLarge, ButtonLarge } from 'core/buttons';
import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
  en: {
    next: "NEXT"
  },
  es: {
    next: "SIGUIENTE"
  }
});

export
  const WelcomeNextButton = (props) => (
    <ButtonRoundedLarge text={strings.next} shadow />
  )


