# Receipt Processor

A simple receipt processor API that processes receipts and awards points based on predefined rules.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
  - [Using npm](#using-npm)
  - [Using Docker](#using-docker)
- [API Endpoints](#api-endpoints)
  - [Process Receipt](#process-receipt)
  - [Get Points](#get-points)
- [Run Using Curl](#run-using-curl)

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

## Prerequisites

Ensure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- Docker (if you plan to run the application using Docker)

## Installation

1. Clone the repository:
   ```bash
   git clone github.com/NagaSumukh/Reciept-Processor](https://github.com/NagaSumukh/Reciept-Processor.git

2. Install dependencies:
   ```bash
   npm install


## Running-the-application
### Using npm

1. Start the application:
   ```bash
   npm start
2. You should see the following message in your console:
   ```plaintext
   Hey everyone, welcome to Receipt processor! Server is running on port 3000
3. The application will be accessible at http://localhost:3000.

### Using Docker

1. Build the Docker image:
   ```bash
   docker build -t receipt-processor .

2. Run the Docker container:
   ```bash
   docker run -p 3001:3000 receipt-processor
3. The application will be accessible at http://localhost:3001.
   
## API Endpoints

### Process Receipt

- **Endpoint:** `/api/receipts/process`
- **Method:** `POST`
- **Payload:**
  ```json
  {
    "retailer": "M&M Corner Market",
    "purchaseDate": "2022-03-20",
    "purchaseTime": "14:33",
    "items": [
      {
        "shortDescription": "Gatorade",
        "price": "2.25"
      },
      {
        "shortDescription": "Gatorade",
        "price": "2.25"
      },
      {
        "shortDescription": "Gatorade",
        "price": "2.25"
      },
      {
        "shortDescription": "Gatorade",
        "price": "2.25"
      }
    ],
    "total": "9.00"
  }
- **Response:**
  ```json
  { "id": "generated-receipt-id" }

### Get Points

- **Endpoint:** `/api/receipts/{id}/points`
- **Method:** `GET`
- **Response:**
  ```json
  { "points": calculated-points }
Replace {generated-receipt-id} with the ID returned from the process receipt endpoint.

## Run Using Curl

### Process Receipt

To process a receipt, use the following curl command:

```bash
curl -X POST http://localhost:3000/api/receipts/process -H "Content-Type: application/json" -d '{
  "retailer": "M&M Corner Market",
  "purchaseDate": "2022-03-20",
  "purchaseTime": "14:33",
  "items": [
    {
      "shortDescription": "Gatorade",
      "price": "2.25"
    },
    {
      "shortDescription": "Gatorade",
      "price": "2.25"
    },
    {
      "shortDescription": "Gatorade",
      "price": "2.25"
    },
    {
      "shortDescription": "Gatorade",
      "price": "2.25"
    }
  ],
  "total": "9.00"
}'
```
### Get Points

To get the points for a processed receipt, use the following curl command:

```bash
curl http://localhost:3000/api/receipts/{generated-receipt-id}/points
