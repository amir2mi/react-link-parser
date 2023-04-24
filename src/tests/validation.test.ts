import { it, expect } from 'vitest';
import { isValidEmail, isValidUrl } from '../utils/validation';

it("an email name can contain a-zA-Z and numbers with - and .", () => {
  expect(isValidEmail("my-email.familyNAME1234@ymail.ae")).toBe(true);
})

it("an email name can be short", () => {
  expect(isValidEmail("a@mail.com")).toBe(true);
})

it("an email name can be long", () => {
  expect(isValidEmail("mygmailusernameistoolongtoberemembered@mail.com")).toBe(true);
})

it("an email name can not contain special characters", () => {
  expect(isValidEmail("my@email.familyName1234@ymail.ae")).toBe(false);
  expect(isValidEmail("my&email@ymail.ae")).toBe(false);
  expect(isValidEmail("my$email@ymail.ae")).toBe(false);
})

it("an email name can not contain persian or arabic characters", () => {
  expect(isValidEmail("مهدي@email.ir")).toBe(false);
  expect(isValidEmail("پیمان@gmail.ir")).toBe(false);
})

it("a valid email should follow the username@server.domain format", () => {
  expect(isValidEmail("myname.mysurename.q")).toBe(false);
})

it("valid url should have two slash after http[s]:", () => {
  expect(isValidUrl("https:/www.google.com")).toBe(false);
})

it("valid url is formatted like http[s]://[www].name.domain", () => {
  expect(isValidUrl("https://www.github.com")).toBe(true);
})

it("valid url can either be secured (https) or not (http)", () => {
  expect(isValidUrl("http://www.mo.nanoman.space/")).toBe(true);
  expect(isValidUrl("https://www.mo.nanoman.space/")).toBe(true);
})

it("valid url should have http or https identifier", () => {
  expect(isValidUrl("www.github.com")).toBe(false);
})

it("valid url can have persian or arabic name and domain", () => {
  expect(isValidUrl("https://www.ایران.ربات")).toBe(true);
})
