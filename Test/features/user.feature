Feature: User Creation and Updation

@loginAsAdmin
Scenario Outline: Login as Admin (QC-1344) 
  Given I am on QuinC page
  When Login to QuinC with "<credentials>"

  Examples:
    | credentials  |  
    | admin        | 

@goToUserTab
Scenario Outline: Go to User Tab (QC-1356) 
  Given I am on QuinC page
  When Login to QuinC with "<credentials>"
  When Go to Admin widget
  When Go to Users Tab

  Examples:
    | credentials  |  
    | admin        | 

@createUser
Scenario Outline: Create New User (QC-1357) 
  Given I am on QuinC page
  When Login to QuinC with "<credentials>"
  When Go to Admin widget
  When Go to Users Tab
  And Click on Refresh button
  And Click on New User icon

  Examples:
    | credentials  |  userInfo          |
    | admin        | TestNonAdmin1  |

@saveUser
Scenario Outline: Save User and set Password (QC-1358) 
  Given I am on QuinC page
  When Login to QuinC with "<credentials>"
  When Go to Admin widget
  When Go to Users Tab
  And Click on Refresh button
  And Click on New User icon
  Then Insert User "<userInfo>"
  And Click on save user button
  Then Insert Password "<userInfo>" and save user

  Examples:
    | credentials  |  userInfo      | 
    | admin        | TestNonAdmin1  |
    
@deleteUser
Scenario Outline: Delete a User (QC-1359) 
  Given I am on QuinC page
  When Login to QuinC with "<credentials>"
  When Go to Admin widget
  When Go to Users Tab
  And Click on Refresh button
  And Click on New User icon
  Then Insert User "<userInfo>"
  And Click on save user button
  And Insert Password "<userInfo>" and save user
  Then Delete user "<userInfo>"

  Examples:
    | credentials  |  userInfo      | 
    | admin        | TestNonAdmin1  |

@editUser
Scenario Outline: Edit User Information (QC-1363) 
  Given I am on QuinC page
  When Login to QuinC with "<credentials>"
  When Go to Admin widget
  When Go to Users Tab
  And Click on Refresh button
#   And Click on New User icon
#   Then Insert User "<userInfo>"
#   And Click on save user button
#   And Insert Password "<userInfo>" and save user
  Then Edit user "<userInfo>"
  
  Examples:
    | credentials  |  userInfo      | 
    | admin        | TestNonAdmin1  |

@resetPassword
Scenario Outline: Reset User Password (QC-1364) 
  Given I am on QuinC page
  When Login to QuinC with "<credentials>"
  When Go to Admin widget
  When Go to Users Tab
  And Click on Refresh button
#   And Click on New User icon
#   Then Insert User "<userInfo>"
#   And Click on save user button
#   And Insert Password "<userInfo>" and save user
  Then Reset User Password "<userInfo>"
  
  Examples:
    | credentials  |  userInfo      | 
    | admin        | TestNonAdmin1  |

@createGroup
Scenario Outline: Create New group (QC-952) 
  Given I am on QuinC page
  When Login to QuinC with "<credentials>"
  When Go to Admin widget
  When Go to Group Tab
  And Click on Refresh button
  And Click on New Group icon
  Then Give group name "<group_name>" and click on Save button

  
  Examples:
    | credentials  |  userInfo      | group_name |
    | admin        | TestNonAdmin1  | Application Admin |