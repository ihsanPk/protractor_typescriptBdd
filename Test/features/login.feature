Feature: Login To QuinC

@Login
Scenario Outline: Login to QuinC
  
  Given I am on QuinC page
  When Login to QuinC with "<credentials>"
  When I clicked on process data
  # Then I log out

  Examples:
    | credentials  |  
    | admin        | 
    | CR1user      | 

