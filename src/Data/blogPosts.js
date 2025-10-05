// Initial Islamic blog posts seed data
// In future this can be replaced by API or CMS integration.

export const blogPosts = [
  {
    id: 'importance-of-quran',
    slug: 'importance-of-quran',
    title: 'The Qur\'an: A Light and Guidance for Humanity',
    excerpt: 'Exploring why the Qur\'an remains the ultimate source of guidance, mercy, and wisdom for every generation.',
    category: 'Quran',
    cover: '/image.png', // placeholder existing asset
    readingTime: '5 min',
    date: '2025-10-01',
    tags: ['Quran', 'Guidance', 'Revelation'],
    content: `The Qur'an is not simply a book of recitation, but a living guidance (Hudan) for those who are conscious of Allah. It addresses the heart, the mind and the soul. \n\nFrom the very first revelation — *Iqra (Read)* — it invites humanity to contemplate, learn and elevate. \n\n### Why It Matters Today\n- Timeless moral framework\n- Spiritual healing and tranquility\n- Blueprint for justice and compassion\n\n> 'Indeed, this Qur'an guides to that which is most upright.' (Qur'an 17:9)\n\nThe believer deepens their relationship with the Qur'an through recitation, reflection (tadabbur) and application.`,
  },
  {
    id: 'value-of-knowledge',
    slug: 'value-of-knowledge-in-islam',
    title: 'Seeking Knowledge in Islam: A Lifelong Obligation',
    excerpt: 'How Islam elevates the pursuit of knowledge and why it remains a form of worship when done with sincere intention.',
    category: 'Knowledge',
    cover: '/image.png',
    readingTime: '6 min',
    date: '2025-09-20',
    tags: ['Knowledge', 'Hadith', 'Learning'],
    content: `The Prophet ﷺ said: *'Seeking knowledge is obligatory upon every Muslim.'* (Ibn Mājah) \n\nKnowledge refines character, anchors faith and empowers action. \n\n### Pillars of Beneficial Knowledge\n1. Sincerity (Ikhlās)\n2. Acting upon what is learned\n3. Teaching and sharing\n\n### Practical Tips\n- Set an intention before study\n- Keep a notebook for Qur'an and hadith reflections\n- Teach someone one new thing weekly\n\n> Beneficial knowledge increases humility.`,
  },
  {
    id: 'power-of-dua',
    slug: 'power-of-dua',
    title: 'The Power of Duʿā: Turning to Allah with Heartfelt Supplication',
    excerpt: 'Understanding the spiritual depth of duʿā and how it transforms the believer’s inner state.',
    category: 'Spirituality',
    cover: '/image.png',
    readingTime: '4 min',
    date: '2025-09-10',
    tags: ['Dua', 'Spirituality', 'Hope'],
    content: `Duʿā is described as *the essence of worship*. It reflects reliance, humility and love of the Creator. \n\n### Keys to an Accepted Duʿā\n- Begin with praise and salawāt\n- Ask with certainty and patience\n- Avoid haste (*'I made duʿā but did not see result'*)\n\n### Times of Response\n- Last third of the night\n- Between adhān and iqāmah\n- While fasting before ifṭār\n\n> Allah is near and responds — *'Call upon Me; I will respond to you.'* (Qur'an 40:60)`,
  },
  {
    id: 'virtues-of-friday',
    slug: 'virtues-of-friday',
    title: 'The Virtues of Jumuʿah: A Weekly Renewal',
    excerpt: 'Friday is a weekly Eid for the Ummah—learn its special acts and rewards.',
    category: 'Worship',
    cover: '/image.png',
    readingTime: '5 min',
    date: '2025-09-05',
    tags: ['Friday', 'Jumuah', 'Worship'],
    content: `Among the greatest weekly opportunities is Jumuʿah. It gathers the Ummah physically and spiritually. \n\n### Recommended Acts\n- Ghusl and cleanliness\n- Reciting Sūrah al-Kahf\n- Sending abundant salawāt upon the Prophet ﷺ\n\n### Reflection\nJumuʿah reorients the believer toward purpose, community and akhirah consciousness.`,
  },
];

export function getPostBySlug(slug) {
  return blogPosts.find(p => p.slug === slug);
}

export function getRelatedPosts(slug, category) {
  return blogPosts.filter(p => p.slug !== slug && p.category === category).slice(0,3);
}