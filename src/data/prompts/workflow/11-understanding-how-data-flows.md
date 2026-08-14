11 — UNDERSTANDING HOW DATA FLOWS

Trace how [describe the specific data, for example a user's email address] flows through this entire system.

Start from every point it can be created or entered, signup form, API import, admin panel, and follow it through every:

- transformation,
- validation,
- storage location,
- place it gets read or displayed again.

Present this as an ordered sequence of steps with file and function references at each step, not just a list of files that mention it.

Flag any place the data is duplicated, cached, or stored in more than one location, since that is where inconsistency bugs usually live.
