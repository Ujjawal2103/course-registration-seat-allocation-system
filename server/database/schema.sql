CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    semester INT,
    cgpa DECIMAL(3,2),
    total_credits INT DEFAULT 0
);

CREATE TABLE admins (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255)
);

CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    course_code VARCHAR(20) UNIQUE,
    course_name VARCHAR(100),
    instructor VARCHAR(100),
    credits INT,
    max_seats INT,
    filled_seats INT DEFAULT 0,
    schedule VARCHAR(50)
);

CREATE TABLE registrations (
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(id) ON DELETE CASCADE,
    course_id INT REFERENCES courses(id) ON DELETE CASCADE,
    status VARCHAR(20) DEFAULT 'Registered'
);