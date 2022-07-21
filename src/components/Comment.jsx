import { Trash, ThumbsUp } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content }) {
    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="https://github.com/fabiomoura-m.png"
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.commentAuthorAndTime}>
                            <strong>Fabio Moura</strong>
                            <time
                                title="15 de Julho às 10:23h"
                                dateTime="2022-07-15 10:23:30"
                            >
                                Cerca de 1hr atrás
                            </time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}
