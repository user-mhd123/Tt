import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import { Icons } from './components/Icon';
import { Language, Course, Category, BlogPost } from './types';
import { t } from './translations';

// Mock Data
const categories: Category[] = [
  { id: 1, name: 'Mathematics', icon: 'Math', color: 'bg-purple-100 text-purple-600' },
  { id: 2, name: 'Idea Generate', icon: 'Idea', color: 'bg-pink-100 text-pink-600' },
  { id: 3, name: 'Chemistry', icon: 'Chemistry', color: 'bg-cyan-100 text-cyan-600' },
  { id: 4, name: 'Business', icon: 'Business', color: 'bg-orange-100 text-orange-600' },
  { id: 5, name: 'Development', icon: 'Dev', color: 'bg-yellow-100 text-yellow-600' },
  { id: 6, name: 'Marketing', icon: 'Marketing', color: 'bg-violet-100 text-violet-600' },
  { id: 7, name: 'Art', icon: 'Art', color: 'bg-red-100 text-red-600' },
  { id: 8, name: 'Technology', icon: 'Tech', color: 'bg-teal-100 text-teal-600' },
];

const courses: Course[] = [
  { id: 1, title: 'Therapeutic Approaches in Mental Health', category: 'Health', instructor: 'Laura Naughe', price: 'Free', lessons: 14, rating: 4.8, image: 'https://picsum.photos/400/250?random=1', avatar: 'https://picsum.photos/50/50?random=10' },
  { id: 2, title: 'Building Chatbots with OpenAI\'s GPT', category: 'Language', instructor: 'Mark Embe', price: 29, lessons: 17, rating: 4.9, image: 'https://picsum.photos/400/250?random=2', avatar: 'https://picsum.photos/50/50?random=11' },
  { id: 3, title: 'Mobile App Development with React Native', category: 'Development', instructor: 'James Foster', price: 'Free', lessons: 21, rating: 4.7, image: 'https://picsum.photos/400/250?random=3', avatar: 'https://picsum.photos/50/50?random=12' },
  { id: 4, title: '30-Day Fitness Challenge, Get Fit Fast', category: 'Fitness', instructor: 'Tom Carter', price: 20, lessons: 30, rating: 4.9, image: 'https://picsum.photos/400/250?random=4', avatar: 'https://picsum.photos/50/50?random=13' },
];

