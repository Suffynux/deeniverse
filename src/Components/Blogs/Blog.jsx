import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import { blogPosts } from '../../Data/blogPosts';
import { SparklesText } from '../UI/sparkles-text';
import { Calendar, Clock, Tag } from 'lucide-react';

// Blog card component
const BlogCard = ({ post }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/blogs/${post.slug}`)}
      className="group cursor-pointer h-full flex flex-col rounded-xl overflow-hidden border border-[#2d4d78]/40 bg-[#13253f]/60 backdrop-blur-sm shadow-sm hover:shadow-lg hover:shadow-black/20 transition-all duration-300"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-[#1f3b63] to-[#0f1f2f]">
        <div className="absolute inset-0 flex items-center justify-center text-[#C0A34E]/30 text-xs tracking-widest font-semibold">
          ISLAMIC INSIGHT
        </div>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[#0d1b30]/60 flex items-center justify-center text-[#C0A34E] text-[13px]">Read More →</div>
      </div>
      <div className="flex flex-col flex-1 p-4 gap-3">
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-wide">
          <span className="px-2 py-0.5 rounded-full bg-[#C0A34E]/10 text-[#C0A34E] border border-[#C0A34E]/30">{post.category}</span>
          <span className="text-[#98b0ca] flex items-center gap-1"><Calendar size={12} />{new Date(post.date).toLocaleDateString()}</span>
          <span className="text-[#98b0ca] flex items-center gap-1"><Clock size={12} />{post.readingTime}</span>
        </div>
        <h3 className="font-semibold text-lg leading-snug text-[#f1f5f9] group-hover:text-[#C0A34E] transition-colors">{post.title}</h3>
        <p className="text-sm text-[#9fb4cb] line-clamp-3 leading-relaxed flex-1">{post.excerpt}</p>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {post.tags.slice(0,3).map(tag => (
            <span key={tag} className="text-[10px] tracking-wide px-2 py-1 rounded-full bg-[#1d3356] text-[#b9cadb] border border-[#2e4f7d]/40 flex items-center gap-1"><Tag size={10} />{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  const [category, setCategory] = useState('All');
  // No local active preview now; using dedicated detail page

  const categories = useMemo(() => ['All', ...Array.from(new Set(blogPosts.map(p => p.category)))], []);

  const filtered = useMemo(() => category === 'All' ? blogPosts : blogPosts.filter(p => p.category === category), [category]);

  const featured = blogPosts[0];

  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-80px)] bg-gradient-to-b from-[#182F51] via-[#132a48] to-[#0e1c33] text-white">
        {/* Hero / Heading */}
        <section className="relative px-5 pt-16 md:pt-20 pb-12 md:pb-16 max-w-6xl mx-auto">
          <div className="absolute inset-0 pointer-events-none opacity-40" style={{background: 'radial-gradient(circle at 30% 30%, #2a4e85 0%, transparent 65%)'}} />
          <div className="relative space-y-5">
            <div className="inline-block">
              <SparklesText text="Deeniverse Blog" />
            </div>
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-[#d8c27a] via-[#e9d18a] to-[#c6a64d] text-transparent bg-clip-text">Insights • Reflection • Growth</h1>
            <p className="max-w-2xl text-sm md:text-base text-[#abc1d9] leading-relaxed">Authentic, concise and beneficial Islamic knowledge — curated for reflection and daily application. Begin with a featured article or browse categories below.</p>
            {/* Categories */}
            <div className="flex flex-wrap gap-2 pt-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => { setCategory(cat); setActivePost(null); }}
                  className={`px-3 py-1.5 rounded-full text-xs md:text-[13px] border transition-all ${category === cat ? 'bg-[#C0A34E] text-[#182F51] border-[#C0A34E]' : 'bg-[#1b3356]/60 text-[#c0cedb] border-[#2c4d7a]/50 hover:bg-[#25426d] hover:text-white'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post Banner */}
        <section className="max-w-6xl mx-auto px-5 -mt-6 md:-mt-10 pb-10">
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-stretch">
            <div className="relative rounded-2xl overflow-hidden border border-[#2d4d78]/50 bg-gradient-to-br from-[#1d3558] to-[#0f1f33] p-6 md:p-8 flex flex-col justify-between shadow-lg shadow-black/30">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-[#C0A34E]/15 text-[#C0A34E] text-[11px] tracking-wide border border-[#c0a34e]/30">Featured</span>
                <h2 className="text-xl md:text-2xl font-semibold leading-snug text-[#f3f6f9]">{featured.title}</h2>
                <p className="text-sm md:text-base text-[#b7c7d8] leading-relaxed line-clamp-4">{featured.excerpt}</p>
                <div className="flex flex-wrap gap-3 text-[11px] text-[#9cb3cb]">
                  <span className="flex items-center gap-1"><Calendar size={13} /> {new Date(featured.date).toLocaleDateString()}</span>
                  <span className="flex items-center gap-1"><Clock size={13} /> {featured.readingTime}</span>
                  <span className="flex items-center gap-1"><Tag size={13} /> {featured.category}</span>
                </div>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => window.scrollTo({ top: document.getElementById('blog-grid')?.offsetTop - 60, behavior: 'smooth' })}
                  className="px-5 py-2.5 rounded-full bg-[#C0A34E] text-[#1d304f] text-sm font-medium shadow hover:shadow-lg hover:brightness-105 transition"
                >
                  Browse Articles ↓
                </button>
              </div>
              <div className="absolute inset-0 pointer-events-none opacity-30" style={{background: 'radial-gradient(circle at 80% 20%, #7a6330 0%, transparent 70%)'}} />
            </div>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6 content-start">
              {filtered.slice(0,2).map(p => (
                <div key={p.id} className="rounded-xl border border-[#284769]/50 p-4 bg-[#13263f]/60 hover:bg-[#19314d]/70 transition cursor-pointer" onClick={() => window.location.href = `/blogs/${p.slug}` }>
                  <h3 className="text-sm font-semibold text-[#e9edf2] mb-2 line-clamp-2">{p.title}</h3>
                  <p className="text-[12px] text-[#9bb2c9] line-clamp-3 leading-relaxed">{p.excerpt}</p>
                  <div className="mt-3 flex items-center gap-2 text-[10px] text-[#b2c2d3]">
                    <Calendar size={11} /> {new Date(p.date).toLocaleDateString()} • {p.readingTime}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section id="blog-grid" className="max-w-6xl mx-auto px-5 pb-24">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filtered.map(p => (
                <BlogCard key={p.id} post={p} />
              ))}
            </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Blog;