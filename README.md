# Loving Home!

## Setup

Expo: On phone runtime of app
GenyMotion: Android emulator

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

| MVP                         | DB Tables                                         | APIs                                                                                            | Reducers                                       |
| --------------------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| Login, register & users db  | Users table                                       | Refer to auth exercise                                                                          | Refer to exercise                              |
| Selecting desired charities | Charities, CharitiesAndUsers table                | GET, POST /users/:id/charities                                                                  | ActiveCharities                                |
| Homepage                    | Animals, AnimalsAndUsers tables                   | GET, POST /users/:id/animals. GET, POST /users/:id/cosmetics. GET, POST /animals/:id/cosmetics/ | UserAnimals, Amenities, Clock, ActiveAnimal    |
| News                        | News table                                        | GET /news                                                                                       | NewsCarousel, ActiveNews                       |
| Events                      | Events table                                      | GET /events                                                                                     | EventsCarousel, ActiveEvent                    |
| Store & "microtransactions" | Cosmetics, CosmeticsAndUsers, CosmeticsAndAnimals | GET /store/inventory. GET, POST /users/:id/cosmetics. GET, POST /animals/:id/cosmetics/         | StoreCarousel, ActiveStoreCarousel, ActiveItem |
| Rules page                  |                                                   |                                                                                                 |                                                |
| 3 starter pets              | Animals, AnimalsAndUsers tables                   |                                                                                                 |                                                |

| Stretch                            | DB Tables | APIs | Reducers | Actions |
| ---------------------------------- | --------- | ---- | -------- | ------- |
| Roaming pets                       |           |      |          |
| Minigame                           |           |      |          |         |
| Donation contribution progress bar |           |      |          |         |
| Pet needs                          |           |      |          |         |
| More pets!                         |           |      |          |         |
| Aesthetic food + water             |           |      |          |         |
| Naming pets                        |           |      |          |         |
| Treats in News & Events pages      |           |      |          |         |
| Achievements page                  |           |      |          |         |
| Checkin rewards                    |           |      |          |         |

### Database Tables

| Table Name          | Columns                                                           |
| ------------------- | ----------------------------------------------------------------- |
| Users               | id, username, password, email, coins, logout time                 |
| Animals             | id, name, species, disposition                                    |
| AnimalsAndUsers     | animalId, userId                                                  |
| Charities           | id, charityName, mission, websiteURL, logo                        |
| CharitiesAndUsers   | userId, charityId, donationPercent                                |
| News                | id, organisation, headline, content, image                        |
| Events              | id, organisation, headline, content, image, location, dateAndTime |
| Cosmetics           | id, name, image, price                                            |
| CosmeticsAndUsers   | userId, cosmeticId                                                |
| CosmeticsAndAnimals | animalId, cosmeticId                                              |

### Redux Reducers

| Section        | Reducer State       | Use                                                                           | Format                                                                         | Actions                                          |
| -------------- | ------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------ |
| Register/Login | ActiveCharities     | The charities the user has chosen                                             | An array of charity objects                                                    | UPDATE_ACTIVE_CHARITIES                          |
| Homepage       | UserAnimals         | Showing current animals                                                       | An array of all animals the current user owns.                                 |                                                  |
| Homepage       | ActiveAnimal        | The current animal selected                                                   | An object with an id value, or null                                            | UPDATE_ACTIVE_PET                                |
| Homepage       | Amenities           | Food and drink info for friends                                               | Object containing water and food levels                                        | FILL_WATER, FILL_FOOD, REDUCE_WATER, REDUCE_FOOD |
| Homepage       | Clock               | Stores info about time including time since last login                        | Object containing current time and last login time                             | UPDATE_ENTER_TIME, UPDATE_EXIT_TIME              |
| News           | NewsCarousel        | Stores all news stories to be shown                                           | An array of objects representing all news stories                              |                                                  |
| News           | ActiveNews          | Contains either the current news story, or nothing, to be used as a switch    | An object with an id value, or null                                            | UPDATE_ACTIVE_NEWS                               |
| Events         | EventsCarousel      | Stores all events to be shown                                                 | An array of objects representing all events                                    |                                                  |
| Events         | ActiveEvent         | Contains either the current event, or nothing, to be used as a switch         | An object with an id value, or null                                            | UPDATE_ACTIVE_EVENT                              |
| Store          | StoreCarousel       | Stores entire purchase catalogue                                              | Object of keys "Cosmetics", "Pets", etc, with entire store catalogue contained | BUY_ITEM                                         |
| Store          | ActiveStoreCarousel | Used to switch between what catalogue subset is displayed                     | String of "Cosmetics", "Pets", etc                                             | UPDATE_ACTIVE_STORE_CAROUSEL                     |
| Store          | ActiveItem          | Contains a reference to the selected item, or nothing, to be used as a switch | An object with an id value, or null                                            | UPDATE_ACTIVE_ITEM                               |

