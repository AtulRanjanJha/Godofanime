# 🌀 Godofanime  
An immersive anime information portal built with React + TypeScript that fetches and displays detailed anime data using a service-based architecture. Features responsive components, asynchronous data fetching, and clean modular design.

## 🚀 Features  
🎞️ Fetch and display anime details using a custom API service  
📄 Dynamic detail pages with cover image, title, and description  
⚡ Built using React Query for optimized data caching and async loading  
📱 Fully responsive and clean component structure  
🧩 Modular service structure for future scalability

## 🧰 Tech Stack  
- React + TypeScript  
- React Query 
- Tailwind CSS 
- Custom API integration via service architecture  

## 🔗 Link  
🌐 Live Demo: https://godofanime.netlify.app/

## 📦 Folder Structure  
```
Godofanime/
├── components/
│   └── AnimeDetail.tsx       # Displays detailed anime info
├── services/
│   └── AnimeService.ts       # Handles API communication
├── types/
│   └── anime.ts              # Defines anime type interfaces
├── public/
└── src/
    └── App.tsx or main.tsx   # Main application file
```

## 🛠️ Setup Instructions  
1. Clone the Repository  
   ```bash
   git clone https://github.com/AtulRanjanJha/Godofanime.git  
   cd Godofnime  
   ```

2. Install Dependencies  
   ```bash
   npm install  
   ```

3. Start the Development Server  
   ```bash
   npm run dev  
   ```

4. Build for Production  
   ```bash
   npm run build  
   ```

## ⚙️ API Usage  
The anime details are fetched using a function like:  
```ts
AnimeService.getDetail(url)
```  
Update the `AnimeService.ts` file to point to your desired API endpoint.

## 📸 Preview  
<img width="951" height="959" alt="Screenshot 2025-07-16 104413" src="https://github.com/user-attachments/assets/477afe81-3e28-4344-8a35-f62e598fcc2d" />
<img width="956" height="878" alt="Screenshot 2025-07-16 104451" src="https://github.com/user-attachments/assets/7b289bbd-546c-471e-a4e8-bca2658637a6" />



## 🙌 Credits  
- React Query for powerful async data handling  

## 📄 License  
This project is licensed under the MIT License.

## ⚠️ Disclaimer:
This project is a prototype and does not include all anime titles. Currently, the following anime are available:
- One Punch Man  
- Attack on Titan (AOT)  
