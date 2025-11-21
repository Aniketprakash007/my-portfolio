import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, Flag, Search, Upload, Home, Users, MessageSquare, User, Settings, LogOut, Menu, X, Star, MapPin, Zap } from 'lucide-react';

const SkillReelApp = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [likedReels, setLikedReels] = useState(new Set());
  const [currentReelIndex, setCurrentReelIndex] = useState(0);

  // Dummy data
  const skillReels = [
    {
      id: 1,
      username: '@ananya_art',
      skillTag: '#Drawing',
      caption: 'Quick shading tips 🎨',
      likes: 120,
      comments: 12,
      saves: 45,
      avatar: '👩‍🎨',
      bgColor: 'from-purple-400 to-pink-500'
    },
    {
      id: 2,
      username: '@rahul_dance',
      skillTag: '#Dance',
      caption: 'Freestyle combo tutorial 💃',
      likes: 230,
      comments: 40,
      saves: 89,
      avatar: '💃',
      bgColor: 'from-blue-400 to-cyan-500'
    },
    {
      id: 3,
      username: '@maya_code',
      skillTag: '#Coding',
      caption: 'Sorting in 30 sec! ⚡',
      likes: 95,
      comments: 8,
      saves: 32,
      avatar: '👨‍💻',
      bgColor: 'from-green-400 to-emerald-500'
    },
    {
      id: 4,
      username: '@alex_fitness',
      skillTag: '#Fitness',
      caption: 'HIIT workout for beginners 💪',
      likes: 340,
      comments: 56,
      saves: 120,
      avatar: '🏋️',
      bgColor: 'from-orange-400 to-red-500'
    }
  ];

  const matchCards = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Mumbai, India',
      canTeach: 'Photography',
      wantsLearn: 'Graphic Design',
      rating: 4.8,
      avatar: '📸'
    },
    {
      id: 2,
      name: 'James Wilson',
      location: 'London, UK',
      canTeach: 'Guitar',
      wantsLearn: 'Coding',
      rating: 4.6,
      avatar: '🎸'
    },
    {
      id: 3,
      name: 'Sakura Tanaka',
      location: 'Tokyo, Japan',
      canTeach: 'Japanese',
      wantsLearn: 'Web Design',
      rating: 4.9,
      avatar: '🗣️'
    }
  ];

  const currentUser = {
    name: 'Ayesha Khan',
    location: 'Delhi, India',
    bio: 'Yoga enthusiast 🧘 & UI Designer',
    joinDate: 'Jan 2024',
    followers: 1023,
    following: 456,
    skillsTeach: ['Yoga', 'Meditation'],
    skillsLearn: ['UI Design', 'Photography'],
    rating: 4.9,
    badges: ['Top Mentor', 'Consistent Learner'],
    avatar: '🧘‍♀️'
  };

  const communityThreads = [
    {
      id: 1,
      title: 'Best free tools for learning 3D animation?',
      category: 'Design',
      replies: 24,
      author: '@designMaster'
    },
    {
      id: 2,
      title: 'How to improve vocal range?',
      category: 'Music',
      replies: 18,
      author: '@voiceCoach'
    },
    {
      id: 3,
      title: 'Tips for faster code debugging?',
      category: 'Coding',
      replies: 32,
      author: '@devExpert'
    }
  ];

  const recentChats = [
    { id: 1, name: 'Priya S.', message: 'Thanks for the photography tips!', time: '2m ago', avatar: '📸' },
    { id: 2, name: 'Rahul D.', message: 'When are we having our next session?', time: '1h ago', avatar: '💃' },
    { id: 3, name: 'Maya C.', message: 'Your code review was super helpful', time: '3h ago', avatar: '👨‍💻' }
  ];

  const toggleLike = (id) => {
    const newLiked = new Set(likedReels);
    if (newLiked.has(id)) {
      newLiked.delete(id);
    } else {
      newLiked.add(id);
    }
    setLikedReels(newLiked);
  };

  // Landing Page
  const LandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-teal-50">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-teal-500 bg-clip-text text-transparent">SkillReel</div>
          <div className="hidden md:flex gap-6 items-center">
            <button onClick={() => setCurrentPage('landing')} className="text-gray-700 hover:text-indigo-600">Home</button>
            <button onClick={() => setCurrentPage('feed')} className="text-gray-700 hover:text-indigo-600">Explore</button>
            <button onClick={() => setCurrentPage('match')} className="text-gray-700 hover:text-indigo-600">Skill Exchange</button>
            <button onClick={() => setCurrentPage('community')} className="text-gray-700 hover:text-indigo-600">Community</button>
            <button onClick={() => setCurrentPage('profile')} className="bg-gradient-to-r from-indigo-600 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-semibold">Login</button>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Exchange Skills.<br />Learn, Teach, and Grow Together.</h1>
          <p className="text-xl text-gray-600 mb-8">Join a global community of learners and mentors. Share your skills, discover new talents, and connect with passionate people.</p>
          <div className="flex gap-4">
            <button onClick={() => setCurrentPage('feed')} className="bg-gradient-to-r from-indigo-600 to-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition">Join Now</button>
            <button onClick={() => setCurrentPage('feed')} className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition">Watch Skill Reels</button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {['🎨', '💃', '👨‍💻', '🧘‍♀️'].map((emoji, i) => (
            <div key={i} className={`h-40 bg-gradient-to-br ${i === 0 ? 'from-purple-400 to-pink-500' : i === 1 ? 'from-blue-400 to-cyan-500' : i === 2 ? 'from-green-400 to-emerald-500' : 'from-orange-400 to-red-500'} rounded-3xl flex items-center justify-center text-6xl shadow-lg`}>{emoji}</div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { num: '1', title: 'Create Profile', desc: 'Set up your profile and share your skills' },
              { num: '2', title: 'Upload Skill Video', desc: 'Record a short video showcasing your talent' },
              { num: '3', title: 'Match & Learn', desc: 'Connect with learners and start teaching' }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-teal-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">{step.num}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-12">Featured Skills</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {['🎨 Design', '💃 Dance', '👨‍💻 Coding', '🧘‍♀️ Fitness', '🎸 Music', '📸 Photography', '🗣️ Languages', '🍳 Cooking'].map((skill, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition cursor-pointer">
              <div className="text-4xl mb-4">{skill.split(' ')[0]}</div>
              <h3 className="text-lg font-semibold text-gray-900">{skill.split(' ').slice(1).join(' ')}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-r from-indigo-100 to-teal-100 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">What Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah M.', story: 'Learned guitar from an amazing mentor in just 3 months!', avatar: '👩‍🎤' },
              { name: 'Raj P.', story: 'Taught coding and made friends from around the world.', avatar: '👨‍🏫' },
              { name: 'Lisa T.', story: 'Found my yoga partner and we practice together daily!', avatar: '🧘‍♀️' }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <div className="flex text-yellow-400">{'⭐'.repeat(5)}</div>
                  </div>
                </div>
                <p className="text-gray-600">"{testimonial.story}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  // Feed Page
  const FeedPage = () => (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-md mx-auto relative h-screen bg-gradient-to-br from-gray-900 to-black overflow-hidden">
        {/* Filter Bar */}
        <div className="sticky top-0 z-30 bg-black/80 backdrop-blur px-4 py-4 flex gap-2 overflow-x-auto">
          {['All', 'Popular', 'New', 'Your Skills'].map((filter, i) => (
            <button key={i} className="px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap bg-indigo-600 hover:bg-indigo-700">
              {filter}
            </button>
          ))}
        </div>

        {/* Video Reel */}
        {skillReels[currentReelIndex] && (
          <div className="h-full flex flex-col justify-between relative">
            <div className={`flex-1 bg-gradient-to-br ${skillReels[currentReelIndex].bgColor} flex items-center justify-center text-9xl`}>
              {skillReels[currentReelIndex].avatar}
            </div>

            {/* Right-side Actions */}
            <div className="absolute right-4 bottom-32 flex flex-col gap-6 z-20">
              <button onClick={() => toggleLike(skillReels[currentReelIndex].id)} className="flex flex-col items-center gap-2 hover:scale-125 transition">
                <div className={`w-12 h-12 rounded-full ${likedReels.has(skillReels[currentReelIndex].id) ? 'bg-red-600' : 'bg-white/20'} flex items-center justify-center backdrop-blur`}>
                  <Heart size={24} fill={likedReels.has(skillReels[currentReelIndex].id) ? 'currentColor' : 'none'} />
                </div>
                <span className="text-xs text-white">{skillReels[currentReelIndex].likes}</span>
              </button>
              <button className="flex flex-col items-center gap-2 hover:scale-125 transition">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur">
                  <MessageCircle size={24} />
                </div>
                <span className="text-xs text-white">{skillReels[currentReelIndex].comments}</span>
              </button>
              <button className="flex flex-col items-center gap-2 hover:scale-125 transition">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur">
                  <Share2 size={24} />
                </div>
              </button>
              <button className="flex flex-col items-center gap-2 hover:scale-125 transition">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur">
                  <Bookmark size={24} />
                </div>
                <span className="text-xs text-white">{skillReels[currentReelIndex].saves}</span>
              </button>
            </div>

            {/* Bottom Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 pb-20 z-10">
              <div className="flex items-start gap-4">
                <div className="text-3xl">{skillReels[currentReelIndex].avatar}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{skillReels[currentReelIndex].username}</h3>
                  <p className="text-sm text-gray-300 mb-2">{skillReels[currentReelIndex].caption}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-indigo-600 px-3 py-1 rounded-full">{skillReels[currentReelIndex].skillTag}</span>
                    <button className="text-xs bg-white text-black px-3 py-1 rounded-full font-semibold hover:bg-gray-200">Follow</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="absolute bottom-0 left-0 right-0 bg-black border-t border-gray-800 flex justify-around py-4 z-20">
          <button onClick={() => setCurrentPage('feed')} className="flex flex-col items-center gap-1 text-indigo-500"><Home size={24} /><span className="text-xs">Home</span></button>
          <button onClick={() => setCurrentPage('match')} className="flex flex-col items-center gap-1 text-gray-500 hover:text-white"><Search size={24} /><span className="text-xs">Match</span></button>
          <button onClick={() => setCurrentPage('upload')} className="flex flex-col items-center gap-1 text-gray-500 hover:text-white"><Upload size={24} /><span className="text-xs">Upload</span></button>
          <button onClick={() => setCurrentPage('chat')} className="flex flex-col items-center gap-1 text-gray-500 hover:text-white"><MessageSquare size={24} /><span className="text-xs">Chat</span></button>
          <button onClick={() => setCurrentPage('profile')} className="flex flex-col items-center gap-1 text-gray-500 hover:text-white"><User size={24} /><span className="text-xs">Profile</span></button>
        </div>

        {/* Exit Button */}
        <button 
          onClick={() => setCurrentPage('landing')}
          className="absolute top-4 left-4 bg-white/20 hover:bg-white/40 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur transition z-20"
          title="Exit to Home"
        >
          ✕
        </button>

        {/* Swipe Controls */}
        <button 
          onClick={() => setCurrentReelIndex((currentReelIndex + 1) % skillReels.length)}
          className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-white/40 text-sm z-20"
        >
          ⬆️ Swipe
        </button>
      </div>
    </div>
  );

  // Match Page
  const MatchPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Find Your Match</h1>
        
        {/* Search & Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <input type="text" placeholder="Search by skill or user" className="col-span-full md:col-span-2 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-600 outline-none" />
            <select className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-600 outline-none">
              <option>All Categories</option>
              <option>Design</option>
              <option>Coding</option>
              <option>Fitness</option>
            </select>
            <select className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-600 outline-none">
              <option>All Levels</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Expert</option>
            </select>
          </div>
        </div>

        {/* Match Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {matchCards.map((card) => (
            <div key={card.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-32 bg-gradient-to-br from-indigo-400 to-teal-400 flex items-center justify-center text-6xl">
                {card.avatar}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{card.name}</h3>
                <p className="text-sm text-gray-500 flex items-center gap-1 mb-4">
                  <MapPin size={16} /> {card.location}
                </p>
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-xs text-gray-600 font-semibold">CAN TEACH</p>
                    <p className="text-sm text-indigo-600 font-bold">{card.canTeach}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 font-semibold">WANTS TO LEARN</p>
                    <p className="text-sm text-teal-600 font-bold">{card.wantsLearn}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-yellow-400">{Array(5).fill('⭐').join('')}</div>
                  <span className="text-sm font-semibold text-gray-700">{card.rating}</span>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-indigo-600 to-teal-500 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition">Message</button>
                  <button className="flex-1 border-2 border-indigo-600 text-indigo-600 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition">Connect</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Profile Page
  const ProfilePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto">
        {/* Banner */}
        <div className="bg-gradient-to-r from-indigo-600 to-teal-500 h-32"></div>

        {/* Profile Card */}
        <div className="mx-4 -mt-20 relative z-10 bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-6">
              <div className="text-9xl bg-gray-100 w-32 h-32 rounded-2xl flex items-center justify-center">
                {currentUser.avatar}
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-1">{currentUser.name}</h1>
                <p className="text-gray-600 mb-2">{currentUser.bio}</p>
                <p className="text-sm text-gray-500 flex items-center gap-2 mb-4">
                  <MapPin size={16} /> {currentUser.location} • Joined {currentUser.joinDate}
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex text-yellow-400">{'⭐'.repeat(5)}</div>
                  <span className="font-bold text-gray-900">{currentUser.rating}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="bg-gradient-to-r from-indigo-600 to-teal-500 text-white px-6 py-2 rounded-lg font-semibold">Edit Profile</button>
              <button className="border-2 border-indigo-600 text-indigo-600 px-6 py-2 rounded-lg font-semibold">Follow</button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-gray-200">
            <div>
              <p className="text-sm text-gray-600 font-semibold">FOLLOWERS</p>
              <p className="text-3xl font-bold text-gray-900">{currentUser.followers}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 font-semibold">FOLLOWING</p>
              <p className="text-3xl font-bold text-gray-900">{currentUser.following}</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm text-gray-600 font-semibold mb-2">BADGES</p>
              <div className="flex gap-2">
                {currentUser.badges.map((badge, i) => (
                  <span key={i} className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-semibold">🏆 {badge}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mx-4 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills to Teach</h2>
              <div className="flex flex-wrap gap-3">
                {currentUser.skillsTeach.map((skill, i) => (
                  <span key={i} className="bg-teal-100 text-teal-600 px-4 py-2 rounded-lg font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills to Learn</h2>
              <div className="flex flex-wrap gap-3">
                {currentUser.skillsLearn.map((skill, i) => (
                  <span key={i} className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-lg font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Upload Page
  const UploadPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Share Your Skill</h1>
        
        <div className="space-y-6">
          {/* File Upload */}
          <div className="border-3 border-dashed border-indigo-300 rounded-xl p-8 text-center hover:bg-indigo-50 transition cursor-pointer">
            <div className="text-5xl mb-4">📹</div>
            <p className="text-lg font-semibold text-gray-900 mb-2">Drag & drop your video here</p>
            <p className="text-sm text-gray-600 mb-4">or</p>
            <button className="bg-gradient-to-r from-indigo-600 to-teal-500 text-white px-6 py-2 rounded-lg font-semibold">
              Choose File
            </button>
          </div>

          {/* Title Input */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Video Title</label>
            <input type="text" placeholder="e.g., Learn to draw basic shapes" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 outline-none" />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Description</label>
            <textarea placeholder="Tell learners what they'll discover..." className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 outline-none h-24 resize-none"></textarea>
          </div>

          {/* Skill Tags */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Skill Tags</label>
            <input type="text" placeholder="#drawing #shading #art" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 outline-none" />
          </div>

          {/* Feedback Toggle */}
          <div className="flex items-center gap-3">
            <input type="checkbox" id="feedback" className="w-5 h-5 accent-indigo-600" defaultChecked />
            <label htmlFor="feedback" className="text-gray-900 font-semibold">Ask for feedback from community</label>
          </div>

          {/* Upload Button */}
          <button className="w-full bg-gradient-to-r from-indigo-600 to-teal-500 text-white py-3 rounded-lg font-bold text-lg hover:shadow-lg transition">Upload Skill</button>
        </div>
      </div>
    </div>
  );

  // Community Page
  const CommunityPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Categories */}
          <div className="bg-white rounded-2xl shadow-lg p-6 h-fit">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Categories</h2>
            <div className="space-y-2">
              {['Design', 'Music', 'Fitness', 'Languages', 'Coding', 'Photography'].map((cat, i) => (
                <button key={i} className="w-full text-left px-4 py-2 text-gray-700 hover:bg-indigo-100 rounded-lg transition">
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Center - Thread List */}
          <div className="lg:col-span-2 space-y-4">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Community Threads</h1>
            {communityThreads.map((thread) => (
              <div key={thread.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{thread.title}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-semibold">{thread.category}</span>
                    <span className="text-sm text-gray-600">by {thread.author}</span>
                  </div>
                  <span className="text-sm text-gray-500 font-semibold">{thread.replies} replies</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Sidebar - Trending & Top Mentors */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">🔥 Trending</h2>
              <div className="space-y-3">
                {['#MotionDesign', '#YogaTips', '#PythonTricks', '#GuitarLessons'].map((trend, i) => (
                  <button key={i} className="w-full text-left px-3 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition">
                    {trend}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">👑 Top Mentors</h2>
              <div className="space-y-3">
                {[
                  { name: 'Sarah Master', badge: '⭐ 4.9' },
                  { name: 'Alex Pro', badge: '⭐ 4.8' },
                  { name: 'Jordan Elite', badge: '⭐ 4.7' }
                ].map((mentor, i) => (
                  <div key={i} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition">
                    <span className="font-semibold text-gray-900">{mentor.name}</span>
                    <span className="text-sm text-yellow-500">{mentor.badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Chat Page
  const ChatPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 h-screen">
        {/* Chat List */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-900">Messages</h2>
            <input type="text" placeholder="Search chats..." className="w-full mt-3 px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-indigo-600 outline-none" />
          </div>
          <div className="overflow-y-auto flex-1">
            {recentChats.map((chat) => (
              <button key={chat.id} className="w-full text-left p-4 hover:bg-gray-50 border-b border-gray-100 transition">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{chat.avatar}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900">{chat.name}</h3>
                    <p className="text-sm text-gray-600 truncate">{chat.message}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1">{chat.time}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Window */}
        <div className="md:col-span-2 bg-white rounded-2xl shadow-lg flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl">📸</div>
              <div>
                <h3 className="font-bold text-gray-900">Priya S.</h3>
                <span className="text-xs text-green-600">● Online</span>
              </div>
            </div>
            <button className="text-gray-500 hover:text-gray-700">
              <Settings size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <div className="flex gap-3">
              <div className="text-2xl">📸</div>
              <div className="bg-gray-100 rounded-2xl px-4 py-2 max-w-xs">
                <p className="text-sm text-gray-900">Thanks for the photography tips! Really helped me improve my shots.</p>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <div className="bg-indigo-600 text-white rounded-2xl px-4 py-2 max-w-xs">
                <p className="text-sm">You're welcome! Keep practicing and you'll see amazing results. 📸</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-2xl">📸</div>
              <div className="bg-gray-100 rounded-2xl px-4 py-2 max-w-xs">
                <p className="text-sm text-gray-900">When can we have our next session?</p>
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-3">
              <input type="text" placeholder="Type a message..." className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-full focus:border-indigo-600 outline-none" />
              <button className="bg-gradient-to-r from-indigo-600 to-teal-500 text-white w-10 h-10 rounded-full flex items-center justify-center hover:shadow-lg transition">
                <MessageCircle size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Settings Page
  const SettingsPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Settings</h1>

        <div className="space-y-6">
          {/* Profile Settings */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">👤 Profile</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Bio</label>
                <textarea className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 outline-none" rows="3" defaultValue={currentUser.bio}></textarea>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Profile Picture</label>
                <input type="file" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600" />
              </div>
            </div>
          </div>

          {/* Privacy Settings */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🔒 Privacy</h2>
            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 accent-indigo-600" defaultChecked />
                <span className="text-gray-900 font-semibold">Allow anyone to view my videos</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 accent-indigo-600" defaultChecked />
                <span className="text-gray-900 font-semibold">Allow direct messages</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 accent-indigo-600" />
                <span className="text-gray-900 font-semibold">Show my location</span>
              </label>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🔔 Notifications</h2>
            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 accent-indigo-600" defaultChecked />
                <span className="text-gray-900 font-semibold">New messages</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 accent-indigo-600" defaultChecked />
                <span className="text-gray-900 font-semibold">Skill match recommendations</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 accent-indigo-600" defaultChecked />
                <span className="text-gray-900 font-semibold">Community updates</span>
              </label>
            </div>
          </div>

          {/* Account Settings */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🔐 Account</h2>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-3 text-indigo-600 hover:bg-indigo-50 rounded-lg font-semibold transition">
                Change Password
              </button>
              <button className="w-full text-left px-4 py-3 text-indigo-600 hover:bg-indigo-50 rounded-lg font-semibold transition">
                Linked Accounts (Google, GitHub)
              </button>
              <button className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg font-semibold transition">
                Delete Account
              </button>
            </div>
          </div>

          {/* Logout */}
          <button onClick={() => setCurrentPage('landing')} className="w-full bg-gradient-to-r from-indigo-600 to-teal-500 text-white py-3 rounded-lg font-bold text-lg hover:shadow-lg transition">
            ← Back to Landing
          </button>
        </div>
      </div>
    </div>
  );

  // Main Navigation Sidebar
  const NavSidebar = () => (
    <div className="hidden md:flex fixed left-0 top-0 h-screen w-64 bg-white shadow-lg flex-col z-50">
      <div className="p-6 border-b border-gray-200 cursor-pointer" onClick={() => setCurrentPage('landing')}>
        <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-teal-500 bg-clip-text text-transparent hover:opacity-80 transition">SkillReel</div>
      </div>

      <nav className="flex-1 p-6 space-y-2">
        <button onClick={() => setCurrentPage('landing')} className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition ${currentPage === 'landing' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-700 hover:bg-gray-100'}`}>
          <Home size={20} className="inline mr-3" /> Home
        </button>
        <button onClick={() => setCurrentPage('feed')} className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition ${currentPage === 'feed' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-700 hover:bg-gray-100'}`}>
          <Zap size={20} className="inline mr-3" /> Feed
        </button>
        <button onClick={() => setCurrentPage('match')} className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition ${currentPage === 'match' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-700 hover:bg-gray-100'}`}>
          <Search size={20} className="inline mr-3" /> Find Match
        </button>
        <button onClick={() => setCurrentPage('upload')} className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition ${currentPage === 'upload' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-700 hover:bg-gray-100'}`}>
          <Upload size={20} className="inline mr-3" /> Upload
        </button>
        <button onClick={() => setCurrentPage('community')} className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition ${currentPage === 'community' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-700 hover:bg-gray-100'}`}>
          <Users size={20} className="inline mr-3" /> Community
        </button>
        <button onClick={() => setCurrentPage('chat')} className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition ${currentPage === 'chat' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-700 hover:bg-gray-100'}`}>
          <MessageSquare size={20} className="inline mr-3" /> Chat
        </button>
        <button onClick={() => setCurrentPage('profile')} className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition ${currentPage === 'profile' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-700 hover:bg-gray-100'}`}>
          <User size={20} className="inline mr-3" /> Profile
        </button>
      </nav>

      <div className="p-6 border-t border-gray-200">
        <button onClick={() => setCurrentPage('settings')} className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-semibold transition mb-2">
          <Settings size={20} className="inline mr-3" /> Settings
        </button>
        <button onClick={() => setCurrentPage('landing')} className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg font-semibold transition">
          <LogOut size={20} className="inline mr-3" /> Logout
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50">
      {currentPage !== 'landing' && currentPage !== 'feed' && <NavSidebar />}
      
      <div className={currentPage !== 'landing' && currentPage !== 'feed' ? 'md:ml-64' : ''}>
        {currentPage === 'landing' && <LandingPage />}
        {currentPage === 'feed' && <FeedPage />}
        {currentPage === 'match' && <MatchPage />}
        {currentPage === 'profile' && <ProfilePage />}
        {currentPage === 'upload' && <UploadPage />}
        {currentPage === 'community' && <CommunityPage />}
        {currentPage === 'chat' && <ChatPage />}
        {currentPage === 'settings' && <SettingsPage />}
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default SkillReelApp;
=======
export default SkillReelApp;
>>>>>>> db045343f02a91c76006dac133dccf471f9b4dfe
