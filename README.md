## Playwright Automation

The project includes an automated login flow using Playwright.

The test:
1. Opens the staging application
2. Enters credentials from environment variables
3. Submits the login form
4. Verifies successful navigation to `/caseload`

### Note

During automation, Firebase authentication returned:

`auth/captcha-check-failed`

The same credentials were verified to work through manual browser login. 
Therefore, the automated login flow is currently blocked by the staging environment's
Firebase CAPTCHA verification.
