# AI Station

A powerful all-in-one AI platform that brings together the best of artificial intelligence for content creation, image generation, and productivity tools. Built with modern web technologies to provide a seamless user experience.

## ✨ Features

### Core AI Tools

- **Article Generation** - Create high-quality, detailed articles on any topic with customizable length
- **Blog Title Generator** - Generate catchy and SEO-friendly blog titles
- **Image Generation** - Create stunning AI-generated images from text prompts
- **Background Removal** - Remove backgrounds from images with precision
- **Object Removal** - Intelligently remove unwanted objects from images
- **Resume Review** - Get AI-powered feedback on your resume

### 👥 Community Features

- **Community Gallery** - Share and discover AI-generated content
- **Like System** - Engage with community creations
- **User Profiles** - Personalized user experience

### 🔐 Authentication & Plans

- **Secure Authentication** - Powered by Clerk for seamless login/signup
- **Free & Premium Plans** - Flexible usage limits and premium features
- **Usage Tracking** - Monitor your API usage and limits

## 🛠️ Tech Stack

### Frontend

- **React** - Modern UI library for building interactive interfaces
- **Vite** - Lightning-fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Lucide React** - Beautiful and consistent icon library
- **React Router** - Client-side routing for seamless navigation
- **React Hot Toast** - Elegant toast notifications
- **Clerk React** - Complete authentication solution

### Backend

- **Node.js** - JavaScript runtime for server-side development
- **Express.js** - Fast and minimalist web framework
- **PostgreSQL** - Robust relational database with Neon serverless hosting
- **Clerk Express** - Server-side authentication middleware
- **Multer** - File upload handling middleware
- **Cloudinary** - Image and video management platform

### AI Services

- **Gemini AI** - Advanced language model for text generation
- **ClipDrop API** - Professional image processing and generation
- **OpenAI Compatible API** - Flexible AI model integration

## 🚀 Getting Started

### Prerequisites

- Node.js (v20.19+ or v22.12+)
- npm or yarn package manager
- PostgreSQL database (or Neon account)
- Clerk account for authentication
- API keys for AI services

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/nasirhuss86/ai-station.git
   cd ai-station
   ```

2. **Install dependencies**

   ```bash
   # Install client dependencies
   cd client
   npm install

   # Install server dependencies
   cd ../server
   npm install
   ```

3. **Environment Setup**

   **Client (.env in /client directory):**

   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   VITE_BASE_URL=http://localhost:3000
   ```

   **Server (.env in /server directory):**

   ```env
   DATABASE_URL=your_neon_postgresql_url
   CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   GEMINI_API_KEY=your_gemini_api_key
   CLIPDROP_API_KEY=your_clipdrop_api_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_secret
   ```

4. **Database Setup**

   ```bash
   # Run your PostgreSQL migrations
   # Create the necessary tables for users, creations, etc.
   ```

5. **Start the application**

   ```bash
   # Start the server (from /server directory)
   npm run server

   # Start the client (from /client directory)
   npm run dev
   ```

## 📁 Project Structure

```
ai-station/
├── client/                 # Frontend React application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── assets/        # Images, icons, and asset configurations
│   │   ├── components/    # Reusable React components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Testimonial.jsx
│   │   ├── pages/         # Application pages/routes
│   │   │   ├── Home.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── WriteArticle.jsx
│   │   │   ├── GenerateImages.jsx
│   │   │   ├── Community.jsx
│   │   │   └── ...
│   │   ├── App.jsx        # Main application component
│   │   └── main.jsx       # Application entry point
│   └── package.json
└── server/                # Backend Node.js application
    ├── config/            # Configuration files
    │   ├── db.js          # Database connection
    │   ├── cloudinary.js  # Cloudinary setup
    │   └── multer.js      # File upload configuration
    ├── controllers/       # Route controllers
    │   ├── aiController.js
    │   └── userController.js
    ├── middlewares/       # Custom middleware
    │   └── auth.js        # Authentication middleware
    ├── routes/            # API routes
    │   ├── aiRoutes.js
    │   └── userRoutes.js
    ├── server.js          # Server entry point
    └── package.json
```

## 🔧 API Endpoints

### AI Services

- `POST /api/ai/generate-article` - Generate articles with custom prompts
- `POST /api/ai/generate-blog-title` - Create engaging blog titles
- `POST /api/ai/generate-image` - Generate images from text descriptions
- `POST /api/ai/remove-image-background` - Remove backgrounds from images
- `POST /api/ai/remove-image-object` - Remove objects from images
- `POST /api/ai/review-resume` - Analyze and review resumes

### User Management

- `GET /api/user/get-user-creations` - Fetch user's creations
- `GET /api/user/get-published-creations` - Get community creations
- `POST /api/user/get-user-likes` - Toggle likes on creations

## 🎨 Features in Detail

### Article Generation

Transform your ideas into comprehensive articles with our AI-powered writing assistant. Choose from different lengths (short, medium, long) and get professionally written content in seconds.

### Image Generation

Create stunning visuals using state-of-the-art AI models. Perfect for blog posts, social media, presentations, or any creative project.

### Community Platform

Share your AI-generated content with the community, discover inspiring creations from other users, and engage through our like system.

### Professional Tools

Remove backgrounds, eliminate unwanted objects from photos, and get intelligent resume feedback - all powered by advanced AI algorithms.

## 🚀 Deployment

### Frontend (Vercel/Netlify)

1. Build the client application
2. Deploy to your preferred hosting platform
3. Configure environment variables

### Backend (Railway/Heroku/DigitalOcean)

1. Set up your server environment
2. Configure database connections
3. Set environment variables
4. Deploy your Express application

## 🤝 Contributing

We welcome contributions to AI Station! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

## 📋 Development Guidelines

- Follow the existing code style and conventions
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation when necessary
- Ensure responsive design for all screen sizes

## 🐛 Known Issues

- Rate limiting may occur with heavy API usage on free tiers
- Large file uploads may timeout on slower connections
- Some AI features require premium API access

## 📊 Performance

- **Frontend**: Optimized with Vite for fast development and production builds
- **Backend**: Efficient API responses with proper error handling
- **Database**: Indexed queries for optimal performance
- **Images**: Cloudinary integration for fast image delivery

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Gemini AI** for powerful language processing
- **ClipDrop** for advanced image manipulation
- **Clerk** for seamless authentication
- **Neon** for serverless PostgreSQL hosting
- **Cloudinary** for image management
- **Lucide** for beautiful icons
- **Tailwind CSS** for rapid styling

## 📞 Support

Having issues or questions? We're here to help!

- 📧 **Email**: nasirhuss86@gmail.com
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/nasirhuss86/ai-station/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/nasirhuss86/ai-station/discussions)

---

**Built with ❤️ by Nasir**

_Empowering creativity through artificial intelligence_
