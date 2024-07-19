# IRH - Indian REcipe Hub

**Title: Indian Recipe Hub (IRH)**

**Description:**
Indian Recipe Hub (IRH) is a web application designed to showcase the rich flavors of Indian cuisine, offering a platform to explore, share, and engage with North and South Indian recipes. This project is developed as part of an assignment for a software engineering position, completed within a time limit of less than a week.

---

### Project Overview

**Features:**
- Browse and explore a variety of North and South Indian recipes.
- Submit requests for new recipes.
- Provide feedback on recipes.
- Admin interface for managing recipes, recipe requests, and user feedback.

---

### Tech Stack

**Frontend:**
- React.js
- Axios (for API requests)
- AWS S3 (for deployment)

**Backend:**
- Django
- Django REST Framework
- AWS EC2 (for deployment)

**Deployment:**
- AWS S3 (Frontend)
- AWS EC2 (Backend)
- AWS CloudFront (CDN)

---

### Setup Instructions

**1. Clone the repository:**
```sh
git clone https://github.com/gagand29/indian-recipe-hub.git
cd indian-recipe-hub
```

---

### Frontend

**Description:**
This directory contains the frontend code for the Indian Recipe Hub (IRH) application, built using React.js. The frontend is responsible for the user interface and client-side interactions.

**Features:**
- Interactive and responsive user interface.
- Component-based architecture for modularity and reusability.
- Integration with the backend API to fetch and display recipes.

**Setup Instructions:**
1. Navigate to the frontend directory:
    ```sh
    cd frontend
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the development server:
    ```sh
    npm start
    ```

**Deployment Instructions:**
1. Build the project:
    ```sh
    npm run build
    ```
2. Deploy the build files to an AWS S3 bucket configured for static website hosting.

---

### Backend

**Description:**
This directory contains the backend code for the Indian Recipe Hub (IRH) application, built using Django. The backend provides API endpoints for managing recipes, recipe requests, and user feedback.

**Features:**
- RESTful API for managing recipes, recipe requests, and feedback.
- Django Admin interface for efficient data management.
- Deployed on AWS EC2 for scalability and reliability.

**Setup Instructions:**
1. Navigate to the backend directory:
    ```sh
    cd backend
    ```
2. Create a virtual environment:
    ```sh
    python -m venv venv
    ```
3. Activate the virtual environment:
    - Windows:
        ```sh
        venv\Scripts\activate
        ```
    - MacOS/Linux:
        ```sh
        source venv/bin/activate
        ```
4. Install dependencies:
    ```sh
    pip install -r requirements.txt
    ```
5. Run database migrations:
    ```sh
    python manage.py migrate
    ```
6. Start the development server:
    ```sh
    python manage.py runserver
    ```

**Deployment Instructions:**
1. Launch an AWS EC2 instance.
2. SSH into the instance and clone the repository.
3. Set up the environment and install dependencies.
4. Configure Nginx as a reverse proxy.
5. Start the Django application.

---

### Deployment

**Frontend Deployment on AWS S3:**
1. Create an S3 bucket.
2. Configure the bucket for static website hosting.
3. Upload the build files to the S3 bucket.
4. Set permissions for public access.
5. Test the website using the S3 bucket website endpoint.

**Backend Deployment on AWS EC2:**
1. Launch an EC2 instance.
2. SSH into the instance and set up the environment.
3. Install the necessary software (Python, Django, etc.) and project requirements.
4. Configure Nginx as a reverse proxy.
5. Deploy the Django application.

**Using AWS CloudFront:**
1. Create a CloudFront distribution.
2. Use the S3 bucket as the origin.
3. Configure the distribution settings.
4. Deploy the distribution.

**Creating a Custom VPC:**
1. Create a VPC and subnets (public and private).
2. Set up an Internet Gateway and route tables.
3. Launch the EC2 instance in the private subnet.
4. Ensure proper security groups and network ACLs are in place.

**Creating an AMI:**
1. Navigate to the EC2 Dashboard.
2. Select your instance, click on "Actions," and choose "Create Image."
3. Launch new instances from this AMI in the private subnet.

This README provides a comprehensive overview of the project, setup instructions, and deployment guidelines. Feel free to customize it further as per your project's specifics and preferences.

