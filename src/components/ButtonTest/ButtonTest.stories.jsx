import React from 'react'
import ButtonTest from './ButtonTest'

export default {
    title : "ButtonTest",
    component: ButtonTest,
    
}

const Template = (args) => <ButtonTest {...args}/>

export const PrimaryButton = Template.bind({})
PrimaryButton.args = {
    variant: 'primary',
    children: "SIGN UP",
    type: "button",
    isDisabled: false,
}

export const SecondaryButton = Template.bind({})
SecondaryButton.args = {
    variant: 'secondary',
    children: "LOGIN",
    type: "button",
    isDisabled: false,
}

export const LandingHeroPrimaryButton = Template.bind({})
LandingHeroPrimaryButton.args = {
    variant: 'primary',
    children: "GET STARTED",
    type: "button",
    padding: "14px 47px",
    isDisabled: false,
}

export const LandingHeroSecondaryButton = Template.bind({})
LandingHeroSecondaryButton.args = {
    variant: 'secondary',
    children: "DOWNLOAD APP",
    type: "button",
    padding: "14px 47px",
    isDisabled: false
}