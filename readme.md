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