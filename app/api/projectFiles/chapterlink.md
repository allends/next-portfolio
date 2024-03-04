title: ChapterLink
descriptiveTitle: ChapterLink
description: An organization manager for the busy
tags: solid.js

---

# ChapterLink

## Overview

College organizations can be hard. While I was in one, I noticed that there was a lot of work that could be automated in order to save members time and stress. There were two motivators here, one was the length of time that it took to communicate with everyone in the organization via text message (personalized messaged were so hard for 70+ people). The other pain point me was the lengthy process of calculating member expenses based on different tiers and budgets. In classic fashion, I spent way too much time making a solution for a problem that was only mildly annoying.

## The Solution

### Features

My list of requirements for this MVP was quite simple.

1. Manage a registry of members
2. Track events and attendees.
3. Mass personalized messaging to members.
4. Calculate fines for missed points.
5. Budgeting for different departments of the organization.

I needed to figure out a way to implement these all in a scalable way. I reached for Solid.js and Pocketbase to power my frontend and backend since they are new and exciting pieces of tech. I also used my gold standard of UI libraries, DaisyUI. These tools made it very easy to move fast and implement new features. It was also exciting for me to learn new technologies.


### Design

The first thing that I had to do was figure out a scalable way to structure our organizations. Since I envisioned a future where a university could adopt this system, I made top level university organizations that can host any number of student level organizations. This way there could be university level management easily added in the future. I did not do anything with this yet, I just wanted to solidify a way to create Rutgers (my alma mater) organizations.

On an organizational level, I wanted members to have scoped access to certain roles. In the organization I designed this for - we had a changing set of positions that all had a unique set of permissions. In order to model this, I created a list of arbitrary permissions (ie creating events, editing attendees to events, sending messages to members, creating members, etc) and then created a list of roles (with a title, description, and id). Each position then has it's own set of permissions so that an organization can mix and match in whatever configuration they need to fit their specific roles.

The other design decision was points. This one was easier to model since the relationship between events and users is very natural. For any user and event I have a row in a table called attendees in order relate a user to the events that they have attended. On this relation I also added a 'pending' boolean so that users can request to go to an event and then an admin with permission to edit attendees can either accept or deny that request. For each non-pending relationship, a user would be awarded points based on the value of the event. I made this table a 'view' table in SQL. This was previously something that I only found application for in my Databases class in school but now it came in handy in the real world (sick).

### Implementation

There were a few views I wanted to implement for a V1.

- User settings
- User event overview
- User point overview
- All events overview
- Create events form
- Approvals page
- Messaging page

Each of these pages are simplistic and designed with a mobile view in mind. They allow users to quickly manage their events and points without having to dig through tons of spreadsheets as they have in the past.
Beyond this, admins (or elevated positions) can send bulk messages to users and also edit event attendees. This makes it really easy for those in special positions to manage events and those who went to those events.

## Future Roadmap

There are a few features that I think I could do better. First of all is budgeting, as of right now budgets are rigid and have to be manually entered in order for an organization to use them fully. Ideally budgets should be dynamic and editable by users through the GUI. Overall, I am happy with the V1 of this project and am excited for a V2.

## Resources

[Live Site](https://chapter-link.vercel.app/)

[Github](https://github.com/allends/chapterLink)