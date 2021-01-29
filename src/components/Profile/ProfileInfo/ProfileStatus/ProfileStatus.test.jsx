import {create} from 'react-test-renderer';
import React from 'react';
import ProfileStatus from './ProfileStatus';

describe ("ProfileStatus component", () => {
  
  test ("Status from props should be in the state", () => {
    const component = create(<ProfileStatus status="it-pam" />);
    const instance = component.getInstance();

    expect(instance.state.status).toBe("it-pam");
  });

  test ("After creation <span> with status should be displayed", () => {
    const component = create(<ProfileStatus status="it-pam" />);
    const root = component.root;
    let spanEl = root.findByType("span");

    expect(spanEl).not.toBeNull();
  });

  test ("After creation <span> with should contains correct status", () => {
    const component = create(<ProfileStatus status="it-param" />);
    const root = component.root;
    let spanEl = root.findByType("span");

    expect(spanEl.children[0]).toBe('it-param');
  });

  test ("Input should be displayed in EditMode instead of span", () => {
    const component = create(<ProfileStatus status="it-param" />);
    const root = component.root;
    let span = root.findByType("span");
    span.props.onDoubleClick();
    let input = root.findByType("input");

    expect(input.props.value).toBe('it-param');
  });

  test ("Callback should be called", () => {
    const mockCallback = jest.fn();
    const component = create(
      <ProfileStatus status="it-param" updateStatus={mockCallback} />);
      const instance = component.getInstance();
      instance.deactivateEditMode();

    expect(mockCallback.mock.calls.length).toBe(1);
  });
})
