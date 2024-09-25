-- Create Flights table
-- CREATE TABLE Flights (
--     flight_id INTEGER PRIMARY KEY,
--     origin TEXT NOT NULL,
--     destination TEXT NOT NULL,
--     departure_time TEXT NOT NULL,
--     arrival_time TEXT NOT NULL,
--     price REAL NOT NULL
-- );

-- Create Users table
-- CREATE TABLE Users (
--     user_id INTEGER PRIMARY KEY,
--     name TEXT NOT NULL,
--     email TEXT NOT NULL UNIQUE
-- );

-- INSERT INTO Flights (origin, destination, departure_time, arrival_time, price) VALUES ('Paris', 'Berlin', '2024-10-01 08:00', '2024-10-01 08:00', 500);

-- -- Insert data into Users table
-- INSERT INTO Users (name, email) 
-- VALUES ('Alice Johnson', 'alice.j@example.com');

-- INSERT INTO Users (name, email) 
-- VALUES ('Bob Smith', 'bob.s@example.com');


-- DELETE FROM Flights WHERE flight_id = 2;
UPDATE Users SET email = 'bo@gmail.com' WHERE user_id=1;

SELECT * FROM Flights;
SELECT * FROM Users;
