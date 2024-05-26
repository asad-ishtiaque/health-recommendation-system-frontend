# Health Recommender System - Full Stack React Application (Frontend)

## Overview

This project is a full stack application that combines a React frontend with a Flask backend to create a Health Recommender System. The system includes functionalities for symptom checking and lung and skin cancer detection, leveraging advanced machine learning models.

## Features

1. **Frontend (React App):**
   - **Home Page:** Introduction and overview of the system.
   - **Symptom Checker Page:** Allows users to input symptoms and receive disease and treatment recommendations.
   - **Lung Cancer Detection Page:** Enables users to upload images for lung cancer detection.
   - **Skin Cancer Detection Page:** Enables users to upload images for skin cancer detection.

2. **Backend (Flask API):**
   - **Symptom Checker API:** Provides recommendations based on user-reported symptoms using content-based filtering.
   - **Lung Cancer Detection API:** Processes lung images with a CNN model and returns detection results.
   - **Skin Cancer Detection API:** Processes skin images with a CNN model and returns detection results.

The backend contains a recommendation system (content-based filtering) and different CNN models for lung and skin detection. The whole backend is already added to GitHub, where you can access all the code: [Backend Repository](https://github.com/asad-ishtiaque/health-recommender-system)

## Technologies Used

### Frontend
- **React**
- **React-DOM**
- **Redux Toolkit**
- **Material UI**
- **React-Router**
- **JavaScript**
- **HTML**
- **CSS**

### Backend
- **Flask**
- **Python**
- **TensorFlow**
- **Keras**
- **Pandas**
- **NumPy**

## Installation

1. **Navigate to the frontend directory:**
   ```bash
   cd health-recommender-system/frontend
   ```

2. **Install the required dependencies:**
**Note:** Node.js should be installed on your system.
   ```bash
   npm install vite
   ```

3. **Run the React app:**
   ```bash
   npm run dev
   ```

## Interact with the application:
   - Visit the home page for an overview.
   - Use the Symptom Checker to get health recommendations.
   - Upload images for lung and skin cancer detection.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Asad Ishtiaque - [asad.ishtiaque.ai@gmail.com](mailto:asad.ishtiaque.ai@gmail.com)

Project Link: [https://github.com/asad-ishtiaque/health-recommender-system-front-end](https://github.com/your-username/health-recommender-system)

---

Thank you for checking out this project! Feel free to reach out with any questions or feedback.
