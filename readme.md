# 🌍 World Time Explorer

A modern, responsive web application to check real-time clocks across multiple countries and time zones — built with smooth animations and optimized using Docker.

---

## 🚀 Features

- 🌎 View time across 10+ countries
- 🏙️ Multiple time zones per country (e.g., Canada, USA)
- ⏱️ Real-time updates using JavaScript
- 🎨 Fully responsive UI
- ⚡ Smooth animations using GSAP
- 🐳 Dockerized for easy deployment
- 📦 Optimized using multi-stage builds

---

## 🧱 Tech Stack

- HTML, CSS, JavaScript
- GSAP (animations)
- Docker (containerization)
- Nginx (production server)

---

## 📁 Project Structure


world-time-app/
│
├── index.html
├── package.json
├── .dockerignore
│
├── src/
│ ├── app.js
│ ├── data.js
│ ├── styles.css
│
└── public/
└── flags/


---

## ⚙️ How to Run Locally

```bash
git clone <your-repo-url>
cd world-time-app
npm install
npm start
🐳 Docker Setup
Build Image
docker build -t world-time-app .
Run Container
docker run -d -p 80:80 --name time-app world-time-app

👉 Open in browser:

http://<your-server-ip>
⚡ Docker Optimization

This project uses:

✅ Alpine base images (lightweight)
✅ Multi-stage builds
✅ Reduced image size (~800MB → ~25MB)
✅ Production-ready Nginx setup
💡 Key Learnings
Importance of lightweight base images
Multi-stage builds for clean containers
Docker caching for faster builds
Serving static apps with Nginx
Real-world DevOps workflow
🚀 Future Improvements
🌐 Add more countries & time zones
🔎 Search functionality
🌙 Dark/light mode toggle
☁️ Deploy on AWS (ECR + EC2)
🔄 CI/CD pipeline (GitHub Actions)
📸 Preview

<img width="1919" height="557" alt="Screenshot 2026-05-04 104807" src="https://github.com/user-attachments/assets/09c9c66c-26d4-4765-a7a0-ac6351778614" />
<img width="1915" height="475" alt="Screenshot 2026-05-04 104754" src="https://github.com/user-attachments/assets/88cad79a-204a-438d-8c72-bb409899839c" />
<img width="1889" height="945" alt="Screenshot 2026-05-04 110602" src="https://github.com/user-attachments/assets/a57f43df-63fe-4d29-9e70-0424c2a5c3f3" />
<img width="1887" height="945" alt="Screenshot 2026-05-04 104837" src="https://github.com/user-attachments/assets/7f367622-27f5-4f46-bd26-74c855f38f32" />

<img width="1889" height="945" alt="Screenshot 2026-05-04 110602" src="https://github.com/user-attachments/assets/0b93d104-6d9d-46fb-806a-82a6b3e84c3e" />



🤝 Contributing

Feel free to fork this repo and improve it!

📌 Author

Amandeep Singh

⭐ If you like this project

Give it a star ⭐ — it motivates me to build more!


---

# 🚀 Now Push to GitHub

Run these commands:

```bash
git add .
git commit -m "Added README and Docker optimization"
git push origin main
