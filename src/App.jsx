import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import './global.css';
import styles from './App.module.css';

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/fabiomoura-m.png',
            name: 'Fabio Moura',
            role: 'Web Developer'
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋' },
            {
                type: 'paragraph',
                content:
                    'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
            },
            { type: 'link', content: '👉 jane.design/doctorcare' }
        ],
        publishedAt: new Date('2022-07-19 14:15:00')
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/maykbrito.png',
            name: 'Mayk Brito',
            role: 'Educator'
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋' },
            {
                type: 'paragraph',
                content:
                    'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
            },
            { type: 'link', content: '👉 jane.design/doctorcare' }
        ],
        publishedAt: new Date('2022-07-19 14:19:00')
    }
];

export function App() {
    return (
        <div>
            <Header />

            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    {posts.map(post => (
                        <Post
                            author={post.author}
                            content={post.content}
                            publishedAt={post.publishedAt}
                        />
                    ))}
                </main>
            </div>
        </div>
    );
}