#### Reducer State

// Condense reducers with sub-keys

###### User

Inventory structure here and in API TBR

```
{
  inventory: [
    cosmetics: {
      userId: 1,
      cosmeticId: 1,
      name: "Raincoat",
      image: "raincoat.jpg",
      price: 2000
    }
  ]
}
```

###### Animals

```
{
  UserAnimals: [
    {
      id: 1,
      name: "Chippy",
      species: "dog",
      disposition: "sassy"
    }
  ],
  ActiveAnimal: {
    id: 1
  }
}
```

###### Homepage

```
{
  Amenities: {
    water: 40,
    food: 50
  },
  Clock: {
    lastLogoutTime: 1538001217263
  }
}
```

###### News

```
{
  NewsCarousel: [
    {
      id: 1,
      organisation: "Dog Motel",
      headline: "2 cute 4 skool",
      content: "pretty self extraplanetory",
      image: "subwoofer.png"
    }
  ],
  ActiveNews: {
    id: 1
  }
}
```

###### Events

```
{
  EventsCarousel: [
    {
      id: 1,
      organisation: "Alpaca Petting Society",
      headline: "National Petting Day!",
      content: "So soft",
      image: "woolfriend.png",
      location: "Wellington",
      dateAndTime: 1538021034314
    }
  ],
  ActiveEvent: {
    id: 1
  }
}
```

###### Store

```
{
  storeCarousel: {
    cosmetics: [
      { id: 1,
        name: "Raincoat",
        image: "raincoat.jpg",
        price: 2000
      }
    ],
    animals: [
      {
        id: 1,
        name: "Chippy",
        species: "Dog",
        disposition: "Sassy"
      }
    ]
  },
  activeStoreCarousel: "cosmetics",
  activeItem: {
    cosmetics: {
      id: 1
    }
  }
}
```

###### Charities

```
{
  charities: [
    {
      id: 1,
      charityName: "Puppies Motel",
      mission: "Just get it done",
      websiteURL: "www.totes-puppies.com",
      logo: "puppies-motel.jpg",
      donationPercent: 40
    }
  ],
  activeCharities: [
    {
      id: 1
    }
  ]
}
```

### Action Info

| Action Name                  | Description                                | Technical Details |
| ---------------------------- | ------------------------------------------ | ----------------- |
| UPDATE_ACTIVE_CHARITIES      | Passes select charities to reducer         |                   |
| UPDATE_ACTIVE_PET            | Passes animalId to reducer                 |                   |
| FILL_WATER                   | Onclick tops up water level                |                   |
| FILL_FOOD                    | Onclick tops up food level                 |                   |
| REDUCE_WATER                 | On login reduces water by time difference  |                   |
| REDUCE_FOOD                  | On login reduces food by time difference   |                   |
| UPDATE_ENTER_TIME            | Pushes new Date() to reducer on login      |                   |
| UPDATE_EXIT_TIME             | Pushes new Date() to reducer on logout     |                   |
| UPDATE_ACTIVE_NEWS           | Passes through selected newsId to reducer  |                   |
| UPDATE_ACTIVE_EVENT          | Passes through selected eventId to reducer |                   |
| BUY_ITEM                     | Passes selected cosmeticId to reducer      |                   |
| UPDATE_ACTIVE_STORE_CAROUSEL | Selects subset of inventory                |                   |
| UPDATE_ACTIVE_ITEM           | Pass cosmeticId to reducer                 |                   |

### APIs

