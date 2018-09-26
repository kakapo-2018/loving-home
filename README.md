# Loving Home!

## MVP & Stretch Goals

### MVP

- Homepage
- Login & users db
- News
- Events
- Store & "microtransactions"
- Roaming pets
- 3 starter pets
- Selecting desired charities
- Rules page

### Stretch

- Minigame (shower, dogwalking, training tricks?)
- Donation contribution progress bar ("Your contributions allowed 10 puppies to be fed this week!")
- Pet needs
- More pets!
- Aesthetic food + water
- Naming pets
- Treats in News & Events pages to be collected
- Achievements page
- Checkin rewards (new pets, new toys, treats upgrades)
- Filter news and events from charities by user interest
- RSVP for events

## Technical Requirements

| MVP | DB Tables | APIs | Reducers |
| --- | --- | --- | --- | --- |
| Homepage | Animals, AnimalsAndPets tables | GET, POST /users/:id/pets. GET /animals. GET, POST /users/:id/cosmetics. GET, POST /pets/:id/cosmetics/ | UserPets, Amenities, Clock, ActivePet |
| Login & users db | Users table | Refer to auth exercise | Refer to exercise | Refer to exercise |
| News | News table | GET /news | NewsCarousel, ActiveNews |
| Events | Events table | GET /events | EventsCarousel, ActiveEvent |
| Store & "microtransactions" | Cosmetics, CosmeticsAndUsers, CosmeticsAndAnimals | GET /cosmetics. GET, POST /users/:id/cosmetics. GET, POST /pets/:id/cosmetics/ | CosmeticCarousel, ActiveCosmetic |
| Roaming pets |   |   |   |
| 3 starter pets |   |   |   |
| Selecting desired charities | Charities, CharitiesAndUsers table | GET, POST /:userid/charitychoice | ActiveCharities |
| Rules page |   |   |   |


| Stretch | DB Tables | APIs | Reducers | Actions |
| --- | --- | --- | --- | --- |
| Minigame |   |   |   |   |
| Donation contribution progress bar |   |   |   |   |
| Pet needs |   |   |   |   |
| More pets! |   |   |   |   |
| Aesthetic food + water |   |   |   |   |
| Naming pets |   |   |   |   |
| Treats in News & Events pages |   |   |   |   |
| Achievements page |   |   |   |   |
| Checkin rewards |   |   |   |   |


### Database Tables

| Table Name | Columns |
| --- | --- |
| Users | id, username, password, email, coins |
| Animals | id, name, species, disposition |
| AnimalsAndUsers | animal_id, user_id |
| Charities | id, charityName |
| CharitiesAndUsers | userId, charityId, donationPercent |
| News | id, organisation, headline, content, photo |
| Events | id, organisation, headline, content, photo, location, dateAndTime |
| Cosmetics | id, name, image, price |
| CosmeticsAndUsers | user_id, cosmetic_id |
| CosmeticsAndAnimals | animal_id, cosmetic_id |

### Redux Reducers

| Reducer | Use | Format | Actions |
| --- | --- | --- | --- |
| UserPets | Showing current pets | an array of all pets the current user owns. |  |
| Amenities | Food and drink info for friends | Object containing water and food levels | FILL_WATER, FILL_FOOD, REDUCE_WATER, REDUCE_FOOD |
| Clock | Stores info about time including time since last login | Object containing current time and last login time | UPDATE_ENTER_TIME, UPDATE EXIT_TIME |
| ActivePet | Stores info about the cur | an array of all pets the current user owns. | UPDATE_ACTIVE_PETS |
| NewsCarousel |  |  |  |
| ActiveNews |  |  | UPDATE_ACTIVE_NEWS |
| EventsCarousel |  |  |  |
| ActiveEvents |  |  | UPDATE_ACTIVE_EVENT |
| CosmeticsCarousel |  |  |  |
| ActiveCosmetics |  |  | UPDATE_ACTIVE_COSMETIC |
| ActiveCharities |  |  | UPDATE_ACTIVE_CHARITES |



### APIs

