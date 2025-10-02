# Document the vulnerability found in the website https://juice-shop.herokuapp.com/

## Injection attacks

### Cross Site Scripting (XSS)

    The cross site scripting security testing approach is done to ensure that the website is not vulnerable to any scripts that are maliciously executed. The tests also observe the error messages to ensure that the unintended actors do not get any information from the error messages

    *** Juice shop website is vulnerable for XSS script attack. ***

    Test Step:
    1. Open the URL https://juice-shop.herokuapp.com/
    2. Navigate to Account -> Login
    3. In the username password field, enter the script below 
       <script>alert('XSS Vulnerability')</script>
    4. Click Login button
    5. Observe the alert message displayed

    The error message given is "[object Object]" indicating that the application is not handling the XSS attacks and also, the hacker is able to get more information about the application which could be used for other attacks.
