# Loving Home!

## MVP & Stretch Goals

### MVP

- Homepage
- Login & users db
- News
- Events
- Store & "microtransactions"
- 3 starter pets
- Selecting desired charities
- Rules page

### Stretch

- Roaming pets
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
- User settings page (chosen charities and percentages, chosen news and events filter level, etc)

## Technical Requirements

| MVP | DB Tables | APIs | Reducers |
| --- | --- | --- | --- | --- |
| Login, register & users db | Users table | Refer to auth exercise | Refer to exercise | Refer to exercise |
| Selecting desired charities | Charities, CharitiesAndUsers table | GET, POST /:userid/charitychoice | ActiveCharities |
| Homepage | Animals, AnimalsAndUsers tables | GET, POST /users/:id/pets. GET /animals. GET, POST /users/:id/cosmetics. GET, POST /pets/:id/cosmetics/ | UserPets, Amenities, Clock, ActivePet |
| News | News table | GET /news | NewsCarousel, ActiveNews |
| Events | Events table | GET /events | EventsCarousel, ActiveEvent |
| Store & "microtransactions" | Cosmetics, CosmeticsAndUsers, CosmeticsAndAnimals | GET /cosmetics. GET, POST /users/:id/cosmetics. GET, POST /pets/:id/cosmetics/ | StoreCarousel, ActiveStoreCarousel, ActiveItem |
| Rules page |   |   |   |
| 3 starter pets | Animals, AnimalsAndUsers tables |   |   |


| Stretch | DB Tables | APIs | Reducers | Actions |
| --- | --- | --- | --- | --- |
| Roaming pets |   |   |   |
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

| Section | Reducer | Use | Format | Actions |
| --- | --- | --- | --- | --- |
| Homepage | UserPets | Showing current pets | an array of all pets the current user owns. |  |
| Homepage | Amenities | Food and drink info for friends | Object containing water and food levels | FILL_WATER, FILL_FOOD, REDUCE_WATER, REDUCE_FOOD |
| Homepage | Clock | Stores info about time including time since last login | Object containing current time and last login time | UPDATE_ENTER_TIME, UPDATE EXIT_TIME |
| Homepage | ActivePet | Stores info about the current user's pets | an array of all pets the current user owns. | UPDATE_ACTIVE_PETS |
| News | NewsCarousel | Stores all news stories to be shown | An array of objects representing all news stories |  |
| News | ActiveNews | Contains either the current news story, or nothing, to be used as a switch | A single News object, or null | UPDATE_ACTIVE_NEWS |
| Events | EventsCarousel | Stores all events to be shown | An array of objects representing all events |  |
| Events | ActiveEvent | Contains either the current event, or nothing, to be used as a switch | A single Event object, or null | UPDATE_ACTIVE_EVENT |
| Store | StoreCarousel | Stores entire purchase catalogue | Object of keys "Cosmetics", "Pets", etc, with entire store catalogue contained | BUY_ITEM |
| Store | ActiveStoreCarousel | Used to switch between what catalogue subset is displayed | String of "Cosmetics", "Pets", etc | UPDATE_ACTIVE_STORE_CAROUSEL |
| Store | ActiveItem | Displays the selected store item if not null, containing purchase info, details, description | Either active item object, or null | UPDATE_ACTIVE_ITEM |
| Register/Login | ActiveCharities |  |  | UPDATE_ACTIVE_CHARITES |



### APIs