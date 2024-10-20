// pages/index.tsx
import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion'
import { Send, Smile, Meh, Frown, X, Menu, Bell, Search, Mic, UserCircle, Bot } from 'lucide-react'
import Widget from '../components/ui/Widget';

export default function Component() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const headerRef = useRef<HTMLDivElement | null>(null)
  const [mood, setMood] = useState<string | null>(null);
  const [input, setInput] = useState('');
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe && activeSlide < 2) {
      setActiveSlide(prev => prev + 1)
    }
    if (isRightSwipe && activeSlide > 0) {
      setActiveSlide(prev => prev - 1)
    }

    setTouchStart(null)
    setTouchEnd(null)
  }

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    // Set initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0;
  const fadePercentage = headerHeight ? Math.max(100 - (scrollPosition / headerHeight) * 100, 0) : 100;

  // Rendering starts here...
  return (
    // Main container
    <div className="bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500 min-h-screen w-full relative">
      {/* White overlay for fading effect */}
      <div 
        className="absolute inset-0 bg-white transition-opacity duration-300 ease-in-out z-10"
        style={{ opacity: `${1 - fadePercentage / 100}` }}
      ></div>

      {/* Content wrapper */}
      <div className={`relative z-20 transition-colors duration-300 ease-in-out ${fadePercentage === 0 ? 'bg-white' : ''}`}>

        {/* Header component */}
        <div className="container mx-auto"> 
          <div 
            ref={headerRef}
            className="flex flex-col items-center justify-center transition-opacity duration-300" 
            style={{ opacity: `${fadePercentage / 100}` }}
          >
            {/* Skewed orange overlay */}
            <div className="absolute -top-5 left-0 right-0 h-[15vh] bg-orange-900/25 origin-top-left transform -skew-y-6"></div>

            {/* Top menu */}
            <div className="w-full pt-2 px-3 flex justify-between items-center text-white text-lg font-semibold z-10">
              <div className="flex items-center space-x-4">
                <Menu className="h-5 w-5" />
                <div>Hi Brotastic</div>
              </div>
              <div className="flex items-center space-x-4">
                <Bell className="h-5 w-5" />
                <UserCircle className="h-5 w-5" />
              </div>
            </div>

            {/* Avatar */}
            <div className="w-full py-2 flex justify-center z-10">
              <div className="rounded-full shadow-xl border-4 border-orange-400 overflow-hidden">
                <img src="https://i.pravatar.cc/128" alt="Avatar" className="w-36 h-36 object-cover" />
              </div>
            </div>

            {/* Ready to crush some habits? */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="w-full pt-2 text-center z-10"
            >
              <h1 className="text-white font-bold text-l">READY TO CRASH SOME HABITS?</h1>
            </motion.div>
          </div>
        </div>

        {/* Sticky Top */}
        <div className="sticky top-2 z-30">
          <div className="container mx-auto w-[95%] py-3">
            <div className="flex items-center border-y p-1 bg-white">
              <Search className="ml-2 h-4 w-4 text-gray-500" />
              <input
                type="text"
                placeholder="AI search"
                className="flex-grow px-3 py-1 text-sm"
              />
              <Mic className="mr-2 h-4 w-4 text-gray-500" />
            </div>
          </div>
          {/* White background that fades in */}
          <div 
            className="absolute inset-0 bg-white -z-10 transition-opacity duration-300"
            style={{ opacity: scrollPosition > (headerHeight * 1) ? 1 : 0 }}
          ></div>
        </div>

            {/* Widgets wraper */}
        <div className="flex flex-col overflow-hidden w-full bg-white pt-6 px-3 space-y-3 rounded-t-xl">

              {/* AI output Widget*/}
              <Widget
                title={''}
                rightIcon={''}
                className="relative overflow-hidden"
              >
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
                >
                  {/* Carousel implementation */}
                  <div className="relative">
                    {/* Messages carousel */}
                    <div 
                      className="overflow-hidden"
                      onTouchStart={handleTouchStart}
                      onTouchMove={handleTouchMove}
                      onTouchEnd={handleTouchEnd}
                    >
                      <div 
                        className="flex transition-transform duration-300 ease-out"
                        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                      >
                        {[
                          {
                            message: "Focus on completing your 'Morning Meditation' habit.",
                            subtext: "Just 5 minutes can boost your daily focus"
                          },
                          {
                            message: "20% increase in productivity observed",
                            subtext: "Based on your previous patterns"
                          },
                          {
                            message: "You're building a strong routine",
                            subtext: "3 days streak! Keep it up!"
                          }
                        ].map((item, index) => (
                          <div 
                            key={index}
                            className="flex-shrink-0 w-full"
                          >
                            <div className="flex flex-row">
                              <Bot size={55} className="text-orange-400 pr-2" />
                              <blockquote className="flex flex-col italic text-sm text-gray-400 border-l-4 border-orange-400 pl-2">
                                <p className="text-sm text-gray-700 font-medium">
                                  {item.message}
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                  {item.subtext}
                                </p>
                              </blockquote> 
                            </div>  
                          </div> 
                        ))}
                      </div> 
                    </div> 

                    {/* Dot indicators */}
                    <div className="flex justify-center gap-1.5 mt-2">
                      {[0, 1, 2].map((index) => (
                        <button
                          key={index}
                          onClick={() => setActiveSlide(index)}
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                            activeSlide === index ? 'bg-orange-400 w-3' : 'bg-orange-200'
                          }`}
                        />
                      ))}
                    </div> 
                  </div> 
                </motion.div>
              </Widget> 

            {/* Habits Widget*/}
            <Widget title="Today's Habits" onClick={() => {}}>
              <div className="flex items-end justify-between mb-2">
                <div>
                  <p className="text-sm text-gray-400">Completed</p>
                  <p className="text-xl font-bold">8/10</p>
                </div>
                <p className="text-4xl font-bold">80%</p>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                <div 
                  className="h-full rounded-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400"
                  style={{ width: '80%', transition: 'width 1s ease-in-out' }}
                />
              </div>
            </Widget>

            {/* Todos Widget*/}
            <Widget title="Today's Todos" onClick={() => {}}>
              <div className="flex items-end justify-between mb-2">
                <div>
                  <p className="text-sm text-gray-400">Completed</p>
                  <p className="text-xl font-bold">3/12</p>
                </div>
                <p className="text-4xl font-bold">29%</p>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                <div 
                  className="h-full rounded-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400"
                  style={{ width: '29%', transition: 'width 1s ease-in-out' }}
                />
              </div>
            </Widget>

            {/* Quick Input widget*/}
            <Widget title="Quick Input" onClick={() => {}}>
              <div className="mb-4">
                <p className="mb-2 text-sm text-gray-400">How are you feeling today?</p>
                <div className="flex space-x-4">
                  {[
                    { icon: Smile, mood: 'happy', color: 'text-green-500' },
                    { icon: Meh, mood: 'neutral', color: 'text-yellow-500' },
                    { icon: Frown, mood: 'sad', color: 'text-red-500' },
                  ].map(({ icon: Icon, mood: m, color }) => (
                    <button
                      key={m}
                      onClick={() => setMood(m)}
                      className={`p-2 rounded-full transition-all duration-200 ${
                        mood === m ? `${color} bg-gray-100` : 'text-gray-400'
                      }`}
                    >
                      <Icon size={24} />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-sm text-gray-400">Quick note or goal for today:</p>
                <div className="flex">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="px-2 py-2 text-sm border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-orange-300"
                    placeholder="Type here..."
                  />
                  <button className="bg-orange-400 text-sm text-white px-2 py-2 rounded-r-full hover:bg-orange-600 transition-colors duration-200 flex items-center">
                    <Send size={14} className="mr-1" />
                    Send
                  </button>
                </div>
              </div>
            </Widget>

            {/* Announcement widget*/}
            {showAnnouncement && (
              <Widget 
                className="relative overflow-hidden"
                title="Limited Time Offer!"
                rightIcon={
                  <button 
                    className="absolute top-4 right-4 text-orange-400 hover:text-orange-600"
                    onClick={(e) => {
                      e.stopPropagation();  // Prevents triggering any parent onClick handlers
                      setShowAnnouncement(false);
                    }}
                  >
                    <X size={16} />
                  </button>
                }
              >
                <p className="text-sm text-gray-400">
                  Upgrade to Premium and get 3 months free. Unlock advanced habit tracking features!
                </p>
                <div className="mt-2">
                  <button className="bg-orange-400 text-sm text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors duration-200">
                    Upgrade Now
                  </button>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gray-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500 ease-out" />
              </Widget>
            )
          }
        </div>
        {/* End of Widgets wrapper */}

      </div>
    </div>  
    // End of main
  )
}