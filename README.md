# Authentication NestJS API

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Description

A complete **REST API** built with **NestJS** that implements a comprehensive authentication system and person management with complete contact information and addresses.

## Features

### 1. **JWT Authentication System**
- Login with Bearer Token
- Route protection with authentication middleware
- Secure token-based access control

### 2. **Person Management** (Full CRUD)
- Create, read, update, and delete persons
- Advanced search functionality by name
- Complete person profile management

### 3. **Contact Information Management**
- **Emails**: Multiple emails per person with primary flag
- **Phones**: Multiple phone numbers per person with primary flag
- Flexible contact information structure

### 4. **Complete Address System**
- Street, zone, city information
- Country relationship (separate entity)
- Geographic data management

### 5. **Interactive API Documentation**
- Swagger UI available at `/documentacion`
- Complete endpoint documentation
- Interactive API testing interface

## Tech Stack

- **NestJS** - Main framework
- **TypeORM** - Database ORM
- **JWT + Passport** - Authentication
- **Swagger** - API documentation
- **MySQL/MariaDB** - Database
- **class-validator** - Data validation
- **TypeScript** - Programming language

## API Endpoints

### Authentication
- `POST /auth/login` - User login
- `POST /auth/register` - User registration

### Person Management
- `GET /person` - Get all persons
- `POST /person` - Create new person
- `GET /person/:id` - Get person by ID
- `PUT /person/:id` - Update person
- `DELETE /person/:id` - Delete person
- `GET /person/search/:term` - Search persons by name
- `POST /person/search` - Advanced search

### Contact Information
- `GET /email` - Get all emails
- `POST /email` - Create new email
- `GET /email/person/:idperson` - Get emails by person
- `DELETE /email/:id` - Delete email

- `GET /phone` - Get all phones
- `POST /phone` - Create new phone
- `GET /phone/person/:idperson` - Get phones by person
- `DELETE /phone/:id` - Delete phone

### Address Management
- `GET /address` - Get all addresses
- `POST /address` - Create new address
- `GET /address/person/:idperson` - Get addresses by person
- `DELETE /address/:id` - Delete address

### Countries
- `GET /country` - Get all countries
- `POST /country` - Create new country

## Environment Configuration

Create a `.env` file in the root directory with the following variables:

```env
# Database Configuration
DB_TYPE=mysql
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_DATABASE=your_database

# JWT Configuration
JWT_SECRET=your_jwt_secret_key

# Application
PORT=3001
```

## Project Setup

```bash
# Install dependencies
$ npm install

# Set up your database and environment variables
# Create your .env file with the configuration above
```

## Compile and Run the Project

```bash
# development
$ npm run start

# watch mode (recommended for development)
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Access the Application

Once running, you can access:

- **API Base URL**: `http://localhost:3001`
- **Swagger Documentation**: `http://localhost:3001/documentacion`

## Database Schema

The application manages the following entities:

- **Person**: Main entity with personal information
- **Email**: Email addresses linked to persons (with primary flag)
- **Phone**: Phone numbers linked to persons (with primary flag)  
- **Address**: Physical addresses linked to persons
- **Country**: Countries catalog for addresses

## Run Tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

This project is [MIT licensed](LICENSE).

---

**Autor: Fernando Martinez**