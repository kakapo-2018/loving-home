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

## Technical Requirements

| MVP | DB Tables | APIs | Reducers | Actions |
| --- | --- | --- | --- | --- |
| Homepage | Animals, AnimalsAndPets tables | GET, POST /:userid/pets. GET /animals | ActivePets, Amenities, Clock | FILL_WATER, FILL_FOOD, REDUCE_WATER, REDUCE_FOOD, UPDATE_ACTIVE_PETS, UPDATE_ENTER_TIME, UPDATE EXIT_TIME |
| Login & users db | Users table | Refer to auth exercise | Refer to exercise | Refer to exercise |
| News |   |   |   |   |
| Events |   |   |   |   |
| Store & "microtransactions" |   |   |   |   |
| Roaming pets |   |   |   |   |
| 3 starter pets |   |   |   |   |
| Selecting desired charities | Charities, CharitiesAndUsers table | GET, POST /:userid/charitychoice | ActiveCharities | 'UPDATE_ACTIVE_CHARITES' |
| Rules page |   |   |   |   |


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

Users: id, username, password, email
Animals: id, name, species, disposition
AnimalsAndUsers: animal_id, user_id 
Charities: id, charityName
CharitiesAndUsers: userId, charityId, donationPercent


### APIs

