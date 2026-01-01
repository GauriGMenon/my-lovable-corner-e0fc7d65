export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  date: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  imageUrl: string;
  tags: string[];
  link?: string;
}

export const articles: Article[] = [
  {
    id: "joy-of-writing",
    title: "The Joy of Writing",
    excerpt: "Writing has always been my escape. It started as a way to process thoughts, but became something much more meaningful...",
    content: "Writing has always been my escape. It started as a way to process thoughts, but became something much more meaningful. Every word I put on paper feels like a piece of my soul finding its way into the world.\n\nThere's something magical about the way ideas flow from mind to paper. The scratching of pen on paper, or the gentle clicking of keys, becomes a meditation. In those moments, time seems to pause, and I'm transported to a world where anything is possible.\n\nI write about things that touch me: which could be an idea, a song, or a kickass Bangalore dosa. Each topic deserves its own exploration, its own journey through words.",
    imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800",
    date: "December 2025"
  },
  {
    id: "pastel-obsession",
    title: "My Obsession with Pastel Colors",
    excerpt: "There's something about soft, muted tones that speaks to my soul. Here's why pastels have become my aesthetic identity...",
    content: "There's something about soft, muted tones that speaks to my soul. Pastels aren't just colors to me—they're a way of seeing the world through a gentler lens.\n\nWhen I design, when I dress, when I dream, I find myself gravitating toward these tender hues. Lavender, cream, soft rose—they whisper rather than shout, and in a world that's often too loud, that whisper is exactly what I need.\n\nThis website itself is a testament to that love. The cream background (#fdf3dd), the lavender accents (#caaacd), and the deep purple (#500196) create a harmony that feels like home.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
    date: "November 2025"
  },
  {
    id: "bangalore-memories",
    title: "Bangalore Memories",
    excerpt: "The city that shaped me—its rain, its chaos, its dosas. A love letter to the garden city...",
    content: "Bangalore holds a special place in my heart. It's not just a city—it's a feeling, a memory, a home that lives within me even when I'm far away.\n\nThe monsoon rains that would flood the streets, the smell of filter coffee wafting from every corner, the way strangers become friends over shared auto rides. These are the moments that make Bangalore more than just a place on a map.\n\nAnd then there's the food. Oh, the food! The crispy masala dosas that melt in your mouth, the steaming idlis with sambar, the evening chaats that bring crowds together. Every bite is a memory, every taste a story.",
    imageUrl: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800",
    date: "October 2025"
  },
  {
    id: "songs-that-heal",
    title: "Songs That Heal",
    excerpt: "Music has been my companion through every emotion. These are the songs that changed me...",
    content: "There are songs that don't just play—they heal. They find the broken parts of you and gently piece them back together, note by note, lyric by lyric.\n\nI've always believed that music speaks what the heart cannot express. In moments of joy, in depths of sorrow, in the quiet in-between, there's always a song that understands.\n\nThis is a collection of those songs—the ones that have carried me through life's journey. They're not just playlists; they're chapters of my life, each melody marking a moment that mattered.",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800",
    date: "September 2025"
  },
  {
    id: "art-of-solitude",
    title: "The Art of Solitude",
    excerpt: "Learning to be alone without being lonely was a journey. Here's what I discovered along the way...",
    content: "Solitude is not loneliness—it took me years to understand this simple truth. Being alone is a skill, an art form, a gift we give ourselves.\n\nIn our constantly connected world, we've forgotten how to sit with our own thoughts. We fill every silence with noise, every moment with distraction. But there's profound beauty in the quiet spaces.\n\nI've learned to treasure my time alone. It's when I write, when I dream, when I become most myself. Solitude has taught me that the best company I can keep is my own.",
    imageUrl: "https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?w=800",
    date: "August 2025"
  }
];

export const projects: Project[] = [
  {
    id: "creative-portfolio",
    title: "Creative Portfolio Website",
    description: "A beautifully designed portfolio showcasing creative work with smooth animations and pastel aesthetics.",
    fullDescription: "This project was a labor of love—creating a digital space that truly reflects who I am. Built with modern web technologies, it features smooth scroll animations, interactive elements, and a cohesive design language.\n\nThe color palette was carefully chosen to create a warm, inviting atmosphere. Every interaction was designed to feel natural and delightful.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    tags: ["React", "Design", "Animation"],
    link: "https://example.com"
  },
  {
    id: "writing-app",
    title: "Mindful Writing App",
    description: "A distraction-free writing application designed to help writers focus on their craft.",
    fullDescription: "Born from my own struggles with writer's block and distractions, this app creates the perfect environment for focused writing.\n\nFeatures include a minimal interface, calming background sounds, word count goals, and daily writing streaks. The goal was to make writing feel less like work and more like meditation.",
    imageUrl: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800",
    tags: ["UX Design", "Product", "Writing"],
    link: "https://example.com"
  },
  {
    id: "community-platform",
    title: "Local Community Platform",
    description: "Connecting neighbors and building stronger local communities through technology.",
    fullDescription: "This platform aims to bring communities together in meaningful ways. From organizing local events to sharing resources, it's designed to strengthen the bonds between neighbors.\n\nThe project taught me about user research, community building, and designing for diverse user groups.",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
    tags: ["Community", "Social", "Design"],
    link: "https://example.com"
  },
  {
    id: "illustration-series",
    title: "Pastel Dreams Illustrations",
    description: "A series of digital illustrations exploring themes of nostalgia and wonder.",
    fullDescription: "This illustration series was an exploration of my love for pastel colors and dreamy aesthetics. Each piece tells a story of memory, longing, and hope.\n\nCreated digitally but inspired by traditional watercolor techniques, these illustrations have been featured in various publications and exhibitions.",
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
    tags: ["Illustration", "Art", "Digital"]
  }
];