const blogs: BlogPost[] = [
  { id: 1, title: 'How to Avoid the Biggest College Admission Mistakes', date: 'October 15, 2024', category: 'Learning', image: 'https://picsum.photos/400/250?random=20' },
  { id: 2, title: 'How Digital Platforms Are Shaping Business Schools', date: 'October 19, 2024', category: 'Learning', image: 'https://picsum.photos/400/250?random=21' },
  { id: 3, title: 'Why Business Students Need Tech Skills for the Future', date: 'October 25, 2024', category: 'Learning', image: 'https://picsum.photos/400/250?random=22' },
];

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set direction based on language
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const IconComponent = ({ name, className }: { name: string, className?: string }) => {
    const Icon = (Icons as any)[name]; // Helper to render icon by string name
    return Icon ? <Icon className={className} size={24} /> : null;
  };

  return (
    <div className={`min-h-screen font-sans ${lang === 'ar' ? 'font-arabic' : ''} bg-white text-secondary`}>
      <Navbar lang={lang} setLang={setLang} scrollToContact={scrollToContact} />

      {/* Hero Section */}
      <section className="relative py-12 lg:py-20 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-start z-10">
            <div className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-6">
              Learn 20,000+ Quality Courses
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
              {t.heroTitle[lang].split(' ').slice(0, 3).join(' ')} <br />
              <span className="text-gray-900">{t.heroTitle[lang].split(' ').slice(3).join(' ')}</span>
            </h1>
            <p className="text-gray-500 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              {t.heroSubtitle[lang]}
            </p>
            <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition shadow-lg shadow-green-200">
              {t.startLearning[lang]}
            </button>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative z-10">
             <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl transform scale-90 translate-y-4"></div>
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" 
                  alt="Student" 
                  className="relative z-10 w-full max-w-lg mx-auto object-contain rounded-bl-[100px] rounded-tr-[100px]"
                />
                
                {/* Floating Card */}
                <div className="absolute bottom-10 -left-4 lg:-left-12 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20 animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <img key={i} src={`https://picsum.photos/40/40?random=${i+50}`} className="w-10 h-10 rounded-full border-2 border-white" alt="student" />
                    ))}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">100K+</p>
                    <p className="text-xs text-gray-500">{t.studentsEnrolled[lang]}</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.topCategories[lang]}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <div key={cat.id} className="group p-4 rounded-xl border border-gray-100 hover:shadow-lg hover:border-transparent transition flex items-center gap-3 cursor-pointer bg-white">
                <div className={`p-3 rounded-lg ${cat.color} group-hover:scale-110 transition-transform`}>
                  {/* Mapping simplified icon names to Lucide icons */}
                  {cat.name === 'Mathematics' && <Icons.Math size={20} />}
                  {cat.name === 'Idea Generate' && <Icons.Idea size={20} />}
                  {cat.name === 'Chemistry' && <Icons.Chemistry size={20} />}
                  {cat.name === 'Business' && <Icons.Business size={20} />}
                  {cat.name === 'Development' && <Icons.Dev size={20} />}
                  {cat.name === 'Marketing' && <Icons.Marketing size={20} />}
                  {cat.name === 'Art' && <Icons.Art size={20} />}
                  {cat.name === 'Technology' && <Icons.Tech size={20} />}
                </div>
                <span className="font-semibold text-gray-700">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Promo Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
          
          {/* Card 1 */}
          <div className="bg-[#f0fdf4] rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden group">
            <div className="flex-1 z-10">
              <span className="text-primary font-medium mb-2 block">Learn together with</span>
              <h3 className="text-3xl font-bold mb-3">{t.expertTeacher[lang]}</h3>
              <p className="text-gray-600 mb-6 text-sm">{t.expertDesc[lang]}</p>
              <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                {t.viewAllCourses[lang]}
              </button>
            </div>
            <div className="flex-1 relative">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400" className="rounded-full w-48 h-48 object-cover mx-auto z-10 relative" alt="Teacher" />
               <div className="absolute top-0 right-0 text-primary opacity-20"><Icons.Idea size={80} /></div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#ecfeff] rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden group">
             <div className="flex-1 z-10">
              <span className="text-cyan-600 font-medium mb-2 block">Get the skills</span>
              <h3 className="text-3xl font-bold mb-3">{t.forIndividuals[lang]}</h3>
              <p className="text-gray-600 mb-6 text-sm">{t.individualDesc[lang]}</p>
              <button className="bg-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition">
                {t.findYourCourse[lang]}
              </button>
            </div>
            <div className="flex-1 relative">
              <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=400" className="rounded-full w-48 h-48 object-cover mx-auto z-10 relative" alt="Student" />
              <div className="absolute top-0 right-0 text-cyan-500 opacity-20"><Icons.Tech size={80} /></div>
            </div>
          </div>

        </div>
      </section>

      {/* Popular Courses */}
      <section id="courses" className="py-16 bg-light-bg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-bold">{t.popularCourses[lang]}</h2>
            <button className="text-primary font-medium border border-primary px-4 py-2 rounded-full hover:bg-primary hover:text-white transition">
              {t.viewAllCourses[lang]}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition group border border-gray-100">
                <div className="relative h-48 overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  <span className="absolute top-3 left-3 bg-primary text-white text-xs px-2 py-1 rounded-md uppercase font-bold tracking-wider">
                    {course.category}
                  </span>
                  <button className="absolute top-3 right-3 bg-white/80 p-1.5 rounded-full hover:bg-white text-gray-500 hover:text-red-500 transition">
                    <Icons.Star size={16} />
                  </button>
                </div>
                
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <img src={course.avatar} alt={course.instructor} className="w-8 h-8 rounded-full" />
                    <span className="text-sm text-gray-500">{course.instructor}</span>
                  </div>
                  
                  <h3 className="font-bold text-lg mb-3 line-clamp-2 min-h-[56px] hover:text-primary cursor-pointer">
                    {course.title}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Icons.Play size={14} className="text-primary" />
                      <span>{course.lessons} {t.lessons[lang]}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4 flex items-center justify-between">
                    <span className={`font-bold text-lg ${course.price === 'Free' ? 'text-primary' : 'text-gray-900'}`}>
                      {typeof course.price === 'number' ? `$${course.price}` : t.free[lang]}
                    </span>
                    <button className="text-sm font-medium hover:text-primary flex items-center gap-1 group/btn">
                      {t.viewDetails[lang]}
                      <Icons.ArrowRight size={14} className="group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section (Green Wavy) */}
      <section className="py-20 bg-primary relative mt-12">
        {/* Simple decorative wave simulation using CSS shapes or just a clean section */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="flex flex-col items-center">
              <div className="mb-4 opacity-80"><Icons.Business size={40} /></div>
              <h3 className="text-4xl font-bold mb-2">24k+</h3>
              <p className="text-green-100">{t.totalStudents[lang]}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 opacity-80"><Icons.Play size={40} /></div>
              <h3 className="text-4xl font-bold mb-2">3M+</h3>
              <p className="text-green-100">{t.totalLessons[lang]}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 opacity-80"><Icons.Idea size={40} /></div>
              <h3 className="text-4xl font-bold mb-2">2.5k+</h3>
              <p className="text-green-100">{t.dailyClasses[lang]}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 opacity-80"><Icons.User size={40} /></div>
              <h3 className="text-4xl font-bold mb-2">75+</h3>
              <p className="text-green-100">{t.skilledTutors[lang]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Leaders */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-bold leading-relaxed">
              {t.trustedLeader[lang]}
            </h3>
          </div>
          <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Mock Logos */}
             <div className="flex items-center justify-center font-bold text-xl text-blue-600"><Icons.Globe className="mr-2"/> EDUBOOK</div>
             <div className="flex items-center justify-center font-bold text-xl text-red-500"><Icons.Idea className="mr-2"/> VIVABOOK</div>
             <div className="flex items-center justify-center font-bold text-xl text-orange-500"><Icons.Business className="mr-2"/> CHATBOOK</div>
             <div className="flex items-center justify-center font-bold text-xl text-purple-500"><Icons.Tech className="mr-2"/> MEGABOOK</div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-light-bg">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
             
             {/* Text */}
             <div className="flex-1 z-10">
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">{t.successStories[lang]}</h3>
                <h2 className="text-2xl md:text-3xl font-medium text-gray-800 italic mb-8 leading-relaxed">
                  "{t.storyText[lang]}"
                </h2>
                <div className="flex items-center gap-4">
                  <div className="font-bold text-gray-900">James Smith</div>
                  <div className="h-1 w-1 bg-gray-400 rounded-full"></div>
                  <div className="text-gray-500 text-sm">Student</div>
                </div>
             </div>

             {/* Play Button Visual */}
             <div className="relative">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-green-200 cursor-pointer hover:scale-110 transition">
                  <Icons.Play fill="white" className="ml-1" />
                </div>
                {/* Decorative image behind */}
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400" alt="Success" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 object-cover rounded-full opacity-20 -z-10" />
             </div>

             <div className="flex-1 flex justify-center md:justify-end">
                <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=400" alt="Testimonial" className="rounded-2xl w-full max-w-xs object-cover shadow-lg" />
             </div>

          </div>
        </div>
      </section>

      {/* Latest News */}
      <section id="news" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.latestNews[lang]}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div key={blog.id} className="group cursor-pointer">
                <div className="rounded-2xl overflow-hidden mb-4 relative">
                  <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover group-hover:scale-105 transition duration-500" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-gray-600">
                    {blog.category}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                   <div className="w-2 h-2 bg-primary rounded-full"></div>
                   {blog.date}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition">{blog.title}</h3>
                <button className="text-sm font-semibold text-gray-500 uppercase tracking-wider group-hover:text-primary transition">
                  {t.readMore[lang]}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specific Contact Info Section */}
      <div ref={contactRef}>
        <Contact lang={lang} />
      </div>

      {/* Footer */}
      <footer className="bg-white border-t pt-16 pb-8">
         <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
               <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">U</div>
                <span className="text-xl font-bold text-secondary">UpStudy</span>
              </div>
              <p className="text-gray-500 mb-6">
                 We are providing high quality courses for the global community.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-3 text-gray-500">
                <li><a href="#" className="hover:text-primary">About Us</a></li>
                <li><a href="#" className="hover:text-primary">Services</a></li>
                <li><a href="#" className="hover:text-primary">Community</a></li>
                <li><a href="#" className="hover:text-primary">Testimonial</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Support</h4>
              <ul className="space-y-3 text-gray-500">
                <li><a href="#" className="hover:text-primary">Help Center</a></li>
                <li><a href="#" className="hover:text-primary">Tweet @ Us</a></li>
                <li><a href="#" className="hover:text-primary">Webinars</a></li>
                <li><a href="#" className="hover:text-primary">Feedback</a></li>
              </ul>
            </div>

            <div>
               <h4 className="font-bold text-lg mb-6">Subscribe</h4>
               <div className="flex">
                 <input type="email" placeholder="Enter your email" className="bg-gray-100 px-4 py-3 rounded-l-lg w-full outline-none focus:ring-2 focus:ring-primary/20" />
                 <button className="bg-primary text-white px-4 py-3 rounded-r-lg hover:bg-green-600 transition">
                   <Icons.ArrowRight size={20} className="rtl:rotate-180" />
                 </button>
               </div>
               <p className="text-xs text-gray-400 mt-4">
                 Subscribe to get the latest news and updates.
               </p>
            </div>
         </div>
         <div className="container mx-auto px-4 pt-8 border-t text-center text-gray-400 text-sm">
            © 2024 UpStudy Clone. All rights reserved.
         </div>
      </footer>
    </div>
  );
};

export default App;