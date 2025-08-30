🌿 Cannabi Doctor - Frontend
Cannabi Doctor is a web platform designed to educate people about medical cannabis. Users can explore the conditions that medical cannabis can help treat, learn about the associated treatments, browse products, and contact stores. Additionally, registered users can participate by commenting on treatments and submitting questions.
🚀 Features
For non-registered users
- View the different conditions that medical cannabis can treat.
- Explore treatments associated with each condition.
- Browse the products section.
- Contact available stores.
For registered users
- Create a user account through the registration/login system.
- Comment on treatments.
- Submit questions through the Q&A system.
🛠️ Technologies Used
- HTML5 – structure of the views.
- CSS3 – custom styles.
- JavaScript (ES6+) – frontend dynamic interactions.
- Node.js (for project dependencies).
- Git/GitHub – version control.
📂 Project Structure
CANNABI-DOCTOR/
├── backend/
│   └── index.js
├── node_modules/
├── src/
│   ├── css/
│   │   ├── buttons.css
│   │   ├── login.css
│   │   ├── padecimientos.css
│   │   ├── style.css
│   │   ├── styles-Benefits.css
│   │   ├── styles-questions.css
│   │   ├── terms.css
│   │   └── tienda.css
│   ├── img/
│   │   └── (project images)
│   ├── js/
│   │   ├── beneficios.js
│   │   ├── hamburger.js
│   │   ├── index.js
│   │   ├── nav.js
│   │   ├── questions.js
│   │   ├── tienda-buscar.js
│   │   └── tienda.js
│   └── views/
│       ├── beneficios.html
│       ├── login.html
│       ├── padecimientos.html
│       ├── questions.html
│       ├── terms.html
│       └── tienda.html
├── .gitignore
├── buttons.html
├── index.html
├── package.json
└── package-lock.json
⚙️ Installation & Usage
1. Clone the repository:
   git clone https://github.com/David-SilvaDEV/Cannabi-Doctor.git

2. Enter the project directory:
   cd Cannabi-Doctor

3. Install dependencies:
   npm install

4. Open the index.html file in your browser to view the frontend.
   (Optionally, you can use a VSCode extension like Live Server).
👨‍💻 Authors
David Silva: https://github.com/David-SilvaDEV
Jesús Ariza: https://github.com/J-ArizaDEV
Luis Cera: https://github.com/luixdaniel
Santiago de León: https://github.com/Santy1924
Alex Vásquez: https://github.com/allexxwason
📜 License
This project is intended for academic and educational purposes. It can be freely adapted and modified.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

📌 Cannabi Doctor - Backend
This is the backend server for the Cannabi Doctor application, responsible for business logic, connecting to the MySQL database (hosted on Clever Cloud), and managing the data consumed by the frontend.
🚀 Technologies Used
- Node.js – Server-side JavaScript execution environment.
- Express.js – Framework for creating the REST API.
- MySQL – Relational database.
- Clever Cloud – Database hosting.
📂 Folder Structure
The basic structure of the backend is as follows:
backend/
│── index.js # Main entry point
│── config/ # Database connection configuration
│── controllers/ # Logic for each resource
│── models/ # Definition of entities and SQL queries
│── routes/ # API endpoints
│── middlewares/ # Validations and authentication
│── package.json # Dependencies and scripts
⚙️ Installation and Execution
1. Clone the repository:
   git clone https://github.com/David-SilvaDEV/Cannabi-Doctor.git
2. Enter the backend folder:
   cd backend
3. Install the dependencies:
   npm install
4. Create the file `.env` with your environment variables (example):
   DB_HOST=bxvgwk6qicumaj69boht-mysql.services.clever-cloud.com
   DB_USER=uwbfma1thbyigqsr
   DB_PASSWORD=uDKWQTiowUjKbiQkiWw8
   DB_NAME=bxvgwk6qicumaj69boht
   PORT=3001
5. Start the server:
   node index.js
The backend will run at: http://localhost:3001
👥 Authors
- David Silva – https://github.com/David-SilvaDEV
- Jesús Ariza – https://github.com/J-ArizaDEV
- Luis Cera – https://github.com/luixdaniel
- Santiago de León – https://github.com/Santy1924
- Alex Vásquez – https://github.com/allexxwason
🔗 Repository
👉 Cannabi Doctor (Frontend + Backend): https://github.com/David-SilvaDEV/Cannabi-Doctor.git
