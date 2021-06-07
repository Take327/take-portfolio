import React, { Component } from 'react';
import styles from './Contact.module.scss'
import { TextField, Input } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';



const Contact: React.FC = () => {
    return (
        <section id="contact">
            <div className={styles.contact}>
                <h2>contact</h2>
                <form>
                    <TextField
                        required
                        fullWidth
                        id="Username"
                        label="お名前"
                        variant="outlined"
                        className={styles.text_field}
                    />
                    <TextField
                        required
                        fullWidth
                        id="MailAddress"
                        label="メールアドレス"
                        variant="outlined"
                        className={styles.text_field}

                    />
                    <TextField
                        required
                        fullWidth
                        rows={15}
                        multiline
                        id="Contact"
                        label="お問合せ内容"
                        variant="outlined"
                        className={styles.text_field}

                    />
                    <Button
                        variant="contained"
                        color="primary"
                    >
                        送信する
                    </Button>
                </form>
            </div>
        </section>
    )
}

export default Contact;