| Method | Endpoint                | Protected | Usage                                    | Response                                                               |
| ------ | ----------------------- | --------- | ---------------------------------------- | ---------------------------------------------------------------------- |
| GET    | /charities/all          | ---       | Gets all charities available             | An array of charity objects                                            |
| GET    | /users/:id/charities    | ---       | Gets the current user's charity choices  | An array of charity objects                                            |
| POST   | /users/:id/charities    | ---       | Sets the current user's charity choices  | An array of charity objects                                            |
| GET    | /users/:id/animals      | ---       | Returns all animals adopted by that user | An array of animal objects                                             |
| POST   | /users/:id/animals      | ---       | Updates animals adopted by that user     | The new animal object                                                  |
| GET    | /users/:id/inventory    | ---       | Returns the current user's inventory     | An inventory object with keys/value pairs where each value is an array |
| POST   | /users/:id/inventory    | ---       | Updates the current user's inventory     | The updated inventory object                                           |
| GET    | /animals/:id/inventory/ | ---       | Returns the current animal's inventory   | An inventory object with keys/value pairs where each value is an array |
| POST   | /animals/:id/inventory/ | ---       | Updates the current animal's inventory   | The updated inventory object                                           |
| GET    | /news                   | ---       | Gets all news items                      | Returns an array of news objects                                       |
| GET    | /events                 | ---       | Gets all events                          | Returns an array of events objects                                     |
| GET    | /store/inventory        | ---       | Gets entire store catalogue              | Returns an object containing entire store inventory                    |

Method Endpoint Protected Usage Response
Post /api/auth/login Yes Log In a User The Users JWT Token
Post /api/auth/register Yes Register a User The Users JWT Token
Get /api/meetings Yes Get a Users Meeting Histroy An Array of Meetings

#### Request & Response Formats

##### GET /users/:id/charities

###### Response:

```
[
  {
    id: 1,
    charityName: "Puppies Motel",
    mission: "Just get it done",
    websiteURL: "www.totes-puppies.com",
    logo: "puppies-motel.jpg",
    donationPercent: 40
  }
]
```

##### POST /users/:id/charities

###### Request:

```
[
  {
    charityId: 1,
    donationPercent: 40
  }
]
```

###### Response:

```
[
  {
    id: 1,
    charityName: "Puppies Motel",
    mission: "Just get it done",
    websiteURL: "www.totes-puppies.com",
    logo: "puppies-motel.jpg",
    donationPercent: 40
  }
]
```

##### GET /users/:id/animals

###### Response:

```
[
  {
    id: 1,
    name: "Chippy",
    species: "Dog",
    disposition: "Sassy"
  }
]
```

##### POST /users/:id/animals

###### Request:

```
[
  {
    userId: 1
    animalId: 1,
    name: "Chippy",
    species: "Dog",
    disposition: "Sassy"
  }
]
```

###### Response:

```
[
  {
    id: 1,
    name: "Chippy",
    species: "Dog",
    disposition: "Sassy"
  }
]
```

##### GET /users/:id/inventory

```
[
  {
    id: 1,
    name: "Raincoat",
    image: "raincoat.jpg",
    price: 2000
  }
]
```

##### POST /users/:id/inventory

###### Request

```
[
  {
    userId: 1,
    cosmeticId: 1,
    name: "Raincoat",
    image: "raincoat.jpg",
    price: 2000
  }
]
```

###### Response

```
[
  {
    id: 1,
    name: "Raincoat",
    image: "raincoat.jpg",
    price: 2000
  }
]
```

##### GET /animals/:id/inventory/

###### Response

(only one item for each animal)

```
  {
    id: 2,
    name: "Bowtie",
    image: "Bow-tie.jpg",
    price: 1750
  }
```

##### POST /animals/:id/inventory/

###### Request

(only one item for each animal)

```
{
  animalId: 1,
  cosmeticId: 2,
  name: "Bow-tie",
  image: "Bow-tie.jpg",
  price: 1750
}
```

###### Response

(only one item for each animal)

```
  {
    id: 2,
    name: "Bow-tie",
    image: "Bow-tie.jpg",
    price: 1750
  }
```

##### GET /news

###### Response

```
[
  {
    id: 1,
    organisation: "Dog Motel",
    headline: "2 cute 4 skool",
    content: "pretty self explainitory",
    image: "lilwoofer.png"
  }
]
```

##### GET /events

###### Response

```
[
  {
    id: 1,
    organisation: "Alpaca Petting Society",
    headline: "National Petting Day!",
    content: "So soft",
    image: "woolfriend.png",
    location: "Wellington",
    dateAndTime: "Thursday 4 Oct 2018, 19:00"
  }
]
```

##### GET /store/inventory

Inventory structure here and in reducers TBR

###### Response

```
  {
    cosmetics: [
      { id: 1,
        name: "Raincoat",
        image: "raincoat.jpg",
        price: 2000
      }
    ],
    animals: [
      {
        id: 1,
        name: "Chippy",
        species: "Dog",
        disposition: "Sassy"
      }
    ]
  }
```
