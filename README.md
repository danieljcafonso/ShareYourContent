# Share Your Content :desktop_computer:	
Do you have content that you want to share with everyone? Do you have content you want to share only with users that paid a monthly or annual subscription? Do you want to sell an individual content? 

Share Your Content is a project that allows you to share your content freely or with different subscription tiers.

## How will it work? :technologist:	
There are two users of the app: the content creator and the content consumer.
### Content Creator
The content creator is responsible for publishing content and ranking it with a tier.
### Content Consumer
The consumer will read or watch the content. The consumer access to the content will depend on the subscribed tier that consumer has. This consumer needs to be logged in. Without being logged in the user will only be able to see the description of the content.

## Tiers :1st_place_medal:	
There are three type of tiers that might limit how consumers access the content.
### Free tier 
This will allow every logged user to see the content. (Non logged users can only see a small description of the content). Every Free tier content is available to other tiers. 
### Subscribed tier 
This tier will limit the content for only users with an active subscription. Subscriptions can be done on a monthly basis or annual one. When the subscription ends the content consumer stops having access to the content.
### Paid tier 
This tier will limit the content for only users that paid for this specific content. This content can only be accessed by users that paid to see specificaly this content. Paid tier content might be accessed by users with a subscribed tier if the content creator wishes so. The content creator can specify how much this content will individualy cost. Once the content is paid, the consumer has lifetime access to it and further updates.

## Expected usage :thinking:	
This section will explain what are the expected funcionalities when using the app. 
### A non logged user reaches the page:
He can do the following things:
 - Sign up
 - Log in
 - Check the existing content title and description
 - Apply for a subscription (will be redirected to login page first)
 - Buy a Paid tier content  (will be redirected to login page first)
### A user without a subscription is logged in 
He can do the following things:
- Log out
- Apply for a subscription
- Buy a Paid tier content
- Check free content
- Check bought Paid tier content.
### A user with a subscription is logged in
He can do the following things:
- Log out
- Manage their subscription (days left, extend, cancel)
- Check free content
- Check subscribed tier content
- Check bought Paid tier content.
### The content creator logs in
- Log out
- Manage their existent content
  - Delete
  - Edit
  - Change tier
    - If paid tier: change price

## Expected Tech Stack :grey_question:	
Next.js, React, TypeScript and Tailwind for building the UI.
Cypress and React Testing Library for tests
Auth0 for authentication
Stripe for subscription payments
Either DynamoDB or Firebase Cloud Firestore for storing data
For hosting the page either Vercel or AWS.

## Other notes
Will work with a Kanban methodology to be able to prioritize my features backlog and limit the work in progress.
