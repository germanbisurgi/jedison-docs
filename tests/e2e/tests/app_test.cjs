/* global Feature Scenario */

Feature('app')

BeforeSuite(({I}) => {
  I.amOnPage('/')
});

Scenario('@app should open app', ({ I }) => {
  I.waitForText('Home')
})
