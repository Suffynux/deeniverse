import React from 'react';
import { useState, useEffect } from 'react';
import MainLayout from '../Layout/MainLayout';
import { useParams, useNavigate } from 'react-router-dom';
import { getPostBySlug, getRelatedPosts } from '../../Data/blogPosts';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (!slug) return;
    const p = getPostBySlug(slug);
    setPost(p);
    if (p) setRelated(getRelatedPosts(p.slug, p.category));
  }, [slug]);

  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-80px)] bg-gradient-to-b from-[#182F51] via-[#132a48] to-[#0e1c33] text-white px-5 pt-12 pb-24">
        {!post && (
          <div className="max-w-4xl mx-auto pt-20 text-center text-[#c9d6e4]">Post not found.</div>
        )}
        {post && (
          <article className="max-w-4xl mx-auto">
            <button
              onClick={() => navigate(-1)}
              className="mb-6 inline-flex items-center gap-2 text-[#b9c9da] hover:text-[#C0A34E] text-sm"
            >
              <ArrowLeft size={16} /> Back
            </button>
            <header className="space-y-4 mb-10">
              <span className="px-3 py-1 rounded-full bg-[#C0A34E]/15 text-[#C0A34E] text-[11px] tracking-wide border border-[#c0a34e]/30">{post.category}</span>
              <h1 className="text-3xl md:text-4xl font-bold leading-snug text-[#f3f6f9]">{post.title}</h1>
              <div className="flex flex-wrap gap-4 text-[13px] text-[#aabdd1]">
                <span className="flex items-center gap-1"><Calendar size={14}/> {new Date(post.date).toLocaleDateString()}</span>
                <span className="flex items-center gap-1"><Clock size={14}/> {post.readingTime}</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {post.tags.map(t => <span key={t} className="text-[11px] tracking-wide px-2 py-1 rounded-full bg-[#1d3356] text-[#b9cadb] border border-[#2e4f7d]/40 flex items-center gap-1"><Tag size={10} />{t}</span>)}
              </div>
            </header>
            <div className="prose prose-invert max-w-none leading-relaxed text-[#d8e2ed] prose-headings:mt-8 prose-headings:mb-3 prose-h3:text-[#C0A34E] prose-p:my-4 prose-li:my-1">
              {post.content.split('\n').map((line, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: line }} />
              ))}
            </div>

            {related.length > 0 && (
              <section className="mt-16">
                <h3 className="text-xl font-semibold mb-6 text-[#f1f5f9]">Related Articles</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {related.map(r => (
                    <div key={r.id} className="rounded-xl border border-[#284769]/50 p-4 bg-[#13263f]/60 hover:bg-[#19314d]/70 transition cursor-pointer" onClick={() => navigate(`/blogs/${r.slug}`)}>
                      <h4 className="text-sm font-semibold text-[#e9edf2] mb-2 line-clamp-2">{r.title}</h4>
                      <p className="text-[12px] text-[#9bb2c9] line-clamp-3 leading-relaxed">{r.excerpt}</p>
                      <div className="mt-3 flex items-center gap-2 text-[10px] text-[#b2c2d3]">
                        <Calendar size={11} /> {new Date(r.date).toLocaleDateString()} • {r.readingTime}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </article>
        )}
      </div>
    </MainLayout>
  );
};

export default BlogDetail;