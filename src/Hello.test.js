import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Hello from "./Hello";

Enzyme.configure({ adapter: new Adapter() });

const user = { id: '234234234234', firstName: 'Dan', lastName: 'Abramov' };

it('Displays the first name of the user', () => {
  const component = mount(<Hello user={user} />);

  const greeting = component.find('.greeting');
  expect(greeting.text()).toEqual('Hello Dan!');
});
