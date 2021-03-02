# Share Your Content
Do you have content that you want to share with everyone? Do you have content you want to share only with users that paid a monthly or annual subscription? Do you want to sell an individual content? 

Share Your Content is a project that allows you to share your content freely or with different subscription tiers.

## How will it work?
There are two users of the app: the content creator and the content consumer.
### Content Creator
The content creator is responsible for publishing content and ranking it with a tier.
### Content Consumer
The consumer will read or watch the content. The consumer access to the content will depend on the subscribed tier that consumer has. This consumer needs to be logged in. Without being logged in the user will only be able to see the description of the content.

## Tiers
There are three type of tiers that might limit how consumers access the content.
### Free tier 
This will allow every logged user to see the content. (Non logged users can only see a small description of the content). Every Free tier content is available to other tiers. 
### Subscribed tier 
This tier will limit the content for only users with an active subscription. Subscriptions can be done on a monthly basis or annual one. When the subscription ends the content consumer stops having access to the content.
### Paid tier 
This tier will limit the content for only users that paid for this specific content. This content can only be accessed by users that paid to see specificaly this content. Paid tier content might be accessed by users with a subscribed tier if the content creator wishes so. The content creator can specify how much this content will individualy cost. Once the content is paid, the consumer has lifetime access to it and further updates.

## Expect usage
// TBD

## Expected Tech Stack
Next.js, React, TypeScript and Tailwind for building the UI.
Cypress and React Testing Library for tests
Auth0 for authentication
Stripe for subscription payments
Either DynamoDB or Firebase Cloud Firestore for storing data
For hosting the page either Vercel or AWS.

## Other notes
Will work with a Kanban methodology to be able to prioritize my features backlog and limit the work in progress.
