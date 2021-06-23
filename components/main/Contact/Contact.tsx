import React from 'react';
import styles from './Contact.module.scss'
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        text_field: {
            margin: '0.5rem',
            fontSize: '1.6rem'
        }

    })
);


const Contact: React.FC = () => {

    const classes = useStyles();

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
                        className={classes.text_field}
                    />
                    <TextField
                        required
                        fullWidth
                        id="MailAddress"
                        label="メールアドレス"
                        variant="outlined"
                        className={classes.text_field}

                    />
                    <TextField
                        required
                        fullWidth
                        rows={15}
                        multiline
                        id="Contact"
                        label="お問合せ内容"
                        variant="outlined"
                        className={classes.text_field}

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