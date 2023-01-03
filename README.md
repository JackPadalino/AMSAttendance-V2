# AMSAttendance-V2
Express JS app to automate teacher attendance and staff covereages.

## Basic features
- *Includes MS/HS schedules and letter days*
- App can receive/send messages
- DB of teacher schedules and classes
- Assign coverages from the app
- Using Twilio API and ngrok webhooks

### Next steps
- *TRIPLE check absent teacher classes and available teachers!*
- Update API route and SingleClass component to look for co-teachers first - if co-teacher is present, state that and provide other available teachers
- Add forms to add new classes, and assign classes to teachers
- Add the ability for admin to schedule absences ahead of time
- Update teacher schedule to add/remove classes
- Update classes to change name, period, school, letter days

### Next,Next steps
- Be able to create and assign coverages from within the app

### Next,Next,Next steps
- Teachers being assigned a coverage will receive a text message or email
- A final email is sent to admin with a list of all absences and coverages happening that day

### Twilio resources
- https://www.twilio.com/docs/sms/quickstart/node
- https://www.twilio.com/docs/twilio-cli/general-usage/profiles#use-multiple-profiles
- https://www.google.com/search?q=overlapping+time+schedule+coding+problem&sxsrf=ALiCzsY6Q-cJwSv1ogGZoC2z8MdtTI1-aw:1671752527678&source=lnms&tbm=vid&sa=X&ved=2ahUKEwji5cG8s478AhXUGlkFHS0tC5kQ_AUoAnoECAEQBA&biw=1920&bih=1088&dpr=1#fpstate=ive&vld=cid:db17f444,vid:pirT3bDXXLE