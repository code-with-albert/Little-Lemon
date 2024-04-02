import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('Check if all fields rendered', () => {
  render(<BookingForm />);
  const dateInput = screen.getByLabelText(/Choose date*/);
  const timeInput = screen.getByLabelText(/Choose time*/);
  const numberOfGuestInput = screen.getByLabelText(/Number of guests*/);
  const occasionInput = screen.getByLabelText(/Occasion/);
  const submitButton = screen.getByRole('button');

  expect(dateInput).toBeInTheDocument();
  expect(timeInput).toBeInTheDocument();
  expect(numberOfGuestInput).toBeInTheDocument();
  expect(occasionInput).toBeInTheDocument();
  expect(submitButton).toBeDisabled();
});

test('Check if SubmitButton is Enabled', () => {
  render(<BookingForm />);
  const dateInput = screen.getByLabelText(/Choose date*/);
  const timeInput = screen.getByLabelText(/Choose time*/);
  const numberOfGuestInput = screen.getByLabelText(/Number of guests*/);
  const occasionInput = screen.getByLabelText(/Occasion/);
  const submitButton = screen.getByRole('button');
  const dateInputData = '2020-05-12'
  const timeInputData = '17:00'
  const numberOfGuestInputData = "2"
  const occasionInputData = 'Birthday'

  fireEvent.change(dateInput, {target: {value: dateInputData}});
  fireEvent.blur(dateInput);
  fireEvent.change(timeInput, {target: {value: timeInputData}});
  fireEvent.blur(timeInput);
  fireEvent.change(numberOfGuestInput, {target: {value: numberOfGuestInputData}});
  fireEvent.blur(numberOfGuestInput);
  fireEvent.change(occasionInput, {target: {value: occasionInputData}});
  fireEvent.blur(occasionInput);

  expect(dateInput.value).toEqual(dateInputData)
  expect(timeInput.value).toEqual(timeInputData)
  expect(numberOfGuestInput.value).toEqual(numberOfGuestInputData)
  expect(occasionInput.value).toEqual(occasionInputData)
  expect(submitButton).toBeEnabled();

});