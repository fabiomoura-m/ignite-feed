import { Trash, ThumbsUp } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/fabiomoura-m.png" alt="" />

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
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}
