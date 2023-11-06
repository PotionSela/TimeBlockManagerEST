# TimeBlockManagerEST
The TimeBlockManagerEST is a JavaScript-based application that dynamically assigns past, present, or future classes to time blocks based on the current time, allowing users to schedule and save events for different hours of the day.

![Work Day Scheduler Screenshot](./Develop/Assets/Images/Work%20day%20Scheduler.jpg)

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Local Storage](#local-storage)
- [Contributing](#contributing)

## Features

- **Dynamic Time Block Classification:** TimeBlockManager dynamically assigns past, present, or future classes to each time block based on the current time, ensuring a clear visual representation of your schedule.

- **Event Scheduling:** You can easily input and save event descriptions for each time block, helping you plan your day effectively.

- **Local Storage:** Your scheduled events are stored in your browser's local storage, allowing you to access and edit them even after refreshing the page.

## Getting Started

To get started with TimeBlockManager, follow these steps:

1. Clone this repository to your local machine.

git clone https://github.com/your-username/timeblock-manager.git

## Usage
The current day and date are displayed at the top of the page.

Each time block represents an hour of the day, starting from midnight (12 AM) to 11 PM. The time blocks are color-coded as follows:

Past: Grey
Present: Red
Future: Green
Current Hour: Blue
Click on the time block for the desired hour and enter your event description in the text area.

Click the "Save" button to save your event. The event will be stored in local storage.

Even after refreshing the page or reopening the application, your saved events will be retained.

## Local Storage
TimeBlockManager uses your browser's local storage to save and retrieve event descriptions for each time block. This means your scheduled events are accessible even if you close the application and return later.

## Contributing
Contributions are welcome! If you have any ideas for improving TimeBlockManager or encounter any issues, please feel free to open an issue or submit a pull request.
