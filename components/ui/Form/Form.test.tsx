import React from "react";
import renderer  from 'react-test-renderer';

const Form = require('./Form').Form
const component = renderer.create(<Form data={""}/>);

test('teste do Formulario', ()=>{
      component.prop
      expect(component).toMatchSnapshot()
})